export default {
  content: [
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {},
    },
  },
  screens: {
    xs: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
