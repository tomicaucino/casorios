"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownProps {
  targetDate: Date
  onCountdownEnd: () => void
}

export function CountdownSection({ onCountdownEnd }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  

  function calculateTimeLeft() {
    const targetDate = new Date("2025-09-28T15:50:59")
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      if (Object.keys(newTimeLeft).length === 0) {
        onCountdownEnd()
      }
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
        
            <motion.div
                key={interval}
                className="flex flex-col items-center mx-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-4xl font-light tracking-widest">{timeLeft[interval]}</span>
                <span className="text-sm uppercase tracking-wide">{interval}</span>
            </motion.div>
      
    )
  })

  return (
    <section className="mx-auto px-4 py-12 bg-white flex justify-center">
    <motion.div
      className="text-center py-8 bg-gray-100 rounded-lg shadow-md w-full md:max-w-[500]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid justify-center">
        {timerComponents.length ? (
        <motion.div
            className="text-3xl font-light text-center tracking-wider grid justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
          <h2 className="font-bold">28 de Septiembre de 2025</h2>

            <div className="flex mt-6"> {timerComponents}</div>
        </motion.div>
        ) : (
          <span className="text-3xl font-light tracking-wider">Listo... Hoy es el gran día!</span>
        )}
      </div>
    </motion.div>
    </section>
  )
}

