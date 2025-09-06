import { ZodiacSign } from "./zodiacData";
import { AstrologicalProfile, moonPhaseThemes } from "./astroCalculations";
import { getRandomTarotCard, TarotCard } from "./tarotCards";

export interface Horoscope {
  title: string;
  content: string[];
  mantra: string;
  influences: string[];
  tarotCard?: TarotCard;
  moonGuidance?: string;
}

const emotionalThemes = {
  "Aries": [
    "Today you feel as brave as a superhero! Your heart is full of exciting energy, like a bouncing ball that never stops moving.",
    "You're feeling strong and ready for adventure today, like a knight on a magical quest to help your friends.",
    "The moon is sending you special courage powers today, making you feel like you can do anything you set your mind to!"
  ],
  "Taurus": [
    "You feel calm and happy today, like a cozy bear in a warm cave full of your favorite snacks and toys.",
    "The moon is giving you extra patience today, like when you're building the most amazing tower with blocks.",
    "Today your heart feels like a beautiful garden where all the flowers are blooming just for you!"
  ],
  "Gemini": [
    "Your brain is buzzing with fun ideas today, like a busy bee flying from flower to flower collecting sweet honey!",
    "Today you might feel happy one minute and excited the next - that's okay! You're like a rainbow with lots of beautiful colors.",
    "Your thoughts are dancing around like butterflies in a magical garden, bringing you lots of creative ideas!"
  ],
  "Cancer": [
    "Today you're feeling extra caring, like a mama bear protecting her cubs or a superhero looking after everyone!",
    "Your heart is like a lighthouse that helps everyone feel safe and loved, especially your family and friends.",
    "The moon is wrapping you in a cozy blanket of love today, making you feel warm and special inside."
  ],
  "Leo": [
    "Today you shine as bright as the sun! Everyone around you feels happy because of your amazing, cheerful energy.",
    "You feel like a king or queen today, wearing an invisible crown that makes you feel confident and special.",
    "Your spirit is soaring high like a beautiful eagle, and you feel proud of all the wonderful things you can do!"
  ],
  "Virgo": [
    "Today you're like a helpful robot that fixes everything perfectly! You love making things neat and helping others.",
    "The moon is helping you see things clearly, like when you clean your glasses and everything looks super sharp!",
    "Your heart is like a magical garden where you plant seeds of kindness that grow into beautiful friendships."
  ],
  "Libra": [
    "Today you're like a peace-making superhero who helps everyone get along and feel happy together!",
    "The moon is helping you balance everything perfectly, like when you ride a bike without wobbling.",
    "You move through today like a graceful dancer, making everything around you feel beautiful and fair."
  ],
  "Scorpio": [
    "Today you're like a detective with super powers, able to figure out mysteries and understand things deeply!",
    "The moon is helping you transform and grow, like a caterpillar becoming a beautiful butterfly.",
    "Your special intuition is working extra strong today, like having magical powers that help you know things!"
  ],
  "Sagittarius": [
    "Today you feel like an explorer ready for the biggest adventure ever! Your heart is excited to discover new things.",
    "The moon is lighting up your path like a magical flashlight, helping you find amazing new adventures!",
    "Your happy thoughts are flying high like a superhero, bringing you lots of dreams and exciting possibilities!"
  ],
  "Capricorn": [
    "Today you feel strong and steady like a mountain that can handle anything! You're really good at reaching your goals.",
    "The moon is shining on your path like a magical star, showing you the smart way to do things.",
    "Your heart is building amazing castles out of your dreams, one magical block at a time!"
  ],
  "Aquarius": [
    "Today you're buzzing with creative energy like a friendly robot full of amazing ideas to help everyone!",
    "The moon is showing off your special uniqueness, like colorful northern lights dancing in the sky just for you!",
    "Your heart is creating the most fantastic ideas for the future, like an inventor building tomorrow's coolest inventions!"
  ],
  "Pisces": [
    "Today you're swimming in an ocean of imagination, collecting starlight and moon magic in your kind heart!",
    "The moon is blending your dreams with reality like the most beautiful painting with all your favorite colors.",
    "Your magical intuition is flowing like a gentle river, bringing you special messages and wonderful feelings!"
  ]
};

const relationshipThemes = {
  "Aries": [
    "Today you're an amazing friend who makes everyone feel excited and happy, like the first day of summer vacation!",
    "You bring lots of energy to your friendships, like a puppy who's always ready to play and have fun with everyone.",
    "You're brave when making new friends, always ready to say hi and include others in your games and adventures!"
  ],
  "Taurus": [
    "You're the most loyal friend ever, like a faithful dog who never leaves your side and always makes you feel loved!",
    "Your friendships grow stronger every day, like planting seeds that turn into the most beautiful flower garden.",
    "Friends know they can always count on you, like having a cozy blanket that's always there when they need comfort."
  ],
  "Gemini": [
    "You're the friend who always has the funniest jokes and the most interesting stories to share with everyone!",
    "You love talking and sharing ideas with friends, like having the best show-and-tell every single day.",
    "You're amazing at making friends laugh and feel special with all your creative stories and fun conversations!"
  ],
  "Cancer": [
    "You're the caring friend who always makes sure everyone feels included and loved, like a gentle hug in human form!",
    "You create the safest, most comfortable friendships where everyone can be themselves and feel protected.",
    "You remember all the special moments with friends, like keeping a treasure box full of happy memories!"
  ],
  "Leo": [
    "You're the friend who makes everyone feel like stars! You love giving compliments and making others feel super special.",
    "Your heart is so generous, like the sun that gives warmth and happiness to everyone around you.",
    "You create the most fun friendships that shine bright like a rainbow after a storm!"
  ],
  "Virgo": [
    "You're the friend who always helps others and remembers exactly what makes each person happy!",
    "You show you care by doing lots of little helpful things, like a fairy godparent spreading kindness everywhere.",
    "Friends love you because you're always there to help fix problems and make everything better!"
  ],
  "Libra": [
    "You're the peacemaker friend who helps everyone get along and makes sure no one feels left out!",
    "You love creating beautiful, fair friendships where everyone feels equal and valued.",
    "You're amazing at helping friends solve problems and understand each other, like a friendship superhero!"
  ],
  "Scorpio": [
    "You're the friend who creates the deepest, most loyal friendships that last forever and ever!",
    "Your friendship burns bright like the most amazing fireworks, full of excitement and wonder.",
    "You turn regular friendships into magical connections where you understand each other perfectly!"
  ],
  "Sagittarius": [
    "You're the adventurous friend who always suggests the coolest games and most exciting explorations!",
    "Your friendships are like amazing adventures where you discover new things and have the best times together.",
    "You love asking big questions with friends and dreaming up the most fantastic possibilities together!"
  ],
  "Capricorn": [
    "You build the strongest friendships ever, like constructing the most amazing fort that will last forever!",
    "Your friendships get better and better over time, like collecting the most precious treasures year after year.",
    "You help your friends reach their biggest dreams, like a guide helping them climb the highest mountains!"
  ],
  "Aquarius": [
    "You create the most unique and special friendships that are unlike anyone else's - totally original and amazing!",
    "Your friendships help make the world a better place by bringing people together in new and wonderful ways.",
    "You see the most fantastic possibilities for friendship that other people haven't even thought of yet!"
  ],
  "Pisces": [
    "You're the most caring friend who can feel what others are feeling and always knows just how to help!",
    "Your friendship flows like a gentle river, bringing comfort and healing dreams to everyone you meet.",
    "You understand your friends in magical ways, even without words, like you can read their hearts!"
  ]
};

const careerThemes = {
  "Aries": [
    "At school today, you're like a superhero student ready to tackle any challenge with courage and excitement!",
    "You're blazing through your activities and homework like a shooting star, doing amazing things everywhere you go.",
    "You're the brave leader in group projects, always ready to try new things and help your team succeed!"
  ],
  "Taurus": [
    "At school, you're like a steady, strong tree that grows a little bit better every single day through hard work!",
    "You're patient and careful with your work, like an artist creating a masterpiece one beautiful stroke at a time.",
    "Your classmates can always count on you to be reliable and help keep everyone organized and on track!"
  ],
  "Gemini": [
    "At school, you're amazing at explaining things to classmates and sharing ideas like seeds of knowledge everywhere!",
    "You love trying different subjects and activities, like a colorful butterfly visiting all the most interesting flowers.",
    "You're the best at helping classmates understand each other and work together on cool projects!"
  ],
  "Cancer": [
    "At school, the moon helps you make smart decisions and understand things with your special intuition!",
    "You create the kindest classroom environment where everyone feels safe, happy, and ready to learn together.",
    "You're like the guardian of friendship, making sure everyone is included and that kindness comes first!"
  ],
  "Leo": [
    "At school, you shine like a star on stage! Everyone notices your natural leadership and creative talents.",
    "Your creative energy lights up every classroom and activity, inspiring your friends and teachers too!",
    "You're like a director of fun, organizing projects and activities that everyone wants to be part of!"
  ],
  "Virgo": [
    "At school, you have the sharpest focus, like a detective finding all the important details others might miss!",
    "You're amazing at paying attention to the little things that make big projects work perfectly together.",
    "You're like a master builder who turns rough ideas into polished, perfect finished work through careful attention!"
  ],
  "Libra": [
    "At school, you bring harmony to group work like a conductor making beautiful music with different instruments!",
    "You love working with others and make everything better through teamwork, like flowers growing stronger together.",
    "You're the peacemaker who finds fair solutions that make everyone happy and excited to work together!"
  ],
  "Scorpio": [
    "At school, you transform challenges into opportunities like a magician creating something amazing from nothing!",
    "You see things others can't, like a treasure hunter discovering hidden gems beneath the surface.",
    "You're like a detective who solves mysteries and finds answers that help everyone understand better!"
  ],
  "Sagittarius": [
    "At school, you're expanding your horizons like an astronaut discovering new planets full of amazing possibilities!",
    "You love exploring and learning new things, like a brave captain sailing to discover magical new lands.",
    "You're the adventurer who brings excitement and big questions to every subject and activity!"
  ],
  "Capricorn": [
    "At school, your hard work is rewarded like climbing a mountain - each step gets you higher toward your goals!",
    "You climb toward success steadily like a skilled mountain climber, carefully planning each step to the top.",
    "You're like an architect building your future, creating structures of learning that will last forever!"
  ],
  "Aquarius": [
    "At school, your unique ideas light up like lightning, showing everyone new and exciting ways to do things!",
    "You see things differently, like a scientist discovering amazing new things that help everyone understand better.",
    "You're the inventor creating solutions that help not just today, but make the future even more awesome!"
  ],
  "Pisces": [
    "At school, your creativity flows like magical morning mist that turns dreams into real, amazing projects!",
    "You do your best work when following your heart, like a gentle river flowing naturally toward the ocean.",
    "You're the healer of feelings, bringing kindness and understanding to every classroom and activity!"
  ]
};

const growthThemes = {
  "Aries": [
    "Today you're growing stronger inside, like a superhero learning new powers! You're becoming braver and wiser by facing challenges and learning from them. Remember, every challenge makes you more awesome!"
  ],
  "Taurus": [
    "You're growing like a beautiful garden, learning to be flexible and try new things while staying true to yourself. Like a strong tree that can dance in the wind but never falls down, you're learning to bend without breaking!"
  ],
  "Gemini": [
    "Your amazing brain is like a library getting reorganized with all the coolest books! You're learning the difference between just knowing facts and really understanding things. Sometimes it's good to quiet your busy thoughts and listen to your heart's wisdom too!"
  ],
  "Cancer": [
    "Your feelings are like a magical lake touched by moonlight, full of special understanding and wisdom! Your sensitivity is actually a superpower that helps you understand others. You're learning to protect your energy while still sharing your love with the world!"
  ],
  "Leo": [
    "You're like a beautiful sculpture being carved by a master artist, revealing the amazing leader inside you! You're learning that the best leaders help others shine too. Your light is brightest when you help your friends see how awesome they are!"
  ],
  "Virgo": [
    "You're learning to be gentler with yourself and others, like morning dew softening sharp edges. It's okay if things aren't perfect - sometimes the most beautiful things are the ones that are still growing and learning, just like you!"
  ],
  "Libra": [
    "Sometimes things get shaken up to show you new possibilities, like rearranging your room to make it even better! You're learning to find balance and peace inside yourself first, then you can share that peace with everyone around you!"
  ],
  "Scorpio": [
    "Your powerful abilities are being touched by gentle compassion, like soft light making shadows less scary. You're learning that being open and vulnerable actually makes you stronger, and the biggest mysteries reveal themselves to those with open hearts!"
  ],
  "Sagittarius": [
    "Like a wise teacher asking amazing questions, you're discovering deeper truths about yourself and the world! The biggest adventures happen inside your heart and mind. Real wisdom comes from asking great questions, not just knowing all the answers!"
  ],
  "Capricorn": [
    "Like gentle water slowly reshaping stone, you're learning to be more flexible and flowing. Some of the most beautiful things in life can't be built or earned - they're gifts that come when you open your heart to receive them!"
  ],
  "Aquarius": [
    "Your ideas about helping others are transforming like lightning that changes everything it touches! Real change starts inside you first. The world becomes better when you become the amazing future you dream about!"
  ],
  "Pisces": [
    "Your magical, dreamy nature is getting grounded like an anchor helping a ship stay steady in any weather. You're learning to take your beautiful dreams and make them real in the world, like building a bridge between your imagination and reality!"
  ]
};

const mantras = {
  "Aries": [
    "I am brave and strong like a superhero!",
    "I have courage that shines like the brightest stars",
    "Every challenge helps me grow bigger and stronger",
    "I use my brave heart to help others"
  ],
  "Taurus": [
    "I am loved and have everything I need",
    "Good things come to those who wait patiently",
    "I listen to my heart because it knows what's right",
    "I see and create beauty everywhere I go"
  ],
  "Gemini": [
    "I speak clearly and connect with everyone",
    "My mind is like a magical bridge full of ideas",
    "Being curious opens doors to amazing possibilities",
    "I share my truth with words that fly like butterflies"
  ],
  "Cancer": [
    "I am safe and loved by the whole universe",
    "My feelings help guide me like a magical compass",
    "I take care of others and let them take care of me",
    "The moon's love flows through my caring heart"
  ],
  "Leo": [
    "I shine my light to help everyone feel happy",
    "My heart is like the sun that always shines",
    "I lead with love and make others smile",
    "I wear my confidence like a beautiful crown"
  ],
  "Virgo": [
    "I help the world by doing my best, even if it's not perfect",
    "I notice small details that create big magic",
    "My hands heal and help with lots of love",
    "I can organize chaos and make everything better"
  ],
  "Libra": [
    "I bring harmony and balance to everything around me",
    "Beauty flows through me like the most wonderful music",
    "I create peace wherever I go",
    "I understand fairness and kindness go hand in hand"
  ],
  "Scorpio": [
    "I turn scary things into beautiful things with brave love",
    "My heart contains oceans full of hidden treasures",
    "I trust that endings lead to new beginnings",
    "I can see the truth that others might miss"
  ],
  "Sagittarius": [
    "I am like an arrow flying toward truth and wisdom",
    "Adventure calls and I answer with excitement",
    "My spirit can soar higher than any mountain",
    "I am free to explore with wisdom as my guide"
  ],
  "Capricorn": [
    "I climb mountains of possibility step by step",
    "Time helps me build amazing things that last",
    "I turn my dreams into real achievements",
    "I lead others with kindness and responsibility"
  ],
  "Aquarius": [
    "I help create the amazing future I dream about",
    "Creative ideas flow through me like magical electricity",
    "My uniqueness helps make the world better",
    "I become the positive changes I want to see"
  ],
  "Pisces": [
    "I swim in oceans of endless love and kindness",
    "My dreams are doorways to magical possibilities",
    "I trust the flow of life's magical currents",
    "Love helps me understand and connect with everyone"
  ]
};

const influences = {
  "Aries": ["Brave Heart", "Moon Magic", "Sun Power"],
  "Taurus": ["Love Energy", "Earth Strength", "Moon Hugs"],
  "Gemini": ["Chatty Magic", "Wind Whispers", "Twin Powers"],
  "Cancer": ["Moon Love", "Ocean Feelings", "Caring Magic"],
  "Leo": ["Sun Shine", "Fire Spirit", "Heart Magic"],
  "Virgo": ["Helper Magic", "Earth Wisdom", "Healing Hands"],
  "Libra": ["Peace Magic", "Balance Powers", "Fair Play"],
  "Scorpio": ["Change Magic", "Deep Feelings", "Phoenix Fire"],
  "Sagittarius": ["Adventure Magic", "Explorer Spirit", "Big Dreams"],
  "Capricorn": ["Builder Magic", "Mountain Strength", "Goal Power"],
  "Aquarius": ["Future Magic", "Freedom Wings", "Creative Sparks"],
  "Pisces": ["Dream Magic", "Ocean Love", "Gentle Flow"]
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

// Enhanced moon phase guidance
const moonPhaseGuidance = {
  "New Moon": "This is a time for setting intentions and planting seeds for the future. Your emotional energy is perfect for new beginnings and fresh starts. Trust your inner wisdom and embrace the blank canvas that lies before you.",
  "Waxing Crescent": "Your emotions are building momentum like a gentle wave. This is the perfect time to take small, consistent actions toward your dreams. Your patience and persistence will be rewarded.",
  "First Quarter": "You may feel some emotional tension as you push through challenges. This is normal - you're breaking through barriers to reach the next level. Stay strong and trust your ability to overcome obstacles.",
  "Waxing Gibbous": "Your emotional energy is almost at its peak. Fine-tune your approach and prepare for the culmination of your efforts. You're so close to your breakthrough - keep going!",
  "Full Moon": "Your emotions are at their most powerful and intense. This is a time of completion, celebration, and emotional release. Honor your feelings and let go of what no longer serves you.",
  "Waning Gibbous": "Your emotional energy is shifting toward gratitude and sharing your wisdom. This is a time to reflect on your growth and help others with what you've learned.",
  "Last Quarter": "Release what's holding you back emotionally. This is a time for forgiveness, letting go, and making space for new opportunities. Trust that endings lead to beautiful beginnings.",
  "Waning Crescent": "Your emotional energy is quiet and reflective. Rest, recharge, and connect with your inner wisdom. This peaceful time is preparing you for your next cycle of growth."
};

export function generatePersonalizedHoroscope(profile: AstrologicalProfile): Horoscope {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const title = `Your Personal Star Reading for ${today}`;
  
  // Combine influences from Sun, Moon, and Rising signs
  const sunTheme = getRandomElement(emotionalThemes[profile.sunSign.name as keyof typeof emotionalThemes]);
  const moonTheme = getRandomElement(relationshipThemes[profile.moonSign.name as keyof typeof relationshipThemes]);
  const risingTheme = getRandomElement(careerThemes[profile.risingSign.name as keyof typeof careerThemes]);
  const growthTheme = getRandomElement(growthThemes[profile.sunSign.name as keyof typeof growthThemes]);
  
  // Add moon phase influence
  const moonPhaseTheme = moonPhaseThemes[profile.moonPhase.name as keyof typeof moonPhaseThemes];
  
  // Get a random tarot card for emotional/mental guidance
  const tarotCard = getRandomTarotCard();
  
  // Get enhanced moon guidance
  const moonGuidance = moonPhaseGuidance[profile.moonPhase.name as keyof typeof moonPhaseGuidance] || moonPhaseGuidance["New Moon"];
  
  const content = [
    `✨ **Your ${profile.sunSign.name} Sun Energy**: ${sunTheme}`,
    `🌙 **Your ${profile.moonSign.name} Moon Feelings**: ${moonTheme}`,
    `🌅 **Your ${profile.risingSign.name} Rising Power**: ${risingTheme}`,
    `${profile.moonPhase.emoji} **${profile.moonPhase.name} Magic**: ${moonPhaseTheme.energy}`,
    `💫 **Your Growth Journey**: ${growthTheme}`,
    `🎯 **Moon Phase Action**: ${moonPhaseTheme.action}`,
    `🔮 **Tarot Card Guidance**: The ${tarotCard.name} brings you this message: ${tarotCard.emotionalGuidance}`,
    `🌙 **Moon Phase Emotional Guide**: ${moonGuidance}`,
    `💪 **Mental Strength**: ${tarotCard.mentalEncouragement}`
  ];
  
  // Combine mantras from different signs
  const sunMantra = getRandomElement(mantras[profile.sunSign.name as keyof typeof mantras]);
  const moonMantra = getRandomElement(mantras[profile.moonSign.name as keyof typeof mantras]);
  const combinedMantra = `${sunMantra} Your ${profile.moonSign.name} moon adds: ${moonMantra.toLowerCase()}`;
  
  // Combine influences
  const allInfluences = [
    ...influences[profile.sunSign.name as keyof typeof influences],
    ...influences[profile.moonSign.name as keyof typeof influences].slice(0, 1),
    ...influences[profile.risingSign.name as keyof typeof influences].slice(0, 1),
    profile.moonPhase.energy
  ];
  
  return {
    title,
    content,
    mantra: combinedMantra,
    influences: allInfluences,
    tarotCard,
    moonGuidance
  };
}
