import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import Page from '../components/Page';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
