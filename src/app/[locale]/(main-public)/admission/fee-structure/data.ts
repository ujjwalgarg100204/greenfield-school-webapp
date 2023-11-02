export default {
  "nursery-ukg": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 25500,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 15600,
    },
  ],
  "I-V": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 26700,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 15900,
    },
  ],
  "VI-X": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 26700,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 16575,
    },
  ],
  "XI-XII": {
    "non-greenfield-students": {
      science: [
        {
          feeType: "Admission Fees (Non Refundable)",
          oneTime: 25000,
        },
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Caution Money (Refundable)",
          oneTime: 15000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 1100,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19875,
        },
      ],
      commerce: [
        {
          feeType: "Admission Fees (Non Refundable)",
          oneTime: 25000,
        },
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Caution Money (Refundable)",
          oneTime: 15000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 26700,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19350,
        },
      ],
      humanities: [
        {
          feeType: "Admission Fees (Non Refundable)",
          oneTime: 25000,
        },
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Caution Money (Refundable)",
          oneTime: 15000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 26700,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19350,
        },
      ],
    },
    "greenfield-students": {
      science: [
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 26700,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19875,
        },
      ],
      commerce: [
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 26700,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19350,
        },
      ],
      humanities: [
        {
          feeType: "Administrative Charges (Non Refundable)",
          oneTime: 30000,
        },
        {
          feeType: "Annual Session Fees",
          annual: 26700,
        },
        { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
        {
          feeType: "Quarterly Tuition Fees",
          quarterly: 19350,
        },
      ],
    },
  },

  rules: [
    "Fees, once paid at the time of Admission, is non-refundable under any category (including withdrawal and/or Candidates rejected due to failing in Class X Board Examination). Only the Caution Money will be refundable in such cases.",
    "The Management reserves the right to have the last word in all matters relating to admission.",
  ],
} as const;
