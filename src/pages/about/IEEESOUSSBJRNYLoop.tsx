import React, { useRef, useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate, Link } from "react-router-dom";
import { journeyItems, type JourneyItem } from "@/data/journeyData";

function JourneySectionBackground({ targetIndex }: { targetIndex: number }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
        <img src="/images/logo.png" alt="bg-logo" className="w-[60%] max-w-[500px] min-w-[200px] scale-[2]" />
      </div>
=======
import { useNavigate } from "react-router-dom";

interface JourneyItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  details: string;
}

const journeyItems: JourneyItem[] = [
  {
    id: "journey-001",
    title: "Foundation & Formation",
    description: "The Birth of IEEE SOU SB",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2017",
    details:
      "IEEE SOU Student Branch was founded in 2017 with 17 passionate members, establishing the foundation for a thriving community dedicated to technical excellence and professional development.",
  },
  {
    id: "journey-002",
    title: "Community Growth",
    description: "Expanding Our Family",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2018",
    details:
      "The community grew rapidly as we organized our first technical workshops, connecting students with industry professionals and fostering a culture of learning and innovation.",
  },
  {
    id: "journey-003",
    title: "Technical Excellence",
    description: "Innovation & Skills",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2019",
    details:
      "Despite the pandemic, we launched virtual workshops covering cutting-edge technologies including AI, Machine Learning, IoT, and Web Development, reaching hundreds of participants.",
  },
  {
    id: "journey-004",
    title: "Industry Partnerships",
    description: "Collaborations & Networks",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2020",
    details:
      "Established strategic partnerships with leading tech companies, creating internship opportunities and mentorship programs that bridged the gap between academia and industry.",
  },
  {
    id: "journey-005",
    title: "Global Recognition",
    description: "Awards & Achievements",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2021",
    details:
      "Received multiple accolades for our outstanding contributions to student development and technical innovation, gaining recognition at regional and national levels.",
  },
  {
    id: "journey-006",
    title: "Milestone: 200+ Members",
    description: "Reaching New Heights",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2022",
    details:
      "Celebrated crossing the 200-member milestone with expanded offerings including leadership development programs, hackathons, and career guidance sessions.",
  },
  {
    id: "journey-007",
    title: "Research & Innovation",
    description: "Driving Real-world Solutions",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2023",
    details:
      "Launched research initiatives encouraging members to work on projects addressing real-world challenges, fostering innovation and problem-solving skills.",
  },
  {
    id: "journey-008",
    title: "360° Development Motto",
    description: "Inner & Outer Growth",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2024",
    details:
      "Introduced our signature motto '360° Development: 180° Inner, 180° Outer' emphasizing technical expertise alongside personal growth, leadership, and ethical values.",
  },
  {
    id: "journey-009",
    title: "Community Impact",
    description: "Beyond SOU Campus",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    year: "2025",
    details:
      "Extended our reach beyond campus through outreach programs, mentoring younger students, and contributing to the tech community through open-source initiatives.",
  },
];

const PRO_GRADIENTS = [
  "linear-gradient(145deg, #0B192C 0%, #1A365D 50%, #0f2027 100%)",
  "linear-gradient(145deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
  "linear-gradient(145deg, #111827 0%, #1F2937 50%, #134E5E 100%)",
  "linear-gradient(145deg, #2D1A29 0%, #1A1A24 50%, #1E1B4B 100%)",
  "linear-gradient(145deg, #0F0C29 0%, #302B63 50%, #121020 100%)",
  "linear-gradient(145deg, #06170E 0%, #1A2F23 50%, #091712 100%)",
  "linear-gradient(145deg, #091a2f 0%, #05263d 50%, #033c47 100%)",
  "linear-gradient(145deg, #2c1e16 0%, #1a1514 50%, #12100f 100%)",
  "linear-gradient(145deg, #0B1D3A 0%, #08304B 50%, #041B2E 100%)",
];

function JourneySectionBackground({ targetIndex }: { targetIndex: number }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0f2027]">
      {PRO_GRADIENTS.map((bg, idx) => (
        <div
          key={idx}
          className="absolute inset-0 w-full h-full transition-opacity duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            background: bg,
            opacity: targetIndex % PRO_GRADIENTS.length === idx ? 1 : 0,
          }}
        />
      ))}
>>>>>>> upstream/master
    </div>
  );
}

export default function IEEESOUSSBJRNYLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
<<<<<<< HEAD
  const [fadePhase, setFadePhase] = useState<"idle" | "out" | "reset">("idle");
=======
  const [fadePhase, setFadePhase] = useState<'idle' | 'out' | 'reset'>('idle');
>>>>>>> upstream/master
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
<<<<<<< HEAD
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
=======
    if (fadePhase !== 'idle') return;
    const nextIdx = getNext(currentIndex);
    setFadePhase('out');
    setTargetIndex(nextIdx);
    setTimeout(() => {
      setFadePhase('reset');
      setCurrentIndex(nextIdx);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFadePhase('idle');
>>>>>>> upstream/master
        });
      });
    }, 700);
  };

  const handleNext = () => {
<<<<<<< HEAD
    // if we're on the last slide, go back to home instead of wrapping
    if (currentIndex === loopItems.length - 1) {
=======
    if (currentIndex === 8) {
>>>>>>> upstream/master
      navigateRouter("/");
      return;
    }
    navigate((prev) => (prev + 1) % loopItems.length);
  };
<<<<<<< HEAD
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
=======
  const handlePrev = () => navigate((prev) => (prev - 1 + loopItems.length) % loopItems.length);

  const isCurrentEven = currentIndex % 2 === 0;
  const leftItem = isCurrentEven ? loopItems[currentIndex] : loopItems[(currentIndex + 1) % loopItems.length];
  const rightItem = isCurrentEven ? loopItems[(currentIndex + 1) % loopItems.length] : loopItems[currentIndex];

  type Role = 'active' | 'out' | 'next' | 'in';
  const getRole = (isLeft: boolean): Role => {
    if (isCurrentEven) {
       if (isLeft) return fadePhase === 'out' ? 'out' : 'active';
       else return fadePhase === 'out' ? 'in' : 'next';
    } else {
       if (isLeft) return fadePhase === 'out' ? 'in' : 'next';
       else return fadePhase === 'out' ? 'out' : 'active';
>>>>>>> upstream/master
    }
  };

  const leftRole = getRole(true);
  const rightRole = getRole(false);

<<<<<<< HEAD
  const renderCard = (
    item: JourneyItem,
    role: Role,
    side: "left" | "right",
  ) => {
    const isReset = fadePhase === "reset";
    const durationObj = isReset
      ? "duration-0"
      : "duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]";
=======
  const renderCard = (item: JourneyItem, role: Role, side: 'left' | 'right') => {
    const isReset = fadePhase === 'reset';
    const durationObj = isReset ? 'duration-0' : 'duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]';
>>>>>>> upstream/master
    let wrapperTransform = "scale-100 translate-x-0";
    let wrapperOpacity = "opacity-100";
    let wrapperZ = "z-10";

<<<<<<< HEAD
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
=======
    if (role === 'next') {
      wrapperTransform = "scale-75 translate-x-0";
      wrapperZ = "z-0";
    } else if (role === 'out') {
      wrapperTransform = side === 'left' ? "scale-[1.4] -translate-x-[60%]" : "scale-[1.4] translate-x-[60%]";
      wrapperOpacity = "opacity-0";
      wrapperZ = "z-30";
    } else if (role === 'active') {
      wrapperTransform = "scale-110 md:scale-125 translate-x-0";
      wrapperZ = "z-20";
    } else if (role === 'in') {
>>>>>>> upstream/master
      wrapperTransform = "scale-100 translate-x-0";
      wrapperZ = "z-20";
    }

<<<<<<< HEAD
    const imgBlur =
      role === "next" ? "blur-md scale-110" : "blur-none scale-100";
    const imgOverlay =
      role === "next"
        ? "bg-background/60 backdrop-blur-[2px] opacity-100"
        : "bg-black/0 opacity-0";
=======
    const imgBlur = (role === 'next') ? "blur-md scale-110" : "blur-none scale-100";
    const imgOverlay = (role === 'next') ? "bg-black/30 opacity-100" : "bg-black/0 opacity-0";
>>>>>>> upstream/master
    let contentOpacity = "opacity-100";
    let contentTransform = "translate-y-0";
    let contentDelay = "";

<<<<<<< HEAD
    if (role === "next") {
      contentOpacity = "opacity-0";
      contentTransform = "translate-y-4";
    } else if (role === "out") {
      contentOpacity = "opacity-0";
      contentTransform = "-translate-y-4";
    } else if (role === "in") {
=======
    if (role === 'next') {
      contentOpacity = "opacity-0";
      contentTransform = "translate-y-4";
    } else if (role === 'out') {
      contentOpacity = "opacity-0";
      contentTransform = "-translate-y-4";
    } else if (role === 'in') {
>>>>>>> upstream/master
      contentOpacity = "opacity-100";
      contentTransform = "translate-y-0";
      contentDelay = isReset ? "" : "delay-100";
    }

<<<<<<< HEAD
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
=======
    const badgeColor = side === 'left' ? 'bg-blue-600/90 border-blue-300/40' : 'bg-green-600/90 border-green-300/40';
    const buttonColor = side === 'left' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-green-600 hover:bg-green-500';
    const glowColor = side === 'left' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(34, 197, 94, 0.5)';

    return (
      <div className={`w-full md:w-11/12 max-w-sm transform origin-center transition-all ${durationObj} ${wrapperTransform} ${wrapperOpacity} ${wrapperZ}`}>
        <div className="relative group overflow-hidden rounded-xl shadow-2xl h-[35vh] md:h-[45vh] min-h-[300px] max-h-[500px]">
          <img src={item.imageUrl} alt={item.title} className={`w-full h-full object-cover absolute inset-0 transition-all ${durationObj} ${imgBlur}`} />
          <div className={`absolute inset-0 z-10 transition-all ${durationObj} ${imgOverlay}`}></div>
          {item.year && (
             <div className={`absolute top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full text-white text-xs font-bold tracking-widest shadow-lg border ${badgeColor} transition-all ${durationObj} ${contentOpacity} ${contentTransform}`}>
              {item.year}
            </div>
          )}
          <div className={`absolute bottom-0 left-0 right-0 z-20 px-5 py-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col items-center pointer-events-none transition-all ${durationObj} ${contentDelay} ${contentOpacity} ${contentTransform}`}>
            <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
            <p className="text-[10px] md:text-xs text-gray-200 leading-relaxed text-center line-clamp-3">{item.details}</p>
          </div>
          <div className={`absolute inset-0 rounded-xl opacity-0 ${role === 'active' ? 'group-hover:opacity-100' : ''} transition-opacity duration-300 pointer-events-none`} style={{ boxShadow: `inset 0 0 20px ${glowColor}` }}></div>
        </div>
        <div className={`mt-6 md:mt-8 text-center transition-all ${durationObj} ${contentDelay} ${contentOpacity} ${contentTransform}`}>
          <a href="#" className={`inline-block px-5 py-2 rounded-full text-white text-xs font-semibold shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 ${buttonColor} ${role === 'next' || role === 'out' ? 'pointer-events-none' : ''}`}>Learn More</a>
>>>>>>> upstream/master
        </div>
      </div>
    );
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <JourneySectionBackground targetIndex={targetIndex} />
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 flex flex-col justify-between py-6 md:py-10 text-white">
        <div className="flex-grow flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center w-full">
              {/* On mobile, we only show the card that is active or incoming. On desktop, we show both for the dive effect. */}
              <div className={`flex items-center justify-center ${(leftRole === 'active' || leftRole === 'in' || leftRole === 'out') ? 'flex' : 'hidden md:flex'}`}>
                {renderCard(leftItem, leftRole, 'left')}
              </div>
              <div className={`flex items-center justify-center ${(rightRole === 'active' || rightRole === 'in' || rightRole === 'out') ? 'flex' : 'hidden md:flex'}`}>
                {renderCard(rightItem, rightRole, 'right')}
              </div>
            </div>
>>>>>>> upstream/master
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-auto">
          <div className="flex gap-2">
            {journeyItems.map((_, idx) => (
<<<<<<< HEAD
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
=======
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"}`} />
            ))}
          </div>
          <p className="text-[10px] text-gray-400 animate-pulse tracking-widest uppercase">Scroll Down • Scroll Up</p>
          <p className="text-[10px] text-gray-500">{currentIndex + 1} / {journeyItems.length}</p>
>>>>>>> upstream/master
        </div>
      </div>
    </div>
  );
}
