import API from "api/api";
import { Flex } from "components/Flex";
import { ForumCommentWrapper } from "components/ForumCard/styles";
import { HeartButton } from "components/HeartButton";
import { TextView } from "components/TextView";
import { VoteBar } from "components/VoteBar";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useMembership } from "hooks/useMembership";
import moment from "moment";
import { useEffect, useState } from "react";
import { BiMessageRounded } from "react-icons/all";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useSelector } from "react-redux";
import { State } from "state/types";
import { getDiffTime } from "utils";
import sampleImg from "../../assets/image/defaultProjectIcon.png";
import { CommentCardContainer, CommentCardWrapper } from "./styles";

interface iProps {
  collectiveID: string;
  comments: any[];
  depth: number;
  onUpdateComments: (newComments: any[], isAdding: boolean) => void;
}

export default function CommentCard(props: iProps) {
  const { account } = useActiveWeb3React();
  const { comments, depth, onUpdateComments, collectiveID } = props;
  const [commentsData, setCommentsData] = useState<any[]>(comments);
  const [commentText, setComment] = useState("");
  const profileData = useSelector((state: State) => state.profile.data);
  const onMemberShipCheck = useMembership();

  useEffect(() => {
    setCommentsData(comments);
  }, [comments]);

  function handleVote(comment_id, action, idx) {
    API.updateVote(comment_id, "comment", action, account).then((res) => {
      if (res.data.success) {
        const newComments = [...comments];
        newComments[idx] = {
          ...newComments[idx],
          votes:
            action === "up"
              ? Number(newComments[idx].votes) + 1
              : Number(newComments[idx].votes) - 1,
          votes_count:
            action === "up"
              ? Number(newComments[idx].votes_count) + 1
              : Number(newComments[idx].votes_count) - 1,
        };
        onUpdateComments(newComments, false);
      }
    });
  }

  const handleFavorite = (comment_id, action, idx) => {
    API.updateFavorite(comment_id, "comment", action, account).then((res) => {
      if (res.data.success) {
        const newComments = [...comments];
        newComments[idx] = {
          ...newComments[idx],
          favorites:
            action === "up"
              ? Number(newComments[idx].favorites) + 1
              : Number(newComments[idx].favorites) - 1,
          favorite_count: action === "up" ? 1 : 0,
        };
        onUpdateComments(newComments, false);
      }
    });
  };

  // const handleCrown = (comment_id, action, idx) => {
  //   API.updateCrown(comment_id, "comment", action, account).then((res) => {
  //     if (res.data.success) {
  //       const newComments = [...comments];
  //       newComments[idx] = {
  //         ...newComments[idx],
  //         crowns:
  //           action === "up"
  //             ? Number(newComments[idx].crowns) + 1
  //             : Number(newComments[idx].crowns) - 1,
  //         crown_count: action === "up" ? 1 : 0,
  //       };
  //       onUpdateComments(newComments, false);
  //     }
  //   });
  // };

  const showComment = (comment) => {
    comment.show = !comment.show;
    setCommentsData((_prev) => {
      _prev.forEach((item) => {
        if (item.comment_id === comment.comment_id)
          Object.assign(item, comment);
      });
      return [..._prev];
    });
  };

  const handleReply = (post_id, parent_id, type, idx) => {
    API.replyComment(post_id, parent_id, type, commentText, account).then(
      (res: any) => {
        if (res.data.success) {
          const newComment = res.data.comment;
          newComment.subComments = [];
          const newComments = [...comments];
          newComments[idx].subComments.unshift(newComment);
          newComments[idx].show = false;
          onUpdateComments(newComments, false);
        }
      }
    );
  };
  return (
    <CommentCardContainer>
      {commentsData.map((comment, idx) => (
        <div key={`comment_${comment.comment_id}`} className="commentItem">
          <CommentCardWrapper>
            <VoteBar
              onVoteUp={() => {
                onMemberShipCheck(collectiveID, account, () =>
                  handleVote(comment.comment_id, "up", idx)
                );
              }}
              onVoteDown={() => {
                onMemberShipCheck(collectiveID, account, () =>
                  handleVote(comment.comment_id, "down", idx)
                );
              }}
              votes={comment.votes}
              votes_count={comment.votes_count}
            />
            <div className="commentBox">
              <div className="commentHeader">
                <Flex style={{ gridGap: "10px" }} alignItems="center">
                  {comment.creator[0].avatar !== null ? (
                    <img
                      className={"userImage"}
                      src={comment.creator[0].avatar}
                      alt="user_image"
                    />
                  ) : (
                    <Jazzicon
                      diameter={35}
                      seed={jsNumberForAddress(
                        comment.creator[0].walletaddress
                      )}
                    />
                  )}
                  <span>{comment.creator[0].name}</span>
                  <span className="userTag">MEMBER</span>
                  <div className="createTime">
                    {getDiffTime(moment(comment.createdat))}
                  </div>
                </Flex>
              </div>
              <div className="commentContent">
                <span>{comment.text}</span>
              </div>
              <div className="commentActions">
                <HeartButton
                  count={comment.favorites}
                  active={comment.favorite_count > 0}
                  size="sm"
                  onClick={() => {
                    onMemberShipCheck(collectiveID, account, () =>
                      handleFavorite(
                        comment.comment_id,
                        comment.favorite_count > 0 ? "down" : "up",
                        idx
                      )
                    );
                  }}
                />
                <div
                  className="circleBtn reply"
                  onClick={() => {
                    onMemberShipCheck(collectiveID, account, () =>
                      showComment(comment)
                    );
                  }}
                >
                  <BiMessageRounded size={20} />
                  <span>Reply</span>
                </div>
              </div>
            </div>
          </CommentCardWrapper>
          {comment.show && (
            <div style={{ marginTop: "30px", marginLeft: "40px" }}>
              <ForumCommentWrapper>
                <div className="forum">
                  <div className="forumCardHeader">
                    <Flex
                      style={{ gridGap: "10px", display: "flex" }}
                      alignItems="center"
                    >
                      <img
                        src={profileData.avatar ?? sampleImg}
                        className="creatorAvatar"
                        alt={profileData.name}
                      />
                      <span>{profileData.name}</span>
                      <span className="userTag">MEMBER</span>
                    </Flex>
                  </div>
                </div>
                <div style={{ padding: "10px", marginTop: "-15px" }}>
                  <TextView
                    label={""}
                    value={commentText}
                    rows={4}
                    onUserInput={(val) => {
                      setComment(val);
                    }}
                    placeholder={"Comment"}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "20px",
                      gridGap: "24px",
                    }}
                  >
                    <button
                      className="replyBtn"
                      disabled={commentText === ""}
                      onClick={() => {
                        handleReply(
                          comment.post_id,
                          comment.comment_id,
                          comment.type,
                          idx
                        );
                      }}
                    >
                      REPLY
                    </button>
                  </div>
                </div>
              </ForumCommentWrapper>
            </div>
          )}
          {comment.subComments.length > 0 && (
            <div style={{ marginLeft: "40px" }}>
              <CommentCard
                collectiveID={collectiveID}
                comments={comment.subComments}
                depth={depth + 1}
                onUpdateComments={(newSubcomments, isAdding) => {
                  const newComment = { ...comment };
                  newComment.subComments = newSubcomments;
                  const newComments = [...comments];
                  newComments[idx] = newComment;
                  onUpdateComments(newComments, isAdding);
                }}
              />
            </div>
          )}
        </div>
      ))}
    </CommentCardContainer>
  );
}
