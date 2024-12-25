import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            white: {
                main: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            black: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            grey: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            green: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            red: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            blue: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            yellow: {
                main: string
                50: string
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
        }
        fontSizes: {
            textFont: {
                h1: string
                h2: string
                h3: string
                h4: string
                h5: string
                s1: string
                s2: string
                b1: string
                b2: string
                b3: string
                b4: string
                c1: string
                c2: string
                c3: string
                label: string
            }
            buttonFont: {
                giant: string
                large: string
                medium: string
                small: string
                tiny: string
            }
        },
        fontWeights: {
            regular: number
            medium: number
            bold: number
        },
    }
}