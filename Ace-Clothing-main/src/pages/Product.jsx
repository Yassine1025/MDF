import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Imag from "../assets/images/Imag"; // Importez le tableau Imag
import ProductView from "../component/product/ProductView";

import "./Product.css";

function Product() {
  const [productData, setProductData] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    function getData() {
      // Trouver l'image qui correspond à l'ID de produit
      const data = Imag.find((product) => product.id === parseInt(productId));
      if (data) {
        setProductData(data);
      }
    }
    getData();
  }, [productId]);

  return (
    <main className="product-view_main container">
      <ProductView productData={productData} />
    </main>
  );
}

export default Product;
