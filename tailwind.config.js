module.exports = {
  purge: {
    // true = jika ingin di production
    // false = jika ingin di development
    enabled: true,
    content: [
      './index.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#596A76',
          600: '#4b5563',
          700: '#293948',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
