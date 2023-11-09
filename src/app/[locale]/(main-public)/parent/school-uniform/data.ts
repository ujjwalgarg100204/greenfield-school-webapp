export const uniformRules = [
  "As long as a student is on the school roll he / she must always come to school in uniform, even on birthdays.",
  "No student is allowed to attend any Open House, school function (in or outside the school) in any dress other than the school uniform.",
  "Nursery, L.K.G and U.K.G students should carry a clean napkin and a mat to school daily.",
] as const;

export const uniforms = {
  nursery: {
    uniform: {
      "Summer (Boys)":
        "White half sleeved shirt (with school monogram), Red checked shorts, White socks with Red band, Black shoes, White handkerchief, Cream turban (for Sikh Boys), Red school belt (with school monogram), Red Apron.",
      "WINTER (BOYS)":
        "Same as Summer uniform, with Red cardigan (Sleeveless / Full Sleeve), Cap (optional)",
      "SUMMER (GIRLS)":
        "White half sleeved shirt, Red checked tunic (with school monogram), White socks with Red band, Black shoes, White handkerchief, Red school belt (with school monogram), Red hair band.",
      "WINTER (GIRLS)":
        "Same as Summer uniform, with Red cardigan (Sleeveless / Full Sleeved). (Red caps, Red stockings, if necessary)",
    },
    images: {
      summer: { src: "/images/uniforms/nursery-summer.jpg" },
      winter: { src: "/images/uniforms/nursery-winter.jpg" },
    },
  },
  lkg: {
    uniform: {
      "SUMMER (BOYS)":
        "White half sleeved shirt (with school monogram), Blue checked shorts, White socks with Blue band, Black shoes, White handkerchief, Cream turban (for Sikh Boys), Blue school belt (with school monogram), Blue Apron.",
      "WINTER (BOYS)":
        "Same as Summer uniform. Only Blue cardigan (Sleeveless I Full Sleeved), Cap (optional).",
      "SUMMER (GIRLS)":
        "White half sleeved shirt, Blue checked tunic (with school monogram), White socks with Blue band, Black shoes, White handkerchief, Blue school belt (with school monogram), White hair band, Blue Apron.",
      "WINTER (GIRLS)":
        "Same as Summer uniform, with Blue cardigan (Sleeveless I Full Sleeved). (Blue cap and Blue stockings if necessary)",
    },
    images: {
      summer: { src: "/images/uniforms/lkg-summer.jpg" },
      winter: { src: "/images/uniforms/lkg-winter.jpg" },
    },
  },
  ukg: {
    uniform: {
      "SUMMER (BOYS)":
        "White half sleeved shirt (with school monogram), Green checked shorts, White socks with Green band, Black shoes, White handkerchief, Cream I Green turban (for Sikh Boys), Green school belt (with school monogram), Green Apron.",
      "WINTER (BOYS)":
        "Same as Summer uniform, with Green cardigan (Sleeveless I Full Sleeved), Cap (optional).",
      "SUMMER (GIRLS)":
        "White half sleeved shirt, Green checked tunic (with school monogram), White socks with Green band, Black shoes, White handkerchief, Green school belt (with school monogram), Green hair band, Green Apron.",
      "WINTER (GIRLS)":
        "Same as Summer uniform, with Green cardigan (Sleeveless I Full Sleeved). (Green caps and green stockings if necessary)",
    },
    images: {
      summer: { src: "/images/uniforms/ukg-summer.jpg" },
      winter: { src: "/images/uniforms/ukg-winter.jpg" },
    },
  },
  "Class I - XII": {
    uniform: {
      "SPECIAL INSTRUCTIONS - UNIFORM FITTING & TAILORING":
        "Skirts, Shorts and Trousers should be worn above the waist. Students wearing skirts, shorts and trousers below the waist line will be send back home.",
      "SUMMER (BOYS)":
        "White half sleeved shirt (with pocket & school monogram), White shorts (cross pocket & not more than one inch above knee level for class II-VII)/full length white trousers(cross-pocket) for students of classes VIII- XII, White socks (with green band), Green turban (for Sikh Boys), School Belt (with School Monogram), White Handkerchief.",
      "WINTER (BOYS)":
        "White full sleeved shirt (with pocket & school monogram), full length steel grey trousers (cross-pocket) for students of classes II-XII, Green ‘V’ neck full sleeved / sleeveless sweaters, Green blazer with school monogram & school metal buttons, Steel grey socks with green band (knee level), Green turban (for Sikh Boys), School belt (with school Monogram), Green tie, White Handkerchief.",
      "SUMMER (GIRLS)":
        "White half-sleeved shirt (with pocket & school monogram), White pleated skirt (not more than one inch above knee level) divided skirts only for class V upwards White socks (with green band), School Belt (School monogram), Green hair band and White Handkerchief.White half-sleeved shirt (with pocket & school monogram), White pleated skirt (not more than one inch above knee level) divided skirts only for class V upwards, White socks (with green band), School Belt (School monogram), Black Sports Shoes. Green / White hair band and White Handkerchief, white tights / bloomers.",
      "WINTER (GIRLS)":
        "White full sleeved shirt (with pocket & school monogram), Steel grey pleated tunic (not more than one inch above knee level) Divided skirts only for class V upwards Steel grey socks with green band (knee level), Green ‘V’ neck full sleeved / sleeveless sweater, Green blazer (with school monogram and school metal buttons), Green tie, Black Shoes, Green / White Hair Band and White Handkerchief. Black tights / bloomers.",
    },
    images: {
      summer: { src: "/images/uniforms/i-xii-summer.jpg" },
      winter: { src: "/images/uniforms/i-xii-winter.jpg" },
    },
  },
} as const;
