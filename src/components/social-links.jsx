import resumeUrl from '../Aditya Jha Resume.docx-2.pdf?url'

const socials = [
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/aditya.jha.08/' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/Aditya-1794' },
  { label: 'Devpost', icon: 'devpost', href: 'https://devpost.com/aditya2008jha' },
  { label: 'Download résumé', icon: 'download', href: resumeUrl, download: 'Aditya-Jha-Resume.pdf' },
]

function SocialIcon({ name }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" /></>}
      {name === 'github' && <path fill="currentColor" stroke="none" d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.63 0c2.15-1.46 3.09-1.15 3.09-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />}
      {name === 'devpost' && <><path d="M6.5 2.5h11L23 12l-5.5 9.5h-11L1 12Z" /><path d="M9 7.5h3a4.5 4.5 0 0 1 0 9H9Z" strokeWidth="2.2" /></>}
      {name === 'download' && <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>}
    </svg>
  )
}

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social profiles and résumé">
      {socials.map(({ label, icon, href, download }) => href ? (
        <a className="social-button" key={icon} href={href} aria-label={label} title={label} download={download || undefined} target={download ? undefined : '_blank'} rel={download ? undefined : 'noopener noreferrer'}>
          <SocialIcon name={icon} />{download && label}
        </a>
      ) : (
        <button className="social-button" key={icon} type="button" disabled aria-label={label} title={`${label} link coming soon`}>
          <SocialIcon name={icon} />{download && label}
        </button>
      ))}
    </nav>
  )
}
