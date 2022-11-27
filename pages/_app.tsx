import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import theme from 'styles/theme';

import { AdminHeader, CommonHeader } from 'components';

import createEmotionCache from '../styles/createEmotionCache';

const emotionCache = createEmotionCache();

import '../styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const { isAdminPage } = pageProps;
    const Header = isAdminPage ? AdminHeader : CommonHeader;

    return (
        <SessionProvider session={session}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </SessionProvider>
    );
};

export default App;
