export interface GalleryItem {
    id: string;
    title: string;
    image: string;
    category: string;
    price?: string;
    sku: string;
    description: string;
    features: string[];
}

export const galleryData: GalleryItem[] = [
    {
        id: 'school-uniform-set',
        title: 'School Uniform Set',
        image: '/school.png',
        category: 'School Uniform',
        price: '₹899',
        sku: 'SCH-001',
        description: 'High-quality school uniform set designed for comfort and durability. Made from premium breathable fabric that withstands daily wear and frequent washing.',
        features: ['Vibrant Colors', 'Stain Resistant', 'Breathable Fabric', 'Reinforced Stitching']
    },
    {
        id: 'sports-team-jersey',
        title: 'Sports Team Jersey',
        image: '/999.png',
        category: 'Sports Uniforms',
        price: '₹599',
        sku: 'SPT-002',
        description: 'Professional sports jersey with advanced sublimation printing. Ideal for cricket, football, and other team sports. Lightweight and sweat-absorbent.',
        features: ['Custom Logo Branding', 'Full Bleed Design', 'Sweat Absorbent', 'Fade Resistant']
    },
    {
        id: 'professional-lab-coat',
        title: 'Professional Lab Coat',
        image: '/222.png',
        category: 'Lab Coats',
        price: '₹749',
        sku: 'LAB-003',
        description: 'Durable and professional lab coat for medical and scientific environments. Features multiple pockets and a comfortable fit for all-day use.',
        features: ['Multiple Pockets', 'Easy Wash', 'Durable Material', 'Professional Fit']
    },
    {
        id: 'scouts-guides-uniform',
        title: 'Scouts & Guides Uniform',
        image: '/news-5.jpg',
        category: 'Special Units',
        price: '₹999',
        sku: 'SCT-004',
        description: 'Official Scouts & Guides uniform set. Complies with standard regulations and provides comfort for outdoor activities and official gatherings.',
        features: ['Regulatory Standard', 'Tough Fabric', 'Official Badging Support', 'Active Fit']
    },
    {
        id: 'staff-polo-shirt',
        title: 'Staff Polo Shirt',
        image: '/33.png',
        category: 'Staff Wear',
        price: '₹449',
        sku: 'STF-005',
        description: 'Professional polo shirt for teaching and non-teaching staff. Modern fit with clean finishes, suitable for corporate and educational environments.',
        features: ['Premium Cotton Blend', 'Modern Fit', 'Logo Embroidery Ready', 'Color Fastness']
    },
    {
        id: 'premium-training-kit',
        title: 'Premium Training Kit',
        image: '/Gallery/001.jpg',
        category: 'Sports Uniforms',
        price: '₹1299',
        sku: 'TRN-006',
        description: 'Complete premium training kit including jersey and shorts. Designed for peak performance and maximum comfort during intense practice sessions.',
        features: ['Pro Performance Fabric', 'Quick Dry', 'Ergonomic Design', 'High Durability']
    }
];
