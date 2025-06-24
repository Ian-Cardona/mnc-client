import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import type { Platform } from '../../features/footer/types/footer.type';
import { useFooter } from '../../features/footer/hooks/useFooter';

const socialIcons: Record<Platform, React.JSX.Element> = {
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.005 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17.005 22 12z"/></svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
  ),
};

const Footer: React.FC = () => {
  const { data: footer, isLoading, isError } = useFooter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isLoading && !isError && formRef.current) {
      (window as Window & { footerEmailForm?: HTMLFormElement | null }).footerEmailForm = formRef.current;
    }
  }, [isLoading, isError]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError('');
    if (success) setSuccess(false);
    setLoading(true);
    new Promise((res) => setTimeout(res, 1200))
      .then(() => {
        setSuccess(true);
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch(() => {
        setError('Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLoading) {
    return (
      <footer className="bg-neutral-900 text-gray-200 px-6 py-16 font-dm-sans">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-lg font-medium text-gray-400">Loading footer...</div>
        </div>
      </footer>
    );
  }

  if (isError || !footer) {
    return (
      <footer className="bg-neutral-900 text-gray-200 px-6 py-16 font-dm-sans">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-red-400 text-lg font-medium">Failed to load footer</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-neutral-900 text-gray-200 px-6 py-16 lg:px-8 lg:py-32 font-dm-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start border-b border-neutral-800 pb-12 lg:pb-24">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <h2 className="text-2xl lg:text-5xl font-semibold mb-2 tracking-tight text-white">Control your finances now</h2>
          <p className="mb-8 text-base lg:text-2xl text-gray-400 font-normal">We'd love to hear from you.</p>
          <form ref={formRef} className="flex flex-col gap-4 bg-neutral-800 p-6 lg:p-12 rounded-2xl shadow-2xl w-full max-w-lg" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="font-lato px-4 py-2 lg:px-6 lg:py-3 rounded-md bg-neutral-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-neutral-700 font-normal text-base lg:text-lg"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <input
              type="tel"
              placeholder="Your contact number"
              className="font-lato px-4 py-2 lg:px-6 lg:py-3 rounded-md bg-neutral-900 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-neutral-700 font-normal text-base lg:text-lg"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={loading}
            />
            <textarea
              placeholder="Your message"
              className="font-lato px-4 py-2 lg:px-6 lg:py-3 rounded-md bg-neutral-900 text-gray-100 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-neutral-700 font-normal text-base lg:text-lg"
              rows={4}
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={loading}
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 lg:px-8 lg:py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-bold transition-colors disabled:opacity-60 shadow-md text-base lg:text-lg"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && <div className="text-green-400 text-sm lg:text-base mt-2 font-medium">Message sent! We'll get back to you soon.</div>}
            {error && <div className="text-red-400 text-sm lg:text-base mt-2 font-medium">{error}</div>}
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-32">
          <div className="flex-1 flex flex-col gap-3 text-base lg:text-xl">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 tracking-tight text-white">Company</h2>
            {footer.links
              .filter(link => link.label && link.path && link.label.toLowerCase() !== 'contact' && (link.label.toLowerCase() !== 'external link' || (link.label.toLowerCase() === 'external link' && link.path)))
              .map(link => (
                <a
                  key={link.label}
                  href={link.path}
                  className="hover:text-yellow-400 transition-colors py-1 text-gray-200 font-medium"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-4 tracking-tight text-white">Contact</h2>
            <div className="font-lato text-gray-400 text-sm lg:text-lg whitespace-pre-line">{footer.address}</div>
            <div className="flex gap-4 mt-2">
              {footer.socials.map(social => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label={social.platform}
                >
                  {socialIcons[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs lg:text-base text-gray-500 mt-10 border-t border-neutral-800 pt-6 tracking-wide font-normal">
        {footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
