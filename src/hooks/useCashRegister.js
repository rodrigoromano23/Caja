/*import { useState } from "react"
import Swal from "sweetalert2"

export function useCashRegister() {
  const [total, setTotal] = useState(4750)
  const [pagaCon, setPagaCon] = useState(10000)

  const vueltoCorrecto = pagaCon - total

  const [vueltoEntregado, setVueltoEntregado] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const agregarBillete = (valor) => {
    setVueltoEntregado(prev => prev + valor)
  }

  const entregar = () => {
    if (vueltoEntregado < vueltoCorrecto) {
      Swal.fire("❌ Poco dinero!", "", "error")
      return
    }

    if (vueltoEntregado > vueltoCorrecto) {
      Swal.fire("❌ Demasiado dinero!", "", "error")
      return
    }

    Swal.fire("🎉 ¡Felicidades!", "Vuelto correcto", "success")
    siguienteJuego()
  }

  const siguienteJuego = () => {
    setVueltoEntregado(0)

    // Ejemplo simple (luego lo hacemos dinámico)
    setTotal(Math.floor(Math.random() * 9000) + 1000)
    setPagaCon([5000, 10000, 20000][Math.floor(Math.random() * 3)])
  }

  return {
    total,
    pagaCon,
    vueltoCorrecto,
    vueltoEntregado,
    agregarBillete,
    entregar,
    showModal,
    setShowModal
  }
}*/

import { useState } from "react"
import Swal from "sweetalert2"

// 🔴 Redondeo realista de caja
function redondearCajaReal(monto) {
  const unidad = monto % 10

  if (unidad >= 1) {
    return monto + (10 - unidad)
  }

  return monto
}

// 🔹 Genera una cola de clientes
function generarClientes(cantidad = 100) {
  const pagosPosibles = [2000, 5000, 10000, 20000]

  return Array.from({ length: cantidad }, () => {
    // Nada cuesta menos de $200
    let total = Math.floor(Math.random() * 18000) + 200

    // 🔴 Aplicar redondeo de supermercado
    total = redondearCajaReal(total)

    const pagaCon = pagosPosibles.find(p => p > total) || 20000

    return { total, pagaCon }
  })
}

export function useCashRegister() {
  // 🧾 Cola de clientes
  const [clientes] = useState(generarClientes(100))
  const [indice, setIndice] = useState(0)

  // 🧍 Cliente actual
  const clienteActual = clientes[indice]

  const total = clienteActual.total
  const pagaCon = clienteActual.pagaCon
  const vueltoCorrecto = pagaCon - total

  const [vueltoEntregado, setVueltoEntregado] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const agregarBillete = (valor) => {
    setVueltoEntregado(prev => prev + valor)
  }

  const entregar = () => {
    if (vueltoEntregado < vueltoCorrecto) {
      Swal.fire("❌ Poco dinero!", "", "error")
      return
    }

    if (vueltoEntregado > vueltoCorrecto) {
      Swal.fire("❌ Demasiado dinero!", "", "error")
      return
    }

    Swal.fire("🎉 ¡Felicidades!", "Cliente atendido", "success")
    siguienteCliente()
  }

  const siguienteCliente = () => {
    setVueltoEntregado(0)

    // Si se terminan los clientes
    if (indice + 1 >= clientes.length) {
      Swal.fire(
        "🏁 Jornada terminada",
        "Atendiste a todos los clientes",
        "success"
      )
      return
    }

    setIndice(prev => prev + 1)
  }

  return {
    total,
    pagaCon,
    vueltoCorrecto,
    vueltoEntregado,
    agregarBillete,
    entregar,
    showModal,
    setShowModal
  }
}
