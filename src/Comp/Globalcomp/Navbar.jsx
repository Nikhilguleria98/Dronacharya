import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Management", href: "/about-us-management" },
      { label: "Organogram", href: "/about-us-organogram" },
    ],
  },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Bachelors of Education", href: "/courses/bachelors-of-education" },
      { label: "Postgraduate Programs", href: "/courses/postgraduate" },
      { label: "Diploma Courses", href: "/courses/diploma" },
      { label: "Admission Process", href: "/courses/admission" },
    ],
  },
  {
    label: "Our Staff",
    href: "/our-staff",
    children: [
      { label: "Teaching Staff", href: "/our-staff/teaching" },
      { label: "Non-Teaching Staff", href: "/our-staff/non-teaching" },
      { label: "Departments", href: "/our-staff/departments" },
    ],
  },
  {
  label: "Clubs",
  children: [
    { label: "SWAT Club", href: "/clubs/swat-club" },
    { label: "Manthan Club", href: "/clubs/manthan-club" },
    { label: "Training & Development Cell", href: "/clubs/training-development-cell" },
    { label: "SANJEEVANI CLUB", href: "/clubs/sanjeevani-club" },
    { label: "DHAULADHAR ECO CLUB", href: "/clubs/dhauladhar-eco-club" },
    { label: "CULTURAL CLUB", href: "/clubs/cultural-club" },
    { label: "RED RIBBON CLUB", href: "/clubs/red-ribbon-club" },
    { label: "ICC(Internal Complaint Committee)", href: "/clubs/icc" },
    { label: "ELAN CLUB", href: "/clubs/elan-club" },
    { label: "PTA (Parents Teacher Association)", href: "/clubs/pta" },
    { label: "Alumni Association", href: "/clubs/alumni-association" },
    { label: "Rotaract Club", href: "/clubs/rotaract-club" },
    { label: "Rover and Ranger Club", href: "/clubs/rover-and-ranger-club" },
    { label: "Health and Hygiene Club", href: "/clubs/health-and-hygiene-club" },
    { label: "Sang Bequest Club", href: "/clubs/sang-bequest-club" }
  ]
  },
  {
    label: "IQAC",
    href: "/iqac",
    children: [
      { label: "About IQAC", href: "/iqac/about" },
      { label: "NAAC", href: "/iqac/naac" },
      { label: "AQAR Reports", href: "/iqac/aqar" },
      { label: "Feedback", href: "/iqac/feedback" },
    ],
  },
  {
    label: "Library",
    href: "/library",
    children: [
      { label: "About Library", href: "/library/about" },
      { label: "E-Resources", href: "/library/e-resources" },
      { label: "Library Rules", href: "/library/rules" },
    ],
  },
  {
    label: "More",
    href: "/more",
    children: [
      { label: "Gallery", href: "/more/gallery" },
      { label: "Notices", href: "/more/notices" },
      { label: "Alumni", href: "/more/alumni" },
      { label: "Careers", href: "/more/careers" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

// ----------------------------------------------------------------------
// Top utility bar
// ----------------------------------------------------------------------
function TopBar() {
  return (
    <div className="w-full bg-[#0d1b4c] text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Social icons */}
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#0d1b4c]"
            >
              {label.slice(0, 2).toUpperCase()}
            </a>
          ))}
        </div>

        {/* Contact info - hidden on very small screens, shown from sm up */}
        <div className="hidden flex-1 items-center justify-center gap-4 sm:flex">
          <a
            href="tel:+919418039736"
            className="flex items-center gap-2 whitespace-nowrap text-white/90 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            <span className="hidden md:inline">+91 94180 39736</span>
          </a>
          <span className="hidden h-4 w-px bg-white/30 md:block" aria-hidden="true" />
          <a
            href="mailto:dronocharyahp@gmail.com"
            className="flex items-center gap-2 whitespace-nowrap text-white/90 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            <span className="hidden lg:inline">dronocharyahp@gmail.com</span>
          </a>
        </div>

        {/* Quick action links */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <a
            href="/pay-fees"
            className="font-medium text-white/90 transition-colors hover:text-white"
          >
            Pay Fees
          </a>
          <span className="h-4 w-px bg-white/30" aria-hidden="true" />
          <a
            href="/contact-us"
            className="font-medium text-white/90 transition-colors hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Desktop dropdown item
// ----------------------------------------------------------------------
function DesktopNavItem({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  const hasChildren = !!item.children?.length;

  return (
    <div
      className="relative"
      onMouseEnter={hasChildren ? handleEnter : undefined}
      onMouseLeave={hasChildren ? handleLeave : undefined}
    >
      <a
        href={item.href}
        aria-expanded={hasChildren ? open : undefined}
        aria-haspopup={hasChildren ? "true" : undefined}
        className={`flex items-center gap-1 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 ${
          isActive
            ? "text-blue-700"
            : "text-slate-700 hover:text-blue-700"
        }`}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        )}
      </a>

      {isActive && (
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-blue-700" />
      )}

      {hasChildren && (
        <div
          role="menu"
          className={`absolute left-0 top-full z-40 min-w-[240px] rounded-lg border border-slate-100 bg-white py-2 shadow-xl ring-1 ring-black/5 transition-all duration-200 ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-1 opacity-0"
          }`}
        >
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-slate-600 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-700"
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// Mobile accordion item
// ----------------------------------------------------------------------
function MobileNavItem({ item, isActive, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <div className="flex items-center justify-between">
        <a
          href={item.href}
          onClick={onNavigate}
          className={`flex-1 py-3 text-[15px] font-medium ${
            isActive ? "text-blue-700" : "text-slate-700"
          }`}
        >
          {item.label}
        </a>
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-500"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          className={`grid overflow-hidden transition-all duration-200 ${
            open ? "grid-rows-[1fr] pb-2 opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-0.5 rounded-lg bg-slate-50 py-1">
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={onNavigate}
                  className="px-4 py-2 text-sm text-slate-600 transition-colors hover:text-blue-700"
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// Main navbar (logo + nav) with mobile menu
// ----------------------------------------------------------------------
function MainNav({ activePath = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="w-full border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-slate-800">
            Logo
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              isActive={item.href === activePath}
            />
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-100 px-4 pb-4 sm:px-6">
          {NAV_LINKS.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isActive={item.href === activePath}
              onNavigate={closeMobile}
            />
          ))}

          {/* Contact info repeated for mobile since it's hidden in the top bar */}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
            <a href="tel:+919418039736" className="flex items-center gap-2">
              <Phone className="h-4 w-4" strokeWidth={2} />
              +91 94180 39736
            </a>
            <a
              href="mailto:dronocharyahp@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              dronocharyahp@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Exported Header (top bar + main nav) — this is what you import/use
// ----------------------------------------------------------------------
export default function CollegeNavbar({ activePath = "/" }) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />
      <MainNav activePath={activePath} />
    </header>
  );
}

// ----------------------------------------------------------------------
// Demo wrapper so this file previews nicely on its own.
// In your real app, just import { default as CollegeNavbar } and drop
// it at the top of your layout — remove this Demo export if not needed.
// ----------------------------------------------------------------------
export function Demo() {
  return (
    <div className="min-h-screen bg-slate-50">
      <CollegeNavbar activePath="/" />
      <main className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Page content goes here
        </h1>
        <p className="mt-2 text-slate-500">
          Resize the window to see the navbar respond — full nav on desktop,
          hamburger + accordion on mobile.
        </p>
      </main>
    </div>
  );
}