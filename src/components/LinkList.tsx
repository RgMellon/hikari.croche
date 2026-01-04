import type { Link } from '../types'
import LinkCard from './LinkCard'

interface LinkListProps {
  links: Link[]
  onLinkClick: (link: Link) => void
}

export default function LinkList({ links, onLinkClick }: LinkListProps) {
  return (
    <div className="w-full max-w-lg" style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
      {links.map((link) => (
        <LinkCard key={link.id} link={link} onLinkClick={onLinkClick} />
      ))}
    </div>
  )
}