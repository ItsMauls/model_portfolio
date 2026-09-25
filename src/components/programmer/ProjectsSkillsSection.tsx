'use client'

import { useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { skills } from '@/lib/programmer-content'
import type { ProjectEntry } from '@/lib/programmer-content'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

// ponytail: devicon has no entry for Expo, REST API, Redux — those skills render without an icon
const skillIcons: Record<string, string> = {
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  TypeScript: `${DEVICON_BASE}/typescript/typescript-original.svg`,
  PHP: `${DEVICON_BASE}/php/php-original.svg`,
  Golang: `${DEVICON_BASE}/go/go-original.svg`,
  'React JS': `${DEVICON_BASE}/react/react-original.svg`,
  'React Native': `${DEVICON_BASE}/react/react-original.svg`,
  'HTML & CSS': `${DEVICON_BASE}/html5/html5-original.svg`,
  'Apollo Client': `${DEVICON_BASE}/apollographql/apollographql-original.svg`,
  'Apollo Server': `${DEVICON_BASE}/apollographql/apollographql-original.svg`,
  jQuery: `${DEVICON_BASE}/jquery/jquery-original.svg`,
  'Next.js': `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  'Tailwind CSS': `${DEVICON_BASE}/tailwindcss/tailwindcss-plain.svg`,
  Angular: `${DEVICON_BASE}/angularjs/angularjs-original.svg`,
  'Node JS': `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  Express: `${DEVICON_BASE}/express/express-original.svg`,
  Sequelize: `${DEVICON_BASE}/sequelize/sequelize-original.svg`,
  PostgreSQL: `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  GraphQL: `${DEVICON_BASE}/graphql/graphql-plain.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  Redis: `${DEVICON_BASE}/redis/redis-original.svg`,
  'Socket.io': `${DEVICON_BASE}/socketio/socketio-original.svg`,
  Jest: `${DEVICON_BASE}/jest/jest-plain.svg`,
  AWS: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  Java: `${DEVICON_BASE}/java/java-original.svg`,
  'Spring Boot': `${DEVICON_BASE}/spring/spring-original.svg`,
  Laravel: `${DEVICON_BASE}/laravel/laravel-original.svg`,
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  const t = useTranslations('programmer.projects')
  const [open, setOpen] = useState(false)

  return (
    <li className="border-2 border-(--color-ink) bg-(--color-surface) p-5 shadow-[6px_6px_0_var(--color-accent)] sm:p-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t('expand', { title: project.name })}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="text-lg font-bold">{project.name}</span>
          {project.featured && (
            <span className="rounded-(--radius-pill) bg-(--color-accent) px-2.5 py-0.5 text-xs font-bold text-(--color-on-accent)">
              {t('featured')}
            </span>
          )}
        </span>
        <span
          aria-hidden="true"
          className={`text-2xl leading-none font-bold text-(--color-accent) transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="mt-4">
          <p className="text-sm leading-relaxed text-(--color-muted)">{project.description}</p>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-(--color-muted)">{t('stack')}:</span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-(--radius-pill) bg-(--color-accent)/10 px-2.5 py-1 font-semibold text-(--color-accent)"
              >
                {tech}
              </span>
            ))}
          </p>
        </div>
      )}
    </li>
  )
}

function SkillGroup({ label, items, exploring }: { label: string; items: string[]; exploring?: string[] }) {
  const t = useTranslations('programmer.skills')

  return (
    <div className="rounded-2xl border-2 border-(--color-ink) bg-(--color-surface) p-5 shadow-[6px_6px_0_var(--color-accent)] sm:p-6">
      <h3 className="text-xs font-bold tracking-widest text-(--color-muted) uppercase">{label}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.3, ease: 'easeOut' }}
            className="group inline-flex items-center gap-1.5 border-2 border-(--color-ink) bg-(--color-accent)/10 px-3 py-1.5 text-sm font-semibold text-(--color-accent) transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-(--color-accent) hover:bg-(--color-accent)/20 hover:shadow-[0_0_18px_rgba(234,88,12,0.5)]"
          >
            {skillIcons[skill] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={skillIcons[skill]}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110"
              />
            )}
            {skill}
            {exploring?.includes(skill) && <span className="ml-1.5 font-normal">({t('exploring')})</span>}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

// Mobile: two independent full-screen snap panels (stacked). Desktop (lg+): both
// `contents` wrappers below collapse away, so the two <section>s become plain grid
// cells inside a single combined snap panel — same look as before the mobile split.
// bg-[image:...] instead of the .panel-sunset class: at lg+ the wrapper below paints the
// gradient once for both columns, so a child painting it too would double up and clash.
const panelClass =
  'programmer-panel programmer-panel-grid-cell bg-[image:var(--gradient-sunset)] flex min-h-dvh w-full shrink-0 flex-col justify-center overflow-y-auto border-t-2 border-(--color-ink) px-(--spacing-gutter) py-(--spacing-section-sm) sm:px-10 sm:py-(--spacing-section) lg:min-h-0 lg:w-auto lg:shrink lg:justify-start lg:overflow-visible lg:border-t-0 lg:bg-none lg:px-0 lg:py-0'

function ProjectsSection({ items }: { items: ProjectEntry[] }) {
  const tProjects = useTranslations('programmer.projects')

  return (
    <section id="projects" className={panelClass}>
      <h2 className="font-condensed text-3xl font-bold tracking-tight uppercase sm:text-5xl">{tProjects('title')}</h2>
      <ul className="mt-6 space-y-4 sm:mt-8">
        {items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  )
}

function SkillsSection() {
  const tSkills = useTranslations('programmer.skills')

  return (
    <section id="skills" className={panelClass}>
      <h2 className="font-condensed text-3xl font-bold tracking-tight uppercase sm:text-5xl">{tSkills('title')}</h2>
      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        <SkillGroup label="Language" items={skills.language} exploring={skills.exploring} />
        <SkillGroup label="Front End" items={skills.frontend} />
        <SkillGroup label="Back End" items={skills.backend} />
      </div>
    </section>
  )
}

export function ProjectsSkillsSection({ items }: { items: ProjectEntry[] }) {
  return (
    <MotionConfig reducedMotion="user">
      {/* programmer-panel/panel-sunset are plain CSS classes (see globals.css), inert while
          `display: contents` keeps this wrapper out of the box tree on mobile. */}
      <div className="programmer-panel panel-sunset contents lg:grid lg:min-h-dvh lg:w-full lg:shrink-0 lg:grid-cols-2 lg:items-start lg:content-center lg:gap-x-10 lg:gap-y-10 lg:overflow-y-auto lg:border-t-2 lg:border-(--color-ink) lg:px-10 lg:py-(--spacing-section)">
        <ProjectsSection items={items} />
        <SkillsSection />
      </div>
    </MotionConfig>
  )
}
