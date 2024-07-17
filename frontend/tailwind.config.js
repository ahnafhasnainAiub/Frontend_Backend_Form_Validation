/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: '1rem', // Adjust padding as needed
      },
      screens: {
        'md': '768px',
        '2xl': '1696px',
      },
      maxWidth: {
        'md': '1696px',
        '2xl': '1696px',
      },
    
      backgroundImage: {
        'footer-large': "url('/Images/Footer.png')",
        'footer-small': "url('/Images/Mobile.png')",
      },


    },

  },

 

  
  

  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'primary': '#0060AF',
    'secondary': '#00A88E',
    'dark': '#333333',
    'headerBgSm': '#002B4F',
    'headerBgLg': '#333333',
    'formBg': '#F9FAFB',
    'hoverColor': '#13AF88',
    'bannerBg': '#ECF5F8',
    'paraColor':'#344054',
    'button1' : '#0072BC',
    
  },
  fontSize: {
    xyl: ['48px', '60px'],
    xxl: ['80px', '90px'],
  },
  plugins: [
    require('daisyui'),
  ],
  
}

