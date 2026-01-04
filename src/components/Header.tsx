import type { Profile } from '../types'

interface HeaderProps {
  profile: Profile
}

export default function Header({ profile }: HeaderProps) {
  return (
    <div className="text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
      <div 
        className="mx-auto mb-6 rounded-full overflow-hidden shadow-lg" 
        style={{ 
          width: '100px', 
          height: '100px',
          border: '4px solid #b8b09f'
        }}
      >
        {profile.logo ? (
          <img src={profile.logo} alt={profile.name} className="object-cover" style={{ width: '100px', height: '100px' }} />
        ) : (
          <div className="rounded-full flex items-center justify-center" style={{ width: '100px', height: '100px', backgroundColor: '#9c9484' }}>
            <div className="text-sm" style={{ color: '#fafaea' }}>Logo</div>
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold mb-3 tracking-wide" style={{ color: '#6d5f4c' }}>{profile.name}</h1>
      {profile.bio && <p className="text-lg italic" style={{ color: '#6d5f4c', opacity: 0.8 }}>{profile.bio}</p>}
    </div>
  )
}