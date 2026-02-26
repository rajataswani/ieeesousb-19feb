import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/lib/theme-provider";

/* ---------------- NAV STRUCTURE ---------------- */

const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },

  {
    title: "About",
    children: [
      { title: "IEEE", href: "/about/ieee" },
      { title: "IEEE SOU SB", href: "/about/ieee-sou-sb" },

      {
        title: "GROUP",
        children: [
          { title: "IEEE SOU WIE AG", href: "/about/ieee-sou-wie-sb-ag" },
          { title: "IEEE SOU SIGHT SBG", href: "/about/ieee-sou-sight-sbg" },
        ],
      },
      {
        title: "CHAPTER",
        children: [
          { title: "IEEE SOU SPS SBC", href: "/about/ieee-sou-sps-sbc" },
          { title: "IEEE SOU CS SBC", href: "/about/ieee-sou-cs-sbc" },
        ],
      },
    ],
  },

  {
    title: "Events",
    children: [
      { title: "2024", href: "/events?year=2024" },
      { title: "2025", href: "/events?year=2025" },
      { title: "2026", href: "/events?year=2026" },
    ],
  },

  {
    title: "Team",
    children: [
      { title: "Faculty Advisor", href: "/team/faculty-advisor" },
      { title: "Advisory Board", href: "/team/advisory-board" },
      { title: "Executive Members", href: "/team/executive-members" },
      { title: "Core Members", href: "/team/core-members" },
    ],
  },

  {
    title: "Achievement",
    children: [
      { title: "Branch Awards", href: "/achievement/branch-awards" },
      { title: "Newsletter", href: "/achievement/newsletter" },
      { title: "Student Achievement", href: "/achievement/student" },
    ],
  },
  { title: "Bylaws", href: "/bylaws" },
  { title: "Contact Us", href: "/contact" },
];

/* ---------------- COMPONENT ---------------- */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleMobileDropdownToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 py-2 shadow-md backdrop-blur-sm"
          : "py-4 bg-white dark:bg-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* LOGO — left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={
                  theme === "dark"
                    ? "http://ieee.socet.edu.in/wp-content/uploads/2025/09/Group-2085662984-1-scaled.png"
                    : "http://ieee.socet.edu.in/wp-content/uploads/2025/09/N_Wedge-removebg-preview.png"
                }
                className="h-12 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV — center */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-0.5">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.title}>
                {item.children ? (
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                          <div className="w-60 p-2">
                            {item.children.map((child) => (
                              <React.Fragment key={child.title}>
                                {child.children ? (
                                  <>
                                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground text-center">
                                      {child.title}
                                    </p>

                                    {child.children.map((nested) => (
                                      <NavigationMenuLink asChild key={nested.title}>
                                        <Link
                                          to={nested.href}
                                          className="block px-3 py-2 text-sm hover:bg-accent rounded-md text-center"
                                        >
                                          {nested.title}
                                        </Link>
                                      </NavigationMenuLink>
                                    ))}
                                  </>
                                ) : (
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={child.href}
                                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md text-center"
                                    >
                                      {child.title}
                                    </Link>
                                  </NavigationMenuLink>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <Link
                    to={item.href}
                    className="px-2 py-2 text-sm font-medium hover:text-primary whitespace-nowrap"
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* ACTION BUTTONS — right */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/join">Join IEEE</Link>
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  );
}