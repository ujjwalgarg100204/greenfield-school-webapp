export default {
    principal: [{ time: "10.00 a.m. - 11.00 a.m.", days: "Monday & Thursday" }],
    administrator: [
        { time: "10.00 a.m. - 01.00 p.m.", days: "Monday - Friday" },
    ],
    "Vice Principal/Head Master/ Headmistress/ Co-ordinator": [
        {
            time: "02.00 p.m. - 03.00 p.m.",
            days: "Monday & Thursday",
        },
        {
            time: "10.00 a.m. - 11.00 a.m.",
            days: "2nd & 4th Saturday",
        },
    ],
    "Teachers Class II - XII": [
        { time: "02.00 p.m. - 03.00 p.m.", days: "Monday" },
        { time: "10.00 a.m. - 11.00 a.m.", days: "2nd & 4th Saturday" },
    ],
} as const;
