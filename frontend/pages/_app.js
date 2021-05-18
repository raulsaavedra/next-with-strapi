import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import client from '../src/client';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

export default MyApp;
