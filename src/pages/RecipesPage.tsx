import type { Profile } from '../types'
import type { Product } from '../types/product'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

interface RecipesPageProps {
  profile: Profile
  onBack?: () => void
}

const products: Product[] = [
  {
    id: '1',
    title: 'PDF Receita Bolsinha de Crochê - Hikari Crochê',
    description: 'Receita completa e detalhada da bolsinha de crochê em PDF, desenvolvida para carregar celular e pequenos objetos do dia a dia. O material inclui passo a passo descritivo acompanhado de imagens explicativas, facilitando o entendimento e a execução da peça, mesmo para quem está aprimorando suas habilidades no crochê.',
    image: 'https://i.imgur.com/CaEIlya.png',
    downloadUrl: 'https://pay.kiwify.com.br/vaZ0nS0'
  }
]

export default function RecipesPage({ profile, onBack }: RecipesPageProps) {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #fafaea 0%, #f5f5e5 50%, #f0f0e0 100%)',
        fontFamily: 'Georgia, serif',
        padding: '20px'
      }}
    >
      <div className="w-full" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="w-full max-w-4xl mx-auto">
          <Header profile={profile} />
          
          <button
            onClick={onBack || (() => window.history.back())}
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

          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#6d5f4c' }}>
            Receitas em PDF
          </h2>

          <div 
            className="grid gap-6 products-grid"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}