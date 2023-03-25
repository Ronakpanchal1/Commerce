import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          illo excepturi dignissimos numquam velit nisi, magni, accusamus quo
          mollitia itaque quasi laboriosam eos molestiae dolor eaque neque vel
          suscipit quod ipsa debitis eveniet id dolorem, cumque qui. Sapiente
          mollitia assumenda, optio consequuntur modi aut laboriosam ull.
        </p>
      </div>
      <div className="bottom">
        {error?"Something went wrong" : (loading
          ? "...Loading..."
          : data.map((item) => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
}
