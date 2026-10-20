import manifest from './image-manifest.json';

// Alt text written after inspecting each original photograph.
// People are not named unless the original site identified them.
const ALT = {
  'shala-mandala':
    'Students sit in meditation around a large flower mandala in an open-air bamboo yoga pavilion surrounded by greenery',
  'shala-pavilion-class':
    'A yoga class practising on mats under the high thatched roof of an open-air bamboo pavilion while a teacher looks on',
  'graduation-certificates':
    'Teacher-training graduates dressed in white, wearing marigold garlands and holding their certificates in a garden',
  'graduation-celebration':
    'Teacher-training graduates in white celebrate with raised arms, holding certificates and wearing marigold garlands',
  'mandala-ceremony':
    'A student in a white Udana Yoga T-shirt sits facing a flower mandala as others meditate in the bamboo pavilion',
  'studio-ceremony-circle':
    'A group sits in a circle around a flower mandala and offerings in the Udana Yoga studio, beneath the Udana Yoga sign',
  'studio-students':
    'Smiling students sit on their mats in the Udana Yoga studio, with aerial hammocks hanging on the blue wall behind them',
  'studio-backbend-class':
    'Students practise supported camel pose with blocks and bolsters in the Udana Yoga studio',
  'studio-group-yellow':
    'A cheerful group in matching yellow T-shirts poses together in the Udana Yoga studio',
  'graduates-seaside':
    'A large group dressed in white smiles together on a terrace overlooking the sea at sunset',
  'aerial-studio':
    'Students rest in colourful aerial yoga hammocks in the bright Udana Yoga studio',
  'aerial-class':
    'An aerial yoga class with students balancing on their hands, one foot supported in a pink silk hammock',
  'aerial-hammocks':
    'Students grip pink and purple aerial silks as they prepare for a pose in the Udana Yoga studio',
  'aerial-mandala-circle':
    'Seen from above, students lie in a circle holding hands around a flower mandala on the studio floor',
  'side-stretch-assist':
    'A teacher guides a student into a side stretch in the bamboo pavilion',
  'headstand-assist':
    'A teacher supports a student in a headstand in the studio',
  'ceremony-sashes':
    'Women in white blouses and yellow sashes stand with hands in prayer at a Balinese ceremony',
  'temple-prayer':
    'Participants in white with yellow sashes kneel and pray with flowers held between their palms',
  'melukat-blessing':
    'A Balinese priest pours holy water over a participant during a Melukat water blessing',
  'melukat-spring':
    'Participants stand waist-deep in a temple spring with hands in prayer during a Melukat water purification',
  'water-temple':
    'People bathe beneath the stone spouts of a Balinese water temple, with offerings placed along the edge',
  'canang-sari':
    'A Balinese canang sari offering of flowers in a woven palm-leaf tray',
  'balinese-food':
    'A spread of Balinese dishes on banana leaves, including vegetables, noodles, rice and sate',
  'putu-dwijendra': 'Putu Dwijendra in white, smiling with his palms together in a tropical garden',
  'putu-dwijendra-seated': 'Putu Dwijendra seated cross-legged with his palms together',
  tomoko: 'Tomoko in white, smiling with her palms together in a tropical garden',
  'badge-rys-200': 'Yoga Alliance Registered Yoga School RYS 200 badge',
  'badge-yacep': 'Yoga Alliance Continuing Education Provider YACEP badge',
  'badge-yoga-alliance': 'Yoga Alliance badge',
  'logo-brown': 'Udana Yoga',
  'logo-white-academy': 'Udana Yoga Academy',
};

export function getImage(slug) {
  const m = manifest[slug];
  if (!m) throw new Error(`Unknown image: ${slug}`);
  return { slug, alt: ALT[slug] ?? '', ...m };
}
