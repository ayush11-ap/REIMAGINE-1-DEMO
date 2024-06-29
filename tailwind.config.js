export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'left-center': 'left center',
        'center-center': 'center center',
        'right-center': 'right center',
      },
      transform: {
        'stretch-y': 'scaleY(1.5)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        // Y-axis Rotation
        '.rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
        '.rotate-y-30': {
          transform: 'rotateY(30deg)',
        },
        '.rotate-y-45': {
          transform: 'rotateY(45deg)',
        },
        '.rotate-y-60': {
          transform: 'rotateY(60deg)',
        },
        '.rotate-y-90': {
          transform: 'rotateY(90deg)',
        },
        '.rotate-y-120': {
          transform: 'rotateY(120deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        // X-axis Rotation
        '.rotate-x-0': {
          transform: 'rotateX(0deg)',
        },
        '.rotate-x-30': {
          transform: 'rotateX(30deg)',
        },
        '.rotate-x-45': {
          transform: 'rotateX(45deg)',
        },
        '.rotate-x-60': {
          transform: 'rotateX(60deg)',
        },
        '.rotate-x-90': {
          transform: 'rotateX(90deg)',
        },
        '.rotate-x-120': {
          transform: 'rotateX(120deg)',
        },
        '.rotate-x-180': {
          transform: 'rotateX(180deg)',
        },
        // Z-axis Rotation
        '.rotate-z-0': {
          transform: 'rotateZ(0deg)',
        },
        '.rotate-z-30': {
          transform: 'rotateZ(30deg)',
        },
        '.rotate-z-45': {
          transform: 'rotateZ(45deg)',
        },
        '.rotate-z-60': {
          transform: 'rotateZ(60deg)',
        },
        '.rotate-z-90': {
          transform: 'rotateZ(90deg)',
        },
        '.rotate-z-120': {
          transform: 'rotateZ(120deg)',
        },
        '.rotate-z-180': {
          transform: 'rotateZ(180deg)',
        },
        // Z-axis Translation
        '.translate-z-0': {
          transform: 'translateZ(0)',
        },
        '.translate-z-10': {
          transform: 'translateZ(10px)',
        },
        '.translate-z-20': {
          transform: 'translateZ(20px)',
        },
        '.translate-z-30': {
          transform: 'translateZ(30px)',
        },
        '.translate-z-40': {
          transform: 'translateZ(40px)',
        },
        '.translate-z-50': {
          transform: 'translateZ(50px)',
        },
        '.translate-z--10': {
          transform: 'translateZ(-10px)',
        },
        '.translate-z--20': {
          transform: 'translateZ(-20px)',
        },
        '.translate-z--30': {
          transform: 'translateZ(-30px)',
        },
        '.translate-z--40': {
          transform: 'translateZ(-40px)',
        },
        '.translate-z--50': {
          transform: 'translateZ(-50px)',
        },
        // Perspective
        '.perspective-0': {
          perspective: '0px',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.perspective-3000': {
          perspective: '3000px',
        },
        // Transform Style
        '.transform-style-flat': {
          transformStyle: 'flat',
        },
        '.transform-style-preserve': {
          transformStyle: 'preserve-3d',
        },
        // Backface Visibility
        '.backface-visible': {
          backfaceVisibility: 'visible',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        // Custom Background Color
    
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
