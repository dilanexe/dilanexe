export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  fullDescription: string
  benefits: string[]
  targets: string[]
  treatments: string[]
  imagePath: string
  category: 'skin' | 'hair' | 'body' | 'medical'
}

export const services: Service[] = [
  {
    id: 'prp-therapy',
    title: 'PRP Therapy',
    shortTitle: 'Platelet Rich Plasma',
    description: 'Natural healing using your own plasma for skin and hair rejuvenation',
    fullDescription: 'PRP therapy uses your body\'s own growth factors to rejuvenate skin and hair, naturally and safely. This minimally invasive treatment harnesses the power of your own plasma for lasting results.',
    benefits: [
      'Rejuvenates Skin',
      'Promotes Hair Growth',
      'Improves Skin Texture & Tone',
      'Accelerates Natural Healing',
      'Safe, Effective & Minimally Invasive'
    ],
    targets: ['Hair loss', 'Skin aging', 'Texture improvement', 'Hair thinning'],
    treatments: ['Premium Hyaluronic Acid Fillers', 'Biostimulator Injections', 'Precision Face Sculpting'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.30%20%282%29-YfBCleTZ9PJTo9tjA6X4lZ5uiQYIiW.jpeg',
    category: 'skin'
  },
  {
    id: 'dermal-filler',
    title: 'Advanced Dermal Filler Treatment',
    shortTitle: 'Dermal Fillers',
    description: 'Restore volume and achieve smooth, contoured facial features',
    fullDescription: 'Restore natural-looking fullness and lift sagging tissues with our premium dermal filler treatments. Achieve defined facial contours with immediate and long-lasting results.',
    benefits: [
      'Restores natural-looking fullness',
      'Lifts sagging tissues',
      'Defines facial contours',
      'Provides immediate and long-lasting results'
    ],
    targets: ['Cheek Hollowing', 'Temple Volume Loss', 'Deep Nasolabial Folds'],
    treatments: ['Premium Hyaluronic Acid (HA) Fillers', 'Biostimulator Injections', 'Precision Face Sculpting', 'Volume Restoration'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dermal%20Filler-yeJqKriWpKZ4d6UecsJITRkfq2EQ67.jpeg',
    category: 'skin'
  },
  {
    id: 'fat-burning',
    title: 'Non-Invasive Fat Burning & Body Contouring',
    shortTitle: 'Fat Burning',
    description: 'Advanced body sculpting for fat reduction and body contouring',
    fullDescription: 'Specialized non-invasive treatment that targets cellulite appearance and reduce stubborn belly fat while contouring your body naturally. Achieve reduced measurements and smoother skin texture.',
    benefits: [
      'Reduced Body Measurements',
      'Smoother Skin Texture',
      'Defined Natural Contours',
      'Non-invasive Approach'
    ],
    targets: ['Stubborn Fat Pockets', 'Cellulite Appearance', 'Post-Pregnancy Contouring'],
    treatments: ['Fat dissolving injections', 'Cavitation technique', 'EMS fat reduction'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.31-lcJaoEaVCQM5PCSXgozKEY3TpOt5Vo.jpeg',
    category: 'body'
  },
  {
    id: 'chemical-peeling',
    title: 'Advanced Chemical Peeling Treatment',
    shortTitle: 'Chemical Peeling',
    description: 'Reveal radiant, youthful complexion with specialized peeling treatments',
    fullDescription: 'Exfoliates effectively to stimulate collagen and achieve luminous skin texture. Targets fine lines, acne and acne scars, and dull skin.',
    benefits: [
      'Exfoliates effectively',
      'Stimulates collagen',
      'Achieves luminous skin texture',
      'Treats multiple skin concerns'
    ],
    targets: ['Hyperpigmentation', 'Fine Lines', 'Dull Skin', 'Acne Scars'],
    treatments: ['Specialized peeling solutions for your specific skin concerns such as acne and acne scars, hyperpigmentations, etc.'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.31%20%281%29-IeSGZg5TdaUV4r68Ny1Osuu6Q97sEC.jpeg',
    category: 'skin'
  },
  {
    id: 'wart-removal',
    title: 'Wart Removal',
    shortTitle: 'Wart Removal',
    description: 'Say goodbye to warts with precision removal techniques',
    fullDescription: 'Effective and safe wart removal treatments using advanced techniques to ensure complete removal with minimal scarring.',
    benefits: [
      'Precision removal',
      'Minimal scarring',
      'Fast results',
      'Effective treatment'
    ],
    targets: ['Common warts', 'Plantar warts', 'Facial warts'],
    treatments: ['Advanced removal techniques', 'Precision laser treatment'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-21%20at%2016.07.30%20%281%29-8LBsMLZqaeQgAQtinHzQbWf5HsEzH0.jpeg',
    category: 'medical'
  },
  {
    id: 'acne-treatment',
    title: 'Acne Treatment',
    shortTitle: 'Acne Treatment',
    description: 'Comprehensive acne management for clear, blemish-free skin',
    fullDescription: 'Advanced acne treatments combining medical-grade solutions to clear active breakouts and prevent future outbreaks. Achieve clear, healthy skin.',
    benefits: [
      'Clears active breakouts',
      'Prevents future acne',
      'Reduces scarring',
      'Improves skin health'
    ],
    targets: ['Active acne', 'Acne scars', 'Oily skin', 'Breakouts'],
    treatments: ['Medical-grade acne therapy', 'Correct underlying medical conditions', 'Post-acne scar treatment'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2016.30.42-uol8Vzn1zsQYsBp2BsTHAeybFJoXPz.jpeg',
    category: 'skin'
  },
  {
    id: 'pigmentation-treatment',
    title: 'Pigmentation Treatment',
    shortTitle: 'Pigmentation Treatment',
    description: 'Treat hyperpigmentation and achieve an even skin tone',
    fullDescription: 'Advanced treatment for pigmentation issues including melasma, dark spots, and uneven skin tone. Achieve a brighter, more radiant complexion.',
    benefits: [
      'Treats hyperpigmentation',
      'Reduces dark spots',
      'Even skin tone',
      'Brighter complexion'
    ],
    targets: ['Melasma', 'Dark spots', 'Uneven tone', 'Sun damage'],
    treatments: ['Specialized pigmentation therapy', 'Laser pigmentation removal', 'Skin brightening treatments'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pigmentation%20Treatment-7O45rZKoKa7EutEMqPcIBGlbgJVOHY.jpeg',
    category: 'skin'
  },
  {
    id: 'hair-growth-treatment',
    title: 'Treatment For Hair Growth',
    shortTitle: 'Hair Growth',
    description: 'Advanced solutions to promote natural hair growth and thickness',
    fullDescription: 'Stimulate hair follicles and promote natural hair growth for thicker, fuller hair. Effective treatments for hair loss and thinning.',
    benefits: [
      'Promotes hair growth',
      'Increases hair thickness',
      'Strengthens hair roots',
      'Long-lasting results'
    ],
    targets: ['Hair loss', 'Hair thinning', 'Weak hair', 'Receding hairline'],
    treatments: ['Hair growth stimulation therapy', 'GFC and exosome treatments', 'Follicle activation treatment'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Treatment%20for%20hair%20growth-jsF1bT2WMdwPp5b5AhGUT7SBVZBlXi.jpeg',
    category: 'hair'
  },
  {
    id: 'microneedling',
    title: 'Microneedling',
    shortTitle: 'Microneedling',
    description: 'Stimulate collagen production for skin rejuvenation and texture improvement',
    fullDescription: 'Advanced microneedling treatment that creates controlled micro-injuries to stimulate collagen production and improve skin texture naturally.',
    benefits: [
      'Stimulates collagen',
      'Improves skin texture',
      'Reduces fine lines',
      'Minimizes scars'
    ],
    targets: ['Fine lines', 'Acne scars', 'Enlarged pores', 'Dull skin'],
    treatments: ['Precision microneedling', 'Radio frequency microneedling', 'Serum infusion during treatment'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Micro%20needling-XEXDf70HAB5TbeorPVEH4H84NkpE9N.jpeg',
    category: 'skin'
  },
  {
    id: 'collagen-induction',
    title: 'Collagen Induction Therapy',
    shortTitle: 'Collagen Induction',
    description: 'Natural skin lifting and rejuvenation through collagen stimulation',
    fullDescription: 'Advanced collagen induction therapy that naturally lifts and rejuvenates skin by triggering the body\'s collagen production process.',
    benefits: [
      'Lifts sagging skin',
      'Rejuvenates complexion',
      'Improves elasticity',
      'Natural-looking results'
    ],
    targets: ['Skin sagging', 'Loss of elasticity', 'Fine lines', 'Dull complexion'],
    treatments: ['Collagen induction therapy', 'Microneedling with growth factors', 'Radiofrequency collagen stimulation'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Collagen%20Induction-DpMl1Uz5ALLntYBVMmsj6mukgEFRxv.jpeg',
    category: 'skin'
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    shortTitle: 'Laser Hair Removal',
    description: 'Permanent hair reduction with advanced laser technology',
    fullDescription: 'Safe and effective laser hair removal for permanent reduction of unwanted hair on any body part. Achieve smooth, hair-free skin.',
    benefits: [
      'Permanent hair reduction',
      'Fast treatment time',
      'Safe and painless',
      'Prevents ingrown hairs'
    ],
    targets: ['Unwanted body hair', 'Facial hair', 'Hair growth', 'Ingrown hairs'],
    treatments: ['Diode laser hair removal', 'Multi-session hair removal packages', 'Precision laser treatments'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laser%20Hair%20removal-pasi3MkormpbRx0SSW0r5XM0eBidim.png',
    category: 'hair'
  },
  {
    id: 'carbon-laser-peel',
    title: 'Carbon Laser Peel',
    shortTitle: 'Carbon Laser Peel',
    description: 'Deep skin cleansing and rejuvenation with cutting-edge technology',
    fullDescription: 'Hollywood Carbon Peel using cutting-edge laser technology to deeply cleanse pores and rejuvenate skin for a radiant glow.',
    benefits: [
      'Deep pore cleansing',
      'Reduces acne',
      'Improves skin clarity',
      'Radiant complexion'
    ],
    targets: ['Clogged pores', 'Acne', 'Oily skin', 'Dull complexion'],
    treatments: ['Carbon laser peel treatment', 'Deep pore cleansing', 'Skin rejuvenation laser therapy'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carbon%20laser%20peel-fn6eVtWA66FVTlEWgF4LhgbTXLHaOC.jpeg',
    category: 'skin'
  },
  {
    id: 'hydrafacial',
    title: 'Hydrafacial Treatment',
    shortTitle: 'Hydrafacial',
    description: 'Luxurious non-invasive facial treatment for instant skin refreshment',
    fullDescription: 'Advanced hydra-facial technology that cleanses, extracts, and hydrates skin with medical-grade serums for immediate visible results.',
    benefits: [
      'Instant hydration',
      'Deep cleansing',
      'Reduced pores',
      'Radiant glow'
    ],
    targets: ['Dehydrated skin', 'Clogged pores', 'Fine lines', 'Dull complexion'],
    treatments: ['Hydrafacial treatment', 'Customized serum infusion', 'Lymphatic drainage massage'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hydra%20facial-XVV08LK7ul5PQdfq7UJ7pb6HUXG3k9.jpeg',
    category: 'skin'
  },
  {
    id: 'botox-treatment',
    title: 'Botox Treatment',
    shortTitle: 'Botox',
    description: 'Smooth wrinkles and prevent expression lines with precision injections',
    fullDescription: 'Safe and effective Botox treatment to smooth existing wrinkles and prevent new expression lines for a youthful appearance.',
    benefits: [
      'Smooths wrinkles',
      'Prevents new lines',
      'Natural-looking results',
      'Long-lasting effects'
    ],
    targets: ['Forehead wrinkles', 'Crow\'s feet', 'Frown lines', 'Expression lines'],
    treatments: ['Precision Botox injections', 'Strategic placement for natural results', 'Combination treatments'],
    imagePath: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Botox%20Treatment-jcSBrUWncVyFwX18dqzODEkMIezZzz.jpeg',
    category: 'skin'
  }
]

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id)
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter(service => service.category === category)
}
