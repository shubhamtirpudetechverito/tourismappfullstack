// In-memory seed data
export const tours = [
  {
    id: 1,
    title: 'Bali Beach Escape',
    destination: 'Bali, Indonesia',
    country: 'Indonesia',
    duration: 7,
    price: 1299,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200',
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200'
    ],
    description:
      'Relax on pristine beaches, explore ancient temples, and immerse yourself in Balinese culture.',
    highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Nusa Penida Island', 'Sunset at Uluwatu'],
    includes: ['5-star hotel', 'Daily breakfast', 'Airport transfers', 'Guided tours'],
    info: {
      history:
        'Bali has been inhabited since around 2000 BCE and was shaped by Hindu-Javanese influences from the 10th century. Dutch colonial rule began in the 19th century, and Bali joined Indonesia in 1945. Its unique Hindu-Balinese culture flourished despite outside influence.',
      culture:
        'Bali is the only Hindu-majority island in Indonesia. Daily life revolves around temples, offerings (canang sari), and ceremonies. Balinese dance, gamelan music, and wood/stone carving are world-renowned.',
      bestTime: 'April – October (dry season). July–August is peak; May and September offer fewer crowds.',
      language: 'Indonesian, Balinese. English widely spoken in tourist areas.',
      currency: 'Indonesian Rupiah (IDR)',
      cuisine:
        'Must-try: Babi Guling (suckling pig), Bebek Betutu (slow-cooked duck), Nasi Goreng, Satay Lilit, and fresh coconut water.',
      tips: [
        'Dress modestly when visiting temples (sarong required)',
        'Rent a scooter for flexibility — or hire a driver for the day',
        'Bargain at local markets — start at 50% of asking price',
        'Always carry small cash for temple donations',
        'Avoid drinking tap water; bottled water is cheap and safe'
      ]
    }
  },
  {
    id: 2,
    title: 'Swiss Alps Adventure',
    destination: 'Interlaken, Switzerland',
    country: 'Switzerland',
    duration: 10,
    price: 2499,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200',
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200',
      'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200'
    ],
    description:
      'Trek through snow-capped peaks, cruise pristine lakes, and ride scenic mountain railways.',
    highlights: ['Jungfraujoch', 'Lake Brienz', 'Grindelwald', 'Glacier Express'],
    includes: ['Mountain lodge', 'Half-board meals', 'Rail pass', 'English guide'],
    info: {
      history:
        'The Swiss Confederacy was formed in 1291 by three cantons. The Alps have long served as a natural barrier and a cultural crossroads. Interlaken became a tourism hub in the 19th century when railways opened mountain access.',
      culture:
        'Switzerland has four official languages (German, French, Italian, Romansh). Alpine traditions include yodeling, alphorn playing, and cheese-making. Punctuality and cleanliness are deeply valued.',
      bestTime: 'June – September for hiking. December – March for skiing and snow sports.',
      language: 'German (Bernese dialect), French, Italian, Romansh',
      currency: 'Swiss Franc (CHF)',
      cuisine:
        'Try: Fondue, Raclette, Rösti, Älplermagronen, and Swiss chocolate from local chocolatiers.',
      tips: [
        'Buy a Swiss Travel Pass for unlimited trains, buses, and boats',
        'Mountain weather changes fast — always pack a rain jacket',
        'Tap water is excellent and free',
        'Most shops close on Sundays',
        'Book Jungfraujoch tickets in advance during peak season'
      ]
    }
  },
  {
    id: 3,
    title: 'Maldives Luxury Retreat',
    destination: 'Maldives',
    country: 'Maldives',
    duration: 5,
    price: 3199,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200'
    ],
    description:
      'Overwater villas, crystal-clear lagoons, and world-class diving in a tropical paradise.',
    highlights: ['Overwater villa', 'Snorkeling', 'Sunset cruise', 'Spa treatment'],
    includes: ['All-inclusive meals', 'Seaplane transfer', 'Diving gear', 'Couples spa'],
    info: {
      history:
        'The Maldives has been a crossroads for traders since ancient times. It became a sultanate in the 12th century after converting to Islam, a British protectorate in 1887, and gained independence in 1965. Tourism boomed from the 1970s.',
      culture:
        'A conservative Muslim nation with warm hospitality. Traditional music (Bodu Beru), crafts, and fishing form the cultural backbone. Alcohol is available only at resorts.',
      bestTime: 'November – April (dry season). May–October is wetter but cheaper.',
      language: 'Dhivehi; English widely spoken at resorts',
      currency: 'Maldivian Rufiyaa (MVR); USD accepted at resorts',
      cuisine:
        'Try: Mas Huni (tuna & coconut breakfast), Garudhiya (fish soup), Fihunu Mas (grilled fish), and Roshi flatbread.',
      tips: [
        'Seaplanes operate only in daylight — book morning arrivals',
        'Respect local customs on inhabited islands (modest dress, no alcohol)',
        'Bring reef-safe sunscreen',
        'Wi-Fi is limited; buy a local SIM at the airport',
        'Cash is rarely needed at resorts — everything is charged to your villa'
      ]
    }
  },
  {
    id: 4,
    title: 'Japan Cherry Blossom Tour',
    destination: 'Tokyo · Kyoto · Osaka',
    country: 'Japan',
    duration: 9,
    price: 2799,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200'
    ],
    description:
      'Experience Japan during sakura season with temples, bullet trains, and authentic cuisine.',
    highlights: ['Mt. Fuji', 'Fushimi Inari', 'Shinjuku Gyoen', 'Dotonbori'],
    includes: ['JR Pass', 'Ryokan stay', 'Tea ceremony', 'Local guide'],
    info: {
      history:
        'Japan has one of the world\'s oldest continuous civilizations. After centuries of shogunate rule, the Meiji Restoration (1868) opened Japan to modernization. Tokyo, Kyoto, and Osaka each carry distinct layers of this history.',
      culture:
        'A blend of ancient tradition and hyper-modernity. Key concepts: omotenashi (hospitality), wabi-sabi (imperfect beauty), and respect for seasonal rhythms. Bowing, removing shoes indoors, and quiet public behavior are expected.',
      bestTime: 'Late March – early April for cherry blossoms. Autumn (Oct–Nov) for foliage.',
      language: 'Japanese; English signage in major cities',
      currency: 'Japanese Yen (JPY)',
      cuisine:
        'Try: Sushi, Ramen, Tempura, Okonomiyaki, Takoyaki, and Kaiseki (multi-course traditional meal).',
      tips: [
        'Get a Suica/Pasmo IC card for trains and convenience stores',
        'Carry cash — many small shops don\'t accept cards',
        'Learn a few phrases: arigatou (thanks), sumimasen (excuse me)',
        'Don\'t tip — it\'s considered rude',
        'Book ryokan and popular restaurants well in advance'
      ]
    }
  },
  {
    id: 5,
    title: 'Safari in Kenya',
    destination: 'Masai Mara, Kenya',
    country: 'Kenya',
    duration: 6,
    price: 2299,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
      'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=1200',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200'
    ],
    description:
      'Witness the Great Migration and the Big Five on an unforgettable African safari.',
    highlights: ['Big Five spotting', 'Great Migration', 'Maasai village', 'Balloon safari'],
    includes: ['Luxury tented camp', 'All meals', 'Game drives', 'Park fees'],
    info: {
      history:
        'Kenya gained independence from Britain in 1963. The Masai Mara is named after the Maasai people, who have inhabited the region for centuries as pastoralists. It forms part of the larger Serengeti ecosystem.',
      culture:
        'The Maasai are famous for their vibrant shukas, beadwork, and adumu (jumping dance). Kenyan culture blends over 40 ethnic groups with Swahili coastal traditions.',
      bestTime: 'July – October for the Great Migration. January – March for calving season.',
      language: 'Swahili, English, Maasai',
      currency: 'Kenyan Shilling (KES)',
      cuisine:
        'Try: Nyama Choma (grilled meat), Ugali, Sukuma Wiki, and Kenyan coffee or chai.',
      tips: [
        'Yellow fever vaccination required for some nationalities',
        'Pack neutral-colored clothing — avoid blue and black (attracts tsetse flies)',
        'Early morning game drives give the best wildlife sightings',
        'Bring binoculars and a zoom lens',
        'Respect Maasai customs — ask before photographing people'
      ]
    }
  },
  {
    id: 6,
    title: 'Iceland Northern Lights',
    destination: 'Reykjavik, Iceland',
    country: 'Iceland',
    duration: 5,
    price: 1899,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200',
      'https://images.unsplash.com/photo-1504233908067-8df7ad4c70b7?w=1200',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200',
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1200'
    ],
    description:
      'Chase the aurora borealis across glaciers, geysers, and volcanic landscapes.',
    highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Glacier hike'],
    includes: ['Boutique hotel', 'Breakfast', 'Super jeep tour', 'Aurora forecast'],
    info: {
      history:
        'Settled by Norse explorers around 870 CE, Iceland established the world\'s oldest parliament (Althing) in 930. It gained independence from Denmark in 1944. Volcanic activity has shaped both the land and its people.',
      culture:
        'Icelanders are descendants of Vikings and Celts. Literature (sagas), music (Björk, Sigur Rós), and a strong belief in elves (huldufólk) are cultural staples. Almost everyone speaks English.',
      bestTime: 'September – March for Northern Lights. June – August for midnight sun.',
      language: 'Icelandic; English widely spoken',
      currency: 'Icelandic Króna (ISK)',
      cuisine:
        'Try: Lamb soup (kjötsúpa), Skyr yogurt, Harðfiskur (dried fish), and hot dogs from Bæjarins Beztu.',
      tips: [
        'Check the aurora forecast (vedur.is) nightly — clear skies matter more than KP index',
        'Rent a 4x4 if driving outside the Ring Road in winter',
        'Bring waterproof, windproof layers — weather changes hourly',
        'Alcohol is expensive — buy at the airport Duty Free',
        'Tipping is not expected'
      ]
    }
  },
];

export const bookings = [];
export const savedDestinations = []; // { id, tourId, savedAt }
