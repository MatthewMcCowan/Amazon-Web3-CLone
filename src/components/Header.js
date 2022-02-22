import { PageHeader, Button, Input, Space, Badge } from "antd";
import { useMoralis } from "react-moralis";
import "./Header.css";
import Amazon from "../images/logo.png";
import BookStore from "../images/bookstore.png";
import USA from "../images/usa.png";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;
const categories = [
  "Comics",
  "Dictionaries",
  "Novels",
  "Fantasy",
  "Horror",
  "Adventure",
];
const Header = () => {
  const { authenticate, account } = useMoralis();
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to="/">
              <img src={Amazon} alt="amazon logo" className="logo" />
            </Link>

            <img src={BookStore} alt="BookStore logo" className="logo" />
            <Search
              placeholder="Find A Product"
              enterButton
              className="searchBar"
            />
            <Button
              className="login"
              key="1"
              type="primary"
              onClick={() => authenticate()}
            >
              {account ? (
                <span>{account.slice(0, 5)}</span>
              ) : (
                <span>Login</span>
              )}
            </Button>
            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                </span>
              </Badge>
              <Space className="header-buttons" size={"small"}>
                <img src={USA} alt="region" className="flag" />
              </Space>
            </Space>
          </>,
        ]}
      ></PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((category, index) => {
            return (
              <Link
                to="/categories"
                state={category}
                className="categories"
                key={index}
              >
                {category}
              </Link>
            );
          })}
        </Space>
      </div>
    </div>
  );
};

export default Header;
