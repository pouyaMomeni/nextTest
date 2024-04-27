import '@/styles/globals.css'
import '@/styles/slider.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Provider } from 'react-redux';
import store from '@/store/index';
import { QueryClientProvider, QueryClient } from 'react-query'


export default function App({ Component, pageProps }: AppProps) {
// For rtl MUI
  const theme = createTheme({
    direction: "rtl"
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin]
  });
// for react query
  const qc = new QueryClient()
  return(
    <div dir="rtl">
     <QueryClientProvider client={qc}>
      <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
      </Provider>
     </QueryClientProvider>
    </div>
  )
}
