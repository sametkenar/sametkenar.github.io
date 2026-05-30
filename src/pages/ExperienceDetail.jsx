import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/experience';

const ExperienceDetail = () => {
  const { slug } = useParams();
  const item = experience.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bento-card p-8 space-y-4">
          <p className="text-sm uppercase tracking-wide text-[var(--text)] opacity-60">Not found</p>
          <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)]">
            Experience entry not found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const hasResponsibilities = item.details?.responsibilities?.length;
  const hasHighlights = item.details?.highlights?.length;
  const hasProjects = item.details?.projects?.length;
  const hasStack = item.details?.stack?.length;

  return (
    <div className="max-w-5xl mx-auto px-6 pb-16 pt-10 space-y-8">
      <Link
        to="/experience"
        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to work experience
      </Link>

      <section className="bento-card p-8 md:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
              <Briefcase size={14} />
              Work experience
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tight">
              {item.title}
            </h1>
            <p className="text-base md:text-lg font-semibold text-[var(--text)]">
              {item.venue}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-80">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} />
              {item.date}
            </span>
            {item.location && (
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                {item.location}
              </span>
            )}
          </div>
        </div>

        {item.details?.overview && (
          <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
            {item.details.overview}
          </p>
        )}
      </section>

      {(hasResponsibilities || hasHighlights) && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hasResponsibilities && (
            <article className="bento-card p-6 space-y-4">
              <h2 className="text-lg font-bold text-[var(--text-h)]">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[var(--text)] leading-relaxed">
                {item.details.responsibilities.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          )}

          {hasHighlights && (
            <article className="bento-card p-6 space-y-4">
              <h2 className="text-lg font-bold text-[var(--text-h)]">Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[var(--text)] leading-relaxed">
                {item.details.highlights.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          )}
        </section>
      )}

      {hasProjects && (
        <section className="bento-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-h)]">Key Projects</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[var(--text)] leading-relaxed">
            {item.details.projects.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>
      )}

      {hasStack && (
        <section className="bento-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-h)]">Tools & Stack</h2>
          <div className="flex flex-wrap gap-2">
            {item.details.stack.map((detail) => (
              <div
                key={detail}
              >
                <div className="skill-badge-shell">
                  <img
                    src={detail.src}
                    alt={detail.label}
                    loading="lazy"
                    className="h-7 md:h-8 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ExperienceDetail;
