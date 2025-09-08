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
    "The moon is sending you special courage powers today, making you feel like you can do anything you set your mind to!",
    "Your spirit burns bright like a magical fire today, filling you with confidence and determination to tackle any challenge.",
    "You wake up feeling like a brave explorer ready to discover amazing new worlds and exciting adventures!",
    "Today your heart beats with the rhythm of a fearless warrior, ready to protect your friends and stand up for what's right.",
    "You're buzzing with energetic excitement today, like a shooting star racing across the sky with pure joy and enthusiasm!",
    "Your inner flame glows extra bright today, making you feel like you can climb the highest mountains and reach for the stars.",
    "You feel like a champion today, with courage flowing through your veins like liquid lightning, ready for any adventure!",
    "Today you're radiating confidence like the sun itself, warming everyone around you with your brave and caring spirit.",
    "Your heart is filled with the power of a thunderstorm today - strong, exciting, and absolutely unstoppable!",
    "You feel like a phoenix rising today, your spirit soaring high above any worries or fears that try to hold you back.",
    "Today brings you the energy of a wild mustang - free, powerful, and ready to gallop toward your biggest dreams!",
    "Your emotional energy today sparkles like fireworks in the night sky, bright, colorful, and absolutely magnificent!"
  ],
  "Taurus": [
    "You feel calm and happy today, like a cozy bear in a warm cave full of your favorite snacks and toys.",
    "The moon is giving you extra patience today, like when you're building the most amazing tower with blocks.",
    "Today your heart feels like a beautiful garden where all the flowers are blooming just for you!",
    "Your spirit is as steady as a mighty oak tree today, strong roots keeping you grounded while your branches reach for the sky.",
    "Today you feel like a wise turtle, taking your time to enjoy all the beautiful details that others might rush past.",
    "Your heart is like a treasure chest today, filled with all the love and kindness you've been collecting throughout your life.",
    "You wake up feeling as comfortable as your favorite blanket, wrapped in warmth and ready to spread that cozy feeling to others.",
    "Today your emotions flow like honey - sweet, golden, and bringing comfort to everyone who experiences your gentle presence.",
    "You feel like a master gardener today, knowing exactly how to nurture beautiful things and help them grow strong and healthy.",
    "Your inner peace radiates like moonlight today, calm and serene, creating a safe space wherever you go.",
    "Today you're like a mountain that never shakes, strong and reliable, giving everyone around you a sense of security and comfort.",
    "Your heart beats with the rhythm of nature today - steady, peaceful, and perfectly in tune with the world around you.",
    "You feel like a collector of beautiful moments today, savoring each small joy like a precious gem to treasure forever.",
    "Today your spirit is like a warm campfire, drawing friends close with your comforting presence and gentle, steady glow.",
    "Your emotional energy today is like fertile soil - rich, nurturing, and ready to help wonderful things bloom and flourish."
  ],
  "Gemini": [
    "Your brain is buzzing with fun ideas today, like a busy bee flying from flower to flower collecting sweet honey!",
    "Today you might feel happy one minute and excited the next - that's okay! You're like a rainbow with lots of beautiful colors.",
    "Your thoughts are dancing around like butterflies in a magical garden, bringing you lots of creative ideas!",
    "Today your mind is like a kaleidoscope, creating beautiful new patterns with every twist and turn of your imagination.",
    "You feel like a messenger between different worlds today, able to understand and connect with everyone you meet.",
    "Your curiosity today sparkles like stardust, leading you to discover amazing new facts and fascinating stories everywhere!",
    "You wake up feeling like a storyteller with a thousand tales, each one more exciting and wonderful than the last.",
    "Today your emotions change like wind chimes in a gentle breeze - musical, flowing, and creating beautiful melodies.",
    "You feel like a detective of interesting things today, always finding the most fascinating clues and amazing discoveries.",
    "Your spirit today is like a butterfly emerging from its cocoon - free, colorful, and ready to explore the whole world!",
    "Today you're buzzing with the energy of a lightning bug, bright and quick, lighting up dark corners with your brilliant ideas.",
    "Your mind feels like a library today where every book opens to reveal new adventures and exciting possibilities.",
    "You feel like a translator between hearts today, helping everyone understand each other better with your gift for communication.",
    "Today your thoughts flow like a river with many streams, all leading to the ocean of your endless creativity.",
    "Your emotional energy today dances like leaves in the wind - light, free, and bringing joy wherever it lands."
  ],
  "Cancer": [
    "Today you're feeling extra caring, like a mama bear protecting her cubs or a superhero looking after everyone!",
    "Your heart is like a lighthouse that helps everyone feel safe and loved, especially your family and friends.",
    "The moon is wrapping you in a cozy blanket of love today, making you feel warm and special inside.",
    "Your emotions today flow like gentle ocean waves, bringing comfort and healing to everyone who needs it most.",
    "You feel like a guardian angel today, watching over your loved ones with invisible wings of protection and care.",
    "Today your heart is like a magical shell that holds all the beautiful memories and love you've collected over time.",
    "You wake up feeling like a nurturing gardener, ready to water the hearts of others with your kindness and understanding.",
    "Your intuition today glows like moonbeams on water, showing you exactly how to help others feel better and more loved.",
    "You feel like a cozy campfire today, drawing people close with your warmth and making everyone feel like they belong.",
    "Today your spirit is like a mother bird, always knowing exactly what your friends and family need to feel safe and happy.",
    "Your emotional radar today works like magic, sensing when someone needs a hug, a smile, or just someone to listen.",
    "You feel like a keeper of family treasures today, holding onto all the special moments that make your heart feel full.",
    "Today your love flows like a gentle stream, reaching everyone around you and making their hearts bloom like flowers.",
    "Your caring nature today shines like stars reflected in a peaceful lake, beautiful and infinitely deep.",
    "You feel like a home where everyone belongs today, your presence creating a safe haven wherever you go."
  ],
  "Leo": [
    "Today you shine as bright as the sun! Everyone around you feels happy because of your amazing, cheerful energy.",
    "You feel like a king or queen today, wearing an invisible crown that makes you feel confident and special.",
    "Your spirit is soaring high like a beautiful eagle, and you feel proud of all the wonderful things you can do!",
    "Your heart today radiates like golden sunlight, warming everyone around you and making them feel special and appreciated.",
    "You feel like a star performer today, ready to share your talents and bring joy to everyone who watches you shine.",
    "Today your confidence glows like a magnificent phoenix, rising from any challenge stronger and more beautiful than before.",
    "You wake up feeling like royalty in your own magical kingdom, where kindness is the greatest treasure of all.",
    "Your generous spirit today burns like a bonfire of joy, lighting up the darkness and bringing people together in celebration.",
    "You feel like a superhero today, with the power to make others feel brave, special, and loved just by being yourself.",
    "Today your personality sparkles like the most beautiful fireworks, colorful, exciting, and impossible to ignore!",
    "Your heart beats with the courage of a lion today, ready to protect your pride and stand up for what you believe in.",
    "You feel like a director of happiness today, orchestrating moments that make everyone around you smile and laugh.",
    "Today your energy radiates like sunshine breaking through storm clouds, bringing hope and warmth wherever you go.",
    "Your creative spirit today dances like flames in a fireplace, warm, mesmerizing, and bringing comfort to all who gather near.",
    "You feel like a celebration waiting to happen today, full of joy, excitement, and the power to make any moment magical."
  ],
  "Virgo": [
    "Today you're like a helpful robot that fixes everything perfectly! You love making things neat and helping others.",
    "The moon is helping you see things clearly, like when you clean your glasses and everything looks super sharp!",
    "Your heart is like a magical garden where you plant seeds of kindness that grow into beautiful friendships.",
    "Your attention to detail today sparkles like dewdrops on a spider's web, each one perfect and exactly where it should be.",
    "You feel like a master craftsperson today, able to create beauty and order from even the most chaotic situations.",
    "Today your helpful nature glows like a guiding star, showing others the way to make their world more organized and peaceful.",
    "You wake up feeling like a wise healer, knowing exactly what needs fixing and how to make everything better than before.",
    "Your practical magic today works like clockwork, solving problems with grace and making complicated things seem simple.",
    "You feel like a guardian of perfection today, but the gentle kind that helps things grow into their most beautiful form.",
    "Today your caring shows through action, like a fairy godparent who fixes problems before anyone even knows they existed.",
    "Your analytical mind today works like a treasure map, leading you and others to discover hidden gems and valuable solutions.",
    "You feel like a skilled editor of life today, knowing exactly which parts to keep and which ones need gentle improvement.",
    "Today your service to others flows like a clear mountain stream - pure, refreshing, and exactly what everyone needed.",
    "Your perfectionist heart today beats with love, wanting to make the world more beautiful for everyone you care about.",
    "You feel like a careful architect today, building bridges of understanding and creating structures of support for all."
  ],
  "Libra": [
    "Today you're like a peace-making superhero who helps everyone get along and feel happy together!",
    "The moon is helping you balance everything perfectly, like when you ride a bike without wobbling.",
    "You move through today like a graceful dancer, making everything around you feel beautiful and fair.",
    "Your sense of fairness today shines like scales that always find the perfect balance, making sure everyone feels heard and valued.",
    "You feel like a diplomatic ambassador today, able to translate different viewpoints and help everyone understand each other better.",
    "Today your love of beauty radiates like an artist's palette, adding color and harmony to everything you touch.",
    "You wake up feeling like a conductor of social symphony, bringing different voices together to create beautiful music.",
    "Your peacemaking abilities today flow like silk ribbons, gently weaving people together and smoothing over rough edges.",
    "You feel like a master of compromise today, finding solutions that make everyone smile and feel like they've won.",
    "Today your charm works like magic pixie dust, sprinkling joy and cooperation wherever your gentle spirit goes.",
    "Your cooperative nature today glows like candlelight, creating warm, welcoming spaces where everyone feels comfortable.",
    "You feel like a bridge builder today, connecting hearts and minds across any gap or misunderstanding that might exist.",
    "Today your aesthetic sense sparkles like prisms in sunlight, turning ordinary moments into beautiful, memorable experiences.",
    "Your desire for harmony today flows like a gentle breeze, bringing calm to stormy situations and peace to troubled hearts.",
    "You feel like a curator of happiness today, arranging life's moments to create the most beautiful and balanced experiences."
  ],
  "Scorpio": [
    "Today you're like a detective with super powers, able to figure out mysteries and understand things deeply!",
    "The moon is helping you transform and grow, like a caterpillar becoming a beautiful butterfly.",
    "Your special intuition is working extra strong today, like having magical powers that help you know things!",
    "Your intensity today burns like a passionate flame, lighting up hidden truths and revealing secrets that others cannot see.",
    "You feel like a deep-sea explorer today, diving into the ocean of emotions and discovering treasures hidden beneath the surface.",
    "Today your transformative power works like magic alchemy, turning challenges into gold and pain into wisdom.",
    "You wake up feeling like a phoenix preparing to rise, ready to shed old skin and emerge more powerful than ever before.",
    "Your emotional depth today flows like an underground river, mysterious and powerful, nourishing hidden gardens of the soul.",
    "You feel like a guardian of secrets today, trusted with important mysteries and able to keep them safe in your heart.",
    "Today your piercing insight works like x-ray vision, seeing through superficial layers to the truth that lies beneath.",
    "Your magnetic personality today draws others like a powerful electromagnet, attracting those who seek deeper meaning.",
    "You feel like a master of renewal today, able to take broken things and transform them into something even more beautiful.",
    "Today your passionate nature glows like molten lava, creating new land where others only see destruction.",
    "Your healing abilities today work like ancient medicine, knowing exactly how to help others transform their deepest wounds.",
    "You feel like a bridge between worlds today, able to navigate both light and shadow with equal grace and understanding."
  ],
  "Sagittarius": [
    "Today you feel like an explorer ready for the biggest adventure ever! Your heart is excited to discover new things.",
    "The moon is lighting up your path like a magical flashlight, helping you find amazing new adventures!",
    "Your happy thoughts are flying high like a superhero, bringing you lots of dreams and exciting possibilities!",
    "Your adventurous spirit today soars like an eagle riding the wind, free and wild and ready to explore distant horizons.",
    "You feel like a philosopher-adventurer today, asking big questions while your feet dance toward exciting new discoveries.",
    "Today your optimism shines like a lighthouse beacon, guiding others toward hope and lighting up even the darkest storms.",
    "You wake up feeling like a storyteller with passport stamps, ready to collect new tales from far-off magical lands.",
    "Your freedom-loving heart today gallops like a wild horse across open meadows, untamed and beautifully alive.",
    "You feel like a teacher-explorer today, learning amazing things so you can share your discoveries with everyone you meet.",
    "Today your enthusiasm bubbles like a natural hot spring, warm and energizing and impossible to contain.",
    "Your wanderlust today pulls you like a magnetic compass, always pointing toward the next exciting journey ahead.",
    "You feel like a collector of wisdom today, gathering life lessons like precious gems from every experience you encounter.",
    "Today your philosophical mind expands like the universe itself, always growing bigger and discovering new wonders.",
    "Your jovial nature today spreads like sunshine breaking through clouds, bringing laughter and joy wherever you roam.",
    "You feel like a bridge between cultures today, able to find common ground and friendship with people from every walk of life."
  ],
  "Capricorn": [
    "Today you feel strong and steady like a mountain that can handle anything! You're really good at reaching your goals.",
    "The moon is shining on your path like a magical star, showing you the smart way to do things.",
    "Your heart is building amazing castles out of your dreams, one magical block at a time!",
    "Your determination today stands like an ancient redwood tree, growing slowly but surely toward the sky with incredible strength.",
    "You feel like a master architect today, carefully planning and building the foundation for all your future success.",
    "Today your patience works like a skilled sculptor, chiseling away at obstacles to reveal the masterpiece hidden within.",
    "You wake up feeling like a wise elder in a young body, understanding that the best things take time to grow properly.",
    "Your responsible nature today glows like a trusted lighthouse, guiding ships safely to shore through any storm.",
    "You feel like a mountain climber today, taking each step carefully but never doubting you'll reach the summit.",
    "Today your practical wisdom flows like an ancient river, carving new paths through impossible terrain with gentle persistence.",
    "Your ambitious spirit today burns like a forge fire, melting down obstacles and reshaping them into stepping stones.",
    "You feel like a timekeeper of dreams today, knowing exactly when to plant seeds and when to harvest the fruits of your labor.",
    "Today your steady progress moves like tectonic plates, slowly but powerfully reshaping the landscape of your life.",
    "Your leadership abilities today shine like a North Star, constant and reliable, helping others find their direction.",
    "You feel like a guardian of tradition today, honoring the past while building bridges to an even better future."
  ],
  "Aquarius": [
    "Today you're buzzing with creative energy like a friendly robot full of amazing ideas to help everyone!",
    "The moon is showing off your special uniqueness, like colorful northern lights dancing in the sky just for you!",
    "Your heart is creating the most fantastic ideas for the future, like an inventor building tomorrow's coolest inventions!",
    "Your innovative spirit today sparks like electricity, generating bright ideas that could light up entire cities with possibility.",
    "You feel like a visitor from the future today, bringing advanced concepts of kindness and equality to the present world.",
    "Today your humanitarian heart beats like a drum calling all people together, regardless of their differences or backgrounds.",
    "You wake up feeling like a mad scientist of happiness, experimenting with new ways to make the world more fair and fun.",
    "Your eccentric nature today dances like aurora borealis, beautiful, unique, and impossible to predict or contain.",
    "You feel like a social inventor today, creating new ways for people to connect, understand, and care for each other.",
    "Today your rebellious spirit flows like a river changing course, finding new paths when the old ones no longer serve.",
    "Your visionary mind today expands like the cosmos itself, seeing possibilities that others haven't even dreamed of yet.",
    "You feel like a friendly alien today, observing human behavior with love and offering insights from a higher perspective.",
    "Today your independent streak shines like a comet, following your own brilliant path across the sky of conformity.",
    "Your progressive ideals today glow like a beacon from the future, showing everyone the way to a better tomorrow.",
    "You feel like a translator between generations today, helping older and younger people understand each other's wisdom."
  ],
  "Pisces": [
    "Today you're swimming in an ocean of imagination, collecting starlight and moon magic in your kind heart!",
    "The moon is blending your dreams with reality like the most beautiful painting with all your favorite colors.",
    "Your magical intuition is flowing like a gentle river, bringing you special messages and wonderful feelings!",
    "Your compassionate soul today flows like a healing spring, bringing comfort and renewal to every heart you touch.",
    "You feel like a dream weaver today, spinning fantasy and reality together into the most beautiful stories.",
    "Today your psychic abilities shimmer like moonlight on water, showing you truths that exist beyond ordinary sight.",
    "You wake up feeling like a mermaid who's learned to walk on land, bringing oceanic wisdom to the dry world.",
    "Your artistic spirit today paints with colors that don't exist yet, creating beauty that speaks directly to the soul.",
    "You feel like a keeper of cosmic secrets today, understanding the language that stars use to whisper to each other.",
    "Today your empathy works like a magical mirror, reflecting others' feelings so clearly that healing begins automatically.",
    "Your sacrificial love today pours like gentle rain, nourishing everyone around you without expecting anything in return.",
    "You feel like a bridge between dimensions today, able to bring messages from the spirit world to help those in need.",
    "Today your imagination swims like dolphins in infinite seas, playful and intelligent and completely free.",
    "Your spiritual nature today glows like bioluminescent creatures in the deep ocean, mysterious and absolutely magical.",
    "You feel like a cosmic sponge today, absorbing all the beauty and pain of the world and transmuting it into pure love."
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
