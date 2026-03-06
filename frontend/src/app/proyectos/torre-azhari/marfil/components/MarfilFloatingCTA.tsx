"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function MarfilFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 500);
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 lg:hidden"
    >
      <a
        href="#contacto"
        className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1e1e1e] shadow-2xl shadow-black/40 transition-transform active:scale-95"
      >
        <MessageCircle size={16} />
        Solicitar información
      </a>
    </motion.div>
  );
}
