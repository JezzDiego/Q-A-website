import type { NextPage } from "next";
import NewsCard from "../components/NewsCard";
import index from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={index.centerChild}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
};

export default Home;
