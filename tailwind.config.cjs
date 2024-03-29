/** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ['./src/**/*.{html,js,svelte,ts}'],
        theme: {
            fontFamily: {
                'sans': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
            },
            extend: {
                backgroundImage: {
                    // "discussion": "url('/assets/discussion.png')",
                    // "achieve": "url('/assets/achieve.png')",
                    "scis-building": "url('/assets/scis-building.png')",
                    // "classrooms": "url('/assets/classrooms.png')",
                    // "labs": "url('/assets/labs.png')",
                    // "library": "url('/assets/library.png')",
                    // "teaching": "url('/assets/teaching.png')",
                    "ai": "url('/assets/ai.png')",
                    "crypto": "url('/assets/crypto.png')",
                    "cloud": "url('/assets/cloud.png')",
                    "roughsets": "url('/assets/roughsets.png')",
                },
                fontFamily: {
                    "readable": ['Atkinson Hyperlegible', 'sans-serif'],
                    "roboto": ['Roboto Flex'],
                },
                screens: {
                    "lpt-lg": "1025px",
                    "lpt": "769px",
                    "tbl": "426px",
                    "mbl-lg": "376px",
                    "mbl-md": "321px",
                },
                colors: {
                    matty: {
                        "50": "#fafafa",
                        "100": "#ebebec",
                        "200": "#d7d7d8",
                        "300": "#a6acaf",
                        "400": "#70797f",
                        "500": "#5e696f",
                        "600": "#444f56",
                        "700": "#3d464c",
                        "800": "#2e3539",
                        "900": "#1e2326",
                    },
                    light: {
                        "surface1": "#f0f4fA",
                        "surface2": "#e9f0f8",
                        "surface3": "#e1ebf5",
                        "surface4": "#dee9f4",
                        "surface5": "#d9e5f3",
                    },
                    dark: {
                        "surface1": "#212529",
                        "surface2": "#252a30",
                        "surface3": "#292f37",
                        "surface4": "#2a3139",
                        "surface5": "#2d343e",
                    },
                    "on": {
                        "primary-light": "#ffffff",
                        "secondary-light": "#ffffff",
                        "tertiary-light": "#ffffff",
                        "error-light": "#ffffff",
                        "background-light": "#1a1c1e",
                        "primarycont-light": "#001c38",
                        "secondarycont-light": "#101c2b",
                        "tertiarycont-light": "#261431",
                        "errorcont-light": "#410002",
                        "surface-light": "#1a1c1e",
                        "surfacevariant-light": "#43474e",
                        "primary-dark": "#00315b",
                        "secondary-dark": "#263141",
                        "tertiary-dark": "#3c2947",
                        "error-dark": "#690005",
                        "background-dark": "#e3e2e6",
                        "primarycont-dark": "#004881",
                        "secondarycont-dark": "#d3e4ff",
                        "tertiarycont-dark": "#f4d9ff",
                        "errorcont-dark": "#ffdad6",
                        "surface-dark": "#e3e2e6",
                        "surfacevariant-dark": "#c3c6cf",
                    },
                    "background-light": "#fdfcff",
                    "outline-light": "#73777f",
                    "surface-light": "#fdfcff",
                    "surfacevariant-light": "#dfe2eb",
                    "primarycont-light": "#d3e4ff",
                    "secondarycont-light": "#d7e3f8",
                    "tertiarycont-light": "#f4d9ff",
                    "errorcont-light": "#ffdad6",
                    "background-dark": "#1a1c1e",
                    "outline-dark": "#8d9199",
                    "surface-dark": "#1a1c1e",
                    "surfacevariant-dark": "#43474e",
                    "primarycont-dark": "#004881",
                    "secondarycont-dark": "#3c4858",
                    "tertiarycont-dark": "#533f5e",
                    "errorcont-dark": "#93000a",
                    primary: {
                        "0":"#000000",
                        "10":"#001c38",
                        "20":"#00315b",
                        "25":"#003d6d",
                        "30":"#004881",
                        "35":"#005494",
                        "40":"#0060a8",
                        "50":"#1879ce",
                        "60":"#4194ea",
                        "70":"#6aaeff",
                        "80":"#a2c9ff",
                        "90":"#d3e4ff",
                        "95":"#eaf1ff",
                        "98":"#f8f9ff",
                        "99":"#fdfcff",
                        "100": "#ffffff",
                        "light": "#0060a8",
                        "dark": "#a2c9ff",
                    },
                    secondary: {
                        "0": "#000000",
                        "10": "#101c2b",
                        "20": "#263141",
                        "25": "#313c4c",
                        "30": "#3c4858",
                        "35": "#485364",
                        "40": "#545f70",
                        "50": "#6c788a",
                        "60": "#8691a4",
                        "70": "#a0acbf",
                        "80": "#bbc7db",
                        "90": "#d7e3f8",
                        "95": "#eaf1ff",
                        "98": "#f8f9ff",
                        "99": "#fdfcff",
                        "100": "#ffffff",
                        "light": "#545f70",
                        "dark": "#bbc7db",
                    },
                    tertiary: {
                        "0": "#000000",
                        "10": "#261431",
                        "20": "#3c2947",
                        "25": "#483452",
                        "30": "#533f5e",
                        "35": "#604b6b",
                        "40": "#6c5677",
                        "50": "#866f91",
                        "60": "#a088ac",
                        "70": "#bca2c7",
                        "80": "#d8bde3",
                        "90": "#f4d9ff",
                        "95": "#fcecff",
                        "98": "#fff7fc",
                        "99": "#fffbff",
                        "100": "#ffffff",
                        "light": "#6c5677",
                        "dark": "#d8bde3",
                    },
                    neutral: {
                        "0": "#000000",
                        "10": "#1a1c1e",
                        "20": "#2f3033",
                        "25": "#3a3b3e",
                        "30": "#46474a",
                        "35": "#515255",
                        "40": "#5d5e61",
                        "50": "#76777a",
                        "60": "#909094",
                        "70": "#ababae",
                        "80": "#c6c6ca",
                        "90": "#e3e2e6",
                        "95": "#f1f0f4",
                        "98": "#faf9fd",
                        "99": "#fdfcff",
                        "100": "#ffffff",
                    },
                    neutralvariant: {
                        "0": "#000000",
                        "10": "#181c22",
                        "20": "#2c3137",
                        "25": "#373c43",
                        "30": "#43474e",
                        "35": "#4e535a",
                        "40": "#5a5e66",
                        "50": "#73777f",
                        "60": "#8d9199",
                        "70": "#a8abb4",
                        "80": "#c3c6cf",
                        "90": "#dfe2eb",
                        "95": "#eef1fa",
                        "98": "#f8f9ff",
                        "99": "#fdfcff",
                        "100": "#ffffff",
                    },
                    error: {
                        "0": "#000000",
                        "10": "#410002",
                        "20": "#690005",
                        "25": "#7e0007",
                        "30": "#93000a",
                        "35": "#a80710",
                        "40": "#ba1a1a",
                        "50": "#de3730",
                        "60": "#ff5449",
                        "70": "#ff897d",
                        "80": "#ffb4ab",
                        "90": "#ffdad6",
                        "95": "#ffedea",
                        "98": "#fff8f7",
                        "99": "#fffbff",
                        "100": "#ffffff",
                        "light": "#ba1a1a",
                        "dark": "#ffb4ab",
                    }
                },
                /* typography: ({theme}) => ({
                    matty: {
                        css: {
                            '--tw-prose-body': theme('colors.matty[700]'),
                            '--tw-prose-headings': theme('colors.matty[900]'),
                            '--tw-prose-lead': theme('colors.matty[700]'),
                            '--tw-prose-links': theme('colors.matty[900]'),
                            '--tw-prose-bold': theme('colors.matty[900]'),
                            '--tw-prose-counters': theme('colors.matty[600]'),
                            '--tw-prose-bullets': theme('colors.matty[400]'),
                            '--tw-prose-hr': theme('colors.matty[300]'),
                            '--tw-prose-quotes': theme('colors.matty[900]'),
                            '--tw-prose-quote-borders': theme('colors.matty[300]'),
                            '--tw-prose-captions': theme('colors.matty[700]'),
                            '--tw-prose-code': theme('colors.matty[900]'),
                            '--tw-prose-pre-code': theme('colors.matty[100]'),
                            '--tw-prose-pre-bg': theme('colors.matty[900]'),
                            '--tw-prose-th-borders': theme('colors.matty[300]'),
                            '--tw-prose-td-borders': theme('colors.matty[200]'),
                            '--tw-prose-invert-body': theme('colors.matty[300]'),
                            '--tw-prose-invert-p': theme('colors.matty[200]'),
                            '--tw-prose-invert-ul': theme('colors.matty[200]'),
                            '--tw-prose-invert-li': theme('colors.matty[200]'),
                            '--tw-prose-invert-headings': theme('colors.white'),
                            '--tw-prose-invert-lead': theme('colors.matty[300]'),
                            '--tw-prose-invert-links': theme('colors.white'),
                            '--tw-prose-invert-bold': theme('colors.white'),
                            '--tw-prose-invert-counters': theme('colors.matty[400]'),
                            '--tw-prose-invert-bullets': theme('colors.matty[600]'),
                            '--tw-prose-invert-hr': theme('colors.matty[700]'),
                            '--tw-prose-invert-quotes': theme('colors.matty[100]'),
                            '--tw-prose-invert-quote-borders': theme('colors.matty[700]'),
                            '--tw-prose-invert-captions': theme('colors.matty[400]'),
                            '--tw-prose-invert-code': theme('colors.white'),
                            '--tw-prose-invert-pre-code': theme('colors.matty[300]'),
                            '--tw-prose-invert-pre-bg': theme('colors.matty[100]'),
                            '--tw-prose-invert-th-borders': theme('colors.matty[600]'),
                            '--tw-prose-invert-td-borders': theme('colors.matty[700]'),
                        }
                    }
                }) */
            }
        },
        plugins: [
            require('@tailwindcss/typography'),
            // require('@ceol/tailwind-tooltip'),
        ],
        darkMode: 'class'

    }
