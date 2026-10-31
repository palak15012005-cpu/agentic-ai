import React, { useState } from 'react';
import { useAcademy } from '../context/AcademyContext.tsx';
import { SeoHead } from '../components/common/SeoHead.tsx';
import { Lock, AlertCircle, ArrowLeft } from 'lucide-react';

export function AdminLoginPage() {
  const { navigate } = useAcademy();

  const [username, setUsername] = useState('admin@mindwash.ai');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed. Please verify credentials.');
      }

      navigate('/admin');
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 flex items-center justify-center px-4 bg-[#0B1020] min-h-[75vh]">
      <SeoHead
        title="Admin Authentication – MindWash AI Academy"
        description="Restricted administration access for MindWash AI Academy registry."
        canonicalPath="/admin/login"
      />

      <div className="w-full max-w-md bg-[#141C33] border border-[#263660] rounded-2xl p-8 shadow-[0_0_40px_rgba(119,87,255,0.2)] space-y-6 text-[#F5F6FF]">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#202D50] border border-[#7757FF]/40 text-[#42D9C8] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(119,87,255,0.3)]">
            <Lock className="w-6 h-6 text-[#42D9C8]" />
          </div>
          <h1 className="font-display text-2xl font-bold text-[#F5F6FF]">
            Academy Registry Login
          </h1>
          <p className="text-xs text-[#BAC7E5]">
            Authorised staff access for enquiry management and content updates.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-950/60 text-red-200 text-xs rounded border border-red-500/40 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-user" className="block text-xs font-medium text-[#BAC7E5] mb-1">
              Administrator Username / Email
            </label>
            <input
              id="admin-user"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
            />
          </div>

          <div>
            <label htmlFor="admin-pass" className="block text-xs font-medium text-[#BAC7E5] mb-1">
              Password
            </label>
            <input
              id="admin-pass"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-3 py-2.5 text-sm bg-[#202D50] border border-[#263660] text-[#F5F6FF] rounded outline-none focus:border-[#7757FF]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7757FF] hover:bg-[#6846F5] disabled:opacity-50 rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(119,87,255,0.4)]"
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In to Admin Portal'}
            </button>
          </div>
        </form>

        <div className="pt-4 border-t border-[#263660] text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs text-[#BAC7E5] hover:text-[#42D9C8] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Public Academy Site
          </button>
        </div>
      </div>
    </div>
  );
}
