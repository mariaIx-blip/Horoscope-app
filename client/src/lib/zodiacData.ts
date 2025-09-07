export interface ZodiacSign {
  name: string;
  symbol: string;
  dates: string;
  element: string;
  quality: string;
  ruling_planet: string;
  traits: string[];
  childPersonality: string;
  magicalPowers: string;
  favoriteColors: string[];
  luckyNumbers: number[];
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    quality: "Cardinal",
    ruling_planet: "Mars",
    traits: ["Brave", "Energetic", "Leader", "Adventurous"],
    childPersonality: "You're a natural leader who loves adventures and isn't afraid to try new things!",
    magicalPowers: "The power to inspire courage in others and start amazing new adventures",
    favoriteColors: ["Red", "Orange", "Bright Yellow"],
    luckyNumbers: [1, 8, 17]
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    quality: "Fixed",
    ruling_planet: "Venus",
    traits: ["Loyal", "Patient", "Artistic", "Loving"],
    childPersonality: "You're a loving friend who appreciates beautiful things and enjoys peaceful moments!",
    magicalPowers: "The ability to help things grow and create beauty wherever you go",
    favoriteColors: ["Green", "Pink", "Earth Brown"],
    luckyNumbers: [2, 6, 24]
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    quality: "Mutable",
    ruling_planet: "Mercury",
    traits: ["Curious", "Talkative", "Smart", "Funny"],
    childPersonality: "You're incredibly curious and love learning new things and making people laugh!",
    magicalPowers: "The gift of communication and the ability to understand any language",
    favoriteColors: ["Yellow", "Light Blue", "Silver"],
    luckyNumbers: [5, 14, 23]
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    quality: "Cardinal",
    ruling_planet: "Moon",
    traits: ["Caring", "Intuitive", "Protective", "Imaginative"],
    childPersonality: "You have a big heart and amazing intuition that helps you care for others!",
    magicalPowers: "The power to sense emotions and create safe, cozy spaces for everyone",
    favoriteColors: ["Silver", "Sea Blue", "White"],
    luckyNumbers: [2, 7, 11]
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    quality: "Fixed",
    ruling_planet: "Sun",
    traits: ["Confident", "Creative", "Generous", "Dramatic"],
    childPersonality: "You shine brightly like the sun and love to perform and make others happy!",
    magicalPowers: "The ability to light up any room and inspire confidence in others",
    favoriteColors: ["Gold", "Orange", "Bright Yellow"],
    luckyNumbers: [1, 3, 10]
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    quality: "Mutable",
    ruling_planet: "Mercury",
    traits: ["Helpful", "Organized", "Kind", "Detail-oriented"],
    childPersonality: "You're incredibly helpful and notice details that others miss!",
    magicalPowers: "The gift of healing and the ability to solve any problem with patience",
    favoriteColors: ["Navy Blue", "Grey", "Brown"],
    luckyNumbers: [6, 15, 20]
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    quality: "Cardinal",
    ruling_planet: "Venus",
    traits: ["Fair", "Social", "Peaceful", "Artistic"],
    childPersonality: "You're a natural peacemaker who brings harmony and beauty to the world!",
    magicalPowers: "The power to create balance and help everyone get along peacefully",
    favoriteColors: ["Pink", "Light Blue", "Lavender"],
    luckyNumbers: [6, 15, 24]
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    quality: "Fixed",
    ruling_planet: "Pluto",
    traits: ["Mysterious", "Loyal", "Brave", "Intuitive"],
    childPersonality: "You're incredibly loyal and have amazing intuition that helps you understand deep mysteries!",
    magicalPowers: "The ability to see hidden truths and transform anything negative into something positive",
    favoriteColors: ["Deep Red", "Black", "Maroon"],
    luckyNumbers: [4, 13, 27]
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    quality: "Mutable",
    ruling_planet: "Jupiter",
    traits: ["Adventurous", "Honest", "Optimistic", "Funny"],
    childPersonality: "You're an eternal optimist who loves adventures and making people laugh!",
    magicalPowers: "The gift of bringing joy and the ability to find adventure anywhere",
    favoriteColors: ["Purple", "Turquoise", "Orange"],
    luckyNumbers: [3, 9, 21]
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    quality: "Cardinal",
    ruling_planet: "Saturn",
    traits: ["Responsible", "Patient", "Ambitious", "Wise"],
    childPersonality: "You're wise beyond your years and have the patience to achieve amazing things!",
    magicalPowers: "The power of persistence and the ability to climb any mountain of challenges",
    favoriteColors: ["Dark Green", "Brown", "Grey"],
    luckyNumbers: [8, 10, 26]
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    quality: "Fixed",
    ruling_planet: "Uranus",
    traits: ["Unique", "Friendly", "Independent", "Inventive"],
    childPersonality: "You're wonderfully unique and have amazing ideas that can change the world!",
    magicalPowers: "The gift of innovation and the ability to see the future possibilities",
    favoriteColors: ["Electric Blue", "Silver", "Turquoise"],
    luckyNumbers: [4, 7, 11]
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    quality: "Mutable",
    ruling_planet: "Neptune",
    traits: ["Imaginative", "Compassionate", "Artistic", "Intuitive"],
    childPersonality: "You have an amazing imagination and the biggest, most compassionate heart!",
    magicalPowers: "The ability to dream amazing dreams and understand the feelings of all living things",
    favoriteColors: ["Sea Green", "Lavender", "Silver"],
    luckyNumbers: [7, 12, 29]
  }
];

export function getZodiacSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();
  
  // Determine zodiac sign based on birth date
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0]; // Aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1]; // Taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2]; // Gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3]; // Cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4]; // Leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5]; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6]; // Libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7]; // Scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8]; // Sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9]; // Capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10]; // Aquarius
  return zodiacSigns[11]; // Pisces
}

export function getZodiacSignByName(name: string): ZodiacSign | undefined {
  return zodiacSigns.find(sign => sign.name.toLowerCase() === name.toLowerCase());
}
