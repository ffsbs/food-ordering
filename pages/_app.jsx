import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import Layout from "../layout/Layout";

import { Provider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;





//  13.satırdaki Layout componenti tüm sayfaların etrafını sarmalamaktadır.
//  Header ve Footer componentleri Layout componenti içerisinde tanımlanmıştır.
//  Böylece tüm sayfalarda Header ve Footer componentleri görünür olacaktır.
//  14.satırda ise Component prop'u ile hangi sayfaya gidildiyse o sayfa render edilmektedir.
//  pageProps ise o sayfaya ait props'ları içermektedir.
//  Bu yapı Next.js'in sağladığı bir özelliktir ve sayfalar arasında geçiş yaparken kullanılır.

//  Ayrıca 5.satırda Redux'un Provider componenti kullanılarak uygulama genelinde Redux store'a erişim sağlanmaktadır.