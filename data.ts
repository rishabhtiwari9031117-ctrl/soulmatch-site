import { Profile, SuccessStory, Testimonial } from './types';

export const INITIAL_PROFILES: Profile[] = [
  {
    id: 'p1',
    name: 'Bhavna Shukla',
    age: 27,
    gender: 'Female',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'MBA in Finance',
    profession: 'Senior Financial Analyst',
    income: '₹18 Lakhs per Annum',
    height: "5'5\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Upper-middle-class nuclear family. Father is a retired Bank Manager, Mother is a homemaker, and elder brother is a Software Engineer in Germany.',
    lifestyle: 'Vegetarian, strictly non-smoker, socially active but values quiet evenings. Enjoys classical music, playing badminton, and trekking.',
    partnerPreferences: 'Looking for an educated, well-settled Hindu IT or management professional aged 28-32, valuing family culture while respecting personal goals.',
    verified: true,
    phone: '+919876543210',
    email: 'bhavna.s@soulmatch.com',
    whatsapp: '919876543210',
    aboutMe: 'A cheerful, independent individual balance-minded between deep-rooted family traditions and high-flying career aspirations. Dedicated with integrity and a warm sense of humor.'
  },
  {
    id: 'p2',
    name: 'Aditya Yadav',
    age: 21,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Yadav',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'B.Tech in Electrical Engineering',
    profession: 'Electrical Engineer',
    income: '₹35 Lakhs per Annum',
    height: "5'11\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Business family with roots in Delhi. Father owns a manufacturing plant, mother runs a boutique NGO, one younger sister is pursuing medicine.',
    lifestyle: 'Non-vegetarian (occasional), moderate drinker, regular fitness enthusiast. Passionate about road-trips, electric guitar, and tech innovations.',
    partnerPreferences: 'Looking for a compatible partner (Hindu) who is career-driven, cultured, preferably in tech/business fields, tall and possessing positive energy.',
    verified: true,
    phone: '+919988776655',
    email: 'aditya.y@outlook.com',
    whatsapp: '919988776655',
    aboutMe: 'Driven by ambition, grounded by value systems. I appreciate deep intellectual conversations, active traveling, and a good balance of modern outlook and heritage.'
  },
  {
    id: 'p3',
    name: 'Ananya Deshmukh',
    age: 26,
    gender: 'Female',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Maratha',
    motherTongue: 'Marathi',
    location: 'Pune, India',
    education: 'M.S. in Biotechnology',
    profession: 'Lead Product Researcher',
    income: '₹14 Lakhs per Annum',
    height: "5'4\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Educated family. Father is a Retd. Colonel (Indian Army), Mother is a High School Principal. Younger brother is in IIT Bombay.',
    lifestyle: 'Vegetarian, non-smoker, health-conscious. Loves organic gardening, yoga, reading history memoirs, and baking cake.',
    partnerPreferences: 'Looking for a professional based in Pune or Mumbai, educated (Postgrad/Doctorate preferred), progressive worldview, and valuing simplicity.',
    verified: true,
    phone: '+917766554433',
    email: 'ananya.desh@soulmatch.com',
    whatsapp: '917766554433',
    aboutMe: 'Grounded Maharashtra culture meets scientific research. Quietly confident, loving, and supportive life companion interested in continuous self-growth.'
  },
  {
    id: 'p4',
    name: 'Satyam Singh',
    age: 22,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Kushwaha',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'B.Tech in Computer Science',
    profession: 'AI Engineer',
    income: '₹28 Lakhs per Annum',
    height: "6'0\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Noble family heritage from Uttar Pradesh. Father is a Senior Cardiologist, mother is a university literature professor.',
    lifestyle: 'Non-vegetarian, strictly non-smoker. Intrigued by poetry (Ghazals), world history, and state-of-the-art AI tech.',
    partnerPreferences: 'Looking for a smart, modern Hindu woman, highly educated, preferably showing compassionate temperament and respect for family values.',
    verified: true,
    phone: '+918899001122',
    email: 'satyam.singh@yahoo.com',
    whatsapp: '918899001122',
    aboutMe: 'A well-composed individual carrying family values with high professionalism. Enthusiastic and humorous conversationist with respect for individual choice.'
  },
  {
    id: 'p5',
    name: 'Meenakshi Iyer',
    age: 28,
    gender: 'Female',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Iyer Brahmin',
    motherTongue: 'Tamil',
    location: 'Chennai, India',
    education: 'Doctorate in Economics',
    profession: 'Assistant Professor at Madras University',
    income: '₹12 Lakhs per Annum',
    height: "5'3\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Respected academic family based in Thiruvanmiyur, Chennai. Father is a Retd. Professor, Mother teaches Carnatic music, elder sister is settled in Chennai.',
    lifestyle: 'Strict vegetarian (lacto), tea enthusiast, Carnatic singer, classical Bharatnatyam trained. Loves ancient Indian literature and South Indian filter coffee.',
    partnerPreferences: 'Looking for a cultured Tamil Brahmin professional (India or abroad), post-graduate or higher, with a gentle soul and support for high academia.',
    verified: true,
    phone: '+919444556677',
    email: 'meenakshi.iyer@soulmatch.com',
    whatsapp: '919444556677',
    aboutMe: 'Blended with intellectual pursuits and artistic expressions. Very calm, level-headed, and looking for stable emotional understanding.'
  },
  {
    id: 'p6',
    name: 'Sudhanshu Dubey',
    age: 23,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'Medical Intern (MBBS)',
    profession: 'Medical Intern',
    income: '₹22 Lakhs per Annum',
    height: "5'10\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Parents settled in Kochi. Father is a retired PWD Chief Engineer, mother is a practicing Ayurvedic physician.',
    lifestyle: 'Non-vegetarian, loves cooking, gym, and exploring nature. Passionate advocate for children\'s healthcare and environmental conservation.',
    partnerPreferences: 'Looking for a medical or corporate professional, showing sweet nature, respect for dedication, and active mindset.',
    verified: true,
    phone: '+919100223344',
    email: 'sudhanshu.dubey@soulmatch.com',
    whatsapp: '919100223344',
    aboutMe: 'Dedicated to medical care, deeply loving, empathetic, and organized. I enjoy peaceful weekend drives, traditional cooking experiments, and indie music.'
  },
  {
    id: 'p7',
    name: 'Baibhav Pandey',
    age: 23,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'B.Tech / B.Des from Top Tier Institute',
    profession: 'UI/UX Designer',
    income: '₹24 Lakhs per Annum',
    height: "5'9\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Cultured family of Uttar Pradesh. Father is an artist & writer, Mother is a retired lawyer, younger sister is a fashion model.',
    lifestyle: 'Non-vegetarian (sweet tooth!), occasional social wine, avid filmmaker and oil painter. Loves long literature reviews and street food.',
    partnerPreferences: 'Seeking an artistic or corporate Hindu girl, progressive, humorous, with a taste for literature, arts, or communication.',
    verified: false,
    phone: '+919011223344',
    email: 'baibhav.pandey@live.com',
    whatsapp: '919011223344',
    aboutMe: 'Design runs in my veins, culture defines my life. Appreciator of fine arts, vintage design, and genuine human warmth in small actions.'
  },
  {
    id: 'p8',
    name: 'Dhananjay Chauhan',
    age: 25,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Chauhan',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'B.Tech in Computer Science',
    profession: 'Software Engineer',
    income: '₹14 Lakhs per Annum',
    height: "5'9\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Middle-class nuclear family from Gorakhpur. Father is a state government service officer, Mother is a school teacher.',
    lifestyle: 'Vegetarian, non-smoker, loves photography, editing, reading non-fiction and travelling to historical places.',
    partnerPreferences: 'Looking for an understanding, educated and well-mannered partner who respects life values and has a friendly outlook.',
    verified: true,
    phone: '+919012345678',
    email: 'dhananjay.chauhan@soulmatch.com',
    whatsapp: '919012345678',
    aboutMe: 'Software engineer by profession, passionate photographer by heart. Humble and values honesty above all, seeking a companion for life\'s beautiful journey.'
  },
  {
    id: 'p10',
    name: 'Abhi Jaiswal',
    age: 28,
    gender: 'Male',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
    photos: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400'
    ],
    religion: 'Hindu',
    caste: 'Baniya',
    motherTongue: 'Hindi',
    location: 'Uttar Pradesh, India',
    education: 'MBA in Consulting & Strategy',
    profession: 'Business Consultant',
    income: '₹18 Lakhs per Annum',
    height: "4'11\"",
    maritalStatus: 'Never Married',
    familyDetails: 'Decent traditional Vaishya family based in Varanasi. Father runs a textile wholesale store, mother is a homemaker.',
    lifestyle: 'Vegetarian, strictly non-smoker, enjoys analytical board-games, reading blogs on commerce, and photography.',
    partnerPreferences: 'Looking for a down-to-earth person who is career-focused, friendly, and values honest relationship standards.',
    verified: true,
    phone: '+919900881122',
    email: 'abhi.jaiswal@soulmatch.com',
    whatsapp: '919900881122',
    aboutMe: 'Analytical yet high-spirited in professional matters and extremely simple in personal life, working as a business consultant at a premium practice.'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 's1',
    coupleName: 'Abhi & Bhavna',
    weddingDate: 'Nov 12, 2025',
    story: 'We crossed paths on SoulMatch Matrimony after matching on compatibility scores. Our mutual love for traditional Marathi music and science research kicked off a lifetime partnership. Thank you community for our lovely alignment of values.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's2',
    coupleName: 'Ayushi & Satyam',
    weddingDate: 'Jan 05, 2026',
    story: 'Being from different sub-communities, we faced hesitation, but SoulMatch connected us based on outlook. Our first video match conversation felt like years of companionship. Today we are happily married, scaling Himalayas together.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's3',
    coupleName: 'Aditya & Palak',
    weddingDate: 'Feb 14, 2026',
    story: 'We lived only a few kilometers away in Delhi but never met. SoulMatch matched us based on our tech-driven preferences and vegetarian lifestyle. We felt instant chemistry and our families united instantly.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ramesh Shukla',
    role: 'Father of Bhavna',
    quote: "Finding a cultured groom with compatible matches in finance was smooth. SoulMatch verified profiles with diligence. Our family is extremely grateful.",
    rating: 5
  },
  {
    id: 't2',
    name: 'Kavita Deshmukh',
    role: 'Mother of Ananya',
    quote: "I highly appreciate the safety privacy locks. Female safety is top-notch, allowing us to control who contacts. Excellent UI and dependable database.",
    rating: 5
  }
];
