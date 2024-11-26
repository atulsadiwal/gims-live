import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingAvatar({ imageSrc, title, delay }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to generate a random position (percentage values for responsiveness)
  const getRandomPosition = () => ({
    x: `${Math.random() * 80 + 10}%`, // Random percentage between 10% and 90%
    y: `${Math.random() * 80 + 10}%`, // Random percentage between 10% and 90%
  });

  useEffect(() => {
    // Set initial visibility and position after the delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      setPosition(getRandomPosition());
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    // Update position every 4 seconds
    const positionInterval = setInterval(() => {
      setPosition(getRandomPosition());
    }, 4000);

    return () => clearInterval(positionInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1, left: position.x, top: position.y } : {}}
      className="absolute"
      style={{ left: position.x, top: position.y }}
      transition={{ duration: 1.5 }} // Smooth transition for position
    >
      <div className="relative group">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative"
        >
          <img
            src={imageSrc}
            alt="User avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap text-sm"
          >
            {title}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
