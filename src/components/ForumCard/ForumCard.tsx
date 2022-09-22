import { LinkPreview } from "@dhaiwat10/react-link-preview";
import API from "api/api";
import { Button } from "components/Button";
import { CommentButton } from "components/CommentButton";
import { CrownButton } from "components/CrownButton";
import { Flex } from "components/Flex";
import { HeartButton } from "components/HeartButton";
import { ReadMore } from "components/ReadMore";
import { ShareButton } from "components/ShareButton";
import { VoteBar } from "components/VoteBar";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useAuth from "hooks/useAuth";
import { useMembership } from "hooks/useMembership";
import { useToast } from "hooks/useToast";
import moment from "moment";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDiffTime, getRemainTime } from "utils";
import { useWalletModal } from "widgets/WalletModal";
import sampleImg from "../../assets/image/defaultProjectIcon.png";
import { Card, ForumCardWrapper } from "./styles";

export type ForumCardProps = {
  data: any;
  onUpdateForum: (forum: any) => void;
  onCardClick: () => void;
  sort: string;
};

const ForumCard: React.FC<ForumCardProps> = ({
  data,
  sort,
  onUpdateForum,
  onCardClick,
}) => {
  const {
    creator,
    favorites,
    favorite_count,
    crown,
    crown_count,
    title,
    commentscount,
    votes,
    votes_count,
    images,
    forum_id,
    createdat,
    description,
    type,
  } = data;
  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const divRef = React.useRef<HTMLDivElement>(null);
  const readMoreRef = React.useRef<any>();
  const onMemberShipCheck = useMembership();
  const { cname } = useParams();
  const { toastSuccess } = useToast();
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined
  );
  const [activePollOption, setActivePollOption] = useState<any>(null);
  const [pollVotes, updatePollVotes] = useState(data.poll_votes ?? []);
  useEffect(() => {
    updatePollVotes(data.poll_votes ?? []);
  }, [data]);

  const handleVote = (action) => {
    if (account) {
      API.updateVote(forum_id, "forum", action, account).then((res: any) => {
        if (res.data.success) {
          onUpdateForum({
            ...data,
            votes: action === "up" ? Number(votes) + 1 : Number(votes) - 1,
            votes_count:
              action === "up"
                ? Number(votes_count) + 1
                : Number(votes_count) - 1,
          });
        }
      });
    } else {
      onPresentConnectModal();
    }
  };
  const handleLike = (action) => {
    if (account) {
      API.updateFavorite(forum_id, "forum", action, account).then(
        (res: any) => {
          if (res.data.success) {
            onUpdateForum({
              ...data,
              favorites:
                action === "up" ? Number(favorites) + 1 : Number(favorites) - 1,
              favorite_count: action === "up" ? 1 : 0,
            });
          }
        }
      );
    } else {
      onPresentConnectModal();
    }
  };

  const handleCrown = (action) => {
    if (account) {
      API.updateCrown(forum_id, "forum", action, account).then((res: any) => {
        if (res.data.success) {
          onUpdateForum({
            ...data,
            crown: action === "up" ? Number(crown) + 1 : Number(crown) - 1,
            crown_count: action === "up" ? 1 : 0,
          });
        }
      });
    } else {
      onPresentConnectModal();
    }
  };

  const setCommentBox = () => {
    onCardClick();
  };

  const onVotePoll = (e) => {
    e.stopPropagation();
    API.voteForumPoll(activePollOption, account, data.forum_id).then((res) => {
      const newPollVotes = pollVotes ? [...pollVotes] : [];
      newPollVotes.push({
        forum_poll_id: activePollOption,
        user_address: account,
        forum_id: data.forum_id,
      });
      updatePollVotes(newPollVotes);
      onUpdateForum({
        ...data,
        poll_votes: newPollVotes,
      });
    });
  };

  return (
    <>
      {creator && (
        <Card onClick={onCardClick}>
          <ForumCardWrapper>
            <VoteBar
              onVoteUp={(e) => {
                e.stopPropagation();
                onMemberShipCheck(data.collective_id, account, () =>
                  handleVote("up")
                );
              }}
              onVoteDown={(e) => {
                e.stopPropagation();
                onMemberShipCheck(data.collective_id, account, () =>
                  handleVote("down")
                );
              }}
              votes_count={votes_count}
              votes={votes}
            />
            <div className="forum" ref={divRef} tabIndex={0}>
              <div
                className="forumCardHeader"
                onClick={() => {
                  divRef.current?.focus();
                  readMoreRef &&
                    readMoreRef.current &&
                    readMoreRef.current.toggleRead();
                }}
              >
                <Flex style={{ gridGap: "10px" }} alignItems="center">
                  <img
                    src={creator[0].avatar ?? sampleImg}
                    className="creatorAvatar"
                    alt={creator[0].name}
                  />
                  <span className="username">{creator[0].name}</span>
                  <span className="userTag">MEMBER</span>
                </Flex>
                <div className="createTime">
                  {getDiffTime(moment(createdat))}
                </div>
              </div>

              <div
                className="forumTitle"
                onClick={() => {
                  divRef.current?.focus();
                  readMoreRef &&
                    readMoreRef.current &&
                    readMoreRef.current.toggleRead();
                }}
              >
                {title}
              </div>
              {description && (
                <ReadMore
                  length={400}
                  ref={readMoreRef}
                  itemClick={() => {
                    divRef.current?.focus();
                  }}
                >
                  {description}
                </ReadMore>
              )}

              {data.type === "IMAGE" && images[0] && (
                <div
                  onClick={() => {
                    divRef.current?.focus();
                    readMoreRef &&
                      readMoreRef.current &&
                      readMoreRef.current.toggleRead();
                  }}
                  className={`forumImg size-${images.length}`}
                >
                  {images &&
                    images.map((item, index) => (
                      <img
                        src={item}
                        alt={title}
                        className={`img${index}`}
                        key={`forum_image_${forum_id}_${index}`}
                      />
                    ))}
                </div>
              )}
              {data.type === "LINK" && (
                <div
                  className="linkPreview"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkPreview
                    url={data.url}
                    fetcher={async (url: string) => {
                      const response = await fetch(
                        `https://theia-rlp-proxy.herokuapp.com?url=${url}`
                      );
                      const json = await response.json();
                      const metadata = {
                        title: "",
                        description: "",
                        image: "",
                        siteName: "",
                        hostname: "",
                      };
                      return {
                        ...metadata,
                        ...json.metadata.og,
                      };
                    }}
                    showLoader={true}
                    fallback={<div>Fallback</div>}
                  />
                </div>
              )}
              {type === "POLL" && (
                <div className="pollView">
                  {pollVotes.filter(
                    (poll_vote) => poll_vote.user_address === account
                  ).length === 0 ? (
                    <>
                      <div className="pollOptionList">
                        {data.poll_options &&
                          data.poll_options.map((item, idx) => (
                            <label
                              className="pollOption"
                              onClick={(e) => e.stopPropagation()}
                              key={`pollOption_${idx}`}
                            >
                              {item.poll_option}
                              <input
                                type="radio"
                                name="dark-mode"
                                value={item.poll_option}
                                id={item.forum_poll_id}
                                checked={
                                  item.forum_poll_id === activePollOption
                                }
                                onChange={() => {
                                  setActivePollOption(item.forum_poll_id);
                                }}
                              />
                              <span className="radioCheckmark"></span>
                            </label>
                          ))}
                      </div>
                      <div className="pollActions">
                        <Button className="pollVoteBtn" onClick={onVotePoll}>
                          Vote
                        </Button>
                        <div>{pollVotes?.length ?? 0} votes</div>
                        <div>{getRemainTime(moment(data.poll_endat))}</div>
                      </div>
                    </>
                  ) : (
                    <div className="pollOptionList">
                      {data.poll_options &&
                        data.poll_options.map((pollOption, idx) => {
                          const totalVotes = pollVotes?.length ?? 0;
                          const singleVotes =
                            pollVotes?.filter(
                              (poll_vote) =>
                                poll_vote.forum_poll_id ===
                                pollOption.forum_poll_id
                            ).length ?? 0;
                          return (
                            <div className="pollBar" key={`pollOption_${idx}`}>
                              <div
                                className="pollOptionTitle"
                                style={{
                                  width: `${Math.floor(
                                    (singleVotes * 100) / totalVotes
                                  )}%`,
                                }}
                              >
                                {pollOption.poll_option}
                              </div>
                              <div className="pollOptionPercent">
                                {Math.floor((singleVotes * 100) / totalVotes)} %
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}

              <div className="forumActions">
                <Flex style={{ gridGap: "20px" }}>
                  <HeartButton
                    active={favorite_count > 0}
                    count={favorites}
                    size="lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMemberShipCheck(data.collective_id, account, () =>
                        handleLike(favorite_count > 0 ? "down" : "up")
                      );
                    }}
                  />
                  <CrownButton
                    active={crown_count > 0}
                    count={crown}
                    size={"lg"}
                    onClick={(e) => {
                      e.stopPropagation();
                      onMemberShipCheck(data.collective_id, account, () =>
                        handleCrown(crown_count > 0 ? "down" : "up")
                      );
                    }}
                  />
                  <CommentButton
                    count={commentscount}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCommentBox();
                    }}
                  />
                </Flex>
                <ShareButton
                  onClick={(e) => {
                    e.stopPropagation();
                    if (typeof window !== "undefined") {
                      var shareLink =
                        window.location.protocol +
                        "//" +
                        window.location.host +
                        `/collective/${cname}/details/${forum_id}/home`;
                      navigator.clipboard.writeText(shareLink.toString());
                      document.execCommand(
                        "copy",
                        false,
                        `${shareLink.toString()}`
                      );
                      toastSuccess("Share link is copied", "");
                    }
                  }}
                />
              </div>
            </div>
          </ForumCardWrapper>
        </Card>
      )}
    </>
  );
};

export default ForumCard;
