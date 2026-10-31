import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { 
  Programme, 
  WorkshopFormat, 
  LearningPath, 
  LearningProject, 
  ResourceArticle, 
  SiteSettings, 
  EnquiryRecord, 
  EnquiryStatus, 
  InternalNote 
} from '../src/types/index.ts';
import { 
  initialProgrammes, 
  initialWorkshopFormats, 
  initialLearningPaths, 
  initialLearningProjects, 
  initialResourceArticles, 
  initialSiteSettings 
} from '../src/data/initialData.ts';

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  createdAt: string;
}

export interface StoreData {
  programmes: Programme[];
  workshops: WorkshopFormat[];
  learningPaths: LearningPath[];
  learningProjects: LearningProject[];
  articles: ResourceArticle[];
  settings: SiteSettings;
  enquiries: EnquiryRecord[];
  adminUsers: AdminUser[];
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'academy-store.json');

class StorageManager {
  private data: StoreData | null = null;
  private isSaving = false;
  private queuedSave = false;

  constructor() {
    this.init();
  }

  private init() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(STORE_FILE)) {
        const fileContent = fs.readFileSync(STORE_FILE, 'utf-8');
        this.data = JSON.parse(fileContent);
        // Ensure all collections are present if older schema
        if (!this.data) {
          this.seedInitial();
        } else {
          this.ensureCollections();
        }
      } else {
        this.seedInitial();
      }
    } catch (err) {
      console.error('Error initializing data store, falling back to initial seed in memory:', err);
      this.seedInitial();
    }
  }

  private seedInitial() {
    // Generate initial admin user
    // Default password can be overridden via process.env.ADMIN_INITIAL_PASSWORD or default to a secure password
    const initialPassword = process.env.ADMIN_INITIAL_PASSWORD || 'MindWash2026!Academy';
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(initialPassword, salt);

    this.data = {
      programmes: initialProgrammes,
      workshops: initialWorkshopFormats,
      learningPaths: initialLearningPaths,
      learningProjects: initialLearningProjects,
      articles: initialResourceArticles,
      settings: initialSiteSettings,
      enquiries: [],
      adminUsers: [
        {
          id: 'admin-1',
          username: 'admin@mindwash.ai',
          passwordHash,
          createdAt: new Date().toISOString()
        }
      ]
    };

    this.persistSync();
    console.log(`[Database] Initialized data store. Default admin created: admin@mindwash.ai`);
  }

  private ensureCollections() {
    if (!this.data) return;
    if (!this.data.programmes || this.data.programmes.length === 0) {
      this.data.programmes = initialProgrammes;
    } else {
      // Ensure existing stored programmes receive the updated realistic photos and lab telemetry
      this.data.programmes = this.data.programmes.map((p) => {
        const initProg = initialProgrammes.find(ip => ip.id === p.id || ip.slug === p.slug);
        if (initProg) {
          return {
            ...p,
            imageUrl: initProg.imageUrl,
            labTelemetry: initProg.labTelemetry || p.labTelemetry,
          };
        }
        return p;
      });
    }
    if (!this.data.workshops || this.data.workshops.length === 0) this.data.workshops = initialWorkshopFormats;
    if (!this.data.learningPaths) this.data.learningPaths = initialLearningPaths;
    if (!this.data.learningProjects) this.data.learningProjects = initialLearningProjects;
    if (!this.data.articles || this.data.articles.length === 0) this.data.articles = initialResourceArticles;
    if (!this.data.settings) this.data.settings = initialSiteSettings;
    if (!this.data.enquiries) this.data.enquiries = [];
    if (!this.data.adminUsers || this.data.adminUsers.length === 0) {
      const initialPassword = process.env.ADMIN_INITIAL_PASSWORD || 'MindWash2026!Academy';
      const salt = bcrypt.genSaltSync(10);
      this.data.adminUsers = [
        {
          id: 'admin-1',
          username: 'admin@mindwash.ai',
          passwordHash: bcrypt.hashSync(initialPassword, salt),
          createdAt: new Date().toISOString()
        }
      ];
    }
    this.persistSync();
  }

  private persistSync() {
    if (!this.data) return;
    try {
      const tempPath = STORE_FILE + '.tmp';
      fs.writeFileSync(tempPath, JSON.stringify(this.data, null, 2), 'utf-8');
      fs.renameSync(tempPath, STORE_FILE);
    } catch (err) {
      console.error('[Database] Failed to persist data store synchronously:', err);
    }
  }

  private async persistAsync(): Promise<void> {
    if (this.isSaving) {
      this.queuedSave = true;
      return;
    }
    this.isSaving = true;
    try {
      if (this.data) {
        const tempPath = STORE_FILE + '.tmp';
        await fs.promises.writeFile(tempPath, JSON.stringify(this.data, null, 2), 'utf-8');
        await fs.promises.rename(tempPath, STORE_FILE);
      }
    } catch (err) {
      console.error('[Database] Error in async persistence:', err);
    } finally {
      this.isSaving = false;
      if (this.queuedSave) {
        this.queuedSave = false;
        this.persistAsync();
      }
    }
  }

  // --- Public Read APIs ---

  public getSettings(): SiteSettings {
    return this.data?.settings || initialSiteSettings;
  }

  public getPublishedProgrammes(): Programme[] {
    return (this.data?.programmes || []).filter(p => p.published);
  }

  public getAllProgrammes(): Programme[] {
    return this.data?.programmes || [];
  }

  public getProgrammeBySlug(slug: string): Programme | undefined {
    return (this.data?.programmes || []).find(p => p.slug === slug);
  }

  public getPublishedWorkshops(): WorkshopFormat[] {
    return (this.data?.workshops || []).filter(w => w.published);
  }

  public getAllWorkshops(): WorkshopFormat[] {
    return this.data?.workshops || [];
  }

  public getWorkshopBySlug(slug: string): WorkshopFormat | undefined {
    return (this.data?.workshops || []).find(w => w.slug === slug);
  }

  public getLearningPaths(): LearningPath[] {
    return this.data?.learningPaths || initialLearningPaths;
  }

  public getLearningProjects(): LearningProject[] {
    return this.data?.learningProjects || initialLearningProjects;
  }

  public getPublishedArticles(): ResourceArticle[] {
    return (this.data?.articles || []).filter(a => a.published);
  }

  public getAllArticles(): ResourceArticle[] {
    return this.data?.articles || [];
  }

  public getArticleBySlug(slug: string): ResourceArticle | undefined {
    return (this.data?.articles || []).find(a => a.slug === slug);
  }

  // --- Enquiries ---

  public async saveEnquiry(enquiryInput: Omit<EnquiryRecord, 'id' | 'referenceNumber' | 'createdAt' | 'updatedAt' | 'status' | 'notes' | 'notificationStatus'> & { customType?: string }): Promise<EnquiryRecord> {
    if (!this.data) throw new Error('Data store uninitialized');

    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(36).substring(2, 7).toUpperCase();
    const prefix = enquiryInput.type === 'workshop_registration' ? 'WS-REG' : 'ENQ';
    const referenceNumber = `${prefix}-${year}-${randomHex}`;

    const newRecord: EnquiryRecord = {
      ...enquiryInput,
      id: 'enq-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      referenceNumber,
      status: 'New',
      notes: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notificationStatus: process.env.SMTP_HOST ? 'sent' : 'stored_pending_smtp_config'
    };

    this.data.enquiries.unshift(newRecord);
    await this.persistAsync();
    return newRecord;
  }

  public getEnquiries(options?: { type?: string; status?: string; search?: string }): EnquiryRecord[] {
    let list = this.data?.enquiries || [];
    if (options?.type && options.type !== 'all') {
      list = list.filter(e => e.type === options.type);
    }
    if (options?.status && options.status !== 'all') {
      list = list.filter(e => e.status === options.status);
    }
    if (options?.search) {
      const q = options.search.toLowerCase();
      list = list.filter(e => 
        e.fullName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        (e.organisation && e.organisation.toLowerCase().includes(q)) ||
        e.referenceNumber.toLowerCase().includes(q)
      );
    }
    return list;
  }

  public async updateEnquiryStatus(id: string, status: EnquiryStatus, noteText?: string, author = 'Admin'): Promise<EnquiryRecord | null> {
    if (!this.data) return null;
    const item = this.data.enquiries.find(e => e.id === id);
    if (!item) return null;

    item.status = status;
    item.updatedAt = new Date().toISOString();

    if (noteText && noteText.trim()) {
      const note: InternalNote = {
        id: 'note-' + Date.now(),
        timestamp: new Date().toISOString(),
        author,
        note: noteText.trim()
      };
      item.notes.push(note);
    }

    await this.persistAsync();
    return item;
  }

  public async addEnquiryNote(id: string, noteText: string, author = 'Admin'): Promise<EnquiryRecord | null> {
    if (!this.data) return null;
    const item = this.data.enquiries.find(e => e.id === id);
    if (!item) return null;

    const note: InternalNote = {
      id: 'note-' + Date.now(),
      timestamp: new Date().toISOString(),
      author,
      note: noteText.trim()
    };
    item.notes.push(note);
    item.updatedAt = new Date().toISOString();

    await this.persistAsync();
    return item;
  }

  // --- Content Management (Admin) ---

  public async updateProgramme(id: string, updates: Partial<Programme>): Promise<Programme | null> {
    if (!this.data) return null;
    const idx = this.data.programmes.findIndex(p => p.id === id);
    if (idx === -1) return null;

    this.data.programmes[idx] = { ...this.data.programmes[idx], ...updates };
    await this.persistAsync();
    return this.data.programmes[idx];
  }

  public async updateWorkshop(id: string, updates: Partial<WorkshopFormat>): Promise<WorkshopFormat | null> {
    if (!this.data) return null;
    const idx = this.data.workshops.findIndex(w => w.id === id);
    if (idx === -1) return null;

    this.data.workshops[idx] = { ...this.data.workshops[idx], ...updates };
    await this.persistAsync();
    return this.data.workshops[idx];
  }

  public async updateArticle(id: string, updates: Partial<ResourceArticle>): Promise<ResourceArticle | null> {
    if (!this.data) return null;
    const idx = this.data.articles.findIndex(a => a.id === id);
    if (idx === -1) return null;

    this.data.articles[idx] = { ...this.data.articles[idx], ...updates };
    await this.persistAsync();
    return this.data.articles[idx];
  }

  public async updateSettings(updates: Partial<SiteSettings>): Promise<SiteSettings> {
    if (!this.data) throw new Error('Uninitialized');
    this.data.settings = { ...this.data.settings, ...updates };
    await this.persistAsync();
    return this.data.settings;
  }

  // --- Admin Authentication ---

  public verifyAdminCredentials(username: string, passwordPlain: string): AdminUser | null {
    if (!this.data) return null;
    const user = this.data.adminUsers.find(u => u.username.toLowerCase() === username.trim().toLowerCase());
    if (!user) return null;

    const match = bcrypt.compareSync(passwordPlain, user.passwordHash);
    return match ? user : null;
  }

  public async updateAdminPassword(username: string, newPasswordPlain: string): Promise<boolean> {
    if (!this.data) return false;
    const user = this.data.adminUsers.find(u => u.username.toLowerCase() === username.trim().toLowerCase());
    if (!user) return false;

    const salt = bcrypt.genSaltSync(10);
    user.passwordHash = bcrypt.hashSync(newPasswordPlain, salt);
    await this.persistAsync();
    return true;
  }
}

export const storage = new StorageManager();
