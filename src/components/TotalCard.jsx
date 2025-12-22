export default function TotalCard({ title, amount }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">$ {amount}</p>
    </div>
  )
}
