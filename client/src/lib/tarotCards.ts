export interface TarotCard {
  name: string;
  suit?: string;
  number?: number;
  arcana: 'Major' | 'Minor';
  keywords: string[];
  meaningUpright: string;
  emotionalGuidance: string;
  mentalEncouragement: string;
  imageUrl: string;
}

export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    arcana: "Major",
    keywords: ["New beginnings", "Innocence", "Adventure"],
    meaningUpright: "The Fool represents new beginnings and the start of your spiritual journey. This card encourages you to take a leap of faith.",
    emotionalGuidance: "Trust your heart and embrace the unknown with childlike wonder. Every ending is a new beginning waiting to unfold.",
    mentalEncouragement: "Your open mind is your greatest strength. Approach challenges with curiosity rather than fear, and watch how magical solutions appear.",
    imageUrl: "/tarot/the-fool.jpg"
  },
  {
    name: "The Magician",
    arcana: "Major", 
    keywords: ["Manifestation", "Power", "Skill"],
    meaningUpright: "The Magician represents manifestation and the power to create your reality. You have all the tools you need to succeed.",
    emotionalGuidance: "You are a powerful creator of your own destiny. Channel your emotions into positive action and watch your dreams come to life.",
    mentalEncouragement: "Your mind is incredibly powerful and focused. Trust in your abilities and use your talents to manifest the life you desire.",
    imageUrl: "/tarot/the-magician.jpg"
  },
  {
    name: "The High Priestess",
    arcana: "Major",
    keywords: ["Intuition", "Mystery", "Subconscious"],
    meaningUpright: "The High Priestess represents intuition and inner wisdom. Trust your inner voice and pay attention to your dreams.",
    emotionalGuidance: "Your emotional intelligence is incredibly deep. Trust the feelings that come from your soul - they're guiding you toward truth.",
    mentalEncouragement: "Your intuitive mind sees what others cannot. Listen to that quiet inner voice - it holds the answers you seek.",
    imageUrl: "/tarot/the-high-priestess.jpg"
  },
  {
    name: "The Empress",
    arcana: "Major",
    keywords: ["Fertility", "Creativity", "Nature"],
    meaningUpright: "The Empress represents creativity, fertility, and abundance. You are in a phase of growth and creative expansion.",
    emotionalGuidance: "Nurture yourself and others with the same love you'd give to a beautiful garden. Your caring nature is a gift to the world.",
    mentalEncouragement: "Your creative mind is blooming with possibilities. Trust your artistic vision and let your imagination flow freely.",
    imageUrl: "/tarot/the-empress.jpg"
  },
  {
    name: "The Emperor",
    arcana: "Major",
    keywords: ["Authority", "Structure", "Leadership"],
    meaningUpright: "The Emperor represents leadership and structure. You have the power to create order and achieve your goals through discipline.",
    emotionalGuidance: "Find strength in self-discipline while remaining compassionate. True leadership comes from serving others with wisdom and kindness.",
    mentalEncouragement: "Your strategic mind can solve any challenge. Trust your ability to lead and make decisions that benefit everyone involved.",
    imageUrl: "/tarot/the-emperor.jpg"
  },
  {
    name: "The Hierophant",
    arcana: "Major",
    keywords: ["Tradition", "Wisdom", "Teaching"],
    meaningUpright: "The Hierophant represents tradition and spiritual wisdom. Seek guidance from those who have walked the path before you.",
    emotionalGuidance: "Honor the wisdom of your ancestors while staying true to your own path. Tradition can guide you without limiting your growth.",
    mentalEncouragement: "You have valuable wisdom to share with others. Your knowledge and experience can light the way for those who follow.",
    imageUrl: "/tarot/the-hierophant.jpg"
  },
  {
    name: "The Lovers",
    arcana: "Major",
    keywords: ["Love", "Choice", "Union"],
    meaningUpright: "The Lovers represents love and important choices. You are called to make decisions based on your values and desires.",
    emotionalGuidance: "Open your heart to love in all its forms. Whether romantic, friendship, or self-love, you deserve deep connection and happiness.",
    mentalEncouragement: "Trust your heart when making important choices. Your values and intuition will guide you to decisions that bring lasting joy.",
    imageUrl: "/tarot/the-lovers.jpg"
  },
  {
    name: "The Chariot",
    arcana: "Major",
    keywords: ["Control", "Willpower", "Success"],
    meaningUpright: "The Chariot represents triumph and success through determination. You have the willpower to overcome any obstacle.",
    emotionalGuidance: "Balance your emotions like a skilled charioteer. When you master your inner world, you can achieve anything in the outer world.",
    mentalEncouragement: "Your determination is unstoppable. Focus your mind on your goals and drive forward with confidence and purpose.",
    imageUrl: "/tarot/the-chariot.jpg"
  },
  {
    name: "Strength",
    arcana: "Major",
    keywords: ["Courage", "Inner strength", "Compassion"],
    meaningUpright: "Strength represents inner courage and the power of compassion. True strength comes from gentleness and understanding.",
    emotionalGuidance: "Your gentle strength can tame any wild emotion. Approach challenges with love and patience rather than force.",
    mentalEncouragement: "You possess incredible inner strength and wisdom. Trust your ability to handle any situation with grace and compassion.",
    imageUrl: "/tarot/strength.jpg"
  },
  {
    name: "The Hermit",
    arcana: "Major",
    keywords: ["Soul searching", "Inner guidance", "Enlightenment"],
    meaningUpright: "The Hermit represents soul searching and inner wisdom. Take time for introspection and listen to your inner voice.",
    emotionalGuidance: "Sometimes solitude brings the greatest insights. Use quiet moments to reconnect with your true self and deepest desires.",
    mentalEncouragement: "Your inner light can illuminate any darkness. Trust the wisdom you find in quiet reflection and contemplation.",
    imageUrl: "/tarot/the-hermit.jpg"
  },
  {
    name: "Wheel of Fortune",
    arcana: "Major",
    keywords: ["Change", "Cycles", "Destiny"],
    meaningUpright: "The Wheel of Fortune represents change and cycles. What goes down must come up - good fortune is coming your way.",
    emotionalGuidance: "Embrace the natural cycles of life. Every low moment is followed by a high one - trust that good times are coming.",
    mentalEncouragement: "You are exactly where you need to be in life's grand design. Trust the process and know that positive change is on the horizon.",
    imageUrl: "/tarot/wheel-of-fortune.jpg"
  },
  {
    name: "Justice",
    arcana: "Major",
    keywords: ["Fairness", "Truth", "Balance"],
    meaningUpright: "Justice represents fairness and balance. The truth will be revealed and justice will be served in your situation.",
    emotionalGuidance: "Seek emotional balance and fairness in all your relationships. Your integrity and honesty will lead to positive outcomes.",
    mentalEncouragement: "Your sense of justice and fairness is a guiding light. Trust your ability to see truth and make balanced decisions.",
    imageUrl: "/tarot/justice.jpg"
  },
  {
    name: "The Hanged Man",
    arcana: "Major",
    keywords: ["Surrender", "Waiting", "Sacrifice"],
    meaningUpright: "The Hanged Man represents surrender and new perspectives. Sometimes you must let go to move forward.",
    emotionalGuidance: "Release the need to control every outcome. Sometimes the best action is patient acceptance and trust in divine timing.",
    mentalEncouragement: "Your willingness to see things differently opens up new possibilities. Embrace fresh perspectives with an open mind.",
    imageUrl: "/tarot/the-hanged-man.jpg"
  },
  {
    name: "Death",
    arcana: "Major",
    keywords: ["Transformation", "Endings", "Rebirth"],
    meaningUpright: "Death represents transformation and new beginnings. An old phase of your life is ending to make way for something better.",
    emotionalGuidance: "Allow yourself to grieve what's ending while celebrating what's beginning. Transformation is a natural part of growth.",
    mentalEncouragement: "Your ability to adapt and transform is remarkable. Embrace change as an opportunity for growth and renewal.",
    imageUrl: "/tarot/death.jpg"
  },
  {
    name: "Temperance",
    arcana: "Major",
    keywords: ["Balance", "Moderation", "Patience"],
    meaningUpright: "Temperance represents balance and moderation. Find the middle path and blend opposing forces harmoniously.",
    emotionalGuidance: "Emotional balance brings lasting peace. Practice patience and moderation in all your feelings and reactions.",
    mentalEncouragement: "Your ability to find balance and compromise is a true gift. Use this skill to create harmony in all areas of life.",
    imageUrl: "/tarot/temperance.jpg"
  },
  {
    name: "The Devil",
    arcana: "Major",
    keywords: ["Bondage", "Materialism", "Liberation"],
    meaningUpright: "The Devil represents bondage and the need for liberation. You have the power to break free from what binds you.",
    emotionalGuidance: "Recognize the patterns that no longer serve you. Your emotional freedom is within reach - you just need to claim it.",
    mentalEncouragement: "You are stronger than any limitation or addiction. Your mind has the power to break free and create positive change.",
    imageUrl: "/tarot/the-devil.jpg"
  },
  {
    name: "The Tower",
    arcana: "Major",
    keywords: ["Sudden change", "Awakening", "Liberation"],
    meaningUpright: "The Tower represents sudden change and awakening. Old structures must fall to make way for new growth.",
    emotionalGuidance: "Though change can feel scary, it's clearing space for something much better. Trust that this upheaval serves your highest good.",
    mentalEncouragement: "Your resilience in the face of change is remarkable. Use this as an opportunity to rebuild something even better.",
    imageUrl: "/tarot/the-tower.jpg"
  },
  {
    name: "The Star",
    arcana: "Major",
    keywords: ["Hope", "Faith", "Inspiration"],
    meaningUpright: "The Star represents hope and inspiration. After hardship comes healing and renewed faith in the future.",
    emotionalGuidance: "Your emotional healing is supported by the universe. Trust that hope is justified and better times are truly coming.",
    mentalEncouragement: "You are a beacon of hope and inspiration to others. Your positive vision for the future will manifest in reality.",
    imageUrl: "/tarot/the-star.jpg"
  },
  {
    name: "The Moon",
    arcana: "Major",
    keywords: ["Illusion", "Intuition", "Mystery"],
    meaningUpright: "The Moon represents illusion and the need to trust your intuition. Not everything is as it seems on the surface.",
    emotionalGuidance: "Trust your emotional instincts even when logic says otherwise. Your feelings are picking up on important truths.",
    mentalEncouragement: "Your intuitive mind sees through illusions to the truth beneath. Trust your psychic insights and inner knowing.",
    imageUrl: "/tarot/the-moon.jpg"
  },
  {
    name: "The Sun",
    arcana: "Major",
    keywords: ["Joy", "Success", "Vitality"],
    meaningUpright: "The Sun represents joy, success, and vitality. This is a time of happiness and positive energy in your life.",
    emotionalGuidance: "Let your inner child come out to play. Joy and optimism are your natural state - embrace the happiness that's yours.",
    mentalEncouragement: "Your positive mindset attracts success and happiness. Continue to shine your light brightly - the world needs your joy.",
    imageUrl: "/tarot/the-sun.jpg"
  },
  {
    name: "Judgement",
    arcana: "Major",
    keywords: ["Rebirth", "Awakening", "Calling"],
    meaningUpright: "Judgement represents rebirth and spiritual awakening. You are being called to a higher purpose in life.",
    emotionalGuidance: "Forgive yourself and others as you move into this new phase. Your heart is opening to greater love and compassion.",
    mentalEncouragement: "You are awakening to your true calling and purpose. Trust the voice within that's guiding you toward your destiny.",
    imageUrl: "/tarot/judgement.jpg"
  },
  {
    name: "The World",
    arcana: "Major",
    keywords: ["Completion", "Achievement", "Success"],
    meaningUpright: "The World represents completion and achievement. You have successfully completed a major cycle in your life.",
    emotionalGuidance: "Celebrate your emotional growth and the wisdom you've gained. You are whole, complete, and ready for new adventures.",
    mentalEncouragement: "Your hard work and dedication have paid off beautifully. You've achieved something truly meaningful - be proud of yourself.",
    imageUrl: "/tarot/the-world.jpg"
  }
];

export function getRandomTarotCard(): TarotCard {
  return majorArcana[Math.floor(Math.random() * majorArcana.length)];
}

export function getTarotCardByName(name: string): TarotCard | undefined {
  return majorArcana.find(card => card.name.toLowerCase() === name.toLowerCase());
}