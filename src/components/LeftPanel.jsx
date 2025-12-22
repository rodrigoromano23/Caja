import TotalCard from "./totalCard"
import CalculatorModal from "./CalculadoraModal"

export default function LeftPanel({
  total,
  pagaCon,
  vueltoEntregado,
  entregar,
  showModal,
  setShowModal
}) {
  return (
    <div
      className="
        flex flex-col gap-3 lg:gap-4
        bg-gradient-to-br from-sky-50 via-rose-50 to-emerald-50
        rounded-2xl
        p-4 lg:p-6
        shadow-lg
      "
    >
      <TotalCard title="Total a pagar" amount={total} />
      <TotalCard title="Paga con" amount={pagaCon} />

      <div className="bg-white/80 backdrop-blur shadow rounded-xl p-3 lg:p-4 text-center">
        <p className="text-base lg:text-lg text-gray-700">
          Vuelto entregado
        </p>
        <p className="text-2xl lg:text-3xl font-bold text-gray-900">
          $ {vueltoEntregado}
        </p>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="
          bg-gradient-to-r from-blue-400 to-sky-500
          hover:from-blue-500 hover:to-sky-600
          text-white font-bold
          py-2 lg:py-3
          rounded-xl
          transition
        "
      >
        Calcular
      </button>

      <button
        onClick={entregar}
        className="
          bg-gradient-to-r from-emerald-400 to-green-500
          hover:from-emerald-500 hover:to-green-600
          text-white font-bold
          py-2 lg:py-3
          rounded-xl
          transition
        "
      >
        Entregar
      </button>

      {showModal && (
        <CalculatorModal
          total={total}
          pagaCon={pagaCon}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

