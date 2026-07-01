import React from "react";

const QUICK_LINKS = [
  "Re-Admission Form (BBA/BCA)",
  "Alumni Registration",
  "Feedback B.Ed",
  "Feedback M.Ed",
  "Course Evaluation B.Ed/M.Ed",
  "Exit Feedback (B.Ed/M.Ed)",
  "Student Satisfaction Survey",
  "Course Evaluation BBA",
  "Teacher Evaluation BBA",
  "Course Evaluation BCA",
  "Teacher Evaluation BCA",
  "Teacher Evaluation B.Com.",
  "Exit Questionnaire BBA/BCA",
  "Open Webmail",
  "Download NCTE Affidavit",
  "Semester Assignments BBA/BCA",
  "Caste Based Discrimination Complaint",
];

const QuickLinks = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-bold text-blue-900 mb-4 pb-2 border-b border-gray-100 uppercase tracking-wider">
        Quick Links
      </h3>
      <ul className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
        {QUICK_LINKS.map((link, idx) => (
          <li key={idx}>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-orange-500 hover:underline transition-colors block py-0.5"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
