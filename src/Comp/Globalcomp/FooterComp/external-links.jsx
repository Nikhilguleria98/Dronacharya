import React from "react";

const EXTERNAL_LINKS = [
  { label: "HP University Shimla", href: "#" },
  { label: "HPU Admission Counselling", href: "#" },
  { label: "HPU Student Portal", href: "#" },
  { label: "HPU Exam Portal", href: "#" },
  { label: "NCTE", href: "#" },
  { label: "NCTE Northern Region", href: "#" },
  { label: "NAAC", href: "#" },
  { label: "NTS", href: "#" },
  { label: "NSP 2.0 Scholarship Link", href: "#" },
  { label: "Sri Badrika Ashram Scholarship", href: "#" },
  { label: "Online Fees Payment", href: "#" },
];

const ExternalLinks = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        External Links
      </h3>
      <ul className="space-y-3">
        {EXTERNAL_LINKS.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="text-sm text-gray-500 hover:text-orange-500 hover:underline transition-colors block py-0.5"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalLinks;
