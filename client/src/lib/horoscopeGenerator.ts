import { ZodiacSign } from "./zodiacData";

export interface Horoscope {
  title: string;
  content: string[];
  mantra: string;
  influences: string[];
}

const emotionalThemes = {
  "Aries": [
    "The fire within your spirit burns with renewed intensity today, like a phoenix emerging from yesterday's ashes.",
    "Your emotional landscape resembles a mountain stream—clear, powerful, and carving new paths through ancient stone.",
    "The Moon whispers secrets of courage to your restless heart, urging you to trust the warrior spirit within."
  ],
  "Taurus": [
    "Your emotions flow like honey through sunlit meadows, sweet and golden with the promise of stability.",
    "The Moon's gentle influence cradles your heart like rich earth nurtures the deepest roots.",
    "Today, your inner world blooms like a garden after spring rain—patient, nurturing, and beautifully grounded."
  ],
  "Gemini": [
    "Your mind dances between thoughts like butterflies among summer flowers, each idea a burst of brilliant color.",
    "The Moon illuminates the dual nature of your emotions—both the whisper and the storm within your heart.",
    "Today, your feelings shift like morning mist, revealing new landscapes of understanding with each breath."
  ],
  "Cancer": [
    "Your emotional tides ebb and flow with the Moon's ancient rhythm, carrying pearls of wisdom from the depths.",
    "Like a lighthouse keeper tending to those you love, your heart shines steadily through any storm.",
    "The lunar energy wraps around your soul like a silk shawl, warm and protective yet allowing you to shine."
  ],
  "Leo": [
    "Your heart radiates warmth like the golden hour sun, painting everything around you in shades of joy and hope.",
    "The Moon acknowledges your royal nature, blessing your emotions with the grace of a benevolent ruler.",
    "Today, your spirit soars like a majestic eagle, confident in the thermals of your own magnificent energy."
  ],
  "Virgo": [
    "Your emotions are like a master craftsperson's hands—precise, caring, and capable of creating beauty from chaos.",
    "The Moon's light filters through your analytical mind like sunlight through crystal, revealing hidden truths.",
    "Today, your heart tends to its garden with devotion, knowing that the smallest acts of love yield the richest harvest."
  ],
  "Libra": [
    "Your emotional world seeks harmony like a conductor bringing together a celestial symphony of feelings.",
    "The Moon's reflection in still water mirrors your quest for balance between heart and mind.",
    "Today, your spirit moves like a graceful dancer, finding beauty in the delicate equilibrium of opposing forces."
  ],
  "Scorpio": [
    "Your emotions run as deep as underground rivers, carrying the transformative power of ancient mysteries.",
    "The Moon reveals the phoenix within your psyche, ready to rise from the ashes of old patterns.",
    "Today, your intuition pierces the veil like moonlight through fog, illuminating truths others cannot see."
  ],
  "Sagittarius": [
    "Your heart gallops across emotional landscapes like a wild horse, free and untamed in its quest for truth.",
    "The Moon lights your path like a campfire under star-scattered skies, warming your adventurous spirit.",
    "Today, your optimism soars like an arrow shot toward distant horizons, carrying hopes and dreams on its flight."
  ],
  "Capricorn": [
    "Your emotions are like a mountain peak—steady, enduring, and reaching toward the heavens with quiet determination.",
    "The Moon illuminates your path like starlight on snow, revealing the wisdom carved by time and experience.",
    "Today, your heart builds bridges between dreams and reality, each feeling a carefully placed stone in your castle of ambition."
  ],
  "Aquarius": [
    "Your emotions flow like electricity through the collective consciousness, sparking innovation and understanding.",
    "The Moon's unconventional light reveals your unique perspective, like aurora dancing across an arctic sky.",
    "Today, your heart beats to the rhythm of tomorrow's dreams, conducting symphonies of progressive thought."
  ],
  "Pisces": [
    "Your emotions swim in cosmic oceans, gathering stardust and moonbeams in the depths of your compassionate soul.",
    "The Moon's reflection dissolves boundaries like watercolors bleeding into paper, blending reality with dreams.",
    "Today, your intuitive heart flows like a sacred river, carrying messages from the divine realm to earthly shores."
  ]
};

const relationshipThemes = {
  "Aries": [
    "Venus ignites passion in your relationships like striking flint against steel, sparking connections that burn bright and true.",
    "Your romantic energy radiates outward like the first bloom of spring, awakening hearts and inspiring new beginnings.",
    "In love, you are the pioneer, courageously exploring uncharted territories of intimacy and connection."
  ],
  "Taurus": [
    "Venus, your ruling planet, wraps your relationships in silk and honey, creating bonds as enduring as ancient oak trees.",
    "Your love grows slowly but surely, like roses that bloom year after year, more beautiful with each passing season.",
    "In partnerships, you offer the gift of presence—steady, warm, and as reliable as the earth beneath our feet."
  ],
  "Gemini": [
    "Venus dances through your communication channels like quicksilver, bringing wit and charm to every interaction.",
    "Your relationships thrive on the exchange of ideas, like two mirrors reflecting infinite possibilities between them.",
    "In love, you are the storyteller, weaving tales that bind hearts together with threads of laughter and understanding."
  ],
  "Cancer": [
    "Venus flows through your emotional depths like moonlight on water, illuminating the sacred spaces of your heart.",
    "Your nurturing spirit creates a sanctuary where love can grow, protected and cherished like a pearl within its shell.",
    "In relationships, you are the guardian of memories, keeping the treasures of shared moments safe in your caring embrace."
  ],
  "Leo": [
    "Venus crowns your romantic nature with golden light, making every gesture of love a performance worthy of applause.",
    "Your heart gives generously, like the sun sharing its warmth with every living thing beneath its radiant gaze.",
    "In love, you are both the artist and the masterpiece, creating relationships that shine with dramatic beauty."
  ],
  "Virgo": [
    "Venus works through your hands and heart like a master gardener, tending to relationships with devoted attention.",
    "Your love manifests in a thousand small acts of service, each one a stitch in the tapestry of deep connection.",
    "In partnerships, you are the healer, offering the medicine of practical care and unwavering loyalty."
  ],
  "Libra": [
    "Venus, your celestial patron, blesses your relationships with the harmony of perfectly balanced scales.",
    "Your love seeks beauty and balance, creating partnerships that reflect the divine architecture of the cosmos.",
    "In romance, you are the diplomat, skilled at weaving together different hearts into a symphony of understanding."
  ],
  "Scorpio": [
    "Venus transforms in your passionate depths like coal becoming diamond under intense pressure and heat.",
    "Your love burns with the intensity of a thousand stars, capable of illuminating or consuming with equal power.",
    "In relationships, you are the alchemist, transforming ordinary connections into extraordinary bonds of soul-deep intimacy."
  ],
  "Sagittarius": [
    "Venus gallops alongside your free spirit like a wild mare across infinite plains of possibility and adventure.",
    "Your love seeks horizons beyond the ordinary, finding freedom in the shared exploration of life's grand mysteries.",
    "In partnerships, you are the philosopher, questioning and expanding the very definition of what love can become."
  ],
  "Capricorn": [
    "Venus builds foundations in your relationships like an architect designing structures to withstand the test of time.",
    "Your love matures like fine wine, growing richer and more complex with each passing year of shared experience.",
    "In romance, you are the mountain guide, leading partnerships to heights that others can only dream of reaching."
  ],
  "Aquarius": [
    "Venus flows through your unique perspective like lightning through crystal, electrifying connections with innovative energy.",
    "Your love transcends conventional boundaries, creating relationships that serve as beacons for humanity's evolution.",
    "In partnerships, you are the visionary, seeing possibilities that exist beyond the current limitations of the heart."
  ],
  "Pisces": [
    "Venus dissolves all barriers in your compassionate embrace, like salt melting into the vast ocean of universal love.",
    "Your romantic nature flows like a sacred river, carrying dreams and healing to every shore it touches.",
    "In love, you are the mystic, understanding that true connection exists beyond words in the realm of soul recognition."
  ]
};

const careerThemes = {
  "Aries": [
    "Mars energizes your professional sphere like dawn breaking over a battlefield, bringing clarity and courage to every challenge.",
    "Your career path blazes forward like a comet streaking across the corporate sky, leaving trails of innovation and bold achievement.",
    "In work, you are the pioneer, cutting through obstacles with the determination of one who knows their destiny."
  ],
  "Taurus": [
    "Saturn grounds your ambitions like deep roots anchoring a mighty tree, ensuring your success grows steadily and endures.",
    "Your professional approach mirrors the patient craftsperson, building your career one careful, deliberate stroke at a time.",
    "In the workplace, you are the foundation stone, providing stability and reliability that others can build upon."
  ],
  "Gemini": [
    "Mercury quickens your professional communication like wind carrying seeds across fertile fields of opportunity.",
    "Your career thrives on variety and connection, like a skilled weaver creating intricate patterns from diverse threads.",
    "In work, you are the messenger, bridging gaps between ideas and turning conversations into collaborations."
  ],
  "Cancer": [
    "Saturn nurtures your professional growth like moonlight feeding the tides, bringing intuitive wisdom to strategic decisions.",
    "Your career blossoms when you honor your protective instincts, creating environments where others can flourish and grow.",
    "In the workplace, you are the guardian of culture, ensuring that human values remain at the heart of all endeavors."
  ],
  "Leo": [
    "The Sun illuminates your professional stage like a spotlight on opening night, revealing your natural leadership abilities.",
    "Your career radiates with creative fire, inspiring others and bringing warmth to even the coldest corporate corridors.",
    "In work, you are the director, orchestrating projects with the flair of one born to command respect and admiration."
  ],
  "Virgo": [
    "Mercury sharpens your professional focus like a master jeweler cutting precious stones to reveal their hidden brilliance.",
    "Your career benefits from your attention to detail, like a perfect mechanism where every small part serves the greater purpose.",
    "In the workplace, you are the craftsperson, transforming raw potential into polished excellence through dedicated effort."
  ],
  "Libra": [
    "Venus brings harmony to your professional relationships like a conductor uniting diverse instruments into beautiful music.",
    "Your career flourishes in partnerships and collaboration, like a garden where different plants grow stronger together.",
    "In work, you are the diplomat, finding elegant solutions that satisfy all parties and create lasting professional bonds."
  ],
  "Scorpio": [
    "Pluto transforms your professional landscape like volcanic activity creating new islands of opportunity from the depths.",
    "Your career benefits from your ability to see beneath surfaces, like a deep-sea explorer discovering hidden treasures.",
    "In the workplace, you are the investigator, uncovering truths and solutions that others might never think to seek."
  ],
  "Sagittarius": [
    "Jupiter expands your professional horizons like a telescope revealing distant galaxies of untapped potential.",
    "Your career thrives on exploration and learning, like a ship sailing toward territories marked only as 'Here be dragons.'",
    "In work, you are the adventurer, bringing enthusiasm and philosophical insight to every professional expedition."
  ],
  "Capricorn": [
    "Saturn rewards your professional discipline like time itself, slowly but surely elevating you to positions of lasting authority.",
    "Your career climbs steadily upward like a master mountaineer, each achievement a carefully planned step toward the summit.",
    "In the workplace, you are the architect, designing structures of success that will stand long after others have crumbled."
  ],
  "Aquarius": [
    "Uranus electrifies your professional sphere like lightning illuminating new pathways through the landscape of innovation.",
    "Your career benefits from your unique perspective, like a scientist discovering new elements that change everything.",
    "In work, you are the inventor, creating solutions and systems that serve not just today's needs but tomorrow's possibilities."
  ],
  "Pisces": [
    "Neptune inspires your professional creativity like morning mist carrying dreams into the realm of practical manifestation.",
    "Your career flows best when aligned with your deeper purpose, like a river that finds the most natural path to the sea.",
    "In the workplace, you are the healer, bringing compassion and intuitive wisdom to every professional interaction."
  ]
};

const growthThemes = {
  "Aries": [
    "Pluto ignites transformation in your soul like a phoenix preparing for rebirth, burning away what no longer serves your highest self. Your spiritual journey requires the courage to face your shadows and emerge victorious, carrying the wisdom earned through battle with your own limitations."
  ],
  "Taurus": [
    "Neptune dissolves the boundaries of your material focus, like spring rain awakening seeds that have waited patiently in dark earth. Your spiritual growth comes through learning to flow with change while maintaining your essential stability, like a tree that bends with the wind but never breaks."
  ],
  "Gemini": [
    "Pluto transforms your mental landscape like a master librarian reorganizing the cosmos, helping you distinguish between knowledge and wisdom. Your spiritual path involves learning to quiet the constant chatter of thoughts and listen instead to the deeper voice of intuitive understanding."
  ],
  "Cancer": [
    "Neptune blesses your emotional depths with mystical understanding, like moonbeams penetrating the surface of a sacred lake. Your spiritual growth comes through honoring your sensitivity as a superpower, learning to protect your energy while remaining open to the flow of universal love."
  ],
  "Leo": [
    "Pluto reshapes your ego like a master sculptor revealing the divine artwork hidden within the marble of personality. Your spiritual journey involves learning that true leadership serves others, and that the brightest light shines when it illuminates the path for fellow travelers."
  ],
  "Virgo": [
    "Neptune softens your critical edges like morning dew gentling the harsh lines of night shadows. Your spiritual growth comes through accepting imperfection as part of the divine plan, understanding that flaws are simply unfinished masterpieces waiting for love's completion."
  ],
  "Libra": [
    "Pluto disrupts your need for external harmony, like an earthquake that reshapes the landscape to reveal new possibilities. Your spiritual path involves finding balance within yourself first, becoming the peace you seek to create in the world around you."
  ],
  "Scorpio": [
    "Neptune adds compassion to your transformative powers like light softening the edges of deep shadows. Your spiritual growth comes through learning that true power lies in vulnerability, and that the greatest mysteries are revealed to those who approach with an open heart."
  ],
  "Sagittarius": [
    "Pluto challenges your philosophical foundations like a wise teacher who questions everything to reveal deeper truths. Your spiritual journey involves discovering that the greatest adventures happen within, and that wisdom comes not from knowing all the answers but from asking better questions."
  ],
  "Capricorn": [
    "Neptune dissolves your rigid structures like gentle water reshaping ancient stone over centuries of patient persistence. Your spiritual growth comes through learning that some things cannot be built or earned—they can only be received through surrender to grace."
  ],
  "Aquarius": [
    "Pluto transforms your humanitarian ideals like lightning reshaping the very air it passes through. Your spiritual path involves learning that true revolution begins within, and that the world changes most profoundly when we embody the future we wish to create."
  ],
  "Pisces": [
    "Pluto grounds your mystical nature like an anchor helping a ship navigate between the spiritual and material realms. Your spiritual growth comes through learning to translate cosmic downloads into earthly action, becoming a bridge between heaven and earth."
  ]
};

const mantras = {
  "Aries": [
    "I am the fire that lights the way forward",
    "Courage flows through my veins like liquid starlight",
    "I embrace challenges as opportunities for growth",
    "My warrior spirit serves the highest good"
  ],
  "Taurus": [
    "I am grounded in love and rooted in abundance",
    "Patience reveals the perfect timing of all things",
    "I trust the steady rhythm of my heart's wisdom",
    "Beauty surrounds me and flows through me"
  ],
  "Gemini": [
    "I communicate with clarity and cosmic connection",
    "My mind is a bridge between earth and sky",
    "Curiosity opens doorways to infinite possibilities",
    "I speak my truth with winged words"
  ],
  "Cancer": [
    "I am safe in the embrace of cosmic love",
    "My intuition is a compass pointing toward home",
    "I nurture others and allow myself to be nurtured",
    "The moon's wisdom flows through my gentle heart"
  ],
  "Leo": [
    "I shine my light for the benefit of all beings",
    "My heart is a sun that never sets",
    "I lead with love and inspire through joy",
    "Confidence is my crown, worn with grace"
  ],
  "Virgo": [
    "I serve the world through perfect imperfection",
    "My careful attention creates miracles in details",
    "I am the healing hands of divine love",
    "Order and chaos dance together in my wisdom"
  ],
  "Libra": [
    "I am the harmony that brings all things into balance",
    "Beauty flows through me like sacred music",
    "I create peace wherever my presence is felt",
    "Justice and mercy unite in my understanding heart"
  ],
  "Scorpio": [
    "I transform darkness into light through fearless love",
    "My depths contain oceans of hidden treasures",
    "I trust the cycles of death and rebirth",
    "Truth reveals itself to my penetrating vision"
  ],
  "Sagittarius": [
    "I am an arrow of truth shot from the bow of wisdom",
    "Adventure calls and I answer with an open heart",
    "My spirit soars beyond all limitations",
    "Freedom is my birthright, wisdom my compass"
  ],
  "Capricorn": [
    "I climb mountains of possibility with steady determination",
    "Time is my ally in building lasting legacy",
    "I am the bridge between dreams and achievement",
    "Authority flows through me in service to others"
  ],
  "Aquarius": [
    "I am a vessel for the future's highest possibilities",
    "Innovation flows through me like electricity through water",
    "My uniqueness serves the collective good",
    "I am the change I wish to see in the world"
  ],
  "Pisces": [
    "I swim in oceans of infinite compassion",
    "My dreams are doorways to divine reality",
    "I trust the flow of cosmic currents",
    "Love dissolves all boundaries in my understanding"
  ]
};

const influences = {
  "Aries": ["Mars Energy", "Moon Wisdom", "Solar Power"],
  "Taurus": ["Venus Love", "Earth Grounding", "Lunar Cycles"],
  "Gemini": ["Mercury Communication", "Air Element", "Dual Nature"],
  "Cancer": ["Lunar Influence", "Water Flow", "Emotional Tides"],
  "Leo": ["Solar Radiance", "Fire Spirit", "Heart Power"],
  "Virgo": ["Mercury Precision", "Earth Stability", "Healing Energy"],
  "Libra": ["Venus Harmony", "Air Balance", "Justice Current"],
  "Scorpio": ["Pluto Transformation", "Water Depths", "Phoenix Fire"],
  "Sagittarius": ["Jupiter Expansion", "Fire Adventure", "Wisdom Seeking"],
  "Capricorn": ["Saturn Structure", "Earth Foundation", "Mountain Strength"],
  "Aquarius": ["Uranus Innovation", "Air Freedom", "Electric Vision"],
  "Pisces": ["Neptune Dreams", "Water Compassion", "Mystical Flow"]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateHoroscope(sign: ZodiacSign): Horoscope {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const title = `${sign.symbol} ${sign.name} – Daily Horoscope for ${today}`;
  
  const content = [
    getRandomElement(emotionalThemes[sign.name as keyof typeof emotionalThemes]),
    getRandomElement(relationshipThemes[sign.name as keyof typeof relationshipThemes]),
    getRandomElement(careerThemes[sign.name as keyof typeof careerThemes]),
    getRandomElement(growthThemes[sign.name as keyof typeof growthThemes])
  ];
  
  const mantra = getRandomElement(mantras[sign.name as keyof typeof mantras]);
  const signInfluences = influences[sign.name as keyof typeof influences];
  
  return {
    title,
    content,
    mantra,
    influences: signInfluences
  };
}
