import { useState, useEffect } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Layers, 
  FileText, 
  Settings as SettingsIcon, 
  LogOut, 
  MessageSquare, 
  Calendar,
  X,
  AlertCircle
} from 'lucide-react';
import { EnquiryRecord, EnquiryStatus, EnquiryType, Programme, WorkshopFormat, ResourceArticle } from '../types/index.ts';

export function AdminDashboardPage() {
  const { navigate, refreshData } = useAcademy();

  const [activeTab, setActiveTab] = useState<'enquiries' | 'registrations' | 'programmes' | 'workshops' | 'settings'>('enquiries');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<string>('');

  // Enquiries state
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);
  const [newNote, setNewNote] = useState<string>('');

  // Content state for management
  const [adminProgrammes, setAdminProgrammes] = useState<Programme[]>([]);
  const [adminWorkshops, setAdminWorkshops] = useState<WorkshopFormat[]>([]);
  const [adminSettings, setAdminSettings] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [actionSuccess, setActionSuccess] = useState('');

  // Verify auth on mount
  useEffect(() => {
    fetch('/api/admin/me')
      .then(res => {
        if (!res.ok) throw new Error('Unauthenticated');
        return res.json();
      })
      .then(data => {
        setIsAuthenticated(true);
        setCurrentUser(data.user.username);
        loadEnquiries();
        loadContentData();
      })
      .catch(() => {
        setIsAuthenticated(false);
        navigate('/admin/login');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const loadEnquiries = async () => {
    try {
      const res = await fetch('/api/admin/enquiries');
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error('Failed to load enquiries', err);
    }
  };

  const loadContentData = async () => {
    try {
      const [progRes, wsRes, setRes] = await Promise.all([
        fetch('/api/admin/programmes'),
        fetch('/api/admin/workshops'),
        fetch('/api/admin/settings')
      ]);
      if (progRes.ok) setAdminProgrammes(await progRes.json());
      if (wsRes.ok) setAdminWorkshops(await wsRes.json());
      if (setRes.ok) setAdminSettings(await setRes.json());
    } catch (err) {
      console.error('Failed to load content', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    navigate('/admin/login');
  };

  const handleStatusChange = async (id: string, newStatus: EnquiryStatus) => {
    try {
      const res = await fetch(`/api/admin/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        const updated = await res.json();
        setEnquiries(enquiries.map(e => e.id === id ? updated : e));
        if (selectedEnquiry?.id === id) {
          setSelectedEnquiry(updated);
        }
        setActionSuccess('Status updated to ' + newStatus);
        setTimeout(() => setActionSuccess(''), 3000);
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleAddNote = async (id: string) => {
    if (!newNote.trim()) return;
    try {
      const res = await fetch(`/api/admin/enquiries/${id}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: newNote.trim() })
      });
      if (res.ok) {
        const updated = await res.json();
        setEnquiries(enquiries.map(e => e.id === id ? updated : e));
        setSelectedEnquiry(updated);
        setNewNote('');
        setActionSuccess('Internal note recorded.');
        setTimeout(() => setActionSuccess(''), 3000);
      }
    } catch (err) {
      console.error('Failed to append note', err);
    }
  };

  const handleToggleProgrammePublish = async (prog: Programme) => {
    const updated = !prog.published;
    try {
      const res = await fetch(`/api/admin/programmes/${prog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: updated })
      });
      if (res.ok) {
        const result = await res.json();
        setAdminProgrammes(adminProgrammes.map(p => p.id === prog.id ? result : p));
        await refreshData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleWorkshopPublish = async (ws: WorkshopFormat) => {
    const updated = !ws.published;
    try {
      const res = await fetch(`/api/admin/workshops/${ws.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: updated })
      });
      if (res.ok) {
        const result = await res.json();
        setAdminWorkshops(adminWorkshops.map(w => w.id === ws.id ? result : w));
        await refreshData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminSettings)
      });
      if (res.ok) {
        const updated = await res.json();
        setAdminSettings(updated);
        await refreshData();
        setActionSuccess('Site settings updated successfully.');
        setTimeout(() => setActionSuccess(''), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const downloadCsv = () => {
    const params = new URLSearchParams();
    if (selectedType !== 'all') params.set('type', selectedType);
    if (selectedStatus !== 'all') params.set('status', selectedStatus);
    window.location.href = `/api/admin/export-csv?${params.toString()}`;
  };

  // Filtered lists
  const filteredEnquiries = enquiries.filter(e => {
    if (activeTab === 'registrations') {
      if (e.type !== 'workshop_registration') return false;
    } else {
      if (selectedType !== 'all' && e.type !== selectedType) return false;
    }
    if (selectedStatus !== 'all' && e.status !== selectedStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = e.fullName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.referenceNumber.toLowerCase().includes(q) ||
        (e.organisation && e.organisation.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  if (isLoading || isAuthenticated === null) {
    return (
      <div className="py-24 text-center">
        <div className="text-xs text-[#14243B]/60 font-medium">Loading Admin Session...</div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-[#0B1020] text-[#F5F6FF] min-h-screen">
      <SeoHead
        title="Admin Control Center – MindWash AI Academy"
        description="Internal administration portal for managing enquiries and content."
        canonicalPath="/admin"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#263660] gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#42D9C8]">
              <span>Internal Operations</span>
              <span aria-hidden="true" className="text-[#7757FF]">/</span>
              <span>Authenticated as {currentUser}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F5F6FF]">
              Academy Admin Registry
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-3.5 py-1.5 text-xs text-[#BAC7E5] hover:text-[#42D9C8] border border-[#263660] bg-[#141C33] rounded transition-colors cursor-pointer"
            >
              Public Site
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 text-xs font-semibold text-red-300 hover:text-white hover:bg-red-900/60 border border-red-500/40 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {actionSuccess && (
          <div className="mb-6 p-3 bg-emerald-950/60 text-emerald-200 text-xs rounded border border-emerald-500/40 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#263660] pb-4 mb-6 overflow-x-auto">
          {[
            { id: 'enquiries', label: `Enquiries (${enquiries.filter(e => e.type !== 'workshop_registration').length})` },
            { id: 'registrations', label: `Workshop Registrations (${enquiries.filter(e => e.type === 'workshop_registration').length})` },
            { id: 'programmes', label: `Programmes (${adminProgrammes.length})` },
            { id: 'workshops', label: `Workshops (${adminWorkshops.length})` },
            { id: 'settings', label: 'Site Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); setSelectedEnquiry(null); }}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#7757FF] text-white shadow-[0_0_15px_rgba(119,87,255,0.4)]'
                  : 'text-[#BAC7E5] hover:text-[#F5F6FF] hover:bg-[#141C33]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Enquiries & Workshop Registrations */}
        {(activeTab === 'enquiries' || activeTab === 'registrations') && (
          <div className="space-y-6">
            
            {/* Filter & Export Bar */}
            <div className="bg-[#141C33] border border-[#263660] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, email, ref..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                  />
                </div>

                {activeTab === 'enquiries' && (
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-2.5 py-1.5 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                  >
                    <option value="all" className="bg-[#202D50]">All Types</option>
                    <option value="corporate" className="bg-[#202D50]">Corporate</option>
                    <option value="college" className="bg-[#202D50]">College</option>
                    <option value="programme" className="bg-[#202D50]">Programme</option>
                    <option value="general" className="bg-[#202D50]">General</option>
                  </select>
                )}

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-2.5 py-1.5 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                >
                  <option value="all" className="bg-[#202D50]">All Statuses</option>
                  <option value="New" className="bg-[#202D50]">New</option>
                  <option value="Contacted" className="bg-[#202D50]">Contacted</option>
                  <option value="Proposal Sent" className="bg-[#202D50]">Proposal Sent</option>
                  <option value="Closed" className="bg-[#202D50]">Closed</option>
                </select>
              </div>

              <button
                onClick={downloadCsv}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#7757FF] hover:bg-[#6846F5] rounded flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(119,87,255,0.4)] shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                Export CSV (Formula-Protected)
              </button>
            </div>

            {/* Enquiries Table */}
            <div className="bg-[#141C33] border border-[#263660] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(119,87,255,0.1)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#202D50] text-[#F5F6FF] border-b border-[#263660]">
                    <tr>
                      <th className="p-3.5 font-semibold">Ref Code</th>
                      <th className="p-3.5 font-semibold">Contact / Email</th>
                      <th className="p-3.5 font-semibold">Organisation / College</th>
                      <th className="p-3.5 font-semibold">Scope / Programme</th>
                      <th className="p-3.5 font-semibold">Status</th>
                      <th className="p-3.5 font-semibold">Submitted</th>
                      <th className="p-3.5 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#263660]">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-[#94A3B8]">
                          No enquiry records found matching filters.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr 
                          key={enq.id}
                          className="hover:bg-[#202D50]/60 transition-colors cursor-pointer"
                          onClick={() => setSelectedEnquiry(enq)}
                        >
                          <td className="p-3.5 font-mono font-bold text-[#42D9C8] whitespace-nowrap">
                            {enq.referenceNumber}
                          </td>
                          <td className="p-3.5">
                            <div className="font-semibold text-[#F5F6FF]">{enq.fullName}</div>
                            <div className="text-[11px] text-[#BAC7E5]">{enq.email}</div>
                          </td>
                          <td className="p-3.5 text-[#BAC7E5]">
                            {enq.organisation || enq.institutionName || '—'}
                          </td>
                          <td className="p-3.5 text-[#BAC7E5] max-w-xs truncate">
                            {enq.programmeTitle || enq.workshopTitle || enq.type}
                          </td>
                          <td className="p-3.5 whitespace-nowrap">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                              enq.status === 'New'
                                ? 'bg-amber-950/60 text-amber-300 border-amber-600/40'
                                : enq.status === 'Contacted'
                                ? 'bg-blue-950/60 text-blue-300 border-blue-600/40'
                                : enq.status === 'Proposal Sent'
                                ? 'bg-purple-950/60 text-purple-300 border-purple-600/40'
                                : 'bg-slate-800 text-slate-300 border-slate-600/40'
                            }`}>
                              {enq.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-[#94A3B8] whitespace-nowrap">
                            {enq.createdAt.slice(0, 10)}
                          </td>
                          <td className="p-3.5 text-right whitespace-nowrap">
                            <button
                              onClick={(e) => { e.stopPropagation(); setSelectedEnquiry(enq); }}
                              className="text-xs text-[#42D9C8] hover:text-[#F5F6FF] font-semibold underline underline-offset-2"
                            >
                              Review
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab Content: Programmes Management */}
        {activeTab === 'programmes' && (
          <div className="bg-[#141C33] border border-[#263660] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#263660]">
              <h2 className="font-display text-lg font-bold text-[#F5F6FF]">
                Programme Catalogue Management
              </h2>
              <span className="text-xs text-[#94A3B8]">{adminProgrammes.length} Curricula</span>
            </div>

            <div className="divide-y divide-[#263660]">
              {adminProgrammes.map((p) => (
                <div key={p.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#F5F6FF]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#BAC7E5]">
                      {p.category} · {p.level} · {p.modules.length} modules
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-xs font-medium ${p.published ? 'text-[#42D9C8]' : 'text-[#94A3B8]'}`}>
                      {p.published ? 'Published' : 'Draft'}
                    </span>
                    <button
                      onClick={() => handleToggleProgrammePublish(p)}
                      className={`px-3 py-1 text-xs rounded border transition-colors cursor-pointer ${
                        p.published
                          ? 'border-red-500/40 text-red-300 hover:bg-red-950/60'
                          : 'border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60'
                      }`}
                    >
                      {p.published ? 'Unpublish' : 'Publish'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Workshops Management */}
        {activeTab === 'workshops' && (
          <div className="bg-[#141C33] border border-[#263660] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#263660]">
              <h2 className="font-display text-lg font-bold text-[#F5F6FF]">
                Workshop Formats Management
              </h2>
              <span className="text-xs text-[#94A3B8]">{adminWorkshops.length} Formats</span>
            </div>

            <div className="divide-y divide-[#263660]">
              {adminWorkshops.map((w) => (
                <div key={w.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#F5F6FF]">
                      {w.title}
                    </h3>
                    <p className="text-xs text-[#BAC7E5]">
                      {w.duration} · {w.formatType} · {w.isConfirmedEvent ? `Confirmed: ${w.confirmedDate}` : 'On Request'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-xs font-medium ${w.published ? 'text-[#42D9C8]' : 'text-[#94A3B8]'}`}>
                      {w.published ? 'Published' : 'Draft'}
                    </span>
                    <button
                      onClick={() => handleToggleWorkshopPublish(w)}
                      className={`px-3 py-1 text-xs rounded border transition-colors cursor-pointer ${
                        w.published
                          ? 'border-red-500/40 text-red-300 hover:bg-red-950/60'
                          : 'border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/60'
                      }`}
                    >
                      {w.published ? 'Unpublish' : 'Publish'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Site Settings */}
        {activeTab === 'settings' && adminSettings && (
          <div className="bg-[#141C33] border border-[#263660] rounded-xl p-8 max-w-2xl">
            <h2 className="font-display text-lg font-bold text-[#F5F6FF] mb-6">
              Academy Public Contact & Operational Settings
            </h2>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#BAC7E5] mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={adminSettings.brandName || ''}
                  onChange={(e) => setAdminSettings({ ...adminSettings, brandName: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BAC7E5] mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={adminSettings.tagline || ''}
                  onChange={(e) => setAdminSettings({ ...adminSettings, tagline: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BAC7E5] mb-1">
                  Admissions Contact Email
                </label>
                <input
                  type="email"
                  value={adminSettings.contactEmail || ''}
                  onChange={(e) => setAdminSettings({ ...adminSettings, contactEmail: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BAC7E5] mb-1">
                  Office / Response Hours
                </label>
                <input
                  type="text"
                  value={adminSettings.officeHours || ''}
                  onChange={(e) => setAdminSettings({ ...adminSettings, officeHours: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BAC7E5] mb-1">
                  Parent Company URL
                </label>
                <input
                  type="url"
                  value={adminSettings.parentCompanyUrl || ''}
                  onChange={(e) => setAdminSettings({ ...adminSettings, parentCompanyUrl: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7757FF] hover:bg-[#6846F5] rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(119,87,255,0.4)]"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Selected Enquiry Inspection Modal / Drawer */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0E1428] border border-[#263660] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 text-[#F5F6FF] shadow-[0_0_50px_rgba(119,87,255,0.25)]">
              
              <div className="flex items-center justify-between border-b border-[#263660] pb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#42D9C8]">
                    {selectedEnquiry.referenceNumber}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F5F6FF]">
                    {selectedEnquiry.fullName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-1 text-[#BAC7E5] hover:text-[#42D9C8] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Update Strip */}
              <div className="flex items-center justify-between bg-[#141C33] p-3 rounded-lg border border-[#263660]">
                <span className="text-xs font-semibold text-[#BAC7E5]">Change Status:</span>
                <div className="flex items-center gap-1.5">
                  {(['New', 'Contacted', 'Proposal Sent', 'Closed'] as EnquiryStatus[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedEnquiry.id, st)}
                      className={`px-2.5 py-1 text-xs rounded border transition-all cursor-pointer ${
                        selectedEnquiry.status === st
                          ? 'bg-[#7757FF] text-white border-[#7757FF] font-semibold shadow-[0_0_10px_rgba(119,87,255,0.4)]'
                          : 'bg-[#202D50] text-[#BAC7E5] border-[#263660] hover:border-[#7757FF]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detail Fields */}
              <div className="grid grid-cols-2 gap-4 text-xs text-[#BAC7E5]">
                <div>
                  <strong className="text-[#F5F6FF] block">Email:</strong>
                  <a href={`mailto:${selectedEnquiry.email}`} className="text-[#42D9C8] underline">
                    {selectedEnquiry.email}
                  </a>
                </div>
                <div>
                  <strong className="text-[#F5F6FF] block">Phone:</strong>
                  {selectedEnquiry.phone || 'Not provided'}
                </div>
                <div>
                  <strong className="text-[#F5F6FF] block">Organisation / Institution:</strong>
                  {selectedEnquiry.organisation || selectedEnquiry.institutionName || 'Not specified'}
                </div>
                <div>
                  <strong className="text-[#F5F6FF] block">Role / Department:</strong>
                  {selectedEnquiry.role || selectedEnquiry.department || 'Not specified'}
                </div>
                <div>
                  <strong className="text-[#F5F6FF] block">Cohort Size:</strong>
                  {selectedEnquiry.teamSize || 'N/A'}
                </div>
                <div>
                  <strong className="text-[#F5F6FF] block">Delivery Mode / Location:</strong>
                  {selectedEnquiry.preferredDeliveryMode || 'Flexible'} {selectedEnquiry.location ? `(${selectedEnquiry.location})` : ''}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-1 text-xs">
                <strong className="text-[#F5F6FF] block">Goals & Requirements:</strong>
                <p className="p-3 bg-[#141C33] rounded-lg border border-[#263660] leading-relaxed text-[#BAC7E5]">
                  {selectedEnquiry.goalsAndRequirements}
                </p>
              </div>

              {/* Internal Notes History */}
              <div className="space-y-3 pt-2 border-t border-[#263660]">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#42D9C8]">
                  Internal Staff Notes ({selectedEnquiry.notes.length})
                </h4>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedEnquiry.notes.length === 0 ? (
                    <p className="text-xs text-[#94A3B8] italic">No notes recorded yet.</p>
                  ) : (
                    selectedEnquiry.notes.map((n) => (
                      <div key={n.id} className="p-2.5 bg-[#141C33] rounded-lg border border-[#263660] text-xs">
                        <div className="flex items-center justify-between text-[10px] text-[#94A3B8] mb-1">
                          <span className="font-semibold text-[#F5F6FF]">{n.author}</span>
                          <span>{n.timestamp.slice(0, 16).replace('T', ' ')}</span>
                        </div>
                        <p className="text-[#BAC7E5]">{n.note}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Add Note Form */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Append staff note..."
                    className="flex-1 px-3 py-1.5 text-xs bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
                  />
                  <button
                    onClick={() => handleAddNote(selectedEnquiry.id)}
                    className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7757FF] hover:bg-[#6846F5] rounded transition-all cursor-pointer shadow-[0_0_10px_rgba(119,87,255,0.4)]"
                  >
                    Add Note
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
