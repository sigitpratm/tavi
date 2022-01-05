const defaultColors = require('tailwindcss/colors')
const colors = {
    ...defaultColors,
    ...{
        "red-lighter": {
            "100": "#ffd6da",
            "400": "#f05851",
        },
        "scheme": {
            "medium-purple": "#7e3e98",
            "light-gray": "#f4f4f4",
            "dusk-blue": "#2a358f",
            "strawberry": "#ee3442",
            "dusk-blue-two": "#29348e",
            "medium-purple-two": "#804099",
            "pale-grey-35": "rgba(240, 217, 233, 0.35)",
            "blush": "#f8b2ab",
            "medium-pink": "#f05274",
            "darkish-pink": "#e74782",
            "light-teal": "#97cbe8",
            "light-grey-blue": "#a0d8d2",
            "light-blue-grey": "#ccd2e8",
            "light-yellow": "#ffeaa7",
            "mid-blue": "#226bb4",
            "watermelon": "#ff3c64",
            "light-khaki": "#f2f0a0",
            "white-two": "#d8d8d8",
            "darkish-pink-two": "#e74d86",
            "pale-purple": "#c4b3d7",
            "pale-light-purple": "#d2d0f4",
            "black": "#3b3838",
            "red": "#f00",
            "light-pink": "#fde3e9",
            "pale-rose": "#f7bfca",
            "pale-salmon": "#fbb5ad",
            "rosy-pink": "#f46483",
            "darkish-pink-three": "#e74e87",
            "dusk-blue-three": "#7E84BB",
            "brown-grey": "#9f9f9f",
            "dusk-blue-four": "#2a348f",
            "brown-grey-50": "rgba(165, 165, 165, 0.5)",
            "dark-khaki": "#F8D25A",
            "faded-pink": "#f3dee9",
        },
    },
}
module.exports = {
    content: [
        "./dist/*.html",
        "./dist/**/*.html",
        "./dist/**/**/*.html",
        './src/*.html',
        './src/**/*.html',
        './src/**/**/*.html',
    ],
    purge: [
        "./dist/*.html",
        "./dist/**/*.html",
        "./dist/**/**/*.html",
        './src/*.html',
        './src/**/*.html',
        './src/**/**/*.html',
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': 'var(--font-family)',
            'body': ['Excon'],
            "excon": ["Excon"],
        },

        extend: {},
        colors: colors,
        screens: {
            'xs': '375px',
            '2xs': '425px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-54': '-54deg',
            '0': '0',
            '45': '45deg',
            '54': '54deg',
            '90': '90deg',
            '135': '135deg',
            '180': '180deg',
            '270': '270deg',
        },
        height: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',

            '729': '729px',

            '104': '26rem',
            '108': '28rem',
            '112': '30rem',
            '128': '35rem',


            '100': '100px',
            '200': '200px',
            '300': '300px',
            '350': '350px',
            '400': '400px',
            '446': '446px',
            '500': '500px',
            '525': '525px',
            '550': '550px',
            '600': '600px',
            '650': '650px',
            '660': '660px',
            '700': '700px',
            '788': '788px',
            '800': '800px',
            '900': '900px',
            full: '100%',
            screen: '100vh'
        }),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),

            '66': '17rem',
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '100': '100px',
            '200': '200px',
            '300': '300px',
            '400': '400px',
            '446': '446px',
            '500': '500px',
            '600': '600px',
            '660': '660px',
            '700': '700px',
            '800': '800px',
            '900': '900px',
            full: '100%',
            screen: '100vh'
        }),
        margin: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '98': '98px',
        }),
    },
    variants: {
        extend: {

            fontFamily: ['hover', 'focus'],
        }
    },
    corePlugins: {
        fontFamily: false,
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms'),
    ],
}