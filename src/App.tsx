import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import RewardHistory from "@/pages/RewardHistory";
import About from "@/pages/About";
import { createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
      willChange: 'transform, opacity'
    }
  },
  out: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.6, 1],
      willChange: 'transform, opacity'
    }
  }
};

export default function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/reward-history" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
            >
              <RewardHistory />
            </motion.div>
          } />
          <Route path="/other" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
            >
              <div className="text-center text-xl">Other Page - Coming Soon</div>
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
            >
              <About />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </AuthContext.Provider>
  );
}
