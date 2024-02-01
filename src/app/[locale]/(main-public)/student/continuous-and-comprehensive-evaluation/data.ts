export const scholasticAreas = {
    "II-IV": [
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA1 (April – June)",
            term: "1st Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA2 (June – July)",
            term: "1st Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA3 (Oct – Dec)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "20%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA4 (Jan-Feb)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "20%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "SA1",
            term: "1st Term",
            evaluationBasis: "Block Examination",
            weightage: "60%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "SA2",
            term: "2nd Term",
            evaluationBasis: "Block Examination",
            weightage: "60%",
        },
        {
            assessmentType: "term",
            assessmentName: "1nd Term Evaluation",
            term: null,
            evaluationBasis: "On the basis of FA1, FA2, SA1",
            weightage: "50%",
        },
        {
            assessmentType: "term",
            assessmentName: "2nd Term Evaluation",
            term: null,
            evaluationBasis: "On the basis of FA3, FA4, SA2",
            weightage: "50%",
        },
    ],
    "V-VIII": [
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA1 (April – June)",
            term: "1st Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA2 (June – July)",
            term: "1st Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA3 (Oct – Dec)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA4 (Jan-Feb)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment Activities : Practicals Projects CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "SA1",
            term: "1st Term",
            evaluationBasis: "Block Examination",
            weightage: "30%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "SA2",
            term: "2nd Term",
            evaluationBasis: "Block Examination",
            weightage: "30%",
        },
        {
            assessmentType: "term",
            assessmentName: "1nd Term Evaluation",
            term: null,
            evaluationBasis: "On the basis of FA1, FA2, SA1",
            weightage: "50%",
        },
        {
            assessmentType: "term",
            assessmentName: "2nd Term Evaluation",
            term: null,
            evaluationBasis: "On the basis of FA3, FA4, SA2",
            weightage: "50%",
        },
    ],

    "IX-X": [
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA1 (April – June)",
            evaluationBasis:
                "Written Assessment, Activities, Practicals, CW / HW",
            term: "1st Term",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA2 (June – July)",
            evaluationBasis:
                "Written Assessment, Activities, Practicals, CW / HW",
            term: "1st Term",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA3 (Oct – Dec)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment, Activities, Practicals, CW / HW",
            weightage: "10%",
        },
        {
            assessmentType: "Formative Assessments",
            assessmentName: "FA4 (Jan-Feb)",
            term: "2nd Term",
            evaluationBasis:
                "Written Assessment (2nd Lang) PSA for other subject",
            weightage: "10%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "1st Summative Assessment (SA)",
            evaluationBasis: "Block Examination along with ASL, for English",
            term: "1st Term",
            weightage: "30%",
        },
        {
            assessmentType: "Summative Assessments",
            assessmentName: "2nd Summative Assessment (SA2)",
            evaluationBasis:
                "Block Examination on Syllabus of Term & OTBA, ASL(for English)",
            term: "2nd Term",
            weightage: "30%",
        },
        {
            assessmentType: "term",
            assessmentName: "1nd Term Evaluation",
            evaluationBasis: "On the basis of FA1, FA2 & SA1",
            term: null,
            weightage: "50%",
        },
        {
            assessmentType: "term",
            assessmentName: "2nd Term Evaluation",
            evaluationBasis: "On the basis of FA3, FA4, SA2",
            term: null,
            weightage: "50%",
        },
    ],
} as const;

export const subjectViseHomeworkActivityEvaluationPlan = [
    {
        subjects: "English",
        work: ["Writing Skill", "Literature", "Grammar/Lang"],
        activities: [
            "Vocabulary/Spelling",
            "Oral/Visual/Communication",
            "Group (Creative) Activities",
        ],
    },
    {
        subjects: "Mathematics",
        work: [
            "Problem Solving Skill",
            "Application Skills",
            "M.C.Q answering Skill",
            "Group/Individual Activity",
        ],
        activities: ["File", "Project/Viva", "Lab Activity (Practicals)"],
    },
    {
        subjects: "Second Language",
        work: [
            "Writing Skill",
            "Literature",
            "Grammar/Lang",
            "Group (Creative) Activities",
        ],
        activities: [
            "Vocabulary/Spelling",
            "Oral/Visual//Communication",
            "Quiz/Recitation",
        ],
    },
    {
        subjects: "Third Language\n(only for classes 6 to 8)",
        work: ["Writing Skill", "Literature", "Grammar/Lang"],
        activities: [
            "Vocabulary/Spelling",
            "Oral/Visual/Communication",
            "Group (Creative) Activities",
        ],
    },
    {
        subjects: "EVS\n(only for class 5)",
        work: [
            "Knowledge of events and personalities",
            "Observation of nature",
            "Reasoning ability",
        ],
        activities: ["Project", "Lab Activity", "Group / Individual Activity"],
    },
    {
        subjects: "Science\n(for Class 6 to 10) Physics",
        work: [
            "Concept Building",
            "Understanding",
            "Knowledge",
            "Application Skills",
            "Observation Skills",
            "Reasoning Ability",
        ],
        activities: [
            "Project Investigation",
            "Oral (Group/Individual)",
            "Visual Communication",
            "Lab Activity",
            "Activity",
        ],
    },
    {
        subjects: "Science\n(for Class 6 to 10) Chemistry",
        work: [
            "Concept Building",
            "Understanding",
            "Knowledge",
            "Application Skills",
            "Observation Skills",
        ],
        activities: [
            "Project Investigation",
            "Oral (Group/Individual)/ Visual Communication",
            "Lap Activity",
            "Activity",
        ],
    },
    {
        subjects: "Science\n(for Class 6 to 10) Biology",
        work: [
            "Concept Building",
            "Understanding",
            "Knowledge",
            "Application Skills",
            "Observation Skills",
        ],
        activities: [
            "Project Investigation",
            "Oral (Group/Individual)",
            "Visual Communication",
            "Lab Activity",
            "Activity",
        ],
    },
    {
        subjects: "Social Sciences\n(only for Classes 6 to 10) History",
        work: [
            "Application & Writing Skill",
            "Familiarization with the trend of past and present",
        ],
        activities: [
            "Project Individual/Group",
            "Oral (Group/Individual)",
            "Visual Communication",
            "Activity (Group/Individual)",
        ],
    },
    {
        subjects: "Social Sciences\n(only for Classes 6 to 10) Geography",
        work: [
            "Knowledge",
            "Application Skill",
            "Understanding",
            "Concept Building",
        ],
        activities: [
            "Project Individual/Group",
            "Oral (Group/Individual)",
            "Visual Communication",
            "Activity (Group/Individual)",
        ],
    },
    {
        subjects:
            "Social Sciences\n(only for Classes 6 to 10) Civics/Political Science",
        work: [
            "An understanding of the connections between Political, Social and Economic processes",
        ],
        activities: [
            "Project Individual/Group",
            "Oral (Group/Individual)",
            "Visual Communication",
            "Activity (Group/Individual)",
        ],
    },
    {
        subjects: "Social Sciences\n(for Classes 9 and 10) Economics",
        work: [
            "Knowledge of the present economic situation",
            "Application Skill",
        ],
        activities: ["Project (Individual/Group)", "Visual Communication"],
    },
    {
        subjects: "Disaster Management",
        work: ["Understanding Application Skills to face Disaster"],
        activities: ["Project (Group)"],
    },
    {
        subjects: "Computers",
        work: ["Knowledge & use of Computer lang"],
        activities: [
            "Project (Individual/Group)",
            "Use of hardware/Application of Computer language",
            "Activity",
        ],
    },
] as const;

export const markRange = [
    {
        percentage: "91 – 100",
        grade: "A1",
    },
    {
        percentage: "81 – 90",
        grade: "A2",
    },
    {
        percentage: "71 – 80",
        grade: "B1",
    },
    {
        percentage: "61 – 70",
        grade: "B2",
    },
    {
        percentage: "51 – 60",
        grade: "C1",
    },
    {
        percentage: "41 – 50",
        grade: "C2",
    },
    {
        percentage: "33 – 40",
        grade: "D",
    },
    {
        percentage: "21 – 32",
        grade: "E1",
    },
    {
        percentage: "00 – 20",
        grade: "E2",
    },
] as const;
