import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from 'styles/theme';

import { AdminHeader, CommonHeader } from 'components';

import createEmotionCache from '../styles/createEmotionCache';

const emotionCache = createEmotionCache();

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    const { isAdminPage } = pageProps;
    const Header = isAdminPage ? AdminHeader : CommonHeader;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
