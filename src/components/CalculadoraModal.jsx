import { useState } from "react"

export default function CalculatorModal({ total, pagaCon, onClose }) {
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)

  const addValue = (value) => {
    setInput(prev => prev + value)
  }

  const clear = () => {
    setInput("")
    setResult(null)
  }

  const calculate = () => {
    try {
      const sanitized = input.replace(/[^0-9+-]/g, "")
      const evalResult = Function(`return ${sanitized}`)()
      setResult(evalResult)
    } catch {
      setResult("Error")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          🧮 Calculadora
        </h2>

        <div className="text-lg mb-4 flex justify-between">
          <p>Paga con:</p>
          <strong>$ {pagaCon}</strong>
        </div>

        <div className="text-lg mb-6 flex justify-between">
          <p>Debe pagar:</p>
          <strong>$ {total}</strong>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl text-right mb-3 text-2xl font-mono">
          {input || "0"}
        </div>

        {result !== null && (
          <div className="text-right text-green-600 font-bold text-2xl mb-4">
            = {result}
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[7,8,9,4,5,6,1,2,3].map(n => (
            <button
              key={n}
              onClick={() => addValue(n.toString())}
              className="bg-gray-200 hover:bg-gray-300 py-4 text-xl font-bold rounded-xl"
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => addValue("0")}
            className="bg-gray-200 hover:bg-gray-300 py-4 text-xl font-bold rounded-xl"
          >
            0
          </button>

          <button
            onClick={() => addValue("+")}
            className="bg-blue-200 hover:bg-blue-300 py-4 text-xl font-bold rounded-xl"
          >
            +
          </button>

          <button
            onClick={() => addValue("-")}
            className="bg-blue-200 hover:bg-blue-300 py-4 text-xl font-bold rounded-xl"
          >
            -
          </button>

          <button
            onClick={clear}
            className="bg-red-300 hover:bg-red-400 py-4 text-xl font-bold rounded-xl col-span-2"
          >
            C
          </button>

          <button
            onClick={calculate}
            className="bg-green-500 hover:bg-green-600 text-white py-4 text-xl font-bold rounded-xl"
          >
            =
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-xl font-bold rounded-xl"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}
