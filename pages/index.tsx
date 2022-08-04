import type { NextPage } from "next";
import NewsCard from "../components/NewsCard";
import index from "../styles/index.module.scss";

const News = [
  {
    id: 0,
    time: "08/08/2022",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quisquam, aliquam totam eius quod illo fuga cupiditate expedita? Alias, repudiandae. Explicabo enim neque nulla obcaecati reiciendis accusamus sunt nihil repudiandae!"
  },
  {
    id: 1,
    time: "08/08/2022",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quisquam, aliquam totam eius quod illo fuga cupiditate expedita? Alias, repudiandae. Explicabo enim neque nulla obcaecati reiciendis accusamus sunt nihil repudiandae!"
  } 
  ]

const Home: NextPage = () => {
  return (
        <>
          <div className={index.centerChild}>
            {
              News.map((news) => {
                return (
                  <NewsCard key={news.id} news={news} />
                )
              })
            }
          </div>
        </>
      );
};
export default Home;