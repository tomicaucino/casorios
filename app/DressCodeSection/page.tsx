import { motion } from "framer-motion"


export const DressCodeSection = () => {

    return (
        <section className="mx-auto bg-gray-300 p-12 w-full flex justify-center">

        <motion.div 
          className="grid text-center w-full md:max-w-[500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
            <img 
                    src="/icono-dresscode.svg" 
                    width="180" 
                    className="mx-auto -mt-12"
            />
            <h2 className="text-2xl mb-8 text-center">DRESS CODE</h2>
            <p>Formal elegante.</p>
        </motion.div>

      </section>
        
    )
}