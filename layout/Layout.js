import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;


//React, etiketlerin arasındaki veriyi sadece children anahtar kelimesiyle taşır.
//Bu nedenle Layout componenti, kendisine geçirilen tüm içeriği children prop'u aracılığıyla alır ve Header ile Footer arasında render eder.
//Bu sayede Layout componenti, kendisine geçirilen herhangi bir içeriği (örneğin sayfa içeriği) Header ve Footer bileşenleri arasında görüntüleyebilir.
//React.Fragment, React bileşenlerinin birden fazla öğe döndürmesini sağlar ve ekstra bir DOM düğümü oluşturmaz.
//Bu, özellikle Layout bileşeninde Header, children ve Footer bileşenlerini sarmalamak için kullanışlıdır.