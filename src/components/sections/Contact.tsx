import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code2,
  Send,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  Download,
} from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha: string; // Honeypot field for anti-spam
}

export const Contact: React.FC = () => {
  const { title, copy, email, phone, location, socials, formEndpoint } = content.contact;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (formData._gotcha) {
      console.warn('Bot submission blocked via honeypot field.');
      return;
    }

    if (!validate()) {
      return;
    }

    // Working mailto fallback when no external service is configured
    if (!formEndpoint || formEndpoint.trim() === '' || formEndpoint.includes('TODO')) {
      const subjectLine = formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`;
      const bodyContent = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;

      window.location.href = mailtoUrl;
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          data.error ||
            'Submission failed. Please connect directly via email.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error occurred while connecting to the form service. Opening direct email fallback...'
      );
      const subjectLine = formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`;
      const bodyContent = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    }
  };

  return (
    <Section id="contact" hasDivider={false} className="py-24 md:py-32 bg-cream border-t border-beige/80 relative overflow-hidden">
      {/* Background grain & ambient spotlight */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-forest-sage/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-beige-light/60 blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10">
        
        {/* Section Headline */}
        <div className="mb-14 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
              08 — Contact Studio
            </span>
            <span className="h-px w-10 bg-terracotta/40" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-forest leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 text-ink/80 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            {copy}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Direct Channels & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              
              {/* Email Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-beige/90 hover:border-terracotta/50 shadow-soft transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-forest/5 border border-forest/15 text-terracotta">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs uppercase text-forest-secondary font-bold">Direct Email</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest/40" />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-forest hover:text-terracotta text-sm sm:text-base transition-colors break-all font-semibold"
                >
                  {email}
                </a>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-beige/90 hover:border-terracotta/50 shadow-soft transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-forest/5 border border-forest/15 text-forest">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs uppercase text-forest-secondary font-bold">Telephone</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-forest/40" />
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="font-medium text-forest hover:text-terracotta text-sm sm:text-base transition-colors font-semibold"
                >
                  +91 {phone}
                </a>
              </motion.div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-beige/90 shadow-soft">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-2 rounded-lg bg-forest/5 border border-forest/15 text-terracotta">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs uppercase text-forest-secondary font-bold">Location</span>
                </div>
                <p className="font-medium text-forest text-sm sm:text-base font-semibold">
                  {location}
                </p>
              </div>

              {/* Profiles Row: LinkedIn, GitHub, CodeChef */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-beige/90 hover:border-terracotta transition-colors flex flex-col items-center text-center group shadow-2xs"
                >
                  <Linkedin className="w-4 h-4 text-forest group-hover:text-terracotta mb-1 transition-colors" />
                  <span className="text-[11px] font-mono text-forest group-hover:text-terracotta font-semibold">LinkedIn</span>
                </a>

                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-beige/90 hover:border-terracotta transition-colors flex flex-col items-center text-center group shadow-2xs"
                >
                  <Github className="w-4 h-4 text-forest group-hover:text-terracotta mb-1 transition-colors" />
                  <span className="text-[11px] font-mono text-forest group-hover:text-terracotta font-semibold">GitHub</span>
                </a>

                <a
                  href={socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-beige/90 hover:border-terracotta transition-colors flex flex-col items-center text-center group shadow-2xs"
                >
                  <Code2 className="w-4 h-4 text-terracotta mb-1" />
                  <span className="text-[11px] font-mono text-forest group-hover:text-terracotta font-semibold">CodeChef</span>
                </a>
              </div>

              {/* Download Resume Button in Contact Section */}
              <div className="pt-2">
                <Button
                  variant="secondary"
                  href="/resume.pdf"
                  download="Saripilli_Murali_Krishna_Resume.pdf"
                  icon={<Download className="w-4 h-4" />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Download Complete Resume (PDF)
                </Button>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 text-xs font-mono text-forest flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-forest-secondary shrink-0" />
              <span>Available for Python, Full Stack & AI engineering opportunities worldwide.</span>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Contact Form in Light Theme */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-beige/90 shadow-soft-lg">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest mb-6">
              Send a Direct Message
            </h3>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-forest-sage/40 border border-forest-secondary/40 rounded-2xl text-forest"
                role="alert"
              >
                <div className="flex items-center gap-2.5 mb-2 font-heading font-bold text-lg text-forest">
                  <CheckCircle2 className="w-6 h-6 text-terracotta" />
                  Message Dispatched Successfully
                </div>
                <p className="text-sm text-ink/80 leading-relaxed font-sans">
                  Thank you for reaching out! Your message draft has been routed to my email address. I will review it and reply as soon as possible.
                </p>
                <Button
                  variant="secondary"
                  onClick={(): void => setStatus('idle')}
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website-hp">Leave this blank</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-forest font-semibold mb-1.5"
                  >
                    Your Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Saripilli Murali Krishna"
                    className={`w-full px-4 py-3 text-sm bg-cream/70 border rounded-xl transition-all text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta ${
                      errors.name ? 'border-red-500' : 'border-beige/90'
                    }`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-forest font-semibold mb-1.5"
                  >
                    Email Address <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 text-sm bg-cream/70 border rounded-xl transition-all text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta ${
                      errors.email ? 'border-red-500' : 'border-beige/90'
                    }`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-forest font-semibold mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack / AI Opportunity"
                    className="w-full px-4 py-3 text-sm bg-cream/70 border border-beige/90 rounded-xl transition-all text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-forest font-semibold mb-1.5"
                  >
                    Message <span className="text-terracotta">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`w-full px-4 py-3 text-sm bg-cream/70 border rounded-xl transition-all text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta resize-y ${
                      errors.message ? 'border-red-500' : 'border-beige/90'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div
                    className="p-3.5 bg-red-100 border border-red-300 text-red-800 rounded-xl text-xs leading-relaxed flex items-start gap-2.5"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="terracotta"
                    disabled={status === 'submitting'}
                    icon={<Send className="w-4 h-4" />}
                    enableMagnetic={true}
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </Section>
  );
};
