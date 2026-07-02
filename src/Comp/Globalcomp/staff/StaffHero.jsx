import { motion } from "framer-motion";

const StaffHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        src="/staff1.png"
        alt="Staff Banner"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-white text-5xl md:text-7xl font-bold tracking-wide drop-shadow-2xl"
        >
          Staff
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "90px" }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="h-1 bg-white rounded-full mt-3"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="text-white/90 mt-4 text-sm md:text-base tracking-wider uppercase"
        >
          Meet Our Dedicated Faculty & Staff
        </motion.p>
      </div>

      {/* Floating Decorative Element */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-10 w-24 h-24 border border-white/20 rounded-full hidden lg:block"
      />
    </section>
  );
};

export default StaffHero;