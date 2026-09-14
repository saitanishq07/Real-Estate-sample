import { Plot, Project, Amenity, Testimonial, LocationLandmark, GalleryItem } from '../types';

export const FEATURED_PROJECT: Project = {
  id: 'vistara-greenfields',
  name: 'Vistara Greenfields',
  slug: 'vistara-greenfields',
  tagline: 'Luxury Plotted Sanctuary on Bangalore Highway',
  location: 'Bangalore Highway, Corridor South',
  totalAcres: 120,
  totalPlots: 850,
  plotSizesRange: '150 – 350 Sq. Yds',
  roadsWidth: '30 – 40 ft Internal Blacktop Roads',
  description: 'A master-planned 120-acre gated plotted ecosystem thoughtfully engineered for long-term appreciation, serene suburban living, and seamless connectivity to the economic corridor.',
  longDescription: 'Vistara Greenfields represents the pinnacle of planned plotted developments. Situated right along the fast-growing Bangalore Highway corridor, this 120-acre gated enclave is engineered with subterranean drainage, underground electricity infrastructure, lush central avenues, and a 15,000 sq. ft. community clubhouse. Designed for families seeking to build their dream homes or investors prioritizing secure land assets with clear titles.',
  highlights: [
    '100% Clear Title & HMDA/DTCP Approved Layout',
    '30 ft & 40 ft Wide Internal Blacktop Roads',
    'Underground Electrical Cabling & Sewerage Lines',
    'Grand Entrance Arch with 24/7 Security Gate',
    '15,000 Sq. Ft. Designer Clubhouse & Swimming Pool',
    'Avenue Plantation & Central Park Promenade'
  ],
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  masterPlanImage: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1600&q=80',
  status: 'Ongoing',
  startingPriceLakhs: 24.50
};

export const PROJECTS_LIST: Project[] = [
  FEATURED_PROJECT,
  {
    id: 'vistara-crest',
    name: 'Vistara Crest',
    slug: 'vistara-crest',
    tagline: 'Premium Airport Expressway Plotted Enclave',
    location: 'North Airport Highway Expressway',
    totalAcres: 85,
    totalPlots: 620,
    plotSizesRange: '200 – 400 Sq. Yds',
    roadsWidth: '40 – 60 ft Avenue Roads',
    description: 'An elite commercial & residential plotted development in proximity to the International Airport, designed for high-net-worth investors and modern villa construction.',
    longDescription: 'Positioned in the prime growth zone of the International Airport Expressway, Vistara Crest features wide boulevard roads, smart street lighting, high-speed fiber connectivity, and dedicated sports arenas.',
    highlights: [
      'Proximity to International Airport & Aerospace Hub',
      '60 ft Commercial Boulevard Main Avenue',
      'Solar-Powered LED Street Infrastructure',
      'Dedicated Tennis & Basketball Sports Courts'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    masterPlanImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    status: 'Upcoming',
    startingPriceLakhs: 38.00
  },
  {
    id: 'vistara-meadows',
    name: 'Vistara Meadows',
    slug: 'vistara-meadows',
    tagline: 'Serene Nature-First Township',
    location: 'East City Highway Corridor',
    totalAcres: 150,
    totalPlots: 1100,
    plotSizesRange: '150 – 300 Sq. Yds',
    roadsWidth: '30 – 50 ft Internal Roads',
    description: 'A sprawling eco-conscious plotted community built around natural water bodies, organic parks, and extensive sports facilities.',
    longDescription: 'Vistara Meadows blends environmental sustainability with urban convenience. Features rainwater harvesting recharge pits, fruit orchards, cycling trails, and a lakeside promenade.',
    highlights: [
      'Natural Lake Frontage & Water Feature Promenade',
      'Over 25% Open Greenery & Organic Gardens',
      'Multi-purpose Amphitheatre & Wellness Zone'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    masterPlanImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    status: 'Upcoming',
    startingPriceLakhs: 22.00
  }
];

// Helper generator for 80 realistic plots across Block A, B, C, D
const generatePlots = (): Plot[] => {
  const plots: Plot[] = [];
  const blocks: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const facings: ('East' | 'West' | 'North' | 'South' | 'North-East')[] = ['East', 'West', 'North', 'South', 'North-East'];
  
  blocks.forEach((block) => {
    for (let i = 1; i <= 20; i++) {
      const numStr = i < 10 ? `0${i}` : `${i}`;
      const plotId = `${block}${numStr}`;
      
      // Determine size variation
      let sizeSqYd = 150;
      let dimensions = '30 × 45 ft';
      let basePrice = 24.50;
      
      if (i % 4 === 0) {
        sizeSqYd = 300;
        dimensions = '45 × 60 ft';
        basePrice = 49.00;
      } else if (i % 3 === 0) {
        sizeSqYd = 250;
        dimensions = '37.5 × 60 ft';
        basePrice = 40.50;
      } else if (i % 2 === 0) {
        sizeSqYd = 200;
        dimensions = '30 × 60 ft';
        basePrice = 32.80;
      }

      // Determine facing
      const facing = facings[i % facings.length];
      
      // East/North-East premium boost
      if (facing === 'East' || facing === 'North-East') {
        basePrice += 1.50;
      }

      // Status distribution algorithm
      let status: 'AVAILABLE' | 'RESERVED' | 'SOLD' = 'AVAILABLE';
      if ([3, 7, 12, 18].includes(i)) {
        status = 'RESERVED';
      } else if ([2, 5, 8, 11, 14, 15, 19].includes(i)) {
        status = 'SOLD';
      }

      const roadWidthFt = (i % 5 === 0) ? 40 : 30;
      const cornerPlot = i === 1 || i === 20 || i % 5 === 0;
      const parkFacing = i === 4 || i === 9 || i === 16;

      plots.push({
        id: plotId,
        number: plotId,
        block,
        sizeSqYd,
        dimensions,
        facing,
        roadWidthFt,
        priceLakhs: parseFloat(basePrice.toFixed(2)),
        status,
        cornerPlot,
        parkFacing
      });
    }
  });

  return plots;
};

export const MOCK_PLOTS: Plot[] = generatePlots();

export const AMENITIES_LIST: Amenity[] = [
  {
    id: 'entrance-arch',
    title: 'Grand Entrance Gateway',
    description: 'Imposing architectural entrance arch featuring security checkpoints, boom barriers, and access control.',
    category: 'Security & Greenery',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'clubhouse',
    title: '15,000 Sq. Ft. Clubhouse',
    description: 'State-of-the-art social clubhouse equipped with swimming pool, gym, indoor games, and banquet hall.',
    category: 'Recreation',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'gardens',
    title: 'Landscaped Botanical Parks',
    description: 'Over 10 acres of manicured lawns, flower beds, shaded seating pergolas, and thematic gardens.',
    category: 'Security & Greenery',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'play-area',
    title: 'Children’s Play Zone',
    description: 'Safe rubberized play spaces with modern jungle gyms, swings, slides, and seating for parents.',
    category: 'Recreation',
    iconName: 'Smile',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'walking-tracks',
    title: 'Jogging & Fitness Trails',
    description: '3 km continuous paved reflexology and jogging tracks framed by lush green trees.',
    category: 'Wellness',
    iconName: 'Footprints',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roads-lighting',
    title: 'Wide Blacktop Roads & LED Lighting',
    description: '30 ft and 40 ft wide internal bitumen roads lined with underground power lines and smart LED streetlights.',
    category: 'Infrastructure',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'water-infra',
    title: '24/7 Water & Underground Drainage',
    description: 'Dedicated overhead water reservoir tanks, individual plot water connections, and underground drainage network.',
    category: 'Infrastructure',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'security-cctv',
    title: '24/7 Compound Security & CCTV',
    description: 'Perimeter compound wall with 24/7 guarded patrol, high-definition CCTV coverage, and visitor logs.',
    category: 'Security & Greenery',
    iconName: 'Lock',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  }
];

export const LOCATION_LANDMARKS: LocationLandmark[] = [
  {
    id: 'highway',
    name: 'Bangalore Highway (NH-44)',
    category: 'Transport',
    distanceKm: 0.2,
    travelTimeMinutes: 1,
    iconName: 'Navigation'
  },
  {
    id: 'airport',
    name: 'International Airport',
    category: 'Transport',
    distanceKm: 28,
    travelTimeMinutes: 25,
    iconName: 'Plane'
  },
  {
    id: 'it-park',
    name: 'Financial & IT Tech Corridor',
    category: 'Commercial',
    distanceKm: 32,
    travelTimeMinutes: 30,
    iconName: 'Briefcase'
  },
  {
    id: 'school',
    name: 'Greenfield International School',
    category: 'Education',
    distanceKm: 3.5,
    travelTimeMinutes: 5,
    iconName: 'GraduationCap'
  },
  {
    id: 'hospital',
    name: 'Apollo / Sunshine Superspeciality Hospital',
    category: 'Healthcare',
    distanceKm: 6.8,
    travelTimeMinutes: 10,
    iconName: 'Activity'
  },
  {
    id: 'mall',
    name: 'Central Lifestyle Mall & Multiplex',
    category: 'Leisure',
    distanceKm: 11.0,
    travelTimeMinutes: 15,
    iconName: 'ShoppingBag'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rahul Mehta',
    role: 'IT Senior Architect & NRI Investor',
    location: 'Singapore / Hyderabad',
    quote: 'Vistara made the entire land purchase process feel transparent and straightforward. The quality of layout planning, clear documentation, and road infrastructure gave us immediate confidence in our long-term investment.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    plotPurchased: 'Plot A04 (East Facing, 250 Sq. Yds)',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Priya & Ananth Rao',
    role: 'First-time Home Builders',
    location: 'Bangalore',
    quote: 'We spent six months exploring plotted developments along the highway. Vistara Greenfields stood out because of its wide internal roads, underground electrical lines, and clear HMDA approvals.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    plotPurchased: 'Plot B12 (300 Sq. Yds, Park View)',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Col. Vikram Singh (Retd.)',
    role: 'Property Investor',
    location: 'Hyderabad',
    quote: 'As someone who values integrity and strict legal compliance, Vistara Estates impressed me with their 100% clear title process and seamless site visit coordination. Excellent developer standards.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    plotPurchased: 'Plot C01 & C02 (Corner Plots)',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vistara Greenfields Master Entrance Gateway',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Imposing 60 ft gateway arch with security checkposts and greenery.'
  },
  {
    id: 'gal-2',
    title: '40 ft Wide Internal Avenue Roads',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Finished blacktop roads with curbing, streetlights, and tree plantations.'
  },
  {
    id: 'gal-3',
    title: '15,000 Sq. Ft. Resident Clubhouse',
    category: 'Amenities',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Modern luxury clubhouse featuring temperature-controlled pool and fitness gym.'
  },
  {
    id: 'gal-4',
    title: 'Central Botanical Park Promenade',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush 3-acre central park with pergolas, floral gardens, and reflexology paths.'
  },
  {
    id: 'gal-5',
    title: 'Plot Demarcation & Boundary Stones',
    category: 'Master Plan',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Precision-measured plots with individual boundary stones and underground utility points.'
  },
  {
    id: 'gal-6',
    title: 'Children’s Play & Activity Zone',
    category: 'Amenities',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'Safe equipment and rubberized flooring designed for kids of all ages.'
  },
  {
    id: 'gal-7',
    title: 'Sunset Views across Vistara Greenfields',
    category: 'Lifestyle',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Peaceful, pollution-free living surrounded by open countryside.'
  },
  {
    id: 'gal-8',
    title: 'Overhead Reservoir & Water Management',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dedicated 2.5 Lakh Liter water tower ensuring uninterrupted water pressure.'
  }
];

export const FAQS_LIST = [
  {
    question: 'Are the titles for Vistara Greenfields 100% clear and legally verified?',
    answer: 'Yes. All Vistara Estates developments carry 100% clear legal titles, vetted by top legal firms. All layouts are fully approved by HMDA / DTCP with clear plot demarcations.'
  },
  {
    question: 'Can I get a home loan or plot purchase loan from major banks?',
    answer: 'Absolutely. Vistara Greenfields is pre-approved by leading financial institutions including HDFC Bank, SBI, ICICI Bank, and Axis Bank for up to 80% plot loan financing.'
  },
  {
    question: 'What infrastructure is provided to individual plot owners?',
    answer: 'Every individual plot comes equipped with underground electrical connection cabling, water supply pipe taps, underground sewage outlet, storm water drains, and direct access to 30 ft or 40 ft blacktop roads.'
  },
  {
    question: 'When can I begin villa construction on my plot?',
    answer: 'Construction can begin immediately after plot registration! Vistara Greenfields is fully developed with operational roads, water lines, and security gate access.'
  },
  {
    question: 'What are the maintenance arrangements for the layout infrastructure?',
    answer: 'Vistara Estates manages initial layout maintenance for 3 years, after which maintenance is transitioned to the Vistara Owners Resident Welfare Association (RWA).'
  }
];
