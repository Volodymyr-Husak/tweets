// import Button from "@mui/material/Button";
import {
  CardContainer,
  HeroImage,
  MiddleLine,
  InfoText,
  Button,
  AvatarContainer,
  BackgroundAvatar,
  Avatar,
  GoItImage,
} from "./TweetsCard.styled";
import heroImage from "../../images/tweetCard/hero.png";
import avatarImage from "../../images/tweetCard/avatar.png";
import goItImage from "../../images/tweetCard/goIt.png";
export default function TweetCard({ tweets, followers }) {
  return (
    <>
      <CardContainer>
        <HeroImage src={heroImage} alt="hero" />
        <GoItImage src={goItImage} alt="goIt" />
        <MiddleLine />
        <AvatarContainer>
          <BackgroundAvatar>
            <Avatar src={avatarImage} alt="avatar" />
          </BackgroundAvatar>
        </AvatarContainer>
        <InfoText>{tweets} TWEETS</InfoText>
        <InfoText>{followers} FOLLOWERS</InfoText>
        <Button type="button">FOLLOW</Button>
      </CardContainer>
    </>
  );
}
