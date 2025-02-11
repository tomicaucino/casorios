import Image from "next/image"
import { motion } from "framer-motion"
import { Meteors } from "@/components/magicui/meteors"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

export const Portada = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])

    return (
        <div className="relative h-[400] w-full overflow-hidden">
        <Image
          src="/Gonza1.jpg"
          alt="Banner Image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          priority
        />
        <motion.div className="absolute inset-0 flex justify-center">
          <div className="relative flex w-full flex-col items-center justify-center">
            <Meteors number={30} />
            <motion.h1 className="text-7xl sm:text-8xl font-bold text-white text-center drop-shadow-lg font-cursive" 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 20, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  Agus
                </motion.span> 
               &nbsp; &amp; &nbsp; 
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 20, opacity: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                >
                  Gonza
                </motion.span>
            </motion.h1>
          </div>
          
        </motion.div>
      </div>
    )
}