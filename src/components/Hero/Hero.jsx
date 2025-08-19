import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardIterator from "../iterators/CardIterator";
import { CartCount } from "../AllComponents";

const Hero = () => {
  const { searchTerm, selectedCategory } = useContext(CartCount);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const productData = await axios.get("https://fakestoreapi.com/products");
      setData(productData.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categoreis" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="card-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : filteredData.length > 0 ? (
        filteredData.map((ele, index) => <CardIterator key={index} item={ele} />)
      ) : (
        <h2>No Products Found</h2>
      )}
    </section>
  );
};

export default Hero;
