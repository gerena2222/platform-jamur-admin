import '../styles/globals.css'
import Head from 'next/head';
import axios from 'axios';
axios.defaults.withCredentials = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <link rel='stylesheet' href='/assets/vendor/bootstrap/css/bootstrap.min.css'/>
        <link rel='stylesheet' href='/assets/vendor/fontawesome/css/all.min.css'/>
        <link rel='stylesheet' href='/assets/css/style.css'/>

        <script src='/assets/vendor/jquery/jquery.min.js'></script>
        <script src='/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossOrigin="anonymous"></script>
        <script src='/assets/js/main.js'></script>



      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
