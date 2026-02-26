import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
=======
function GradientBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    const bg = bgRef.current;
    let t = 0;
    function animate() {
      t += 0.01;
      const color1 = `rgb(${Math.round(58 + 40 * Math.sin(t))}, ${Math.round(110 + 60 * Math.cos(t))}, ${Math.round(95 + 30 * Math.sin(t / 2))})`;
      const color2 = `rgb(${Math.round(30 + 20 * Math.cos(t / 2))}, ${Math.round(45 + 40 * Math.sin(t / 3))}, ${Math.round(59 + 60 * Math.cos(t / 4))})`;
      const color3 = `rgb(${Math.round(26 + 20 * Math.sin(t / 1.5))}, ${Math.round(35 + 20 * Math.cos(t / 2.5))}, ${Math.round(48 + 40 * Math.sin(t / 2.2))})`;
      if (bg) {
        bg.style.background = `radial-gradient(circle at 60% 40%, ${color1} 0%, ${color2} 60%, ${color3} 100%)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 w-full h-full z-0 transition-all duration-500"
      style={{ opacity: 1 }}
    >
      <img
        src="/images/logo.png"
        alt="bg-logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(2)",
          opacity: 0.08,
          zIndex: 2,
          pointerEvents: "none",
          width: "60%",
          maxWidth: "500px",
          minWidth: "200px",
        }}
      />
    </div>
  );
}

>>>>>>> upstream/master
export default function IEEESOUSSBJRNY() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <main className="flex-grow p-0 m-0">
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center min-h-screen bg-background relative overflow-hidden w-full m-0 p-0">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
            <img src="/images/logo.png" alt="bg-logo" className="w-[60%] max-w-[500px] min-w-[200px] scale-[2]" />
          </div>
          
          <div className="relative z-10 w-full max-w-2xl bg-card border text-card-foreground rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-10 animate-fade-in-up animation-delay-300 text-center">
=======
        <div
          className="text-center relative overflow-hidden w-full min-h-screen m-0 p-0"
          style={{ height: "100vh" }}
        >
          <GradientBackground />
          <div
            className="innerheader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mx-auto max-w-2xl bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center min-h-[400px]"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Journey</h2>
            <p className="text-lg text-white/90 mb-10 animate-fade-in-up animation-delay-300">
>>>>>>> upstream/master
              A look back at our remarkable growth, achievements, and the
              community we've built
            </p>
            <button 
              onClick={() => navigate("/about/ieee-sou-sb-journey-loop")}
<<<<<<< HEAD
              className="mt-2 px-10 py-4 rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-md hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
=======
              className="mt-2 px-10 py-4 rounded-full bg-blue-600 text-white text-xl font-bold shadow-2xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
>>>>>>> upstream/master
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
