import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"
import { useCashRegister } from "../hooks/useCashRegister"

export default function Game() {
  const cash = useCashRegister()

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-sky-100 to-emerald-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Caja Registradora
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <LeftPanel {...cash} />
        <RightPanel onAddBill={cash.agregarBillete} />
      </div>
    </div>
  )
}
