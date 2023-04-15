import TweetsList from "../TweetsList";
import Container from "../Container";
import PageTitle from "../PageTitle";
// import { NewsWrapper } from "./News.styled";
const Tweets = () => {
  //   const [searchWord, setSearchWord] = useState("");

  return (
    // <NewsWrapper>
    <Container>
      <PageTitle>Tweets</PageTitle>
      <TweetsList />
    </Container>
    // </NewsWrapper>
  );
};

export default Tweets;
