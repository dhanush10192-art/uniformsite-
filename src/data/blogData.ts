export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    content: string[];
}

export const blogData: BlogPost[] = [
    {
        id: 'uniform-design-tips',
        title: 'Uniform Design Tips for Teams',
        date: 'Feb 1, 2026',
        excerpt: 'Choosing the right uniform colors is essential for identity, visibility, and a professional look.',
        image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: [
            "Designing a uniform for your team is more than just picking colors; it's about creating an identity. A well-designed uniform fosters a sense of unity and pride among team members.",
            "When choosing colors, consider the psychological impact. Blue conveys trust and stability, while red represents energy and passion. Ensure there is high contrast for visibility, especially for sports uniforms.",
            "Don't forget about placement of logos and names. They should be clear and not cluttered. Sublimation printing is ideal for uniforms as it allows for intricate designs without adding weight or stiffness to the fabric.",
            "Lastly, involve the team in the design process. A uniform that everyone loves is one that will be worn with confidence."
        ]
    },
    {
        id: 'perfect-uniform-colors',
        title: 'How to Choose Perfect Uniform Colors',
        date: 'Jan 28, 2026',
        excerpt: 'A guide to selecting colors and designs that represent your cricket team brand.',
        image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: [
            "Selecting the perfect color palette for your school or team uniform is a critical decision that balances aesthetics with brand identity.",
            "Start by identifying your primary brand color. This will be the dominant color of the uniform. Then, choose one or two secondary colors that complement the primary choice. Use a color wheel to find harmonious combinations like analogous or complementary schemes.",
            "Functionality is also key. Darker colors are better at hiding dirt and stains, which is practical for school uniforms or industrial workwear. Lighter colors can be cooler in hot climates but require more maintenance.",
            "Test your colors across different lighting conditions and on different skin tones to ensure the uniform looks great on everyone. Consistency across all pieces of the uniform set is what creates a truly professional look."
        ]
    },
    {
        id: 'maintaining-uniforms',
        title: 'Maintaining Your Uniforms',
        date: 'Jan 20, 2026',
        excerpt: 'Proper care keeps your uniforms vibrant, comfortable, and long-lasting.',
        image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: [
            "Uniforms are an investment, and proper care is essential to ensure they last for many seasons. Whether it's school wear or professional sports jerseys, the right maintenance routine makes a world of difference.",
            "Always follow the care label. Most modern uniforms, especially those using sublimation prints, should be washed in cold water with a mild detergent. Avoid bleach as it can damage the specialized fibers.",
            "Turn garments inside out before washing to protect the exterior design and logo. Air drying is always preferred over machine drying to prevent shrinkage and fiber breakdown caused by high heat.",
            "Store uniforms in a cool, dry place. If possible, hang them to avoid permanent creases. By following these simple steps, your uniforms will stay vibrant, comfortable, and professional for years to only come."
        ]
    }
];
