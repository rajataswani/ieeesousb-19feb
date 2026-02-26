import { useState, useEffect } from "react";
<<<<<<< HEAD
import { Search, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
=======
import { Search, Linkedin } from "lucide-react";
>>>>>>> upstream/master
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

<<<<<<< HEAD
const YEARS = Array.from({ length: 10 }, (_, i) => 2017 + i); // [2017 … 2026]

const SOCIETY_TITLES: Record<string, string> = {
=======
const SOCIETY_TITLES = {
>>>>>>> upstream/master
  SB: "Student Branch",
  WIE: "Women in Engineering",
  SPS: "Signal Processing Society",
  CS: "Computer Society",
  SIGHT: "Special Interest Group on Humanitarian Technology",
};

<<<<<<< HEAD
const POSITION_ORDER: Record<string, number> = {
  Chairperson: 1,
  "Vice-Chairperson": 2,
  Secretary: 3,
  Treasurer: 4,
  Webmaster: 5,
};

export default function TeamExecutive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [executiveMembers, setExecutiveMembers] = useState<Record<string, any[]>>({});

  // ── fetch members whenever selectedYear changes ──────────────────────────
  useEffect(() => {
    async function fetchExecutiveMembers() {
      const membersRef = collection(db, "members");
      const q = query(
        membersRef,
        where("type", "==", "executive"),
        where("year", "==", String(selectedYear))
      );
      const snapshot = await getDocs(q);
=======
const POSITION_HIERARCHY = [
  "Chairperson",
  "Vice-Chairperson",
  "Secretary",
  "Treasurer",
  "Webmaster",
];

// Using a consistent hover effect for all members instead of different colors
const HOVER_EFFECT = "hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-[1.02] transition-transform";

export default function TeamExecutive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [executiveMembers, setExecutiveMembers] = useState<Record<string, any[]>>({});

  useEffect(() => {
    async function fetchExecutiveMembers() {
      const membersRef = collection(db, "members");
      const q = query(membersRef, where("type", "==", "executive"));
      const querySnapshot = await getDocs(q);
>>>>>>> upstream/master

      const grouped: Record<string, any[]> = {
        SB: [],
        WIE: [],
        SPS: [],
        CS: [],
        SIGHT: [],
      };

<<<<<<< HEAD
      snapshot.forEach((doc) => {
        const data = doc.data();
        let pos = data.position;
        if (pos?.toLowerCase() === "vice chairperson") pos = "Vice-Chairperson";
        if (grouped[data.society]) {
          grouped[data.society].push({ ...data, position: pos, id: doc.id });
=======
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const societyType = data.society;

        let standardizedPosition = data.position;
        if (standardizedPosition.toLowerCase() === "vice chairperson") {
          standardizedPosition = "Vice-Chairperson";
        }

        if (grouped[societyType]) {
          grouped[societyType].push({ ...data, position: standardizedPosition, id: doc.id });
>>>>>>> upstream/master
        }
      });

      setExecutiveMembers(grouped);
    }

    fetchExecutiveMembers();
<<<<<<< HEAD
  }, [selectedYear]);

  // ── helpers ──────────────────────────────────────────────────────────────
  const filterMembers = (members: any[]) =>
    members.filter(
      (m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortMembers = (members: any[]) =>
    [...members].sort(
      (a, b) => (POSITION_ORDER[a.position] ?? 999) - (POSITION_ORDER[b.position] ?? 999)
    );

  // ── carousel helpers ─────────────────────────────────────────────────────
  const currentIdx = YEARS.indexOf(selectedYear);
  const canPrev = currentIdx > 0;
  const canNext = currentIdx < YEARS.length - 1;

  const prev = () => canPrev && setSelectedYear(YEARS[currentIdx - 1]);
  const next = () => canNext && setSelectedYear(YEARS[currentIdx + 1]);

  // Show 3 years: prev · selected · next  (edge-safe)
  const visibleYears = [
    YEARS[currentIdx - 1] ?? null,
    YEARS[currentIdx],
    YEARS[currentIdx + 1] ?? null,
  ];

  // ── render ───────────────────────────────────────────────────────────────
=======
  }, []);

  const filterMembers = (members: any[]) =>
    members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortMembersByPosition = (members: any[]) => {
    return members.sort((a, b) => {
      const positionOrder: Record<string, number> = {
        Chairperson: 1,
        "Vice-Chairperson": 2,
        Secretary: 3,
        Treasurer: 4,
        Webmaster: 5,
      };

      const aPosIndex = positionOrder[a.position] ?? 999;
      const bPosIndex = positionOrder[b.position] ?? 999;

      return aPosIndex - bPosIndex;
    });
  };

>>>>>>> upstream/master
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0F172A]">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 animate-fade-in bg-white dark:bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD

          {/* Page heading */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Executive Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
=======
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Executive Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-muted-foreground-dark">
>>>>>>> upstream/master
              Meet the executive members of each IEEE society.
            </p>
          </div>

<<<<<<< HEAD
          {/* ── Year Carousel ── */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {/* Left arrow */}
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous year"
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200
                ${canPrev
                  ? "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                  : "border-border text-muted-foreground opacity-40 cursor-not-allowed"
                }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* 3-year strip */}
            <div className="flex items-center gap-2">
              {visibleYears.map((yr, i) => {
                if (yr === null) {
                  // placeholder to keep layout stable
                  return <div key={`ph-${i}`} className="w-20 h-10" />;
                }
                const isCenter = yr === selectedYear;
                return (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                      ${isCenter
                        ? "bg-primary text-primary-foreground border-primary shadow-md scale-110"
                        : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary scale-95 opacity-70"
                      }`}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next year"
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200
                ${canNext
                  ? "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer"
                  : "border-border text-muted-foreground opacity-40 cursor-not-allowed"
                }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Year label */}
          <div className="flex justify-center mb-10">
            <span className="text-xl font-bold text-primary tracking-wide">
              {selectedYear} Executive Members
            </span>
          </div>

          {/* Search */}
=======
>>>>>>> upstream/master
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search executive..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

<<<<<<< HEAD
          {/* Member grids */}
          {Object.entries(SOCIETY_TITLES).map(([societyKey, title]) => {
            const members = filterMembers(executiveMembers[societyKey] || []);
            if (members.length === 0) return null;
            const sorted = sortMembers(members);
=======
          {Object.entries(SOCIETY_TITLES).map(([societyKey, title]) => {
            const members = filterMembers(executiveMembers[societyKey] || []);
            if (members.length === 0) return null;

            const sortedMembers = sortMembersByPosition(members);
>>>>>>> upstream/master

            return (
              <div key={societyKey} className="mb-16">
                <div className="text-2xl font-semibold mb-6 text-primary dark:text-primary-dark">
                  {title}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<<<<<<< HEAD
                  {sorted.map((member) => (
                    <div
                      key={member.id}
                      className="rounded-lg overflow-hidden shadow-sm transition-all duration-300
                        bg-white dark:bg-gray-900
                        hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-[1.02] hover:shadow-md dark:hover:shadow-lg cursor-pointer"
=======
                  {sortedMembers.map((member) => (
                    <div
                      key={member.id}
                      className={`rounded-lg overflow-hidden shadow-sm transition-all duration-300
                        bg-white dark:bg-gray-900
                        ${HOVER_EFFECT}
                        hover:shadow-md dark:hover:shadow-lg cursor-pointer`}
>>>>>>> upstream/master
                    >
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="w-16 h-16 min-w-16 rounded-full overflow-hidden mr-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-bold text-lg text-black dark:text-white">
                                {member.name}
                              </h3>
                              {member.linkedin && (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
<<<<<<< HEAD
                                  className="ml-2 text-primary hover:text-primary/80"
=======
                                  className="ml-2 text-primary hover:text-primary/80 dark:text-primary-dark dark:hover:text-primary-dark/80"
>>>>>>> upstream/master
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              )}
                            </div>
<<<<<<< HEAD
                            <p className="text-sm text-muted-foreground">{member.position}</p>
                            <p className="text-sm text-muted-foreground">{member.education}</p>
=======
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                              {member.position}
                            </p>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                              {member.education}
                            </p>
>>>>>>> upstream/master
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
<<<<<<< HEAD

          {/* Empty state */}
          {Object.values(executiveMembers).every((arr) => arr.length === 0) && (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">No executive members found for {selectedYear}.</p>
            </div>
          )}
=======
>>>>>>> upstream/master
        </div>
      </main>
    </div>
  );
}
