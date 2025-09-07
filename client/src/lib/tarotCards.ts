export interface TarotCard {
  name: string;
  suit?: string;
  number?: number;
  arcana: 'Major' | 'Minor';
  upright?: string[];
  reversed?: string[];
  description?: string;
  meaning?: string;
  keywords?: string[];
  meaningUpright?: string;
  meaningReversed?: string;
  emotionalGuidance?: string;
  mentalEncouragement?: string;
  childMessage?: string;
  imageUrl: string;
}

// Major Arcana - Based on user's provided JSON data
export const majorArcana: TarotCard[] = [
  {
    name: "The Fool",
    arcana: "Major",
    number: 0,
    upright: ["Beginnings", "Innocence", "Spontaneity", "A free spirit"],
    reversed: ["Recklessness", "Naivety", "Poor judgment", "Holding back"],
    description: "The Fool dances at the edge of the unknown, carrying only hope and faith into new journeys.",
    meaningUpright: "The Fool represents new beginnings, innocence, and the courage to take the first step into the unknown. This card encourages you to embrace spontaneity and trust in the journey ahead.",
    emotionalGuidance: "Trust your heart and embrace the unknown with childlike wonder. Every ending is a new beginning waiting to unfold.",
    mentalEncouragement: "Your open mind is your greatest strength. Approach challenges with curiosity rather than fear, and watch how magical solutions appear.",
    childMessage: "Just like starting a new adventure, you're brave enough to try new things and explore the world around you!",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Magician",
    arcana: "Major",
    number: 1,
    upright: ["Manifestation", "Resourcefulness", "Power", "Inspired action"],
    reversed: ["Manipulation", "Untapped potential", "Deception", "Misuse of power"],
    description: "The Magician channels divine energy into reality, reminding us that we already hold the tools to shape destiny.",
    meaningUpright: "The Magician represents manifestation and the power to create your reality. You have all the tools you need to succeed.",
    emotionalGuidance: "You are a powerful creator of your own destiny. Channel your emotions into positive action and watch your dreams come to life.",
    mentalEncouragement: "Your mind is incredibly powerful and focused. Trust in your abilities and use your talents to manifest the life you desire.",
    childMessage: "You have amazing talents and abilities! Like a magician, you can make wonderful things happen when you believe in yourself.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The High Priestess",
    arcana: "Major",
    number: 2,
    upright: ["Intuition", "Subconscious wisdom", "Mystery", "Sacred knowledge"],
    reversed: ["Secrets", "Hidden motives", "Disconnected intuition", "Silence"],
    description: "The High Priestess guards the veil between worlds, whispering truths to those who dare to listen within.",
    meaningUpright: "The High Priestess represents intuition and inner wisdom. Trust your inner voice and pay attention to your dreams.",
    emotionalGuidance: "Your emotional intelligence is incredibly deep. Trust the feelings that come from your soul - they're guiding you toward truth.",
    mentalEncouragement: "Your intuitive mind sees what others cannot. Listen to that quiet inner voice - it holds the answers you seek.",
    childMessage: "You have a special gift for knowing things in your heart. Trust your feelings - they often know what's right before your mind does!",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "The Empress",
    arcana: "Major",
    number: 3,
    upright: ["Abundance", "Fertility", "Nurturing", "Beauty"],
    reversed: ["Dependence", "Creative block", "Neglect", "Smothering"],
    description: "The Empress embodies creation itself, wrapping the world in love, growth, and boundless beauty.",
    meaningUpright: "The Empress represents creativity, fertility, and abundance. You are in a phase of growth and creative expansion.",
    emotionalGuidance: "Nurture yourself and others with the same love you'd give to a beautiful garden. Your caring nature is a gift to the world.",
    mentalEncouragement: "Your creative mind is blooming with possibilities. Trust your artistic vision and let your imagination flow freely.",
    childMessage: "You're like a gardener who helps beautiful things grow! Your creativity and kindness make the world a more wonderful place.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Emperor",
    arcana: "Major",
    number: 4,
    upright: ["Authority", "Structure", "Stability", "Leadership"],
    reversed: ["Domination", "Rigidity", "Chaos from control", "Lack of discipline"],
    description: "The Emperor builds order upon chaos, ruling with strength, discipline, and a protective hand.",
    meaningUpright: "The Emperor represents leadership and structure. You have the power to create order and achieve your goals through discipline.",
    emotionalGuidance: "Find strength in self-discipline while remaining compassionate. True leadership comes from serving others with wisdom and kindness.",
    mentalEncouragement: "Your strategic mind can solve any challenge. Trust your ability to lead and make decisions that benefit everyone involved.",
    childMessage: "You have natural leadership abilities! Like a wise ruler, you can help organize things and take care of others around you.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "The Hierophant",
    arcana: "Major",
    number: 5,
    upright: ["Tradition", "Spiritual wisdom", "Conformity", "Mentorship"],
    reversed: ["Rebellion", "Personal beliefs", "Restriction", "Dogma"],
    description: "The Hierophant stands as a bridge between the divine and the human, guiding through sacred tradition.",
    meaningUpright: "The Hierophant represents tradition and spiritual wisdom. Seek guidance from those who have walked the path before you.",
    emotionalGuidance: "Honor the wisdom of your ancestors while staying true to your own path. Tradition can guide you without limiting your growth.",
    mentalEncouragement: "You have valuable wisdom to share with others. Your knowledge and experience can light the way for those who follow.",
    childMessage: "You're both a wonderful learner and teacher! You love learning from wise people and sharing what you know with friends.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The Lovers",
    arcana: "Major",
    number: 6,
    upright: ["Love", "Harmony", "Partnerships", "Choices"],
    reversed: ["Disharmony", "Imbalance", "Indecision", "Temptation"],
    description: "The Lovers embody union and the crossroads of the heart, where choice shapes destiny.",
    meaningUpright: "The Lovers represents love and important choices. You are called to make decisions based on your values and desires.",
    emotionalGuidance: "Open your heart to love in all its forms. Whether romantic, friendship, or self-love, you deserve deep connection and happiness.",
    mentalEncouragement: "Trust your heart when making important choices. Your values and intuition will guide you to decisions that bring lasting joy.",
    childMessage: "You have so much love to give and receive! Your friendships and family relationships are precious treasures that make life magical.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Chariot",
    arcana: "Major",
    number: 7,
    upright: ["Willpower", "Victory", "Determination", "Control"],
    reversed: ["Lack of direction", "Aggression", "Obstacles", "Losing control"],
    description: "The Chariot charges forward with focus and courage, mastering opposing forces to achieve triumph.",
    meaningUpright: "The Chariot represents triumph and success through determination. You have the willpower to overcome any obstacle.",
    emotionalGuidance: "Balance your emotions like a skilled charioteer. When you master your inner world, you can achieve anything in the outer world.",
    mentalEncouragement: "Your determination is unstoppable. Focus your mind on your goals and drive forward with confidence and purpose.",
    childMessage: "You're incredibly determined! Like a brave chariot driver, you can steer through any challenge and reach your dreams.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Strength",
    arcana: "Major",
    number: 8,
    upright: ["Courage", "Compassion", "Inner strength", "Patience"],
    reversed: ["Self-doubt", "Weakness", "Fear", "Insecurity"],
    description: "Strength is the quiet power of compassion and resilience, taming the wild with gentle courage.",
    meaningUpright: "Strength represents inner courage and the power of compassion. True strength comes from gentleness and understanding.",
    emotionalGuidance: "Your gentle strength can tame any wild emotion. Approach challenges with love and patience rather than force.",
    mentalEncouragement: "You possess incredible inner strength and wisdom. Trust your ability to handle any situation with grace and compassion.",
    childMessage: "You're stronger than you know! Your kindness and gentle heart are actually your greatest superpowers.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Hermit",
    arcana: "Major",
    number: 9,
    upright: ["Soul-searching", "Wisdom", "Introspection", "Guidance"],
    reversed: ["Isolation", "Withdrawal", "Loneliness", "Misguided journey"],
    description: "The Hermit walks alone with a lantern of wisdom, seeking truth in silence and solitude.",
    meaningUpright: "The Hermit represents soul searching and inner wisdom. Take time for introspection and listen to your inner voice.",
    emotionalGuidance: "Sometimes solitude brings the greatest insights. Use quiet moments to reconnect with your true self and deepest desires.",
    mentalEncouragement: "Your inner light can illuminate any darkness. Trust the wisdom you find in quiet reflection and contemplation.",
    childMessage: "Sometimes you need quiet time to think and dream. Your imagination and inner wisdom help you understand the world better!",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "Wheel of Fortune",
    arcana: "Major",
    number: 10,
    upright: ["Cycles", "Destiny", "Good fortune", "Karma"],
    reversed: ["Bad luck", "Resistance to change", "Unexpected setbacks", "Stagnation"],
    description: "The Wheel of Fortune turns endlessly, reminding us of life's cycles of rise and fall.",
    meaningUpright: "The Wheel of Fortune represents change and cycles. What goes down must come up - good fortune is coming your way.",
    emotionalGuidance: "Embrace the natural cycles of life. Every low moment is followed by a high one - trust that good times are coming.",
    mentalEncouragement: "You are exactly where you need to be in life's grand design. Trust the process and know that positive change is on the horizon.",
    childMessage: "Life is like a magical wheel that keeps turning! Even when things seem difficult, wonderful surprises are always coming your way.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Justice",
    arcana: "Major",
    number: 11,
    upright: ["Fairness", "Truth", "Law", "Cause and effect"],
    reversed: ["Dishonesty", "Unfairness", "Corruption", "Avoidance"],
    description: "Justice balances the scales of truth, demanding honesty and responsibility for every action.",
    meaningUpright: "Justice represents fairness and balance. The truth will be revealed and justice will be served in your situation.",
    emotionalGuidance: "Seek emotional balance and fairness in all your relationships. Your integrity and honesty will lead to positive outcomes.",
    mentalEncouragement: "Your sense of justice and fairness is a guiding light. Trust your ability to see truth and make balanced decisions.",
    childMessage: "You have a strong sense of right and wrong! Like a wise judge, you always try to be fair and help others do the right thing.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Hanged Man",
    arcana: "Major",
    number: 12,
    upright: ["Surrender", "Perspective", "Letting go", "Sacrifice"],
    reversed: ["Delays", "Resistance", "Stagnation", "Missed opportunities"],
    description: "The Hanged Man pauses between worlds, teaching wisdom through surrender and altered vision.",
    meaningUpright: "The Hanged Man represents surrender and new perspectives. Sometimes you must let go to move forward.",
    emotionalGuidance: "Release the need to control every outcome. Sometimes the best action is patient acceptance and trust in divine timing.",
    mentalEncouragement: "Your willingness to see things differently opens up new possibilities. Embrace fresh perspectives with an open mind.",
    childMessage: "Sometimes looking at things upside down helps you see them in a whole new way! Patience and different viewpoints are magical tools.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Death",
    arcana: "Major",
    number: 13,
    upright: ["Transformation", "Endings", "Change", "Transition"],
    reversed: ["Resistance to change", "Fear of endings", "Stagnation", "Clinging"],
    description: "Death closes one door so another may open, carrying the promise of renewal through release.",
    meaningUpright: "Death represents transformation and new beginnings. An old phase of your life is ending to make way for something better.",
    emotionalGuidance: "Allow yourself to grieve what's ending while celebrating what's beginning. Transformation is a natural part of growth.",
    mentalEncouragement: "Your ability to adapt and transform is remarkable. Embrace change as an opportunity for growth and renewal.",
    childMessage: "Just like a caterpillar becomes a beautiful butterfly, you're always growing and changing into something even more wonderful!",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Temperance",
    arcana: "Major",
    number: 14,
    upright: ["Balance", "Harmony", "Patience", "Moderation"],
    reversed: ["Excess", "Discord", "Imbalance", "Overindulgence"],
    description: "Temperance blends opposites into unity, teaching balance and the art of flow.",
    meaningUpright: "Temperance represents balance and moderation. Find the middle path and blend opposing forces harmoniously.",
    emotionalGuidance: "Emotional balance brings lasting peace. Practice patience and moderation in all your feelings and reactions.",
    mentalEncouragement: "Your ability to find balance and compromise is a true gift. Use this skill to create harmony in all areas of life.",
    childMessage: "You're wonderful at helping things balance perfectly! Like mixing colors to make beautiful art, you know how to blend different ideas.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "The Devil",
    arcana: "Major",
    number: 15,
    upright: ["Bondage", "Materialism", "Addiction", "Shadow self"],
    reversed: ["Freedom", "Breaking chains", "Awareness", "Release"],
    description: "The Devil reveals the chains of illusion, daring us to break free from our own shadows.",
    meaningUpright: "The Devil represents bondage and the need for liberation. You have the power to break free from what binds you.",
    emotionalGuidance: "Recognize the patterns that no longer serve you. Your emotional freedom is within reach - you just need to claim it.",
    mentalEncouragement: "You are stronger than any limitation or addiction. Your mind has the power to break free and create positive change.",
    childMessage: "Sometimes we feel stuck, but you always have the power to make better choices! You're stronger than any problem you face.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The Tower",
    arcana: "Major",
    number: 16,
    upright: ["Sudden change", "Upheaval", "Awakening", "Chaos"],
    reversed: ["Avoidance of disaster", "Fear of change", "Lingering collapse", "Resistance"],
    description: "The Tower crumbles without warning, but from its ruins, truth and liberation rise.",
    meaningUpright: "The Tower represents sudden change and awakening. Old structures must fall to make way for new growth.",
    emotionalGuidance: "Though change can feel scary, it's clearing space for something much better. Trust that this upheaval serves your highest good.",
    mentalEncouragement: "Your resilience in the face of change is remarkable. Use this as an opportunity to rebuild something even better.",
    childMessage: "Sometimes things need to change quickly, like cleaning your room to make space for new toys! Change helps make room for better things.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "The Star",
    arcana: "Major",
    number: 17,
    upright: ["Hope", "Healing", "Inspiration", "Faith"],
    reversed: ["Despair", "Lack of faith", "Discouragement", "Confusion"],
    description: "The Star shines after the storm, offering hope and guiding light on the path forward.",
    meaningUpright: "The Star represents hope and inspiration. After hardship comes healing and renewed faith in the future.",
    emotionalGuidance: "Your emotional healing is supported by the universe. Trust that hope is justified and better times are truly coming.",
    mentalEncouragement: "You are a beacon of hope and inspiration to others. Your positive vision for the future will manifest in reality.",
    childMessage: "You shine bright like a star and bring hope to everyone around you! Your dreams and wishes are like stars guiding you to happiness.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "The Moon",
    arcana: "Major",
    number: 18,
    upright: ["Illusion", "Intuition", "Dreams", "Subconscious"],
    reversed: ["Deception", "Fear", "Confusion", "Repressed emotions"],
    description: "The Moon reflects hidden truths, casting light upon shadows and the realm of dreams.",
    meaningUpright: "The Moon represents illusion and the need to trust your intuition. Not everything is as it seems on the surface.",
    emotionalGuidance: "Trust your emotional instincts even when logic says otherwise. Your feelings are picking up on important truths.",
    mentalEncouragement: "Your intuitive mind sees through illusions to the truth beneath. Trust your psychic insights and inner knowing.",
    childMessage: "Just like the moon lights up the night, your intuition helps you see things that others might miss. Trust your special inner knowing!",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "The Sun",
    arcana: "Major",
    number: 19,
    upright: ["Joy", "Success", "Vitality", "Positivity"],
    reversed: ["Temporary sadness", "Clouded clarity", "Ego", "Overconfidence"],
    description: "The Sun radiates life and clarity, filling the world with joy and boundless energy.",
    meaningUpright: "The Sun represents joy, success, and vitality. This is a time of happiness and positive energy in your life.",
    emotionalGuidance: "Let your inner child come out to play. Joy and optimism are your natural state - embrace the happiness that's yours.",
    mentalEncouragement: "Your positive mindset attracts success and happiness. Continue to shine your light brightly - the world needs your joy.",
    childMessage: "Just like the sun brings warmth and joy to everyone, you bring happiness wherever you go! Your smile can brighten anyone's day.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop"
  },
  {
    name: "Judgement",
    arcana: "Major",
    number: 20,
    upright: ["Rebirth", "Awakening", "Renewal", "Inner calling"],
    reversed: ["Self-doubt", "Refusal", "Stagnation", "Avoidance of truth"],
    description: "Judgement calls us to awaken, to rise renewed, and embrace higher purpose.",
    meaningUpright: "Judgement represents rebirth and spiritual awakening. You are being called to a higher purpose in life.",
    emotionalGuidance: "Forgive yourself and others as you move into this new phase. Your heart is opening to greater love and compassion.",
    mentalEncouragement: "You are awakening to your true calling and purpose. Trust the voice within that's guiding you toward your destiny.",
    childMessage: "You're growing into exactly who you're meant to be! Like a beautiful butterfly, you're transforming into your best self every day.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "The World",
    arcana: "Major",
    number: 21,
    upright: ["Completion", "Achievement", "Wholeness", "Fulfillment"],
    reversed: ["Incomplete cycles", "Delays", "Lack of closure", "Stagnation"],
    description: "The World represents the grand completion of cycles, celebrating unity and fulfillment.",
    meaningUpright: "The World represents completion and achievement. You have successfully completed a major cycle in your life.",
    emotionalGuidance: "Celebrate your emotional growth and the wisdom you've gained. You are whole, complete, and ready for new adventures.",
    mentalEncouragement: "Your hard work and dedication have paid off beautifully. You've achieved something truly meaningful - be proud of yourself.",
    childMessage: "You've accomplished something amazing! Like completing a puzzle, you've put all the pieces together to create something wonderful.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  }
];

// Minor Arcana - Based on user's provided JSON data
export const minorArcana: TarotCard[] = [
  // Wands Suit
  {
    name: "Ace of Wands",
    suit: "Wands",
    number: 1,
    arcana: "Minor",
    meaning: "New beginnings, inspiration, creative spark, enthusiasm.",
    meaningUpright: "The Ace of Wands represents new creative energy, inspiration, and the spark of new ideas. It's a powerful beginning filled with potential.",
    emotionalGuidance: "Trust your creative instincts and let your enthusiasm guide you toward new adventures.",
    mentalEncouragement: "Your mind is brimming with fresh ideas and creative potential. Now is the time to act on your inspiration.",
    childMessage: "You have amazing creative energy! Like a magical wand, you can create wonderful things when you follow your inspiration.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Two of Wands",
    suit: "Wands",
    number: 2,
    arcana: "Minor",
    meaning: "Planning, making choices, looking ahead, expansion.",
    meaningUpright: "The Two of Wands represents planning and making important decisions about your future. You're ready to expand your horizons.",
    emotionalGuidance: "Take time to consider your options carefully. Your heart knows which path will bring you the most joy.",
    mentalEncouragement: "Your strategic thinking and planning abilities are excellent. Trust your vision for the future.",
    childMessage: "You're great at making plans and thinking about the future! Like a wise explorer, you can choose the best path for your adventures.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Three of Wands",
    suit: "Wands",
    number: 3,
    arcana: "Minor",
    meaning: "Progress, foresight, overseas opportunities, momentum.",
    meaningUpright: "The Three of Wands shows your plans are working and progress is being made. New opportunities are on the horizon.",
    emotionalGuidance: "Feel confident about the progress you're making. Your patience and planning are paying off beautifully.",
    mentalEncouragement: "Your foresight and preparation have set you up for success. Keep moving forward with confidence.",
    childMessage: "Your hard work and planning are paying off! Like a ship sailing toward new lands, you're headed for exciting discoveries.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Four of Wands",
    suit: "Wands",
    number: 4,
    arcana: "Minor",
    meaning: "Celebration, harmony, homecoming, community.",
    meaningUpright: "The Four of Wands represents celebration, harmony, and coming together with loved ones. It's time to celebrate your achievements.",
    emotionalGuidance: "Share your joy with others and celebrate the love and support in your life. Community brings happiness.",
    mentalEncouragement: "You've created stability and harmony in your life. Take time to appreciate and celebrate your accomplishments.",
    childMessage: "It's time to celebrate! Like a happy party with all your favorite people, you deserve to enjoy the good things in your life.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Five of Wands",
    suit: "Wands",
    number: 5,
    arcana: "Minor",
    meaning: "Conflict, competition, disagreements, challenges.",
    meaningUpright: "The Five of Wands represents conflict and competition. You may need to work through disagreements or face challenges.",
    emotionalGuidance: "Stay calm during conflicts and remember that different opinions can lead to better solutions. Keep your heart open.",
    mentalEncouragement: "Use challenges as opportunities to grow stronger and learn new skills. Competition can bring out your best.",
    childMessage: "Sometimes friends disagree, but that's okay! Like players in a game, you can compete fairly and still be friends afterward.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Six of Wands",
    suit: "Wands",
    number: 6,
    arcana: "Minor",
    meaning: "Victory, recognition, public reward, success.",
    meaningUpright: "The Six of Wands represents victory and public recognition. Your efforts are being acknowledged and celebrated by others.",
    emotionalGuidance: "Feel proud of your achievements and accept the recognition you deserve. Your success brings joy to others too.",
    mentalEncouragement: "Your hard work and determination have led to well-deserved success. Continue to believe in your abilities.",
    childMessage: "You did it! Like a champion crossing the finish line, you've achieved something amazing and everyone is cheering for you!",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Seven of Wands",
    suit: "Wands",
    number: 7,
    arcana: "Minor",
    meaning: "Defensiveness, standing ground, perseverance.",
    meaningUpright: "The Seven of Wands represents standing your ground and defending your position. You have the strength to persevere.",
    emotionalGuidance: "Stand up for what you believe in, but remember to stay kind and fair. Your principles are worth defending.",
    mentalEncouragement: "Your determination and courage will help you overcome any challenges. Don't give up on what matters to you.",
    childMessage: "You're brave and strong! Like a guardian protecting something precious, you can stand up for what's right and important to you.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Eight of Wands",
    suit: "Wands",
    number: 8,
    arcana: "Minor",
    meaning: "Speed, progress, swift action, communication.",
    meaningUpright: "The Eight of Wands represents rapid progress and swift communication. Things are moving quickly in a positive direction.",
    emotionalGuidance: "Embrace the excitement of fast-moving changes. Trust that this rapid progress is leading you to good places.",
    mentalEncouragement: "Your quick thinking and fast action are serving you well. Keep up with the momentum and stay focused.",
    childMessage: "Things are happening fast! Like messages flying through the air, exciting news and changes are coming your way quickly.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Nine of Wands",
    suit: "Wands",
    number: 9,
    arcana: "Minor",
    meaning: "Resilience, courage, persistence, last stand.",
    meaningUpright: "The Nine of Wands represents resilience and persistence. You're almost there - don't give up now!",
    emotionalGuidance: "You've been through challenges and come out stronger. Trust in your ability to persist through any difficulty.",
    mentalEncouragement: "Your resilience and determination are admirable. You have the strength to overcome any final obstacles.",
    childMessage: "You're so strong and brave! Like a hero who never gives up, you can keep going even when things get tough.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Ten of Wands",
    suit: "Wands",
    number: 10,
    arcana: "Minor",
    meaning: "Burden, responsibility, hard work, stress.",
    meaningUpright: "The Ten of Wands represents carrying a heavy load or taking on too much responsibility. It may be time to ask for help.",
    emotionalGuidance: "It's okay to feel tired when you're working hard. Remember to ask for help and take breaks when you need them.",
    mentalEncouragement: "You're capable of handling responsibility, but don't forget to share the load with others when possible.",
    childMessage: "Sometimes we carry too much at once. Like asking friends to help carry heavy books, it's okay to ask for help when you need it.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Page of Wands",
    suit: "Wands",
    number: 11,
    arcana: "Minor",
    meaning: "Exploration, enthusiasm, discovery, a free spirit.",
    meaningUpright: "The Page of Wands represents enthusiasm for new adventures and the joy of discovery. Embrace your curious nature.",
    emotionalGuidance: "Let your enthusiasm and curiosity guide you to new experiences. Your sense of wonder is a beautiful gift.",
    mentalEncouragement: "Your eager mind and love of learning will take you on amazing adventures. Stay curious and open to new ideas.",
    childMessage: "You're like a young explorer ready for adventure! Your curiosity and excitement about new things will lead you to wonderful discoveries.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Knight of Wands",
    suit: "Wands",
    number: 12,
    arcana: "Minor",
    meaning: "Energy, passion, inspired action, adventure.",
    meaningUpright: "The Knight of Wands represents passionate action and adventurous energy. You're ready to charge forward with enthusiasm.",
    emotionalGuidance: "Channel your passionate energy in positive directions. Your enthusiasm can inspire others to join your adventures.",
    mentalEncouragement: "Your energy and passion are powerful forces. Use them wisely to achieve your goals and help others.",
    childMessage: "You have so much energy and passion! Like a brave knight on a quest, you can use your enthusiasm to do amazing things.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "Queen of Wands",
    suit: "Wands",
    number: 13,
    arcana: "Minor",
    meaning: "Confidence, independence, determination, charisma.",
    meaningUpright: "The Queen of Wands represents confidence, independence, and natural charisma. You have the power to lead and inspire others.",
    emotionalGuidance: "Trust in your natural confidence and ability to inspire others. Your warmth and enthusiasm are magnetic.",
    mentalEncouragement: "Your independent spirit and determination will help you achieve anything you set your mind to.",
    childMessage: "You're confident and charismatic! Like a queen who leads with kindness, you can inspire others and achieve great things.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },
  {
    name: "King of Wands",
    suit: "Wands",
    number: 14,
    arcana: "Minor",
    meaning: "Leadership, vision, honor, entrepreneur spirit.",
    meaningUpright: "The King of Wands represents natural leadership, vision, and entrepreneurial spirit. You have the ability to lead with honor.",
    emotionalGuidance: "Lead with your heart and inspire others through your vision and integrity. Your leadership brings out the best in people.",
    mentalEncouragement: "Your leadership skills and vision are exceptional. Use them to create positive change and inspire others.",
    childMessage: "You're a natural leader! Like a wise king who cares for his people, you can guide others and create wonderful things together.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop"
  },

  // Cups Suit
  {
    name: "Ace of Cups",
    suit: "Cups",
    number: 1,
    arcana: "Minor",
    meaning: "New feelings, emotional awakening, love, compassion.",
    meaningUpright: "The Ace of Cups represents new emotional beginnings, love, and compassion flowing into your life.",
    emotionalGuidance: "Open your heart to new feelings and experiences. Love and compassion are flowing your way.",
    mentalEncouragement: "Your emotional intelligence and capacity for love are beautiful gifts. Share them generously with the world.",
    childMessage: "Your heart is full of love and kindness! Like a magical cup that never empties, you have endless love to share with others.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Two of Cups",
    suit: "Cups",
    number: 2,
    arcana: "Minor",
    meaning: "Partnership, unity, mutual attraction, harmony.",
    meaningUpright: "The Two of Cups represents partnership, deep connection, and mutual understanding between two people.",
    emotionalGuidance: "Celebrate the special connections in your life. True partnership brings joy and mutual support.",
    mentalEncouragement: "Your ability to connect deeply with others is a wonderful skill. Nurture your important relationships.",
    childMessage: "You have special connections with people you care about! Like two best friends sharing everything, these bonds make life magical.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Three of Cups",
    suit: "Cups",
    number: 3,
    arcana: "Minor",
    meaning: "Friendship, celebration, creativity, community.",
    meaningUpright: "The Three of Cups represents friendship, celebration, and joyful community gatherings with people you love.",
    emotionalGuidance: "Celebrate with friends and cherish the joy that comes from sharing happy moments with others.",
    mentalEncouragement: "Your social connections and friendships enrich your life tremendously. Invest in these relationships.",
    childMessage: "Time with friends is the best! Like a happy celebration with all your favorite people, friendship makes everything more fun.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Four of Cups",
    suit: "Cups",
    number: 4,
    arcana: "Minor",
    meaning: "Apathy, contemplation, reevaluation, withdrawal.",
    meaningUpright: "The Four of Cups represents taking time to think and reevaluate what's important to you. Sometimes we need quiet reflection.",
    emotionalGuidance: "It's okay to feel contemplative sometimes. Use quiet time to understand your feelings and what you truly want.",
    mentalEncouragement: "Taking time to reflect and reevaluate is wise. Your thoughtful nature helps you make good decisions.",
    childMessage: "Sometimes you need time to think quietly about things. Like sitting under a tree and daydreaming, reflection helps you understand yourself better.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Five of Cups",
    suit: "Cups",
    number: 5,
    arcana: "Minor",
    meaning: "Loss, grief, regret, focusing on the negative.",
    meaningUpright: "The Five of Cups represents dealing with loss or disappointment. Remember that not everything is lost - there's still hope.",
    emotionalGuidance: "It's natural to feel sad sometimes, but remember to look for the good things that remain in your life.",
    mentalEncouragement: "Learning from disappointment makes you stronger and wiser. Focus on what you still have and what's possible.",
    childMessage: "When you feel sad about losing something, remember there are still good things around you. Like finding new treasures after losing old ones.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Six of Cups",
    suit: "Cups",
    number: 6,
    arcana: "Minor",
    meaning: "Nostalgia, childhood memories, innocence, joy.",
    meaningUpright: "The Six of Cups represents happy memories, innocence, and the joy that comes from simple pleasures and childhood wonder.",
    emotionalGuidance: "Cherish happy memories and let your inner child come out to play. Simple joys are the most precious.",
    mentalEncouragement: "Your ability to find joy in simple things and maintain childlike wonder is a beautiful gift.",
    childMessage: "The best memories are made of simple, happy moments! Like playing with friends or family hugs, these memories are precious treasures.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Seven of Cups",
    suit: "Cups",
    number: 7,
    arcana: "Minor",
    meaning: "Illusion, choices, wishful thinking, temptation.",
    meaningUpright: "The Seven of Cups represents many choices and possibilities, but not all of them may be realistic. Choose wisely.",
    emotionalGuidance: "When you have many choices, listen to your heart to find what truly matters most to you.",
    mentalEncouragement: "Use your wisdom to distinguish between realistic goals and impossible dreams. Focus on what's achievable.",
    childMessage: "Sometimes you have lots of choices, like picking from many toys! Think carefully about which ones will really make you happy.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Eight of Cups",
    suit: "Cups",
    number: 8,
    arcana: "Minor",
    meaning: "Walking away, seeking truth, deeper meaning.",
    meaningUpright: "The Eight of Cups represents leaving something behind to search for deeper meaning and truth in your life.",
    emotionalGuidance: "Sometimes you need to leave familiar things to grow and find what truly fulfills your heart.",
    mentalEncouragement: "Your search for deeper meaning shows wisdom and courage. Trust your instincts about when it's time to move on.",
    childMessage: "Sometimes you outgrow old things and need to find new adventures! Like a brave explorer, you can discover new and exciting paths.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Nine of Cups",
    suit: "Cups",
    number: 9,
    arcana: "Minor",
    meaning: "Contentment, satisfaction, wishes fulfilled.",
    meaningUpright: "The Nine of Cups represents contentment and satisfaction. Your wishes are being fulfilled and you have much to be happy about.",
    emotionalGuidance: "Feel grateful for all the good things in your life. This satisfaction comes from appreciating what you have.",
    mentalEncouragement: "You've worked hard and can now enjoy the fruits of your efforts. Take time to appreciate your achievements.",
    childMessage: "You have so many good things to be happy about! Like having your birthday wishes come true, life is giving you wonderful gifts.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Ten of Cups",
    suit: "Cups",
    number: 10,
    arcana: "Minor",
    meaning: "Happiness, fulfillment, family, harmony.",
    meaningUpright: "The Ten of Cups represents complete emotional fulfillment, family happiness, and harmony in relationships.",
    emotionalGuidance: "Celebrate the love and harmony in your family and close relationships. This is true wealth.",
    mentalEncouragement: "You understand what truly matters in life - love, family, and emotional connections. This wisdom serves you well.",
    childMessage: "Your family and the people who love you are your greatest treasures! Like a rainbow of love, they bring color and joy to your life.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Page of Cups",
    suit: "Cups",
    number: 11,
    arcana: "Minor",
    meaning: "Imagination, intuition, curiosity, emotional messages.",
    meaningUpright: "The Page of Cups represents imagination, intuition, and being open to emotional messages and creative inspiration.",
    emotionalGuidance: "Trust your intuitive feelings and let your imagination guide you to creative solutions and new ideas.",
    mentalEncouragement: "Your imaginative and intuitive nature is a wonderful gift. Use it to explore creative possibilities.",
    childMessage: "Your imagination is amazing! Like a young artist with endless ideas, you can create beautiful things when you listen to your heart.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Knight of Cups",
    suit: "Cups",
    number: 12,
    arcana: "Minor",
    meaning: "Romance, charm, following the heart, idealism.",
    meaningUpright: "The Knight of Cups represents following your heart, romantic idealism, and bringing charm and beauty to the world.",
    emotionalGuidance: "Follow your heart's guidance and bring beauty and romance to everything you do. Your idealism is inspiring.",
    mentalEncouragement: "Your romantic and idealistic nature helps you see the beauty in life. Use this vision to inspire others.",
    childMessage: "You see beauty everywhere and follow your heart! Like a charming knight spreading joy, you make the world more beautiful.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "Queen of Cups",
    suit: "Cups",
    number: 13,
    arcana: "Minor",
    meaning: "Compassion, nurturing, emotional security, intuition.",
    meaningUpright: "The Queen of Cups represents deep compassion, nurturing nature, and strong intuition. You provide emotional security to others.",
    emotionalGuidance: "Your compassionate and nurturing nature is a gift to everyone around you. Trust your emotional wisdom.",
    mentalEncouragement: "Your emotional intelligence and intuitive abilities are exceptional. Use them to help and heal others.",
    childMessage: "You have the biggest, most caring heart! Like a loving queen who takes care of everyone, you make others feel safe and loved.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },
  {
    name: "King of Cups",
    suit: "Cups",
    number: 14,
    arcana: "Minor",
    meaning: "Emotional balance, wisdom, diplomacy, control.",
    meaningUpright: "The King of Cups represents emotional maturity, wisdom, and the ability to balance feelings with logic.",
    emotionalGuidance: "You have the wisdom to balance your emotions with clear thinking. This makes you a natural peacemaker.",
    mentalEncouragement: "Your emotional balance and diplomatic skills help you solve problems and bring people together.",
    childMessage: "You're wise about feelings and help others get along! Like a kind king who brings peace, you help everyone feel understood.",
    imageUrl: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop"
  },

  // Swords Suit
  {
    name: "Ace of Swords",
    suit: "Swords",
    number: 1,
    arcana: "Minor",
    meaning: "Breakthrough, clarity, new ideas, truth.",
    meaningUpright: "The Ace of Swords represents mental clarity, breakthrough moments, and powerful new ideas cutting through confusion.",
    emotionalGuidance: "Trust the clarity that comes when you think clearly and honestly about situations.",
    mentalEncouragement: "Your mind is sharp and clear. Use this mental power to cut through problems and find solutions.",
    childMessage: "Your brain is super smart! Like a bright light cutting through darkness, your clear thinking helps you understand things better.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Two of Swords",
    suit: "Swords",
    number: 2,
    arcana: "Minor",
    meaning: "Difficult choices, indecision, stalemate, balance.",
    meaningUpright: "The Two of Swords represents difficult decisions and the need to weigh options carefully before choosing.",
    emotionalGuidance: "When facing difficult choices, take time to consider both your heart and your mind before deciding.",
    mentalEncouragement: "Your careful consideration of options shows wisdom. Trust yourself to make the right choice when you're ready.",
    childMessage: "Sometimes choices are hard to make! Like choosing between two favorite toys, take your time to think about what feels right.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Three of Swords",
    suit: "Swords",
    number: 3,
    arcana: "Minor",
    meaning: "Heartbreak, grief, separation, sorrow.",
    meaningUpright: "The Three of Swords represents heartbreak and emotional pain. Healing takes time, but it will come.",
    emotionalGuidance: "It's okay to feel sad when your heart hurts. Allow yourself to heal and know that pain will eventually pass.",
    mentalEncouragement: "Going through difficult emotions makes you stronger and more compassionate. You will heal from this.",
    childMessage: "When your heart feels sad, it's okay to cry and feel hurt. Like a cut that heals with time, your heart will feel better too.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Four of Swords",
    suit: "Swords",
    number: 4,
    arcana: "Minor",
    meaning: "Rest, recovery, meditation, contemplation.",
    meaningUpright: "The Four of Swords represents the need for rest, recovery, and quiet contemplation to restore your energy.",
    emotionalGuidance: "Give yourself permission to rest and recharge. Quiet time helps your emotions settle and heal.",
    mentalEncouragement: "Your mind needs rest just like your body does. Meditation and quiet time will restore your mental clarity.",
    childMessage: "Everyone needs rest to feel their best! Like sleeping to have sweet dreams, quiet time helps your mind and heart feel peaceful.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Five of Swords",
    suit: "Swords",
    number: 5,
    arcana: "Minor",
    meaning: "Conflict, defeat, betrayal, loss.",
    meaningUpright: "The Five of Swords represents conflict and the aftermath of disagreements. Not every battle is worth winning.",
    emotionalGuidance: "Learn from conflicts but don't let them make your heart bitter. Choose your battles wisely.",
    mentalEncouragement: "Sometimes losing a battle teaches you more than winning. Use these experiences to grow wiser.",
    childMessage: "Not every argument needs to be won. Sometimes it's better to be kind than to be right, and that shows true wisdom.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Six of Swords",
    suit: "Swords",
    number: 6,
    arcana: "Minor",
    meaning: "Transition, moving forward, healing, leaving behind.",
    meaningUpright: "The Six of Swords represents moving away from troubled waters toward calmer, more peaceful circumstances.",
    emotionalGuidance: "You're moving toward better times. Trust that leaving difficult situations behind will bring you peace.",
    mentalEncouragement: "Your decision to move forward shows wisdom and courage. Better times are ahead.",
    childMessage: "You're like a brave traveler moving toward better places! Leaving sad times behind helps you find happier adventures.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Seven of Swords",
    suit: "Swords",
    number: 7,
    arcana: "Minor",
    meaning: "Deception, trickery, strategy, secrecy.",
    meaningUpright: "The Seven of Swords represents the need to be clever and strategic, but be careful not to deceive others unfairly.",
    emotionalGuidance: "Use your intelligence wisely and always try to be honest with others and yourself.",
    mentalEncouragement: "Your strategic thinking is an asset, but make sure to use it ethically and fairly.",
    childMessage: "Being clever is great, but always try to be honest too! Like a smart detective solving mysteries, use your brain for good.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Eight of Swords",
    suit: "Swords",
    number: 8,
    arcana: "Minor",
    meaning: "Restriction, fear, isolation, feeling trapped.",
    meaningUpright: "The Eight of Swords represents feeling trapped or restricted, but remember that many limitations are self-imposed.",
    emotionalGuidance: "You have more freedom than you think. Don't let fear keep you trapped in situations you can change.",
    mentalEncouragement: "Your mind is powerful enough to find solutions. Look for ways to free yourself from limiting thoughts.",
    childMessage: "Sometimes we feel stuck, but there are usually ways out! Like a bird learning it can fly, you can find your freedom too.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Nine of Swords",
    suit: "Swords",
    number: 9,
    arcana: "Minor",
    meaning: "Anxiety, worry, guilt, nightmares.",
    meaningUpright: "The Nine of Swords represents anxiety and worry, often about things that may never happen. Try to find peace in your mind.",
    emotionalGuidance: "Worrying doesn't solve problems, but talking about your fears with someone you trust can help.",
    mentalEncouragement: "Your anxious thoughts don't define reality. Focus on what you can control and let go of the rest.",
    childMessage: "When worries make you feel scared, remember that most scary thoughts never come true. Talk to someone who loves you about your worries.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Ten of Swords",
    suit: "Swords",
    number: 10,
    arcana: "Minor",
    meaning: "Endings, betrayal, painful loss, crisis.",
    meaningUpright: "The Ten of Swords represents a painful ending, but remember that after the darkest night comes the dawn.",
    emotionalGuidance: "Even in the darkest moments, know that this pain will pass and better times will come.",
    mentalEncouragement: "You have the strength to survive this difficult ending and begin anew. This is not your final story.",
    childMessage: "When something really sad happens, it feels like the end of everything. But like the sun rising after the darkest night, good things will come again.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Page of Swords",
    suit: "Swords",
    number: 11,
    arcana: "Minor",
    meaning: "Curiosity, vigilance, communication, truth-seeking.",
    meaningUpright: "The Page of Swords represents curiosity, eagerness to learn, and the courage to seek truth and communicate clearly.",
    emotionalGuidance: "Your curiosity and desire for truth are admirable. Use these qualities to learn and grow.",
    mentalEncouragement: "Your quick mind and communication skills are developing beautifully. Keep asking questions and seeking knowledge.",
    childMessage: "You love learning new things and asking questions! Like a young detective, your curiosity helps you discover amazing truths about the world.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Knight of Swords",
    suit: "Swords",
    number: 12,
    arcana: "Minor",
    meaning: "Ambition, determination, swift action, impulsiveness.",
    meaningUpright: "The Knight of Swords represents swift action, determination, and ambitious pursuit of goals.",
    emotionalGuidance: "Your determination is admirable, but remember to consider others' feelings as you pursue your goals.",
    mentalEncouragement: "Your ambition and quick thinking can achieve great things. Channel this energy wisely and effectively.",
    childMessage: "You're determined and quick to act! Like a fast knight riding toward adventure, you can achieve your goals with focus and determination.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "Queen of Swords",
    suit: "Swords",
    number: 13,
    arcana: "Minor",
    meaning: "Independence, clarity, perception, intellect.",
    meaningUpright: "The Queen of Swords represents intellectual clarity, independence, and the ability to see situations objectively.",
    emotionalGuidance: "Balance your sharp intellect with compassion. Your clear thinking helps others, but kindness makes it more effective.",
    mentalEncouragement: "Your intellectual abilities and clear perception are exceptional gifts. Use them to help and guide others.",
    childMessage: "You think clearly and see things as they really are! Like a wise queen who helps people understand, your smart thinking is a wonderful gift.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },
  {
    name: "King of Swords",
    suit: "Swords",
    number: 14,
    arcana: "Minor",
    meaning: "Authority, truth, discipline, intellectual power.",
    meaningUpright: "The King of Swords represents intellectual authority, pursuit of truth, and disciplined thinking.",
    emotionalGuidance: "Use your intellectual authority wisely and always in service of truth and justice.",
    mentalEncouragement: "Your disciplined mind and intellectual power can solve complex problems and lead others to truth.",
    childMessage: "You're really smart and fair! Like a wise king who makes good decisions, you can use your intelligence to help others and solve problems.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop"
  },

  // Pentacles Suit
  {
    name: "Ace of Pentacles",
    suit: "Pentacles",
    number: 1,
    arcana: "Minor",
    meaning: "New opportunities, prosperity, abundance, stability.",
    meaningUpright: "The Ace of Pentacles represents new opportunities for prosperity, abundance, and material stability entering your life.",
    emotionalGuidance: "Feel excited about new opportunities and trust that abundance is flowing your way.",
    mentalEncouragement: "Your practical thinking and planning abilities will help you make the most of new opportunities.",
    childMessage: "Exciting new opportunities are coming your way! Like finding a treasure chest, wonderful things are waiting for you to discover.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Two of Pentacles",
    suit: "Pentacles",
    number: 2,
    arcana: "Minor",
    meaning: "Balance, adaptability, juggling priorities.",
    meaningUpright: "The Two of Pentacles represents juggling multiple responsibilities and finding balance in a busy life.",
    emotionalGuidance: "Stay flexible and don't stress too much about having many things to do. You can handle it with grace.",
    mentalEncouragement: "Your adaptability and multitasking abilities are impressive. You can balance everything successfully.",
    childMessage: "You're great at doing lots of things at once! Like a skilled juggler keeping balls in the air, you can balance all your activities.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Three of Pentacles",
    suit: "Pentacles",
    number: 3,
    arcana: "Minor",
    meaning: "Teamwork, collaboration, learning, building.",
    meaningUpright: "The Three of Pentacles represents successful teamwork, collaboration, and learning from others to build something meaningful.",
    emotionalGuidance: "Working with others brings joy and creates stronger results. Value the contributions of your teammates.",
    mentalEncouragement: "Your ability to collaborate and learn from others is a valuable skill that will serve you well.",
    childMessage: "Working together with others is fun and makes everything better! Like builders creating something amazing, teamwork makes dreams come true.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Four of Pentacles",
    suit: "Pentacles",
    number: 4,
    arcana: "Minor",
    meaning: "Security, control, holding on, conservatism.",
    meaningUpright: "The Four of Pentacles represents the desire for security and control, but be careful not to hold on too tightly.",
    emotionalGuidance: "It's good to feel secure, but don't let the need for control prevent you from enjoying life and being generous.",
    mentalEncouragement: "Your careful planning creates security, but remember to balance saving with sharing and enjoying life.",
    childMessage: "It's good to take care of your things, but don't forget to share and have fun too! Like keeping some candy but sharing some with friends.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Five of Pentacles",
    suit: "Pentacles",
    number: 5,
    arcana: "Minor",
    meaning: "Hardship, financial loss, insecurity, struggle.",
    meaningUpright: "The Five of Pentacles represents temporary hardship and struggle, but help and better times are available if you look for them.",
    emotionalGuidance: "During difficult times, don't be afraid to ask for help from others who care about you.",
    mentalEncouragement: "Remember that hardships are temporary. Focus on solutions and don't be too proud to accept help.",
    childMessage: "When things feel hard and you need help, it's okay to ask for it! Like knocking on a friend's door when it's cold, help is always available.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Six of Pentacles",
    suit: "Pentacles",
    number: 6,
    arcana: "Minor",
    meaning: "Generosity, charity, sharing wealth, fairness.",
    meaningUpright: "The Six of Pentacles represents generosity, fair exchange, and the joy that comes from sharing your abundance with others.",
    emotionalGuidance: "Sharing with others brings wonderful feelings of connection and purpose. Generosity makes your heart happy.",
    mentalEncouragement: "Your understanding of fair exchange and generosity creates positive relationships and communities.",
    childMessage: "Sharing with others feels so good! Like giving gifts that make people smile, your generosity makes the world a happier place.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Seven of Pentacles",
    suit: "Pentacles",
    number: 7,
    arcana: "Minor",
    meaning: "Patience, perseverance, investment, long-term view.",
    meaningUpright: "The Seven of Pentacles represents patience, perseverance, and taking a long-term view of your investments and efforts.",
    emotionalGuidance: "Be patient with your progress. Good things take time to grow, and your efforts will eventually pay off.",
    mentalEncouragement: "Your ability to think long-term and persevere through challenges will lead to lasting success.",
    childMessage: "Good things take time to grow! Like planting seeds and waiting for flowers, your hard work will bloom into something beautiful.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Eight of Pentacles",
    suit: "Pentacles",
    number: 8,
    arcana: "Minor",
    meaning: "Apprenticeship, diligence, skill development, mastery.",
    meaningUpright: "The Eight of Pentacles represents dedicated practice, skill development, and the path toward mastery through diligent work.",
    emotionalGuidance: "Take pride in learning and developing your skills. The journey toward mastery is rewarding in itself.",
    mentalEncouragement: "Your dedication to learning and improving your skills will lead to mastery and success.",
    childMessage: "Practice makes perfect! Like learning to ride a bike or play an instrument, working hard at something helps you become really good at it.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Nine of Pentacles",
    suit: "Pentacles",
    number: 9,
    arcana: "Minor",
    meaning: "Luxury, self-sufficiency, accomplishment, independence.",
    meaningUpright: "The Nine of Pentacles represents financial independence, luxury earned through hard work, and self-sufficiency.",
    emotionalGuidance: "Feel proud of what you've accomplished through your own efforts. You deserve to enjoy the fruits of your labor.",
    mentalEncouragement: "Your independence and self-sufficiency are admirable achievements that you should celebrate.",
    childMessage: "You've worked hard and achieved wonderful things! Like a gardener enjoying beautiful flowers they grew themselves, you can be proud of your success.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Ten of Pentacles",
    suit: "Pentacles",
    number: 10,
    arcana: "Minor",
    meaning: "Wealth, legacy, family, long-term success.",
    meaningUpright: "The Ten of Pentacles represents lasting wealth, family prosperity, and creating a legacy that benefits future generations.",
    emotionalGuidance: "Think about the legacy you want to leave and how your success can benefit your family and community.",
    mentalEncouragement: "Your long-term thinking and planning create lasting prosperity that extends beyond yourself to benefit others.",
    childMessage: "The best success is when everyone in your family is happy and secure! Like building a strong house that keeps everyone safe and comfortable.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Page of Pentacles",
    suit: "Pentacles",
    number: 11,
    arcana: "Minor",
    meaning: "Manifestation, new job, study, ambition.",
    meaningUpright: "The Page of Pentacles represents new opportunities for learning, ambition beginning to manifest, and practical studies.",
    emotionalGuidance: "Feel excited about new opportunities to learn and grow. Your ambition will guide you toward success.",
    mentalEncouragement: "Your practical approach to learning and your ambition will help you achieve your material goals.",
    childMessage: "You're ready to learn new practical things and work toward your dreams! Like a student excited about a new subject, your eagerness will help you succeed.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Knight of Pentacles",
    suit: "Pentacles",
    number: 12,
    arcana: "Minor",
    meaning: "Hard work, responsibility, routine, patience.",
    meaningUpright: "The Knight of Pentacles represents steady progress through hard work, responsibility, and patient dedication to your goals.",
    emotionalGuidance: "Take satisfaction in steady progress and responsible actions. Consistent effort brings lasting results.",
    mentalEncouragement: "Your methodical approach and strong work ethic will help you achieve your goals reliably and thoroughly.",
    childMessage: "You work hard and are very responsible! Like a steady horse carrying its rider safely to their destination, your reliability is a wonderful strength.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "Queen of Pentacles",
    suit: "Pentacles",
    number: 13,
    arcana: "Minor",
    meaning: "Nurturing, practicality, abundance, security.",
    meaningUpright: "The Queen of Pentacles represents nurturing others through practical means, creating abundance and security for everyone around you.",
    emotionalGuidance: "Your nurturing and practical nature creates a secure environment where others can thrive.",
    mentalEncouragement: "Your ability to balance practical matters with caring for others makes you a natural provider and protector.",
    childMessage: "You take care of others in practical, helpful ways! Like a loving parent making sure everyone has what they need, you help create security and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  },
  {
    name: "King of Pentacles",
    suit: "Pentacles",
    number: 14,
    arcana: "Minor",
    meaning: "Wealth, leadership, stability, discipline.",
    meaningUpright: "The King of Pentacles represents financial success, reliable leadership, and the disciplined approach that creates lasting wealth.",
    emotionalGuidance: "Use your success and resources to help others and create stability in your community.",
    mentalEncouragement: "Your leadership and financial wisdom create lasting prosperity not just for yourself but for everyone around you.",
    childMessage: "You're a natural leader who helps everyone prosper! Like a wise king who makes sure his kingdom is wealthy and stable, you help create success for everyone.",
    imageUrl: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop"
  }
];

export const allTarotCards = [...majorArcana, ...minorArcana];

export function getRandomTarotCard(): TarotCard {
  return allTarotCards[Math.floor(Math.random() * allTarotCards.length)];
}

export function getTarotCardByName(name: string): TarotCard | undefined {
  return allTarotCards.find(card => card.name.toLowerCase() === name.toLowerCase());
}