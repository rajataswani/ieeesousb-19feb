import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/lib/theme-provider"; // Make sure this is a valid path
import { TooltipProvider } from "@/components/ui/tooltip"; // Ensure these components are available
import { Toaster } from "@/components/ui/toaster"; // Ensure these components are available
import { Toaster as Sonner } from "@/components/ui/sonner"; // Ensure these components are available
import InitialLoader from "@/components/InitialLoader";
// Main Pages
import Index from "./pages/Index";
import Events from "./pages/Events";
import Achievement from "./pages/Achievement";
<<<<<<< HEAD
import BranchAwards from "./pages/BranchAwards";
import Newsletter from "./pages/Newsletter";
import StudentAchievements from "./pages/StudentAchievements";
import UpcomingEvents from "./pages/UpcomingEvents";
=======
>>>>>>> upstream/master
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import Newsletter from "./pages/Newsletter"; 
import StudentAchievements from "./pages/StudentAchievements";
import BranchAwards from "./pages/BranchAwards";
import UpcomingEvents from "./pages/UpcomingEvents";
// About Pages
import IEEE from "./pages/about/IEEE";
import IEEESOUSSB from "./pages/about/IEEESOUSSB";
import IEEEOUSSBWIE from "./pages/about/IEEEOUSSBWIE";
import IEEESOUSPSSBC from "./pages/about/IEEESOUSPSSBC";
import IEEESOUSCSSBC from "./pages/about/IEEESOUSCSSBC";
import IEEESOUSSIGHTSBG from "./pages/about/IEEESOUSSIGHTSBG";
<<<<<<< HEAD
import IEEESOUSSBJRNY from "./pages/about/IEEESOUSSBJRNY";
import IEEESOUSSBJRNYLoop from "./pages/about/IEEESOUSSBJRNYLoop";
import JourneyDetails from "./pages/about/JourneyDetails";
=======
>>>>>>> upstream/master
// Team Pages
import TeamFaculty from "./pages/team/TeamFaculty";
import TeamAdvisory from "./pages/team/TeamAdvisory";
import TeamExecutive from "./pages/team/TeamExecutive";
import TeamCore from "./pages/team/TeamCore";
import TeamMembers from "./pages/team/TeamMembers";
// Admin + Auth
import Admin from "./pages/Admin"; // ✅ Single Admin page with all functionality
import Authentication from "./components/Authentication";
import ProtectedRoute from "./components/ProtectedRoute";
// Details Pages
import EventDetails from "./pages/EventDetails";
import AwardDetails from "./pages/AwardDetails";
import MemberDetails from "./pages/MemberDetails";
import Bylaws from "./pages/Bylaws";
import FAQ from "./pages/FAQ";
import AIAssistant from "./components/AIAssistant";
<<<<<<< HEAD
import ScrollProgressBar from "@/components/ScrollProgressBar";
=======
>>>>>>> upstream/master
// Ensure that the query client is correctly created
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <InitialLoader />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
<<<<<<< HEAD
            <ScrollProgressBar />
=======
>>>>>>> upstream/master
            <AIAssistant />
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/achievement" element={<Achievement />} />
<<<<<<< HEAD
              <Route path="/achievement/branch-awards" element={<BranchAwards />} />
              <Route path="/achievement/newsletter" element={<Newsletter />} />
              <Route path="/achievement/student" element={<StudentAchievements />} />
              <Route path="/achievement/upcoming-events" element={<UpcomingEvents />} />
=======
>>>>>>> upstream/master
              <Route path="/achievements" element={<Navigate to="/achievement" replace />} />
              <Route path="/awards" element={<Navigate to="/achievement" replace />} />
              <Route path="/bylaws" element={<Bylaws />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/awards/student" element={<StudentAchievements />} />
              <Route path="/awards/branch" element={<BranchAwards />} />
              <Route path="/upcoming-events" element={<UpcomingEvents />} />
              {/* About Pages */}
              <Route path="/about/ieee" element={<IEEE />} />
              <Route path="/about/ieee-sou-sb" element={<IEEESOUSSB />} />
              <Route path="/about/ieee-sou-wie-sb-ag" element={<IEEEOUSSBWIE />} />
<<<<<<< HEAD
              <Route path="/about/ieee-sou-sb-journey" element={<IEEESOUSSBJRNY />} />
              <Route path="/about/ieee-sou-sb-journey-loop" element={<IEEESOUSSBJRNYLoop />} />
              <Route path="/about/ieee-sou-sb-journey-loop/:id" element={<JourneyDetails />} />
=======
>>>>>>> upstream/master
              <Route path="/about/ieee-sou-sps-sbc" element={<IEEESOUSPSSBC />} />
              <Route path="/about/ieee-sou-cs-sbc" element={<IEEESOUSCSSBC />} />
              <Route path="/about/ieee-sou-sight-sbg" element={<IEEESOUSSIGHTSBG />} />
              {/* Team Pages */}
              <Route path="/team/faculty-advisor" element={<TeamFaculty />} />
              <Route path="/team/advisory-board" element={<TeamAdvisory />} />
              <Route path="/team/executive-members" element={<TeamExecutive />} />
              <Route path="/team/core-members" element={<TeamCore />} />
              <Route path="/team/members" element={<TeamMembers />} />
              {/* Auth & Admin Panel - Hidden Route (Only accessible via direct URL) */}
              <Route path="/authentication" element={<Authentication />} />
              <Route
                path="/ieee-admin-portal-sou-2025"
                element={
                  <ProtectedRoute>
                    <Admin /> {/* ✅ Includes Events, Awards, Members, Image URL */}
                  </ProtectedRoute>
                }
              />
              {/* Details Pages */}
              <Route path="/eventdetails/:id" element={<EventDetails />} />
              <Route path="/awarddetails/:id" element={<AwardDetails />} />
              <Route path="/memberdetails/:id" element={<MemberDetails />} />
              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
