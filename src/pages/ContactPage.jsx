import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-6 pb-16 pt-10"
    >
      <section className="bento-card p-8 md:p-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tight">
            Contact.
          </h1>
          <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
            Reach out for collaboration, project opportunities, or professional inquiries.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
          >
            <Mail size={18} className="text-[var(--accent)]" />
            <span className="text-sm font-medium leading-relaxed">{profile.email}</span>
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <MapPin size={18} className="text-[var(--accent)]" />
              <span className="text-sm font-medium leading-relaxed">{profile.location}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.profiles.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] text-sm font-semibold text-[var(--text)] hover:text-[var(--text-h)] hover:border-[var(--accent)] transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
