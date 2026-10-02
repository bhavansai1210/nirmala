// Curated asset imports
import heroJewelleryImg from '../assets/images/hero_jewellery_1790944646544.jpg';
import heroCelebrationImg from '../assets/images/hero_celebration_1790944664877.jpg';
import mamidiJewellersImg from '../assets/images/mamidi_jewellers_1790944684736.jpg';
import functionHallGrandImg from '../assets/images/function_hall_grand_1790944701333.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Main Hall' | 'Exterior' | 'Interior Details' | 'Celebration Atmosphere' | 'Architecture';
  image: string;
  caption: string;
}

export interface JewelleryCategoryItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export const brandImages = {
  // Primary brand assets
  heroJewellery: heroJewelleryImg,
  heroCelebration: heroCelebrationImg,
  nirmalaJewellers: heroJewelleryImg, // Dedicated high-resolution portrait
  mamidiJewellers: mamidiJewellersImg,
  functionHallExterior: functionHallGrandImg,
  functionHallInterior: functionHallGrandImg,

  // Jewellery visual categories (Section 11)
  jewelleryCategories: [
    {
      id: 'gold',
      title: 'Gold',
      desc: 'Pure 22k heirloom jewellery crafted with generational precision.',
      image: heroJewelleryImg
    },
    {
      id: 'bridal',
      title: 'Bridal',
      desc: 'Chokers, harams, and vanki designed for auspicious beginnings.',
      image: heroJewelleryImg
    },
    {
      id: 'traditional',
      title: 'Traditional',
      desc: 'South Indian temple motifs and classic antique gold craftsmanship.',
      image: mamidiJewellersImg
    },
    {
      id: 'everyday',
      title: 'Everyday',
      desc: 'Lightweight, refined elegance for daily grace and comfort.',
      image: heroJewelleryImg
    },
    {
      id: 'celebration',
      title: 'Celebration',
      desc: 'Statement pieces that illuminate life’s grandest milestones.',
      image: mamidiJewellersImg
    }
  ] as JewelleryCategoryItem[],

  // Function hall visual grid items (Section 15)
  gallery: [
    {
      id: 'hall-1',
      title: 'Grand Banquet Hall',
      category: 'Main Hall',
      image: functionHallGrandImg,
      caption: 'Spacious banquet hall illuminated by ambient chandeliers and elegant acoustics.'
    },
    {
      id: 'hall-2',
      title: 'Celebration Atmosphere',
      category: 'Celebration Atmosphere',
      image: heroCelebrationImg,
      caption: 'Warm evening lighting, traditional floral arrangements, and festive glow.'
    },
    {
      id: 'hall-3',
      title: 'Architectural Welcome',
      category: 'Architecture',
      image: functionHallGrandImg,
      caption: 'Generous reception layout with seamless flow for large family gatherings.'
    },
    {
      id: 'hall-4',
      title: 'Mandap & Stage Setting',
      category: 'Interior Details',
      image: heroCelebrationImg,
      caption: 'Carefully planned stages ready to host wedding rituals and felicitations.'
    }
  ] as GalleryItem[]
};
