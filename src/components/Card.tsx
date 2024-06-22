import { Dispatch, SetStateAction } from "react";
import "./Card.css";
import { Post } from "../constants";

interface CardProps {
  title: string;
  views: number;
  upload_date: string;
  bookmark: boolean;
  toggleBookmark: () => void;
}

function Card({ title, views, upload_date, bookmark, toggleBookmark }: CardProps) {
  return (
    <li className="card--container" id="card1">
      <div className="header">
        <div className="card--tag">
          <span className="upload-date">{upload_date}</span>
        </div>
        <div className="card--tag">
          <span className="icon bookmark" book-marked={`${bookmark}`} onClick={toggleBookmark}>
            <i className="fa fa-bookmark"></i>
          </span>
        </div>
      </div>
      <div className="card--content">
        <span className="title">{title}</span>
      </div>
      <div className="footer">
        <div className="card--tag">
          <span className="views">{views}</span>
          views
        </div>
      </div>
    </li>
  );
}
export default Card;
