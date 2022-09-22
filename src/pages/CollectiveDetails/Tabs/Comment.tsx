import React from "react";
import { Flex } from "components/Flex";
import sampleImg from "../../../assets/image/defaultProjectIcon.png";

const Comment = ({ data }) => {
  const {
    creator,
    createdAt,
    favorites,
    posts,
    title,
    comments,
    votes,
    imageLink,
  } = data;
  return (
    <div>
      <Flex style={{ gridGap: "10px" }} alignItems="center">
        <img
          src={creator.avatar ?? sampleImg}
          className="creatorAvatar"
          alt={creator.userName}
        />
        <span>{creator.userName}</span>
        <span className="userTag">MEMBER</span>
      </Flex>
    </div>
  );
};

export default Comment;
