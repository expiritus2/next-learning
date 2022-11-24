import { createTheme, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        purpleDark?: PaletteColorOptions;
    }
}

const theme = createTheme({
    palette: {
        purpleDark: {
            main: '#673f86',
        },
    },
});

export default theme;
