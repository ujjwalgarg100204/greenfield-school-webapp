export const NAV_LINKS = {
  home: [
    { translationKey: "hero", link: "/#about-us" },
    { translationKey: "photo-gallery", link: "/#photo-gallery" },
    { translationKey: "key-features", link: "/#key-features" },
    { translationKey: "premium-facilities", link: "/#premium-facilities" },
  ],
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
    { translationKey: "admission", link: "/school/admissions" },
    { translationKey: "contact", link: "/school/contact-us" },
  ],
  admission: [
    { translationKey: "notice", link: "/admission/admission-notice" },
    { translationKey: "prospectus", link: "/admission/prospectus" },
    { translationKey: "procedure", link: "/admission/admission-procedure" },
    {
      translationKey: "instructions",
      link: "/admission/general-instructions-for-admission",
    },
    { translationKey: "age", link: "/admission/age-criteria" },
    { translationKey: "fee", link: "/admission/fee-structure" },
    { translationKey: "orientation", link: "/admission/orientation" },
    { translationKey: "registration", link: "/admission/online-registration" },
    { translationKey: "admission-portal", link: "/admission/portal" },
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
    { translationKey: "portal", link: "/dashboard" },
    { translationKey: "council", link: "/student/student-council" },
    { translationKey: "activities", link: "/student/co-curricular-activities" },
    { translationKey: "timings", link: "/student/school-timings" },
    { translationKey: "certificate", link: "/student/transfer-certificate" },
    { translationKey: "prayer", link: "/student/school-prayer" },
    { translationKey: "trips", link: "/student/trips-and-excursions" },
    { translationKey: "cc", link: "/student/code-of-conduct" },
    { translationKey: "s-rules", link: "/student/special-rules" },
    { translationKey: "l-rules", link: "/student/library-rules" },
    { translationKey: "c-rules", link: "/student/canteen-rules" },
    {
      translationKey: "+ve-behavior-manage",
      link: "/student/positive-behavior-management",
    },
    {
      translationKey: "cce",
      link: "/student/continuous-and-comprehensive-evaluation",
    },
  ],
  parent: [
    { translationKey: "dispersal", link: "/parent/student-dispersal" },
    { translationKey: "uniform", link: "/parent/school-uniform" },
    { translationKey: "hours", link: "/parent/visiting-hours" },
    { translationKey: "guidelines", link: "/parent/general-guidelines" },
    {
      translationKey: "absence",
      link: "/parent/absence-leave-late-arrival-in-school",
    },
    { translationKey: "infirmary", link: "/parent/school-infirmary" },
    { translationKey: "report", link: "/parent/progress-report" },
    { translationKey: "fee", link: "/parent/pay-fee-online" },
    { translationKey: "login", link: "/dashboard/parent-dashboard" },
  ],
} as const;
