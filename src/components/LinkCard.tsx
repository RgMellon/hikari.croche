import type { Link } from '../types'

interface LinkCardProps {
  link: Link
  onLinkClick: (link: Link) => void
}

export default function LinkCard({ link, onLinkClick }: LinkCardProps) {
  const handleClick = () => {
    onLinkClick(link)
  }

  return (
    <button
      onClick={handleClick}
      className="block w-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex items-center justify-center"
      style={{
        backgroundColor: '#b8b09f',
        border: '2px solid #9c9484',
        fontFamily: 'Georgia, serif',
        height: '50px',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#a49c8c'
        e.currentTarget.style.borderColor = '#6d5f4c'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#b8b09f'
        e.currentTarget.style.borderColor = '#9c9484'
      }}
    >
      <div className="flex items-center justify-center" style={{ gap: '10px' }}>
        {link.icon && <span className="text-3xl filter drop-shadow-sm link-card-icon">{link.icon}</span>}
        <span className="font-bold text-2xl tracking-wide link-card-text" style={{ color: '#fafaea' }}>{link.title}</span>
      </div>
    </button>
  )
}