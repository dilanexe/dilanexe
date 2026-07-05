// Service Page SEO Metadata for The Elite Derma Care
// Used for generating optimized meta tags for each service page

export const serviceSEOMetadata: Record<string, {
  title: string
  description: string
  keywords: string[]
}> = {
  'prp-therapy': {
    title: 'PRP Therapy - Hair & Skin Rejuvenation in Nugegoda | Elite Derma Care',
    description: 'Experience natural PRP therapy at The Elite Derma Care in Nugegoda. Professional platelet-rich plasma treatments for hair growth, skin rejuvenation & anti-aging. Expert care, proven results.',
    keywords: ['PRP therapy', 'platelet rich plasma', 'hair growth treatment', 'skin rejuvenation', 'natural healing', 'Nugegoda', 'Sri Lanka']
  },
  'dermal-filler': {
    title: 'Dermal Fillers - Facial Contouring & Volume Restoration | Nugegoda',
    description: 'Professional dermal filler treatments at The Elite Derma Care. Restore volume, enhance features & achieve natural-looking results. Expert facial contouring in Nugegoda.',
    keywords: ['dermal fillers', 'facial contouring', 'volume restoration', 'face fillers', 'anti-aging', 'non-surgical', 'Nugegoda']
  },
  'botox-treatment': {
    title: 'Botox Treatment - Smooth Wrinkles & Express Lines | Elite Derma',
    description: 'Premium Botox injections at The Elite Derma Care for natural-looking wrinkle reduction. Expert precision treatments for forehead lines, crow\'s feet & frown lines. Nugegoda, Sri Lanka.',
    keywords: ['Botox', 'botox injections', 'wrinkle reduction', 'anti-aging', 'forehead lines', 'crow\'s feet', 'aesthetic clinic Nugegoda']
  },
  'laser-hair-removal': {
    title: 'Laser Hair Removal - Permanent Hair Reduction | Nugegoda, Sri Lanka',
    description: 'Advanced laser hair removal treatments at The Elite Derma Care. Permanent hair reduction for face & body with precision technology. Safe, effective & pain-free. Book today.',
    keywords: ['laser hair removal', 'permanent hair reduction', 'hair removal treatment', 'laser technology', 'body hair removal', 'facial hair', 'Nugegoda']
  },
  'hydrafacial': {
    title: 'Hydrafacial - Medical-Grade Facial Treatment | Elite Derma Care',
    description: 'Luxurious Hydrafacial treatment at The Elite Derma Care. Advanced hydration, deep cleansing & instant results. Professional skincare for glowing, radiant skin in Nugegoda.',
    keywords: ['hydrafacial', 'facial treatment', 'skin cleansing', 'hydration', 'skin rejuvenation', 'medical facial', 'Nugegoda skincare']
  },
  'microneedling': {
    title: 'Microneedling - Collagen Stimulation & Skin Rejuvenation | Nugegoda',
    description: 'Professional microneedling treatments at The Elite Derma Care. Stimulate collagen naturally, reduce scars & improve texture. Expert skin rejuvenation in Nugegoda.',
    keywords: ['microneedling', 'collagen induction', 'skin rejuvenation', 'acne scars', 'skin texture', 'fine lines', 'radiofrequency microneedling']
  },
  'carbon-laser-peel': {
    title: 'Carbon Laser Peel - Hollywood Carbon Peel | Elite Derma Care',
    description: 'Hollywood carbon laser peel at The Elite Derma Care. Deep skin cleansing, pore reduction & acne treatment. Advanced laser technology in Nugegoda, Sri Lanka.',
    keywords: ['carbon laser peel', 'hollywood peel', 'laser peel', 'acne treatment', 'pore cleansing', 'skin rejuvenation', 'laser treatment']
  },
  'acne-treatment': {
    title: 'Acne Treatment - Comprehensive Acne Management | Nugegoda',
    description: 'Professional acne treatment at The Elite Derma Care. Comprehensive care for active acne, scarring & prevention. Medical-grade solutions for clear skin.',
    keywords: ['acne treatment', 'acne scars', 'breakout treatment', 'skin clearing', 'acne management', 'dermatology', 'clear skin treatment']
  },
  'pigmentation-treatment': {
    title: 'Pigmentation Treatment - Dark Spots & Melasma Removal | Nugegoda',
    description: 'Expert pigmentation treatment at The Elite Derma Care. Remove dark spots, melasma & uneven tone. Advanced laser & peeling treatments for even, radiant skin.',
    keywords: ['pigmentation treatment', 'dark spots removal', 'melasma treatment', 'skin lightening', 'pigmentation removal', 'uneven skin tone', 'laser treatment']
  },
  'hair-growth-treatment': {
    title: 'Hair Growth Treatment - Hair Loss Solutions | Elite Derma Care',
    description: 'Advanced hair growth treatments at The Elite Derma Care. GFC & exosome therapies for hair restoration. Professional solutions for hair loss & thinning in Nugegoda.',
    keywords: ['hair growth treatment', 'hair loss solution', 'hair restoration', 'hair thinning treatment', 'GFC therapy', 'exosome treatment', 'hair regeneration']
  },
  'collagen-induction': {
    title: 'Collagen Induction Therapy - Natural Skin Lifting | Nugegoda',
    description: 'Collagen induction therapy at The Elite Derma Care. Stimulate natural collagen for lifting, tightening & rejuvenation. Expert radiofrequency treatments in Nugegoda.',
    keywords: ['collagen induction', 'collagen therapy', 'skin lifting', 'radiofrequency', 'skin tightening', 'rejuvenation', 'anti-aging treatment']
  },
  'chemical-peeling': {
    title: 'Chemical Peeling - Advanced Exfoliation & Skin Renewal | Nugegoda',
    description: 'Professional chemical peeling at The Elite Derma Care. Advanced exfoliation for acne, fine lines & dull skin. Expert skin renewal treatments in Sri Lanka.',
    keywords: ['chemical peel', 'chemical peeling', 'skin exfoliation', 'TCA peel', 'glycolic peel', 'acne treatment', 'skin renewal']
  },
  'fat-burning': {
    title: 'Fat Burning & Body Contouring - Non-Invasive Body Sculpting | Nugegoda',
    description: 'Non-invasive fat burning treatments at The Elite Derma Care. Reduce belly fat, cellulite & sculpt your body naturally. Advanced body contouring in Nugegoda.',
    keywords: ['fat burning', 'body contouring', 'fat reduction', 'cellulite treatment', 'body sculpting', 'non-invasive', 'fat dissolving']
  },
  'wart-removal': {
    title: 'Wart Removal - Precision Wart Treatment | Elite Derma Care',
    description: 'Professional wart removal at The Elite Derma Care. Precision treatments for common, plantar & facial warts. Safe, effective wart removal in Nugegoda.',
    keywords: ['wart removal', 'wart treatment', 'plantar warts', 'skin tag removal', 'laser treatment', 'precision removal', 'dermatology']
  }
}

// SEO Helper function to get metadata for a service
export function getServiceSEOMetadata(serviceId: string) {
  return serviceSEOMetadata[serviceId] || {
    title: 'Professional Aesthetic Treatment | The Elite Derma Care',
    description: 'Expert aesthetic treatment at The Elite Derma Care in Nugegoda. Professional care for your skincare needs.',
    keywords: ['aesthetic treatment', 'dermatology', 'Nugegoda', 'skin treatment']
  }
}
