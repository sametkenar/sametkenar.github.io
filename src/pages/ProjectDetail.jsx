import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

const techBadgeMap = {
  'React 19': {
    label: 'React',
    src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  },
  TypeScript: {
    label: 'TypeScript',
    src: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
  },
  Vite: {
    label: 'Vite',
    src: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
  },
  Python: {
    label: 'Python',
    src: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  },
  R: {
    label: 'R',
    src: 'https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white',
  },
  'R Shiny': {
    label: 'R Shiny',
    src: 'https://img.shields.io/badge/R%20Shiny-276DC3?style=for-the-badge&logo=r&logoColor=white',
  },
  Excel: {
    label: 'Excel',
    src: 'https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white',
  },
  'Random Forest': {
    label: 'Random Forest',
    src: 'https://img.shields.io/badge/Random%20Forest-22C55E?style=for-the-badge',
  },
  XGBoost: {
    label: 'XGBoost',
    src: 'https://img.shields.io/badge/XGBoost-DC2626?style=for-the-badge',
  },
  'Logistic Regression': {
    label: 'Logistic Regression',
    src: 'https://img.shields.io/badge/Logistic%20Regression-334155?style=for-the-badge',
  },
  'Lasso Regression': {
    label: 'Lasso Regression',
    src: 'https://img.shields.io/badge/Lasso%20Regression-475569?style=for-the-badge',
  },
  'Feature Selection': {
    label: 'Feature Selection',
    src: 'https://img.shields.io/badge/Feature%20Selection-0EA5E9?style=for-the-badge',
  },
  'Statistical Analysis': {
    label: 'Statistical Analysis',
    src: 'https://img.shields.io/badge/Statistical%20Analysis-0F172A?style=for-the-badge',
  },
  'Survey Data Analysis': {
    label: 'Survey Data Analysis',
    src: 'https://img.shields.io/badge/Survey%20Data%20Analysis-1F2937?style=for-the-badge',
  },
  'Data Visualization': {
    label: 'Data Visualization',
    src: 'https://img.shields.io/badge/Data%20Visualization-0EA5E9?style=for-the-badge',
  },
  ANOVA: {
    label: 'ANOVA',
    src: 'https://img.shields.io/badge/ANOVA-334155?style=for-the-badge',
  },
  'Machine Learning': {
    label: 'Machine Learning',
    src: 'https://img.shields.io/badge/Machine%20Learning-4B5563?style=for-the-badge',
  },
  'Sports Analytics': {
    label: 'Sports Analytics',
    src: 'https://img.shields.io/badge/Sports%20Analytics-0EA5E9?style=for-the-badge',
  },
  PCA: {
    label: 'PCA',
    src: 'https://img.shields.io/badge/PCA-334155?style=for-the-badge',
  },
  SVM: {
    label: 'SVM',
    src: 'https://img.shields.io/badge/SVM-1F2937?style=for-the-badge',
  },
  '.NET 10': {
    label: '.NET',
    src: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
  },
  '.NET 8': {
    label: '.NET',
    src: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
  },
  'ASP.NET Core': {
    label: 'ASP.NET Core',
    src: 'https://img.shields.io/badge/ASP.NET%20Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
  },
  PostgreSQL: {
    label: 'PostgreSQL',
    src: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white',
  },
  'C#': {
    label: 'C#',
    src: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white',
  },
  WPF: {
    label: 'WPF',
    src: 'https://img.shields.io/badge/WPF-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
  },
  SQLite: {
    label: 'SQLite',
    src: 'https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white',
  },
  'AI Document Extraction': {
    label: 'AI',
    src: 'https://img.shields.io/badge/AI-111827?style=for-the-badge',
  },
  'Ubuntu Server': {
    label: 'Ubuntu Server',
    src: 'https://img.shields.io/badge/Ubuntu%20Server-E95420?style=for-the-badge&logo=ubuntu&logoColor=white',
  },
  Git: {
    label: 'Git',
    src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
  },
  HTML: {
    label: 'HTML',
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  },
  CSS: {
    label: 'CSS',
    src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
  },
  JavaScript: {
    label: 'JavaScript',
    src: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bento-card p-8 space-y-4">
          <p className="text-sm uppercase tracking-wide text-[var(--text)] opacity-60">Not found</p>
          <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)]">
            Project not found
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const hasFeatures = project.details?.features?.length;
  const hasTechnologies = project.details?.technologies?.length;
  const techBadges = project.details?.technologies?.map((item) =>
    techBadgeMap[item] ? techBadgeMap[item] : { label: item }
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pb-16 pt-10 space-y-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <section className="bento-card p-8 md:p-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
              <Briefcase size={14} />
              Project
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-base md:text-lg font-semibold text-[var(--text)]">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-80">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} />
              {project.date}
            </span>
            {project.company && (
              <span className="inline-flex items-center gap-2">
                <Briefcase size={14} />
                {project.company}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
          {project.details?.overview || project.description}
        </p>
      </section>

      {hasFeatures && (
        <section className="bento-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-h)]">Key features</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-[var(--text)] leading-relaxed">
            {project.details.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {hasTechnologies && (
        <section className="bento-card p-6 space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-h)]">Tools & Stack</h2>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((badge) => (
              <div key={`${project.slug}-${badge.label}`} className="skill-badge-shell">
                {badge.src ? (
                  <img
                    src={badge.src}
                    alt={badge.label}
                    loading="lazy"
                    className="h-7 md:h-8 w-auto"
                  />
                ) : (
                  <span className="text-xs font-semibold text-[var(--text)]">{badge.label}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;
