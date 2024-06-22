import "./Table.css";
import Card from "./Card";
import { Post, SORT_BY_ORDER_TYPE } from "../constants";
import { Dispatch, SetStateAction } from "react";

function Table({
  orderValue,
  posts,
  setPosts,
}: {
  orderValue: number;
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}) {
  const rows = [];
  const toggleBookmark = (index: number) =>
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      newPosts[index] = { ...newPosts[index], bookmark: !newPosts[index].bookmark };
      const sortedPosts = SORT_BY_ORDER_TYPE[orderValue](newPosts);
      return sortedPosts;
    });

  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  return (
    <table>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((card, index) => (
              <td key={index}>
                <Card {...card} toggleBookmark={() => toggleBookmark(rowIndex * 3 + index)} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
