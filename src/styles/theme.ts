import { DefaultTheme } from 'styled-components';
declare module 'styled-components' {
    export interface ColorPalette {
        queenPink: string;
        pastelPink: string;
        kobi: string;
        operaMauve: string;
        chineseViolet: string;
    }

    export interface DefaultTheme {
        colors: ColorPalette;
    }
}

export const mainTheme: DefaultTheme = {
    colors: {
        queenPink: '#EACBD2',
        pastelPink: '#DFAEB4',
        kobi: '#DD9AC2',
        operaMauve: '#B486AB',
        chineseViolet: '#82667F',
    },
};
