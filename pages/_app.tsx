import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from 'theme';

import { AdminHeader, CommonHeader } from 'components';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    const { isAdminPage } = pageProps;
    const Header = isAdminPage ? AdminHeader : CommonHeader;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
