/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import { SupabaseProvider } from "../supabase";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import theme from "styles/theme";
import "styles/globals.css";
import Script from "next/script";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <SupabaseProvider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Script
            async
            defer
            data-website-id="e19641ad-4f8b-4941-8d79-08cd62d215be"
            src="https://umami-production-f45b.up.railway.app/umami.js"
          />
        </ChakraProvider>
      </CacheProvider>
    </SupabaseProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
