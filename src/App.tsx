import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import postData from "./data/posts.json";
import Table from "./components/Table";
import { SORT_BY_ORDER_TYPE } from "./constants";

interface Post {
  title: string;
  views: number;
  upload_date: string;
  bookmark: boolean;
}

function App() {
  const [orderValue, setOrderValue] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleOrderChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => setOrderValue(parseInt(value));

  useEffect(() => {
    setPosts(postData);
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const sortedPosts = SORT_BY_ORDER_TYPE[orderValue](posts);
    setPosts(sortedPosts);
  }, [orderValue]);

  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" onChange={handleOrderChange}>
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        <Table {...{ orderValue, posts, setPosts }} />
      </div>
    </div>
  );
}

export default App;
