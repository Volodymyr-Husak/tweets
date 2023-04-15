import { useEffect, useState } from "react";
// import propTypes from "prop-types";
import axios from "axios";
import { Item, List } from "./TweetsList.styled";
import TweetCard from "../TweetsCard";

export default function TweetsList() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://63886b89d94a7e50409afa27.mockapi.io/tweets"
        );
        const data = response.data;
        setTweets(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNews();
  }, []);
  return (
    <>
      <List>
        {tweets?.map((item) => (
          <Item key={item.id}>
            <TweetCard {...item} />
          </Item>
        ))}
      </List>
    </>
  );
}
