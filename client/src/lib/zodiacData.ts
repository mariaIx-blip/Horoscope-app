export interface ZodiacSign {
  name: string;
  symbol: string;
  dates: string;
  element: string;
  quality: string;
  ruling_planet: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    quality: "Cardinal",
    ruling_planet: "Mars"
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    quality: "Fixed",
    ruling_planet: "Venus"
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    quality: "Mutable",
    ruling_planet: "Mercury"
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    quality: "Cardinal",
    ruling_planet: "Moon"
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    quality: "Fixed",
    ruling_planet: "Sun"
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    quality: "Mutable",
    ruling_planet: "Mercury"
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    quality: "Cardinal",
    ruling_planet: "Venus"
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    quality: "Fixed",
    ruling_planet: "Pluto"
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    quality: "Mutable",
    ruling_planet: "Jupiter"
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    quality: "Cardinal",
    ruling_planet: "Saturn"
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    quality: "Fixed",
    ruling_planet: "Uranus"
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    quality: "Mutable",
    ruling_planet: "Neptune"
  }
];
