import type { Product } from '../types/product'
import { trackLinkClick } from '../utils/analytics'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleDownload = () => {
    // Rastrear clique no botão QUERO
    trackLinkClick(`QUERO - ${product.title}`, product.downloadUrl)
    window.open(product.downloadUrl, '_blank')
  }

  return (
    <div 
      className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      style={{
        backgroundColor: '#fafaea',
        fontFamily: 'Georgia, serif',
        borderRadius: '8px'
      }}
    >
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-48 object-cover"
        style={{ border: 'none', outline: 'none' }}
      />
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 px-2" style={{ color: '#6d5f4c' }}>
          {product.title}
        </h3>
        <p className="text-sm mb-4 px-2" style={{ color: '#6d5f4c', lineHeight: '1.4' }}>
          {product.description}
        </p>
        <button
          onClick={handleDownload}
          className="w-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 product-button"
          style={{
            backgroundColor: '#6d5f4c',
            color: '#fafaea',
            height: '45px',
            borderRadius: '8px',
            border: 'none'
          }}
        >
          QUERO
        </button>
      </div>
    </div>
  )
}