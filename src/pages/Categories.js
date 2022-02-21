import React, { useState } from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import Header from "../components/Header";
import Rating from "../components/Rating";

const { Sider, Content } = Layout;

const Categories = () => {
  const { state: category } = useLocation();
  const [rating, setRating] = useState(1);

  return (
    <>
      <div className="container">
        <Header />
        <div className="results-header">
          <span>Showing Products for </span>
          <span className="category">'{category}'</span>
        </div>
        <Layout>
          <Sider width="340px" theme="light" style={{ padding: "25px" }}>
            <Rating rating={rating} setRating={setRating} />
          </Sider>
          <Content
            theme="light"
            style={{ padding: "35px", backgroundColor: "brown" }}
          ></Content>
        </Layout>
        <Button onClick={() => console.log(category)} type="primary">
          Categories Page
        </Button>
      </div>
    </>
  );
};

export default Categories;
