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
            <div 
              className="mt-3 p-5 rounded-lg border-l-4 shadow-sm"
              style={{ 
                backgroundColor: '#fafaea', 
                borderLeftColor: '#b8b09f',
                border: '1px solid #e0e0d0'
              }}
            >
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">💡</span>
                <h4 className="font-bold text-sm" style={{ color: '#6d5f4c' }}>Dica para você</h4>
              </div>
              <p className="text-xs mb-3" style={{ color: '#6d5f4c', paddingLeft: '8px' }}>Como calcular seu valor por hora:</p>
              <div className="text-xs" style={{ color: '#6d5f4c', lineHeight: '1.4', paddingLeft: '16px' }}>
                <p className="mb-2">1️⃣ Meta mensal: R$ 1.500,00</p>
                <p className="mb-2">2️⃣ Horas trabalhadas: 5h/dia × 22 dias = 110h</p>
                <p className="font-medium">3️⃣ Valor/hora: R$ 1.500 ÷ 110h = <span style={{ color: '#b8b09f' }}>R$ 13,64</span></p>
              </div>
            </div>
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
            <div 
              className="mt-3 p-5 rounded-lg border-l-4 shadow-sm"
              style={{ 
                backgroundColor: '#fafaea', 
                borderLeftColor: '#b8b09f',
                border: '1px solid #e0e0d0'
              }}
            >
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">💡</span>
                <h4 className="font-bold text-sm" style={{ color: '#6d5f4c' }}>Dica para você</h4>
              </div>
              <p className="text-xs mb-3" style={{ color: '#6d5f4c', paddingLeft: '8px' }}>Para que serve a margem de lucro:</p>
              <div className="text-xs" style={{ color: '#6d5f4c', lineHeight: '1.4', paddingLeft: '16px' }}>
                <p className="mb-2">💰 É o dinheiro que sobra para você depois de pagar tudo</p>
                <p className="mb-2">🏠 Ajuda a pagar suas contas pessoais e investir no negócio</p>
                <p className="mb-2">🔹 Recomendado: 30% a 50% sobre o custo total</p>
                <p className="font-medium">Exemplo: R$ 150,00 + 35% = <span style={{ color: '#b8b09f' }}>R$ 202,50</span></p>
              </div>
            </div>
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