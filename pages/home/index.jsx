import React from "react";
import About from "../../components/About";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/Reservation";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export const getServerSideProps = async () => {
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return {
    props: {
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;