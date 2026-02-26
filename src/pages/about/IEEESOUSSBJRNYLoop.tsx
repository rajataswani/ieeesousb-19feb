import React, { useRef, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { journeyItems, type JourneyItem } from "@/data/journeyData";

function JourneySectionBackground({ targetIndex }: { targetIndex: number }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
        <img src="/images/logo.png" alt="bg-logo" className="w-[60%] max-w-[500px] min-w-[200px] scale-[2]" />
      </div>
    </div>
  );
}

export default function IEEESOUSSBJRNYLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const [fadePhase, setFadePhase] = useState<"idle" | "out" | "reset">("idle");
  const navigateRouter = useNavigate();
  const lastScrollTime = useRef(0);
  const scrollCooldown = 800;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollCooldown) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastScrollTime.current = now;
      }
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollCooldown) return;

      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;

      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastScrollTime.current = now;
        startY = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex, fadePhase]);

  const loopItems = journeyItems;

  const navigate = (getNext: (prev: number) => number) => {
    if (fadePhase !== "idle") return;
    const nextIdx = getNext(currentIndex);
    setFadePhase("out");
    setTargetIndex(nextIdx);
    setTimeout(() => {
      setFadePhase("reset");
      setCurrentIndex(nextIdx);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFadePhase("idle");
        });
      });
    }, 700);
  };

  const handleNext = () => {
    // if we're on the last slide, go back to home instead of wrapping
    if (currentIndex === loopItems.length - 1) {
      navigateRouter("/");
      return;
    }
    navigate((prev) => (prev + 1) % loopItems.length);
  };
  const handlePrev = () =>
    navigate((prev) => (prev - 1 + loopItems.length) % loopItems.length);

  const isCurrentEven = currentIndex % 2 === 0;
  const leftItem = isCurrentEven
    ? loopItems[currentIndex]
    : loopItems[(currentIndex + 1) % loopItems.length];
  const rightItem = isCurrentEven
    ? loopItems[(currentIndex + 1) % loopItems.length]
    : loopItems[currentIndex];

  type Role = "active" | "out" | "next" | "in";
  const getRole = (isLeft: boolean): Role => {
    if (isCurrentEven) {
      if (isLeft) return fadePhase === "out" ? "out" : "active";
      else return fadePhase === "out" ? "in" : "next";
    } else {
      if (isLeft) return fadePhase === "out" ? "in" : "next";
      else return fadePhase === "out" ? "out" : "active";
    }
  };

  const leftRole = getRole(true);
  const rightRole = getRole(false);

  const renderCard = (
    item: JourneyItem,
    role: Role,
    side: "left" | "right",
  ) => {
    const isReset = fadePhase === "reset";
    const durationObj = isReset
      ? "duration-0"
      : "duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]";
    let wrapperTransform = "scale-100 translate-x-0";
    let wrapperOpacity = "opacity-100";
    let wrapperZ = "z-10";

    if (role === "next") {
      wrapperTransform = "scale-75 translate-x-0";
      wrapperZ = "z-0";
    } else if (role === "out") {
      wrapperTransform =
        side === "left"
          ? "scale-[1.4] -translate-x-[60%]"
          : "scale-[1.4] translate-x-[60%]";
      wrapperOpacity = "opacity-0";
      wrapperZ = "z-30";
    } else if (role === "active") {
      wrapperTransform = "scale-110 md:scale-125 translate-x-0";
      wrapperZ = "z-20";
    } else if (role === "in") {
      wrapperTransform = "scale-100 translate-x-0";
      wrapperZ = "z-20";
    }

    const imgBlur =
      role === "next" ? "blur-md scale-110" : "blur-none scale-100";
    const imgOverlay =
      role === "next"
        ? "bg-background/60 backdrop-blur-[2px] opacity-100"
        : "bg-black/0 opacity-0";
    let contentOpacity = "opacity-100";
    let contentTransform = "translate-y-0";
    let contentDelay = "";

    if (role === "next") {
      contentOpacity = "opacity-0";
      contentTransform = "translate-y-4";
    } else if (role === "out") {
      contentOpacity = "opacity-0";
      contentTransform = "-translate-y-4";
    } else if (role === "in") {
      contentOpacity = "opacity-100";
      contentTransform = "translate-y-0";
      contentDelay = isReset ? "" : "delay-100";
    }

    return (
      <div
        className={`w-full md:w-11/12 max-w-xl transform origin-center transition-all ${durationObj} ${wrapperTransform} ${wrapperOpacity} ${wrapperZ}`}
      >
        <div className="relative group overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg h-[45vh] md:h-[60vh] min-h-[400px] max-h-[700px] p-2 md:p-3">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className={`w-full h-full object-cover absolute inset-0 transition-all ${durationObj} ${imgBlur}`}
            />
            <div
              className={`absolute inset-0 z-10 transition-all ${durationObj} ${imgOverlay}`}
            ></div>

            {item.year && (
              <div
                className={`absolute top-4 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full text-sm font-bold tracking-widest bg-primary text-primary-foreground shadow-md transition-all ${durationObj} ${contentOpacity} ${contentTransform}`}
              >
                {item.year}
              </div>
            )}

            <div
              className={`absolute bottom-0 left-0 right-0 z-20 px-6 py-6 bg-card/90 backdrop-blur-md border-t shadow-[0_-4px_24px_rgba(0,0,0,0.05)] flex flex-col items-center pointer-events-none transition-all ${durationObj} ${contentDelay} ${contentOpacity} ${contentTransform}`}
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center line-clamp-3">
                {item.details}
              </p>
            </div>
          </div>
        </div>
        <div
          className={`mt-8 md:mt-10 text-center transition-all ${durationObj} ${contentDelay} ${contentOpacity} ${contentTransform}`}
        >
          <Link
            to={`/about/ieee-sou-sb-journey-loop/${item.id}`}
            className={`inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95 ${role === "next" || role === "out" ? "pointer-events-none" : ""}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background flex items-center justify-center font-sans text-foreground">
      <JourneySectionBackground targetIndex={targetIndex} />
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 flex flex-col justify-between py-6 md:py-10">
        <div className="flex-grow flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center w-full">
            {/* On mobile, we only show the card that is active or incoming. On desktop, we show both for the dive effect. */}
            <div
              className={`flex items-center justify-center ${leftRole === "active" || leftRole === "in" || leftRole === "out" ? "flex" : "hidden md:flex"}`}
            >
              {renderCard(leftItem, leftRole, "left")}
            </div>
            <div
              className={`flex items-center justify-center ${rightRole === "active" || rightRole === "in" || rightRole === "out" ? "flex" : "hidden md:flex"}`}
            >
              {renderCard(rightItem, rightRole, "right")}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-auto">
          <div className="flex gap-2">
            {journeyItems.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-muted"}`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground animate-pulse tracking-widest uppercase font-semibold">
            Scroll Down • Scroll Up
          </p>
          <p className="text-xs text-muted-foreground font-medium">
            {currentIndex + 1} / {journeyItems.length}
          </p>
        </div>
      </div>
    </div>
  );
}
