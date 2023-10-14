export const NAV_LINKS = {
  school: [
    { translationKey: "about", link: "/school/about-us" },
    { translationKey: "mission", link: "/school/mission-and-vision" },
    { translationKey: "principal", link: "/school/principals-message" },
    { translationKey: "pledge", link: "/school/our-pledge" },
    { translationKey: "infrastructure", link: "/school/infrastructure" },
    { translationKey: "achievements", link: "/school/achievements" },
    { translationKey: "gallery", link: "/school/gallery" },
    { translationKey: "news", link: "/school/in-the-news" },
    { translationKey: "transport", link: "/school/school-transport" },
    { translationKey: "news-letter", link: "/school/newsletter" },
    { translationKey: "admissions", link: "/school/admissions" },
    { translationKey: "contact", link: "/school/contact-us" },
  ],
  admission: [
    { translationKey: "notice", link: "/admission-notice" },
    { translationKey: "prospectus", link: "/prospectus" },
    { translationKey: "procedure", link: "/admission-procedure" },
    {
      translationKey: "instructions",
      link: "/general-instructions-for-admission",
    },
    { translationKey: "age", link: "/age-criteria" },
    { translationKey: "fee", link: "/fee-structure" },
    { translationKey: "orientation", link: "/orientation" },
    { translationKey: "registration", link: "/online-registration" },
  ],
  academic: [
    { translationKey: "result", link: "/result-analysis" },
    { translationKey: "syllabus", link: "/syllabus" },
    { translationKey: "book-list", link: "/book-list" },
    { translationKey: "holiday", link: "/holiday-list" },
    { translationKey: "block-holidays", link: "/block-holidays" },
    { translationKey: "fees", link: "/fees-structure" },
  ],
  student: [
    { translationKey: "portal", link: "/students-portal" },
    { translationKey: "council", link: "/student-council" },
    { translationKey: "activities", link: "/co-curricular-activities" },
    { translationKey: "timings", link: "/school-timings" },
    { translationKey: "certificate", link: "/transfer-certificate" },
    { translationKey: "prayer", link: "/school-prayer" },
    { translationKey: "trips", link: "/trips-and-excursions" },
    { translationKey: "cc", link: "/code-of-conduct" },
    { translationKey: "s-rules", link: "/special-rules" },
    { translationKey: "l-rules", link: "/library-rules" },
    { translationKey: "c-rules", link: "/canteen-rules" },
    {
      translationKey: "+ve-behavior-manage",
      link: "/positive-behavior-management",
    },
    { translationKey: "cce", link: "/continuous-and-comprehensive-evaluation" },
  ],
  parent: [
    { translationKey: "dispersal", link: "/student-dispersal" },
    { translationKey: "uniform", link: "/school-uniform" },
    { translationKey: "hours", link: "/visiting-hours" },
    { translationKey: "guidelines", link: "/general-guidelines" },
    {
      translationKey: "absence",
      link: "/absence-leave-late-arrival-in-school",
    },
    { translationKey: "infirmary", link: "/school-infirmary" },
    { translationKey: "report", link: "/progress-report" },
    { translationKey: "fee", link: "/pay-fee-online" },
    { translationKey: "login", link: "/parents-login" },
  ],
} as const;

export const NAV_LINK_TYPES = [
  "school",
  "admission",
  "academic",
  "student",
  "parent",
] as const;


