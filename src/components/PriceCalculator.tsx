import { useState } from 'react'

export default function PriceCalculator() {
  const [materialCost, setMaterialCost] = useState('')
  const [hoursWorked, setHoursWorked] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [profitMargin, setProfitMargin] = useState('')
  const [finalPrice, setFinalPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    const materials = parseFloat(materialCost) || 0
    const hours = parseFloat(hoursWorked) || 0
    const rate = parseFloat(hourlyRate) || 0
    const margin = parseFloat(profitMargin) || 0

    const laborCost = hours * rate
    const totalCost = materials + laborCost
    const profit = totalCost * (margin / 100)
    const price = totalCost + profit

    setFinalPrice(price)
    
    // Limpar inputs após calcular
    setMaterialCost('')
    setHoursWorked('')
    setHourlyRate('')
    setProfitMargin('')
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div 
        className="p-8"
        style={{
          fontFamily: 'Georgia, serif'
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#6d5f4c' }}>
          Calculadora de Preços
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#6d5f4c' }}>
              Custo dos Materiais (R$):
            </label>
            <input
              type="number"
              placeholder="Exemplo: 30"
              value={materialCost}
              onChange={(e) => setMaterialCost(e.target.value)}
              className="w-full rounded-lg border-2 text-lg"
              style={{
                backgroundColor: '#fafaea',
                borderColor: '#9c9484',
                color: '#6d5f4c',
                height: '40px',
                padding: '0 12px'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#6d5f4c' }}>
              Horas Trabalhadas:
            </label>
            <input
              type="number"
              placeholder="Exemplo: 3"
              value={hoursWorked}
              onChange={(e) => setHoursWorked(e.target.value)}
              className="w-full rounded-lg border-2 text-lg"
              style={{
                backgroundColor: '#fafaea',
                borderColor: '#9c9484',
                color: '#6d5f4c',
                height: '40px',
                padding: '0 12px'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#6d5f4c' }}>
              Valor da Hora (R$):
            </label>
            <input
              type="number"
              placeholder="Exemplo: 20"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full rounded-lg border-2 text-lg"
              style={{
                backgroundColor: '#fafaea',
                borderColor: '#9c9484',
                color: '#6d5f4c',
                height: '40px',
                padding: '0 12px'
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#6d5f4c' }}>
              Margem de Lucro (%):
            </label>
            <input
              type="number"
              placeholder="Exemplo: 40"
              value={profitMargin}
              onChange={(e) => setProfitMargin(e.target.value)}
              className="w-full rounded-lg border-2 text-lg"
              style={{
                backgroundColor: '#fafaea',
                borderColor: '#9c9484',
                color: '#6d5f4c',
                height: '40px',
                padding: '0 12px'
              }}
            />
          </div>

          <button
            onClick={calculatePrice}
            className="w-full font-bold text-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              backgroundColor: '#6d5f4c',
              color: '#fafaea',
              height: '50px',
              padding: '10px',
              borderRadius: '8px',
              border: 'none'
            }}
          >
            Calcular Preço
          </button>

          {finalPrice !== null && (
            <div 
              className="mt-6 p-4 rounded-lg text-center"
              style={{ backgroundColor: '#fafaea' }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: '#6d5f4c' }}>
                Preço Final:
              </h3>
              <p className="text-3xl font-bold" style={{ color: '#6d5f4c' }}>
                R$ {finalPrice.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}