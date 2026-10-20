// Single source of truth for Udana Yoga content.
// Seeded from docs/source-audit/content/key-facts.json and raw-extraction/*.md.
// Wording is lightly copy-edited for spelling and readability only; facts are unchanged.
// Unresolved owner questions are listed in docs/phase-2/OWNER-REVIEW.md.

export const business = {
  name: 'Udana Yoga Academy',
  shortName: 'Udana Yoga',
  tagline: 'Bali Yoga Teacher Training & Retreat',
  address: 'Jl. Raya Kampus Unud, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361',
  addressLines: ['Jl. Raya Kampus Unud, Jimbaran', 'Kec. Kuta Sel., Kabupaten Badung', 'Bali 80361'],
  mapsUrl: 'https://maps.app.goo.gl/m9oWLdEJ13E1gZGi7',
  email: 'info@udanayoga.com',
  // Two different numbers appear on the original site (audit 08 §A10).
  // Neither is promoted as the confirmed number until the owner answers.
  phones: {
    confirmed: false,
    callCentre: { display: '0812 3807 345', note: 'listed as "Call Center" on the current contact page and footer' },
    whatsapp: { display: '+62 813 3815 2370', note: 'used by the current site’s WhatsApp button and “Book Now” links' },
  },
  social: [
    { label: 'Instagram', handle: '@udanayogabali', href: 'https://www.instagram.com/udanayogabali/' },
    { label: 'Facebook', handle: 'baliyogaacademy', href: 'https://www.facebook.com/baliyogaacademy' },
  ],
  indonesianSite: 'https://id.udanayoga.com/',
  accreditations: [
    { slug: 'badge-rys-200', label: 'RYS 200', detail: 'Registered Yoga School, Yoga Alliance' },
    { slug: 'badge-yoga-alliance', label: 'Yoga Alliance', detail: 'Registered with Yoga Alliance' },
    { slug: 'badge-yacep', label: 'YACEP', detail: 'Yoga Alliance Continuing Education Provider' },
  ],
};

export const nav = [
  {
    label: 'About',
    href: '/about-us/',
    children: [
      { label: 'About Udana Yoga', href: '/about-us/' },
      { label: 'Gallery', href: '/gallery/' },
    ],
  },
  {
    label: 'Teacher Training',
    href: '/yoga-teacher-training-programs/',
    children: [
      { label: 'All programmes', href: '/yoga-teacher-training-programs/' },
      { label: '50 Hours – YTTC', href: '/50-hours-yoga-teacher-training/' },
      { label: '100 Hours – YTTC', href: '/yoga-teacher-training/' },
      { label: '200 Hours – YTTC', href: '/200-hours-yoga-teacher-training/' },
      { label: '50 Hours – Aerial YTTC', href: '/50-hours-aerial-course/' },
    ],
  },
  {
    label: 'Udana Shala',
    href: '/udana-shala-class/',
    children: [
      { label: 'Class schedule', href: '/udana-shala-class/' },
      { label: 'Private yoga sessions', href: '/private-yoga-session-in-bali/' },
      { label: 'Scoliosis therapy', href: '/scoliosis-therapy/' },
    ],
  },
  { label: 'Workshops', href: '/workshop/' },
];

// ---------------------------------------------------------------------------
// Teacher-training programmes
// ---------------------------------------------------------------------------

const sharedCurriculum = [
  {
    title: 'Hatha Yoga',
    items: ['What is Hatha Yoga?', 'Udana Namaskar', 'Series of asanas', 'Asana benefits and contraindications'],
  },
  {
    title: 'Pranayama',
    items: [
      'Chest breathing vs diaphragmatic breathing',
      'What do prana and pranayama mean?',
      'Types of pranayama practice',
      'What is a nadi? What is Ida?',
      'Practices of pranayama',
    ],
  },
  {
    title: 'Yoga Philosophy',
    items: [
      'Yoga philosophy',
      'History and origin of yoga',
      'The Sutras of Patanjali',
      'Why we have a disturbed mind',
      'What is Ashtanga Yoga? (the eight limbs of yoga)',
      'The five layers of the body in yogic science',
    ],
  },
  {
    title: 'Adjustment & Alignment',
    items: [
      'The fundamentals of practising side extension',
      'How to correct postures verbally and with hands-on adjustments',
      'Modifying asanas with different tools',
      'Working with various limitations',
      'Workshop on hip opening',
    ],
  },
  {
    title: 'Yogic Anatomy',
    items: [
      'What are yogic anatomy and physiology?',
      'Introduction to the respiratory system and yogic breathing',
      'How shat kriya practices benefit the body',
      'How pranayama practices connect with the digestive and immune systems',
      'How asana practices affect the joints',
      'The structure of the spine and its movement in yoga',
    ],
  },
  {
    title: 'Meditation',
    items: [
      'What is meditation?',
      'Dharana and Dhyana',
      'Breath awareness meditation',
      'Inner light meditation',
      'Chakra awareness meditation',
    ],
  },
  { title: 'Udana Series', items: [] },
  { title: 'Shat Kriya (yogic purification)', items: [] },
  { title: 'Mudra & Mantra', items: ['Introduction to mantra and mudra', 'The significance of OM (AUM)'] },
  {
    title: 'Teaching Methodology',
    items: [
      'Disciplines of yoga teachers and students',
      'Ensuring the safety of students while teaching',
      'Understanding what students need before the class begins',
      'The scope of listening',
      'The importance of demonstration',
      'Preparing the classroom',
    ],
  },
];

export const programmesIntro =
  'Listen, understand, practise, experience, and express to share or teach. These are the main things one should consider to become the best yoga teacher.';

export const programmes = {
  yttc50: {
    key: 'yttc50',
    href: '/50-hours-yoga-teacher-training/',
    name: '50 Hours Yoga Course',
    shortName: '50-hour YTTC',
    hours: '50 hours',
    length: 'One week',
    summary:
      'One week focused on understanding the physical body through yoga asanas, aligning with the inner self. The week covers yoga history, the eight limbs, anatomy, posture alignment, pranayama, teaching methodology and asana practice, culminating in a teaching class.',
    focus: [
      'Yoga history',
      'The eight limbs of yoga',
      'Anatomy',
      'Posture alignment',
      'Pranayama',
      'Teaching methodology',
      'Asana practice',
      'A final teaching class',
    ],
    image: 'graduates-seaside',
  },
  yttc100: {
    key: 'yttc100',
    href: '/yoga-teacher-training/',
    name: '100 Hours Yoga Teacher Training',
    shortName: '100-hour YTTC',
    hours: '100 hours',
    length: '12 days',
    lengthNote: 'also described on the current site as “two weeks”',
    location: 'Retreat resort in East Bali',
    trainers: ['Putu Dwijendra', 'Tomoko'],
    summary:
      'A course focused on the Pranamaya Kosha (energy body), exploring prana through theoretical study and practical experience. You will delve into pranayama, Panca Vayu, the Hatha Yoga Pradipika, Sat Karma, the four bandhas, yoga nidra, and asana practices such as Udana Flow and Namaskar, culminating in teaching practice.',
    focus: ['Pranayama', 'Panca Vayu', 'Hatha Yoga Pradipika', 'Sat Karma', 'The four bandhas', 'Yoga nidra', 'Udana Flow & Namaskar', 'Teaching practice'],
    image: 'shala-pavilion-class',
    curriculum: sharedCurriculum,
  },
  yttc200: {
    key: 'yttc200',
    href: '/200-hours-yoga-teacher-training/',
    name: '200 Hours Yoga Teacher Training',
    shortName: '200-hour YTTC',
    hours: '200 hours',
    length: '25 nights, 26 days',
    lengthNote: 'also described on the current site as “three weeks”',
    location: 'Retreat resort in East Bali, or Udana Jimbaran Shala',
    trainers: ['Putu Dwijendra', 'Tomoko'],
    summary:
      'A course focused on Suksma Sarira, covering the seven-cakra body, the philosophy of Patanjali’s Yoga Sutras, cakra flow, Pancha Kosha, the five states of mind, yoga mudra, public speaking, an introduction to prenatal yoga, thematic postures, body analysis and arm balances. This stage enhances your teaching skills and confidence.',
    focus: [
      'The seven-cakra body',
      'Patanjali’s Yoga Sutras',
      'Cakra flow',
      'Pancha Kosha',
      'The five states of mind',
      'Yoga mudra',
      'Public speaking',
      'Prenatal yoga introduction',
      'Thematic postures',
      'Body analysis',
      'Arm balances',
    ],
    image: 'temple-prayer',
    schedule: [
      {
        id: 'retreat',
        label: 'Retreat resort',
        language: 'English & Spanish',
        format: 'Full-board programme in a retreat resort',
        dates: [
          { start: '2026-02-02', end: '2026-02-27' },
          { start: '2026-07-04', end: '2026-07-29' },
          { start: '2026-10-05', end: '2026-10-30' },
        ],
        includes: '25 nights / 26 days’ stay in the retreat resort, vegetarian breakfast, lunch and a healthy dinner, and tea breaks.',
        prices: [
          { label: 'Twin share', amount: 'IDR 45.700.000' },
          { label: 'Single use', amount: 'IDR 51.000.000' },
        ],
      },
      {
        id: 'shala',
        label: 'Jimbaran Shala',
        language: 'English & Indonesian',
        format: 'Non-residential, at Udana Jimbaran Shala',
        dates: [
          { start: '2026-04-26', end: '2026-05-22' },
          { start: '2026-08-23', end: '2026-09-18' },
          { start: '2026-11-16', end: '2026-12-12' },
        ],
        includes: 'Light breakfast, vegetarian-based lunch and tea breaks.',
        prices: [{ label: 'Course fee', amount: 'Rp 16.500.000' }],
        priceNote: 'The current site reads: “Contact us for special Early Bird price before 1 month — Rp.16.500.000.”',
      },
    ],
  },
  aerial50: {
    key: 'aerial50',
    href: '/50-hours-aerial-course/',
    name: 'Udana Sky Flow Aerial Yoga — 50 Hours',
    shortName: '50-hour Aerial YTTC',
    hours: '50 hours',
    length: '7 days',
    location: 'Jimbaran, Bali',
    trainers: ['Tomoko'],
    summary:
      'Udana Sky Flow Aerial Yoga is a holistic practice that integrates mind, body and spirit, offering a unique experience of levity and grounding beyond traditional yoga. With yoga philosophy, mindfulness and acrobatic poses, it inspires students to embrace their authenticity and potential. This week-long course covers aerial yoga techniques, pranayama and relaxation methods, equipping you to teach diverse students effectively.',
    image: 'aerial-class',
    curriculum: [
      {
        title: 'Philosophy & History',
        items: [
          'The essence of the Sky Flow Yoga practice',
          'What is the connection with traditional yoga?',
          'Elementary parts of aerial yoga',
          'Differences from ground-based yoga',
          'Silk hammock installation',
          'Pranayama for Sky Flow Aerial Yoga',
        ],
      },
      {
        title: 'Anatomy & Physiology',
        items: [
          'Benefits of the Sky Flow Yoga practice',
          'Bones, muscular and circulatory systems',
          'Nervous, endocrine and immune systems',
          'Objectives and benefits on a physical, mental, emotional and spiritual level',
          'Contraindications',
        ],
      },
      {
        title: 'Teaching Methodology',
        items: [
          'Postures, aerial flow and counter poses',
          'Working with special issues',
          'Safety in motion',
          'Building sequences and practising to teach a class',
          'The art of adjustment',
        ],
      },
    ],
    schedule: [
      {
        id: 'aerial',
        label: '50-hour course',
        format: 'At Udana Jimbaran Shala',
        dates: [
          { start: '2026-03-01', end: '2026-03-07' },
          { start: '2026-08-09', end: '2026-08-15' },
          { start: '2026-11-01', end: '2026-11-07' },
        ],
        includes: 'Light breakfast, vegetarian lunch and tea breaks.',
        prices: [
          { label: 'Early bird (one month before)', amount: 'IDR 7.000.000' },
          { label: 'Normal price', amount: 'IDR 7.500.000' },
        ],
      },
    ],
  },
};

export const programmeOrder = ['yttc50', 'yttc100', 'yttc200', 'aerial50'];

export const yttcCommon = {
  intro: [
    'The Udana Yoga Teacher Training is designed to cultivate and hone your yoga teaching and personal practice. Break free from self-imposed limitations and let go of unresolved emotions as you become part of a transformative training. The specially curated curriculum, like-minded people, quaint location, nourishing food and expert guidance are the perfect catalysts for inner growth.',
    'Prepare for a profound learning experience through a well-devised curriculum that incorporates asanas, meditation, pranayama, cleansing practices, Yoga Nidra and more. The training imparts yogic education based on age-old traditions, in a subtler way that applies to modern life — one step at a time, so you can absorb and reflect on what has been taught.',
  ],
  quote: 'Behold, here is your transformation star. Discover a sanctuary to learn, love, and uncover your authentic path…',
  benefits: [
    {
      title: 'Traditional yoga philosophy',
      text: 'The training combines the subtle practices and philosophy of traditional yoga — the Yoga Sutras of Patanjali and the Hatha Yoga Pradipika — with a holistic, integrative approach inspired by Western thinking.',
    },
    {
      title: 'A deeper inner journey',
      text: 'It focuses not only on graceful postures but on a deeper journey into the inner self, aiming to awaken your fullest potential and cultivate knowledge, skill and compassion.',
    },
    {
      title: 'Personal growth',
      text: 'Whether or not you plan to teach yoga, the training is an opportunity to dedicate time to your own growth.',
    },
  ],
};

export const aerialContent = {
  intro: [
    'Udana Sky Flow Aerial Yoga is a holistic practice — not only acrobatic poses — that works with the mind, body and spirit to give a feeling of levity and grounding we don’t always have access to in a traditional floor-based practice. It shows us that we are capable of more than we imagined.',
    'Yoga philosophy is infused into every class theme, and mindfulness inspires students to go beyond a physical or fitness practice. We flow in the sky towards our highest potential, embracing our own authenticity and finding our inner voice.',
  ],
  quote: 'Dive into the world of aerial yoga for a full week.',
  training:
    'During the training you will progress from basic to intermediate aerial poses, so that you can teach a wide range of students. You will learn how to use pranayama, relaxation techniques and other methods that optimise your aerial practice and your teaching for students with different needs.',
  graduates:
    'Over 70% of our graduates already have their own classes, passing on the knowledge and skills of aerial yoga to their students and inspiring people in the aerial yoga world.',
  content:
    'This course prepares you to understand the fundamentals of Sky Flow Aerial Yoga and to teach regular aerial yoga classes. We use the silk hammock throughout class for all poses — including seated meditation, warming up and, the best part, a floating savasana called the cocoon.',
  benefits: [
    { title: 'Physical', text: 'Improves flexibility, strength, balance and core stability.' },
    { title: 'Mental', text: 'Like any form of yoga, aerial yoga emphasises breath awareness and mindfulness.' },
    { title: 'Emotional', text: 'Aerial yoga can have a positive impact on emotions and mood.' },
    { title: 'Mind–body connection', text: 'Coordinating breath with movement enhances the mind–body connection.' },
    { title: 'Stress reduction', text: 'Stimulates the parasympathetic nervous system, triggering the body’s relaxation response.' },
    { title: 'Creativity & self-expression', text: 'Exploring movement in the air provides a creative outlet for self-expression.' },
    { title: 'Community & support', text: 'Practitioners support and encourage one another on their aerial journey.' },
  ],
};

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export const team = [
  {
    name: 'Putu Dwijendra',
    role: 'Founder & yoga trainer',
    image: 'putu-dwijendra',
    credentials: ['E-RYT 200', 'E-RYT 500', 'YACEP (Yoga Alliance Continuing Education Provider)'],
    bio: [
      'Putu Dwijendra is a yogi and the founder of Udana Yoga, one of the oldest yoga academies in Bali and a Yoga Alliance registered school since 2014. After completing the international yoga course at the Sivananda Yoga Vedanta Ashram in India, he dedicated his life to teaching and sharing yoga as a journey of life transformation with international students.',
      'His compassionate and holistic approach empowers students to cultivate mindfulness, find inner peace and embrace life with renewed vitality and self-awareness. Whether you are a seasoned practitioner or new to yoga, his classes offer a sanctuary for growth, healing and personal transformation.',
    ],
  },
  {
    name: 'Tomoko',
    role: 'Yoga trainer',
    image: 'tomoko',
    credentials: ['E-RYT 200', 'YACEP (Yoga Alliance Continuing Education Provider)', 'Reiki practitioner', 'Certified sound healing therapist'],
    bio: [
      'With over 10 years of experience practising and teaching yoga, Tomoko guides her students on a journey of self-discovery and inner peace. Her classes combine traditional yoga techniques with mindfulness practices, creating a space where students cultivate self-awareness and enhance physical and mental flexibility.',
      'Her teaching is rooted in compassion, patience and empathy, in a non-judgemental, inclusive environment where students of all levels and backgrounds feel welcome. She specialises in Aerial Yoga, Soulful Hatha (flow) Yoga and Kids Yoga, works on Kids Yoga projects at schools, and works with Udana Wellness, a platform of authentic wellness programmes in Bali.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Udana Shala
// ---------------------------------------------------------------------------

export const shala = {
  intro:
    'At our yoga studio in Jimbaran, Bali, we offer a variety of yoga styles and levels in a welcoming, safe and non-competitive environment, led by experienced instructors who teach optimal alignment and breathing, as well as mindfulness, strength and balance. We provide mats and props.',
  mission: 'Our mission is to help you enjoy a happier and healthier life.',
  location: 'Gg. Pondok Mekar, Jl. Kampus Unud, Jimbaran, Bali',
  days: 'Monday to Saturday',
  note: 'Schedule can change — please confirm the latest times with the studio before you come.',
  days6: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  // Start times are taken from the timetable grid on the original Shala page.
  // `confirm` marks an entry whose time differs between original sources (audit 08 §A8).
  timetable: [
    { day: 'Monday', time: '9:00 am', sort: 900, cls: 'Soulful Hatha', teacher: 'Tomoko' },
    { day: 'Monday', time: '5:00 pm', sort: 1700, cls: 'Scoliosis Therapy Yoga' },
    { day: 'Tuesday', time: '7:00 / 7:15 am', sort: 700, cls: 'Slow Sky Flow Yoga', teacher: 'Tomoko', confirm: 'Listed as 7:00 am in the timetable and 7:15 am on the class detail page.' },
    { day: 'Tuesday', time: '9:00 am', sort: 900, cls: 'Wheel Yoga', teacher: 'Puspa' },
    { day: 'Tuesday', time: '4:00 pm', sort: 1600, cls: 'Private Session' },
    { day: 'Wednesday', time: '9:00 am', sort: 900, cls: 'Hatha Intensive', teacher: 'Putu' },
    { day: 'Wednesday', time: '5:00 pm', sort: 1700, cls: 'Scoliosis Therapy Yoga' },
    { day: 'Thursday', time: '9:00 am', sort: 900, cls: 'Vinyasa Flow', teacher: 'Edi' },
    { day: 'Thursday', time: '4:00 pm', sort: 1600, cls: 'Private Session' },
    { day: 'Friday', time: '9:00 am', sort: 900, cls: 'Energize Flow', teacher: 'Putu' },
    { day: 'Friday', time: '5:00 pm', sort: 1700, cls: 'Scoliosis Therapy Yoga' },
    { day: 'Saturday', time: '9:00 am', sort: 900, cls: 'Sky Flow Aerial', teacher: 'Tomoko' },
    { day: 'Saturday', time: '11:00 am', sort: 1100, cls: 'Sky Kids Aerial', teacher: 'Tomoko' },
  ],
  classes: [
    {
      name: 'Hatha Intensive',
      text: 'The physical practice of yoga, using posture, breath and cleansing practices to prepare the body for meditation. Our intensive approaches Hatha yoga traditionally, as described in the ancient text the Hatha Yoga Pradipika.',
    },
    {
      name: 'Power Vinyasa',
      text: 'A powerful, energetic form of yoga where students move fluidly from one pose to the next, connecting breath to movement. It combines strength, flexibility, balance, cardio, and physical and mental stamina in one session — described by Baron Baptiste as “the perfect blend of sweat and serenity”.',
    },
    {
      name: 'Wheel Yoga',
      text: 'The yoga wheel is a circular accessory designed to release tension and aid stretching, so you can improve flexibility and work deeper into your poses. It was first invented in 1978 by Sri Dharma Mittra to loosen the muscles of the back, realign posture and support back arching.',
    },
    {
      name: 'Soulful Hatha',
      text: 'What happens when you combine the benefits of mindfulness and yoga? Mindful yoga applies traditional Buddhist mindfulness teachings to the physical practice, offering deeper insight into the mind and a life-changing approach to your practice.',
    },
    {
      name: 'Energize Flow',
      text: 'An all-levels vinyasa class that invigorates body, mind and senses with physically challenging yet accessible sequences. Learn to focus your body’s energy to build strength, balance and endurance.',
    },
    {
      name: 'Sky Flow Aerial',
      text: 'A unique fusion that relieves compressed joints and aligns the body from head to toe. The aerial hammock acts as a soft trapeze and support as you progress from simple inversions to more complex shapes — a whole-body workout that builds flexibility, releases muscular tension and is fun.',
    },
  ],
  prices: {
    columns: ['Indonesian', 'Expat'],
    rows: [
      { label: 'Walk-in class', values: ['IDR 70.000', 'IDR 100.000'] },
      { label: '10-class pass', values: ['IDR 500.000', 'IDR 800.000'] },
    ],
  },
};

export const privateSessions = {
  intro: [
    'Experience a personalised yoga session guided by the experienced teachers of Udana Yoga Bali, trusted by students from around the world for over a decade.',
    'Our private sessions are thoughtfully designed to support your body, mind and energy — whether you are completely new to yoga or an experienced practitioner seeking deeper guidance. Each session is guided by certified professional yoga teachers, with personal attention and a practice created for you.',
  ],
  quote: 'Your practice, your journey. Whether you are beginning yoga for the first time or wishing to deepen your practice, we warmly welcome you to practise with us.',
  forWhom: [
    'Complete beginners',
    'People with injuries or physical limitations',
    'Seniors looking for gentle yoga',
    'Couples or families practising together',
    'Busy professionals needing stress relief',
    'Athletes wanting deeper body awareness',
    'Those seeking meditation and inner balance',
    'Yoga practitioners wanting specific asanas for the core',
  ],
  allWelcome: 'All ages and all levels are welcome.',
  includes: [
    'Personalised yoga practice — Hatha, Vinyasa flow, Aerial Yoga, Kids Yoga and more',
    'Breathwork (pranayama)',
    'Mindfulness and short meditation',
    'Deep relaxation (Yoga Nidra)',
  ],
  locations: ['At the Udana Yoga studio', 'At your private villa or hotel', 'At selected retreat locations in Bali (based on availability)'],
  areas: 'Jimbaran, Nusa Dua, Uluwatu, Kuta, Tuban, or other places',
  teacher: 'Certified yoga teacher',
  timing: 'Days and duration depend on your reservation',
  prices: [
    { label: '1 person', amount: 'IDR 500.000' },
    { label: '2 people', amount: 'IDR 600.000' },
    { label: '3 people', amount: 'IDR 700.000' },
    { label: '4 or more people', amount: 'Contact us' },
  ],
};

export const scoliosis = {
  name: 'Udana Method Scoliosis Yoga Therapy',
  description:
    'Udana Yoga describes its method as a non-surgical option for scoliosis. It uses exercises intended to return the curved spine to a more natural position — de-rotation, extension and expansion of the spine — achieved through selected and modified yoga postures.',
  goals: [
    'Decrease the side-to-side curvature (Cobb angle) of the spine',
    'Slow down or stop the curve progression of the spine',
    'Minimise the need for wearing a back brace',
    'Improve breathing function and muscular balance',
    'Decrease pain and stress on the back',
    'Improve posture',
  ],
  quote: 'Gentle and restorative yoga poses can be beneficial for relaxation, reducing muscle tension, and improving flexibility.',
  days: 'Monday, Wednesday and Friday',
  time: 'From 5:00 pm',
  timeNote: 'The session end time differs between sources on the current site (6:00 pm in the timetable, 6:30 pm on the therapy page).',
  location: 'Udana Shala, Jimbaran, Bali',
  teacher: 'Certified scoliosis therapy teacher',
};

export const workshops = {
  intro:
    'Udana Yoga workshops are led by founder Putu Dwijendra in Bali. Workshop themes published by the academy include yoga therapy for the lower back and for scoliosis, and Udana Cakra Flow, a sequence that awakens and aligns the body’s energy centres.',
  speaker: 'Putu Dwijendra',
  location: 'Bali',
  items: [
    {
      title: 'Lower Back Pain Yoga Therapy',
      text: 'Guided therapeutic yoga exercises that strengthen the lower back muscles and condition the spinal tissues and joints.',
      listTitle: 'The goals typically include:',
      list: [
        'Decreasing painful symptoms in the lower back and/or leg',
        'Improving low-back function to manage daily activities as independently as possible',
        'Increasing the spine’s flexibility and range of motion',
      ],
    },
    {
      title: 'Scoliosis Yoga Therapy',
      text: 'Yoga therapy that aims to decrease spinal curvature, slow curve progression and improve posture.',
      link: { href: '/scoliosis-therapy/', label: 'About the Udana scoliosis method' },
    },
    {
      title: 'Udana Cakra Flow',
      text: 'A series of selected yoga poses in fully conscious sequences that work to awaken and align the energy centres of the body. Practised well, it can bring additional physical energy, mental clarity, a better overall mood and balance in everyday life.',
      listTitle: 'Benefits of cakra flow:',
      list: ['Raising the energy of the seven cakras', 'Mental clarity', 'Improved overall mood', 'A state of harmony and well-being', 'Balance of body, mind and spirit'],
    },
  ],
};

export const about = {
  lead: 'For more than a decade, Udana Yoga has been guiding and nurturing students to unfold their spiritual self through a life led by simplicity, compassion and service.',
  intro:
    'We are a team of spiritually focused individuals holding deep respect for the timeless practice of yoga. Focused on its authentic propagation, our programmes are carefully crafted to give you the authentic taste of yoga.',
  body: [
    'Our teacher trainings follow a comprehensive, thoughtfully designed curriculum that addresses every area of excellent teaching. They suit aspiring teachers and anyone who wishes to deepen their practice by living yoga to the fullest — where everything is seen as yoga, “uniting with our true self”.',
    'The training is a rare combination of the subtle practices and philosophy of traditional yoga — from the Yoga Sutras of Patanjali, the collection of aphorisms that outlines the eight limbs of yoga, and the Hatha Yoga Pradipika, whose techniques guide the practitioner towards self-realisation — with the holistic, integrative approach of the Western mind.',
    'It focuses the aspirant not only on posture but on a deeper journey into the inner self: the awakening to your highest potential, from which all knowledge, skill and compassion arise.',
  ],
  quote:
    'Udana Yoga Teacher Trainings are designed to cultivate and hone your ability to teach yoga and your personal practice. Whether or not you plan on teaching, this is a wonderful opportunity to dedicate time to your self-growth and happiness.',
  sutra: { sanskrit: 'Atha yoga anusasanam', translation: 'Now the practice of yoga begins.' },
};

export const founderQuote = {
  quote: 'Yoga is more than a class or a training — it’s a way of life.',
  text: 'Our yoga teacher training is all about exploring ancient techniques and applying them to modern challenges. You will learn alignment and adjustment, and how to correct body postures and movement.',
};

export const programmeOptions = ['YTTC Program', 'Workshop', 'Udana Shala Class', 'Scoliosis Therapy', 'Others'];
