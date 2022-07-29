module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './modules/**/widgets/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens: {
      desktop: '1280px'
    },
    extend: {
      colors: {
        greyscale: {
          'off-white': '#FCFCFC',
          placeholder: '#A0A3BD',
          body: '#4E4B66',
          'off-black': '#14142B',
          bg: '#F7F7FC',
          label: '#6E7191',
          line: '#D9DBE9',
          ash: '#262338',
          input: '#EFF0F6'
        },
        blue: {
          100: '#e3feff',
          200: '#8de9ff',
          300: '#50c8fc',
          400: '#2aa8f8',
          500: '#0576f0',
          600: '#005bd4',
          700: '#0041ac',
          800: '#002463'
        },
        green: {
          100: '#eaf9de',
          200: '#cbffae',
          300: '#a6f787',
          400: '#7df75a',
          500: '#18bb0c',
          600: '#008a00',
          700: '#067306',
          800: '#07540a'
        },
        lavender: {
          100: '#f2f0ff',
          200: '#c4b6ff',
          300: '#b78cff',
          400: '#b374ff',
          500: '#aa33ff',
          600: '#6c00ae',
          700: '#550084',
          800: '#3a0055'
        },
        orange: {
          100: '#fff4eb',
          200: '#ffdbbd',
          300: '#ffa65a',
          400: '#ff9943',
          500: '#ee6d00',
          600: '#c25700',
          700: '#994600',
          800: '#994600'
        },
        purple: {
          100: '#ebecfe',
          200: '#bfbefc',
          300: '#a996ff',
          400: '#9875ff',
          500: '#8b4dff',
          600: '#610bef',
          700: '#4700ab',
          800: '#2e036a'
        },
        pink: {
          100: '#ffecfc',
          200: '#ffabe8',
          300: '#ff75cb',
          400: '#ff54af',
          500: '#e3026f',
          600: '#ca024f',
          700: '#9e0038',
          800: '#5b001e'
        },
        red: {
          100: '#fff2f1',
          200: '#ffc3c0',
          300: '#ff968f',
          400: '#ff968f',
          500: '#e61b00',
          600: '#ab1400',
          700: '#8b1200',
          800: '#5e0c00'
        },
        tan: {
          100: '#f7f3ea',
          200: '#e6dac0',
          300: '#dccba7',
          400: '#c8b794',
          500: '#af9a6f',
          600: '#82704c',
          700: '#6b5d3f',
          800: '#51452b'
        },
        teal: {
          100: '#e0fff8',
          200: '#9cfbef',
          300: '#6dfded',
          400: '#41f8e1',
          500: '#03cfbb',
          600: '#00857a',
          700: '#007a70',
          800: '#005649'
        },
        yellow: {
          100: '#fff8e9',
          200: '#ffe6b0',
          300: '#ffdf9a',
          400: '#fdcc62',
          500: '#eaac30',
          600: '#946300',
          700: '#6e5523',
          800: '#534019'
        },
        'warm-gray': {
          100: '#f7f7f7',
          200: '#f0eeee',
          300: '#dbd7d7',
          400: '#a6a0a0',
          500: '#7a7575',
          600: '#666060',
          700: '#3d3838',
          800: '#160808'
        },
        'cool-gray': {
          100: '#f7f7fc',
          200: '#eff0f6',
          300: '#d9dbe9',
          400: '#a0a3bd',
          500: '#4e4b66',
          600: '#4e4b66',
          700: '#262338',
          800: '#14142a'
        },
        danger: {
          default: '#CA024F',
          dark: '#9e0038',
          darkMode: '#ff75cb',
          light: '#ffabe8',
          bg: '#ffecfc'
        },
        primary: {
          default: '#610BEF',
          dark: '#4700ab',
          darkMode: '#a996ff',
          light: '#bfbefc',
          bg: '#ebecfe'
        },
        secondary: {
          default: '#005BD4',
          dark: '#0041ac',
          darkMode: '#50c8fc',
          light: '#8de9ff',
          bg: '#e3feff'
        },
        success: { dark: '#067306', darkMode: '#a6f787', light: '#cbffae', bg: '#eaf9de' },
        warning: { dark: '#946300', darkMode: '#ffdf9a', light: '#ffe6b0', bg: '#fff8e9' }
      },
      fontSize: {
        'mobile-display-huge': [
          '32px',
          {
            lineHeight: '44px',
            letterSpacing: '1px'
          }
        ],
        'mobile-display-large': [
          '28px',
          {
            lineHeight: '44px',
            letterSpacing: '1px'
          }
        ],
        'mobile-display-medium': [
          '24px',
          {
            lineHeight: '34px',
            letterSpacing: '1px'
          }
        ],
        'desktop-display-x-small': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '1px'
          }
        ],
        'desktop-display-small': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '1px'
          }
        ],
        'desktop-display-medium': [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '1px'
          }
        ],
        'desktop-display-large': [
          '56px',
          {
            lineHeight: '72px',
            letterSpacing: '1px'
          }
        ],
        'desktop-text-large': [
          '20px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-text-medium': [
          '18px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-text-small': [
          '15px',
          {
            lineHeight: '24px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-text-x-small': [
          '13px',
          {
            lineHeight: '22px',
            letterSpacing: '0.25px'
          }
        ],
        'desktop-link-large': [
          '20px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-link-medium': [
          '18px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-link-small': [
          '15px',
          {
            lineHeight: '24px',
            letterSpacing: '0.75px'
          }
        ],
        'desktop-link-x-small': [
          '13px',
          {
            lineHeight: '22px',
            letterSpacing: '0.25px'
          }
        ],
        'mobile-link-large': [
          '20px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ],
        'mobile-link-medium': [
          '17px',
          {
            lineHeight: '28px',
            letterSpacing: '0.75px'
          }
        ],
        'mobile-text-small': [
          '15px',
          {
            lineHeight: '24px',
            letterSpacing: '0.75px'
          }
        ],
        'mobile-text-large': [
          '20px',
          {
            lineHeight: '32px',
            letterSpacing: '0.75px'
          }
        ]
      },
      boxShadow: {
        large: '0px 0px 72px rgba(0, 0, 0, 0.04);'
      },
      backgroundImage: {
        'login-pattern': "url('/auth-pattern.png')",
        'sign-up-left-center': "url('/lc.png')",
        'sign-up-bottom-right': "url('/br.svg')",
        'sign-up-top-right': "url('/tr.png')",
        'sign-up-left-center-dark': "url('/lcd.png')",
        'sign-up-left-bottom-right-dark': "url('/brd.png')",
        'sign-up-left-top-right-dark': "url('/trd.png')",
        'card-bg-light-half': "url('/ctapatternlight.png')"
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
