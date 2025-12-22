/*export default function BillButton({ value, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow"
    >
      $ {value}
    </button>
  )
}*/

import bill50 from "../assets/bills/50.jpg"
import bill100 from "../assets/bills/100.jpg"
import bill200 from "../assets/bills/200.jpg"
import bill500 from "../assets/bills/500.jpg"
import bill1000 from "../assets/bills/1000.jpg"
import bill2000 from "../assets/bills/2000.jpg"
import bill10000 from "../assets/bills/10000.jpg"
import bill20000 from "../assets/bills/20000.webp"

const billImages = {
  50: bill50,
  100: bill100,
  200: bill200,
  500: bill500,
  1000: bill1000,
  2000: bill2000,
  10000: bill10000,
  20000: bill20000
}

export default function BillButton({ value, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className="
        relative group w-full
        rounded-xl
        shadow-lg
        overflow-hidden
        transition-transform hover:scale-105
      "
    >
      <img
        src={billImages[value]}
        alt={`Billete ${value}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay hover */}
      <div
        className="
          absolute inset-0
          bg-black/60
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <span className="text-white text-xl sm:text-2xl font-bold">
          $ {value}
        </span>
      </div>
    </button>
  )
}
