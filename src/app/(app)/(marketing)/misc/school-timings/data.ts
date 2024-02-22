export const SCHOOL_TIMINGS = {
    senior: {
        reporting: [
            {
                "means-of-transport": "Private Cars/Conveyance",
                timings: "7:15 a.m.",
            },
            { "means-of-transport": "School Bus", timings: "7:25 a.m." },
        ],
        dispersal: [
            { classes: "II - V", timings: "1:00 p.m." },
            { classes: "VI - X", timings: "1:40 p.m." },
            {
                classes: "XI - XII (Commerce & Humanities)",
                timings: "12:20 p.m.",
            },
            { classes: "XI - XII (Science)", timings: "1:00 p.m." },
            { classes: "XI - XII (VMC Science)", timings: "2:00 p.m." },
        ],
    },
    junior: {
        reporting: [
            {
                "means-of-transport": "Private Cars/Conveyance",
                timings: "8:15 a.m.",
            },
            { "means-of-transport": "School Bus", timings: "8:25 a.m." },
        ],
        dispersal: [
            { type: "Private", classes: "Nursery & LKG", timings: "1:00 p.m." },
            { type: "Private", classes: "UKG", timings: "1:10 p.m." },
            { type: "Private", classes: "I", timings: "1:15 p.m." },
            { type: "Bus", classes: "Nursery & LKG", timings: "12:45 p.m." },
            { type: "Bus", classes: "UKG", timings: "1:15 p.m." },
            { type: "Bus", classes: "I", timings: "12:50 p.m." },
        ],
    },
};
