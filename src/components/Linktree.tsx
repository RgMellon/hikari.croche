import type { Profile, Link } from '../types'
import Header from './Header'
import LinkList from './LinkList'
import PriceCalculator from './PriceCalculator'
import { useState } from 'react'

interface LinktreeProps {
  profile: Profile
  links: Link[]
}

export default function Linktree({ profile, links }: LinktreeProps) {
  const [showCalculator, setShowCalculator] = useState(false)

  const handleLinkClick = (link: Link) => {
    if (link.url === '#calculator') {
      setShowCalculator(true)
      return
    }
    window.open(link.url, '_blank')
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #fafaea 0%, #f5f5e5 50%, #f0f0e0 100%)',
        fontFamily: 'Georgia, serif',
        padding: '20px'
      }}
    >
      <div className="w-full" style={{ maxWidth: '1440px' }}>
        <div className="w-full max-w-lg mx-auto">
          <Header profile={profile} />
          {!showCalculator ? (
            <LinkList links={links} onLinkClick={handleLinkClick} />
          ) : (
            <>
              <button
                onClick={() => setShowCalculator(false)}
                className="mb-6 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                style={{
                  backgroundColor: '#6d5f4c',
                  color: '#fafaea',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontFamily: 'Georgia, serif',
                  cursor: 'pointer'
                }}
              >
                ← Voltar
              </button>
              <PriceCalculator />
            </>
          )}
        </div>
      </div>
    </div>
  )
}