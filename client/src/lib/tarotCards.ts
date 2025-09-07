export interface TarotCard {
  name: string;
  suit?: string;
  number?: number;
  arcana: 'Major' | 'Minor';
  keywords: string[];
  meaningUpright: string;
  meaningReversed?: string;
  emotionalGuidance: string;
  mentalEncouragement: string;
  childMessage: string;
  imageUrl: string;
}

export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    arcana: "Major",
    keywords: ["New beginnings", "Innocence", "Adventure"],
    meaningUpright: "The Fool represents new beginnings and the start of your spiritual journey. This card encourages you to take a leap of faith.",
    meaningReversed: "Recklessness, taken advantage of, inconsideration",
    emotionalGuidance: "Trust your heart and embrace the unknown with childlike wonder. Every ending is a new beginning waiting to unfold.",
    mentalEncouragement: "Your open mind is your greatest strength. Approach challenges with curiosity rather than fear, and watch how magical solutions appear.",
    childMessage: "Just like starting a new adventure, you're brave enough to try new things and explore the world around you!",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Magician",
    arcana: "Major", 
    keywords: ["Manifestation", "Power", "Skill"],
    meaningUpright: "The Magician represents manifestation and the power to create your reality. You have all the tools you need to succeed.",
    meaningReversed: "Manipulation, poor planning, unused talents",
    emotionalGuidance: "You are a powerful creator of your own destiny. Channel your emotions into positive action and watch your dreams come to life.",
    mentalEncouragement: "Your mind is incredibly powerful and focused. Trust in your abilities and use your talents to manifest the life you desire.",
    childMessage: "You have amazing talents and abilities! Like a magician, you can make wonderful things happen when you believe in yourself.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The High Priestess",
    arcana: "Major",
    keywords: ["Intuition", "Mystery", "Subconscious"],
    meaningUpright: "The High Priestess represents intuition and inner wisdom. Trust your inner voice and pay attention to your dreams.",
    meaningReversed: "Secrets, disconnected from intuition, withdrawal",
    emotionalGuidance: "Your emotional intelligence is incredibly deep. Trust the feelings that come from your soul - they're guiding you toward truth.",
    mentalEncouragement: "Your intuitive mind sees what others cannot. Listen to that quiet inner voice - it holds the answers you seek.",
    childMessage: "You have a special gift for knowing things in your heart. Trust your feelings - they often know what's right before your mind does!",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "The Empress",
    arcana: "Major",
    keywords: ["Fertility", "Creativity", "Nature"],
    meaningUpright: "The Empress represents creativity, fertility, and abundance. You are in a phase of growth and creative expansion.",
    meaningReversed: "Creative block, dependence on others",
    emotionalGuidance: "Nurture yourself and others with the same love you'd give to a beautiful garden. Your caring nature is a gift to the world.",
    mentalEncouragement: "Your creative mind is blooming with possibilities. Trust your artistic vision and let your imagination flow freely.",
    childMessage: "You're like a gardener who helps beautiful things grow! Your creativity and kindness make the world a more wonderful place.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Emperor",
    arcana: "Major",
    keywords: ["Authority", "Structure", "Leadership"],
    meaningUpright: "The Emperor represents leadership and structure. You have the power to create order and achieve your goals through discipline.",
    meaningReversed: "Tyranny, rigidity, coldness",
    emotionalGuidance: "Find strength in self-discipline while remaining compassionate. True leadership comes from serving others with wisdom and kindness.",
    mentalEncouragement: "Your strategic mind can solve any challenge. Trust your ability to lead and make decisions that benefit everyone involved.",
    childMessage: "You have natural leadership abilities! Like a wise ruler, you can help organize things and take care of others around you.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "The Hierophant",
    arcana: "Major",
    keywords: ["Tradition", "Wisdom", "Teaching"],
    meaningUpright: "The Hierophant represents tradition and spiritual wisdom. Seek guidance from those who have walked the path before you.",
    meaningReversed: "Personal beliefs, freedom, challenging the status quo",
    emotionalGuidance: "Honor the wisdom of your ancestors while staying true to your own path. Tradition can guide you without limiting your growth.",
    mentalEncouragement: "You have valuable wisdom to share with others. Your knowledge and experience can light the way for those who follow.",
    childMessage: "You're both a wonderful learner and teacher! You love learning from wise people and sharing what you know with friends.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The Lovers",
    arcana: "Major",
    keywords: ["Love", "Choice", "Union"],
    meaningUpright: "The Lovers represents love and important choices. You are called to make decisions based on your values and desires.",
    meaningReversed: "Disharmony, imbalance, misalignment of values",
    emotionalGuidance: "Open your heart to love in all its forms. Whether romantic, friendship, or self-love, you deserve deep connection and happiness.",
    mentalEncouragement: "Trust your heart when making important choices. Your values and intuition will guide you to decisions that bring lasting joy.",
    childMessage: "You have so much love to give and receive! Your friendships and family relationships are precious treasures that make life magical.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Chariot",
    arcana: "Major",
    keywords: ["Control", "Willpower", "Success"],
    meaningUpright: "The Chariot represents triumph and success through determination. You have the willpower to overcome any obstacle.",
    meaningReversed: "Lack of control, lack of direction, aggression",
    emotionalGuidance: "Balance your emotions like a skilled charioteer. When you master your inner world, you can achieve anything in the outer world.",
    mentalEncouragement: "Your determination is unstoppable. Focus your mind on your goals and drive forward with confidence and purpose.",
    childMessage: "You're incredibly determined! Like a brave chariot driver, you can steer through any challenge and reach your dreams.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Strength",
    arcana: "Major",
    keywords: ["Courage", "Inner strength", "Compassion"],
    meaningUpright: "Strength represents inner courage and the power of compassion. True strength comes from gentleness and understanding.",
    meaningReversed: "Self doubt, low energy, raw emotion",
    emotionalGuidance: "Your gentle strength can tame any wild emotion. Approach challenges with love and patience rather than force.",
    mentalEncouragement: "You possess incredible inner strength and wisdom. Trust your ability to handle any situation with grace and compassion.",
    childMessage: "You're stronger than you know! Your kindness and gentle heart are actually your greatest superpowers.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Hermit",
    arcana: "Major",
    keywords: ["Soul searching", "Inner guidance", "Enlightenment"],
    meaningUpright: "The Hermit represents soul searching and inner wisdom. Take time for introspection and listen to your inner voice.",
    meaningReversed: "Isolation, loneliness, withdrawal",
    emotionalGuidance: "Sometimes solitude brings the greatest insights. Use quiet moments to reconnect with your true self and deepest desires.",
    mentalEncouragement: "Your inner light can illuminate any darkness. Trust the wisdom you find in quiet reflection and contemplation.",
    childMessage: "Sometimes you need quiet time to think and dream. Your imagination and inner wisdom help you understand the world better!",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "Wheel of Fortune",
    arcana: "Major",
    keywords: ["Change", "Cycles", "Destiny"],
    meaningUpright: "The Wheel of Fortune represents change and cycles. What goes down must come up - good fortune is coming your way.",
    meaningReversed: "Bad luck, lack of control, clinging to control",
    emotionalGuidance: "Embrace the natural cycles of life. Every low moment is followed by a high one - trust that good times are coming.",
    mentalEncouragement: "You are exactly where you need to be in life's grand design. Trust the process and know that positive change is on the horizon.",
    childMessage: "Life is like a magical wheel that keeps turning! Even when things seem difficult, wonderful surprises are always coming your way.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Justice",
    arcana: "Major",
    keywords: ["Fairness", "Truth", "Balance"],
    meaningUpright: "Justice represents fairness and balance. The truth will be revealed and justice will be served in your situation.",
    meaningReversed: "Unfairness, lack of accountability, dishonesty",
    emotionalGuidance: "Seek emotional balance and fairness in all your relationships. Your integrity and honesty will lead to positive outcomes.",
    mentalEncouragement: "Your sense of justice and fairness is a guiding light. Trust your ability to see truth and make balanced decisions.",
    childMessage: "You have a strong sense of right and wrong! Like a wise judge, you always try to be fair and help others do the right thing.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Hanged Man",
    arcana: "Major",
    keywords: ["Surrender", "Waiting", "Sacrifice"],
    meaningUpright: "The Hanged Man represents surrender and new perspectives. Sometimes you must let go to move forward.",
    meaningReversed: "Delays, resistance, stalling",
    emotionalGuidance: "Release the need to control every outcome. Sometimes the best action is patient acceptance and trust in divine timing.",
    mentalEncouragement: "Your willingness to see things differently opens up new possibilities. Embrace fresh perspectives with an open mind.",
    childMessage: "Sometimes looking at things upside down helps you see them in a whole new way! Patience and different viewpoints are magical tools.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Death",
    arcana: "Major",
    keywords: ["Transformation", "Endings", "Rebirth"],
    meaningUpright: "Death represents transformation and new beginnings. An old phase of your life is ending to make way for something better.",
    meaningReversed: "Resistance to change, personal transformation, inner purging",
    emotionalGuidance: "Allow yourself to grieve what's ending while celebrating what's beginning. Transformation is a natural part of growth.",
    mentalEncouragement: "Your ability to adapt and transform is remarkable. Embrace change as an opportunity for growth and renewal.",
    childMessage: "Just like a caterpillar becomes a beautiful butterfly, you're always growing and changing into something even more wonderful!",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Temperance",
    arcana: "Major",
    keywords: ["Balance", "Moderation", "Patience"],
    meaningUpright: "Temperance represents balance and moderation. Find the middle path and blend opposing forces harmoniously.",
    meaningReversed: "Imbalance, excess, self-healing",
    emotionalGuidance: "Emotional balance brings lasting peace. Practice patience and moderation in all your feelings and reactions.",
    mentalEncouragement: "Your ability to find balance and compromise is a true gift. Use this skill to create harmony in all areas of life.",
    childMessage: "You're wonderful at helping things balance perfectly! Like mixing colors to make beautiful art, you know how to blend different ideas.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "The Devil",
    arcana: "Major",
    keywords: ["Bondage", "Materialism", "Liberation"],
    meaningUpright: "The Devil represents bondage and the need for liberation. You have the power to break free from what binds you.",
    meaningReversed: "Releasing limiting beliefs, exploring dark thoughts, detachment",
    emotionalGuidance: "Recognize the patterns that no longer serve you. Your emotional freedom is within reach - you just need to claim it.",
    mentalEncouragement: "You are stronger than any limitation or addiction. Your mind has the power to break free and create positive change.",
    childMessage: "Sometimes we feel stuck, but you always have the power to make better choices! You're stronger than any problem you face.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The Tower",
    arcana: "Major",
    keywords: ["Sudden change", "Awakening", "Liberation"],
    meaningUpright: "The Tower represents sudden change and awakening. Old structures must fall to make way for new growth.",
    meaningReversed: "Personal transformation, fear of change, averting disaster",
    emotionalGuidance: "Though change can feel scary, it's clearing space for something much better. Trust that this upheaval serves your highest good.",
    mentalEncouragement: "Your resilience in the face of change is remarkable. Use this as an opportunity to rebuild something even better.",
    childMessage: "Sometimes things need to change quickly, like cleaning your room to make space for new toys! Change helps make room for better things.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Star",
    arcana: "Major",
    keywords: ["Hope", "Faith", "Inspiration"],
    meaningUpright: "The Star represents hope and inspiration. After hardship comes healing and renewed faith in the future.",
    meaningReversed: "Loss of faith, despair, self-trust",
    emotionalGuidance: "Your emotional healing is supported by the universe. Trust that hope is justified and better times are truly coming.",
    mentalEncouragement: "You are a beacon of hope and inspiration to others. Your positive vision for the future will manifest in reality.",
    childMessage: "You shine bright like a star and bring hope to everyone around you! Your dreams and wishes are like stars guiding you to happiness.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "The Moon",
    arcana: "Major",
    keywords: ["Illusion", "Intuition", "Mystery"],
    meaningUpright: "The Moon represents illusion and the need to trust your intuition. Not everything is as it seems on the surface.",
    meaningReversed: "Release of fear, repressed emotion, inner confusion",
    emotionalGuidance: "Trust your emotional instincts even when logic says otherwise. Your feelings are picking up on important truths.",
    mentalEncouragement: "Your intuitive mind sees through illusions to the truth beneath. Trust your psychic insights and inner knowing.",
    childMessage: "Just like the moon lights up the night, your intuition helps you see things that others might miss. Trust your special inner knowing!",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Sun",
    arcana: "Major",
    keywords: ["Joy", "Success", "Vitality"],
    meaningUpright: "The Sun represents joy, success, and vitality. This is a time of happiness and positive energy in your life.",
    meaningReversed: "Inner child, feeling down, overly optimistic",
    emotionalGuidance: "Let your inner child come out to play. Joy and optimism are your natural state - embrace the happiness that's yours.",
    mentalEncouragement: "Your positive mindset attracts success and happiness. Continue to shine your light brightly - the world needs your joy.",
    childMessage: "Just like the sun brings warmth and joy to everyone, you bring happiness wherever you go! Your smile can brighten anyone's day.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "Judgement",
    arcana: "Major",
    keywords: ["Rebirth", "Awakening", "Calling"],
    meaningUpright: "Judgement represents rebirth and spiritual awakening. You are being called to a higher purpose in life.",
    meaningReversed: "Self-doubt, inner critic, ignoring the call",
    emotionalGuidance: "Forgive yourself and others as you move into this new phase. Your heart is opening to greater love and compassion.",
    mentalEncouragement: "You are awakening to your true calling and purpose. Trust the voice within that's guiding you toward your destiny.",
    childMessage: "You're growing into exactly who you're meant to be! Like a beautiful butterfly, you're transforming into your best self every day.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The World",
    arcana: "Major",
    keywords: ["Completion", "Achievement", "Success"],
    meaningUpright: "The World represents completion and achievement. You have successfully completed a major cycle in your life.",
    meaningReversed: "Personal closure, short-cut to success, stagnation",
    emotionalGuidance: "Celebrate your emotional growth and the wisdom you've gained. You are whole, complete, and ready for new adventures.",
    mentalEncouragement: "Your hard work and dedication have paid off beautifully. You've achieved something truly meaningful - be proud of yourself.",
    childMessage: "You've accomplished something amazing! Like completing a puzzle, you've put all the pieces together to create something wonderful.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  }
];

// Minor Arcana Suits
const suits = ['Cups', 'Wands', 'Swords', 'Pentacles'];
const suitElements = {
  'Cups': 'Water',
  'Wands': 'Fire', 
  'Swords': 'Air',
  'Pentacles': 'Earth'
};

export const minorArcana: TarotCard[] = [];

// Generate Minor Arcana cards
suits.forEach(suit => {
  // Court cards
  const courtCards = [
    { name: 'Page', keywords: ['New beginnings', 'Messages', 'Learning'] },
    { name: 'Knight', keywords: ['Action', 'Adventure', 'Impulsiveness'] },
    { name: 'Queen', keywords: ['Nurturing', 'Intuition', 'Compassion'] },
    { name: 'King', keywords: ['Leadership', 'Mastery', 'Control'] }
  ];

  courtCards.forEach(court => {
    minorArcana.push({
      name: `${court.name} of ${suit}`,
      suit,
      arcana: 'Minor',
      keywords: court.keywords,
      meaningUpright: `The ${court.name} of ${suit} represents ${court.keywords.join(', ').toLowerCase()}.`,
      emotionalGuidance: "Trust your emotions and let them guide you toward positive action.",
      mentalEncouragement: "Your mind is clear and focused on what matters most.",
      childMessage: `You have wonderful ${court.keywords[0].toLowerCase()} energy that helps you grow and learn!`,
      imageUrl: `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop`
    });
  });

  // Number cards (Ace through 10)
  for (let i = 1; i <= 10; i++) {
    const cardName = i === 1 ? 'Ace' : i.toString();
    minorArcana.push({
      name: `${cardName} of ${suit}`,
      suit,
      number: i,
      arcana: 'Minor',
      keywords: [`${suitElements[suit as keyof typeof suitElements]} energy`, 'Growth', 'Progress'],
      meaningUpright: `The ${cardName} of ${suit} brings ${suitElements[suit as keyof typeof suitElements].toLowerCase()} energy and new opportunities.`,
      emotionalGuidance: "Stay open to the flow of emotions and let them teach you.",
      mentalEncouragement: "Your thoughts are aligned with positive outcomes.",
      childMessage: `This card brings you ${suitElements[suit as keyof typeof suitElements].toLowerCase()} magic to help you on your journey!`,
      imageUrl: `https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop`
    });
  }
});

export const allTarotCards = [...majorArcana, ...minorArcana];

export function getRandomTarotCard(): TarotCard {
  return allTarotCards[Math.floor(Math.random() * allTarotCards.length)];
}

export function getTarotCardByName(name: string): TarotCard | undefined {
  return allTarotCards.find(card => card.name.toLowerCase() === name.toLowerCase());
}
