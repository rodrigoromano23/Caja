import { BILLS } from "../data/bills"
import BillButton from "./BillButton"

export default function RightPanel({ onAddBill }) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-2

        sm:grid-cols-4
        sm:gap-2

        lg:grid-cols-5
        lg:gap-2
      "
    >
      {BILLS.map(bill => (
        <BillButton
          key={bill}
          value={bill}
          onClick={onAddBill}
        />
      ))}
    </div>
  )
}

