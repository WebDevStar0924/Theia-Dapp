import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsGlobe } from "react-icons/bs";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useDispatch } from "react-redux";
import API from "../../api/api";
import defaultSupporterBanner from "../../assets/image/defaultSupporterBanner.png";
import { AddImage } from "../../components/Svg";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { useToast } from "../../hooks/useToast";
import { UserInfo } from "../../pages/SupporterProfile/types";
import { updateProfileData } from "../../state/profile";
import ExternalInput from "../ExternalInput";
import { MotionButton } from "../MotionButton/styles";
import { CopyIcon } from "../Svg";
import { TextView } from "../TextView";
import { ProfileSettingsWrapper, SocialItem } from "./styles";

interface iProps {
  profileData: UserInfo;
}

export default function ProfileSettings(props: iProps) {
  //change response type to token

  const { profileData } = props;
  const [userData, setUserData] = useState<UserInfo>(profileData);
  const { account } = useActiveWeb3React();
  const { toastSuccess, toastWarning } = useToast();
  const bannerRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLInputElement>(null);
  const [website, setWebsite] = useState(userData.website);
  const dispatch = useDispatch();
  const [avatarImg, setAvatarImg] = useState(profileData.avatar);
  const [bannerImg, setBannerImg] = useState(profileData.banner);
  const [avatarFile, setAvatarFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const handleSave = async () => {
    let avatar = userData.avatar;
    let banner = userData.banner;
    if (avatarFile) {
      const formData = new FormData();
      formData.append("files", avatarFile);

      const avatarRes = await API.uploadFiles(formData);
      avatar = avatarRes.data.urls[0];
    }
    if (bannerFile) {
      const formData = new FormData();
      formData.append("files", bannerFile);
      const bannerRes = await API.uploadFiles(formData);
      banner = bannerRes.data.urls[0];
    }
    API.createProfile({
      ...profileData,
      ...userData,
      walletaddress: account,
      banner,
      avatar,
    }).then((res) => {
      toastSuccess("Success", "Profile is created!");
      dispatch(
        updateProfileData({
          ...profileData,
          ...userData,
          address: account,
        })
      );
    });
  };

  const avatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 1024 * 1024) {
        toastWarning("Max image size is 1MB!", "");
        setAvatarFile(null);
      } else {
        setAvatarImg(URL.createObjectURL(file));
        setAvatarFile(file);
      }
    }
  };
  const bannerChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 1024 * 1024) {
        toastWarning("Max image size is 1MB!", "");
        setBannerFile(null);
      } else {
        setBannerImg(URL.createObjectURL(file));
        setBannerFile(file);
      }
    }
  };

  return (
    //ask about the header buttons and what they need to do
    //also need to ask about what the pull down menu should do (assuming it stores link value somewhere)

    <ProfileSettingsWrapper>
      <div className={"settingsHeader"} />
      <div className={"profileHeader"}>
        <div className={"bannerTitle"}>
          EDIT BANNER PHOTO
          <div className={"Recommend"}>
            Banner recommended size 1600 x 480 px
          </div>
          <div>
            <input
              ref={bannerRef}
              className="form-control"
              type="file"
              style={{ display: "none" }}
              accept="image/png, image/jpeg"
              required
              name="banner"
              onChange={bannerChange}
            />
            <div>
              <img
                src={
                  bannerImg && bannerImg !== ""
                    ? bannerImg
                    : defaultSupporterBanner
                }
                alt="Banner"
                className={"bannerImage"}
                onClick={() => {
                  bannerRef.current && bannerRef.current.click();
                }}
              />
              <AddImage
                className={"addBanner"}
                onClick={() => {
                  bannerRef.current && bannerRef.current.click();
                }}
              />
            </div>
          </div>
        </div>

        <div className={"avatarTitle"}>
          EDIT PROFILE PHOTO
          <div className={"Recommend"}>Recommended size 320 x 320 px</div>
          <input
            ref={iconRef}
            className="form-control"
            type="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            required
            name="icon"
            onChange={avatarChange}
          />
          <div>
            {avatarImg ? (
              <img
                src={avatarImg}
                alt="Icon"
                className={"iconImage"}
                onClick={() => iconRef.current && iconRef.current.click()}
              />
            ) : (
              <Jazzicon diameter={80} seed={jsNumberForAddress(account!)} />
            )}

            <AddImage
              className={"addAvatar"}
              onClick={() => iconRef.current && iconRef.current.click()}
            />
          </div>
        </div>
      </div>

      <div className={"nameEntry"}>
        <ExternalInput
          label={"Name"}
          type="active"
          inputSize="sm"
          value={userData.name}
          placeholder={"Name"}
          onUserInput={(val) => {
            setUserData({
              ...userData,
              name: val,
            });
          }}
        />
      </div>

      <div className={"userEntry"}>
        <ExternalInput
          label={"Username"}
          value={userData.username}
          type="active"
          inputSize="sm"
          placeholder={"Username"}
          onUserInput={(val) => {
            setUserData({
              ...userData,
              username: val,
            });
          }}
        />
      </div>
      <div className={"walletEntry"}>
        <ExternalInput
          label={"Wallet address"}
          value={account ?? ""}
          placeholder={"Wallet address"}
          type={"disabled"}
          endIcon={
            <CopyToClipboard text={account}>
              <CopyIcon
                fill={"#475467"}
                onClick={() => {
                  toastSuccess("Copied", "Wallet Address has been copied");
                }}
              />
            </CopyToClipboard>
          }
        />
      </div>

      <div className={"locationEntry"}>
        <ExternalInput
          label={"Location"}
          value={userData.location}
          type="active"
          inputSize="sm"
          placeholder={"Location"}
          onUserInput={(val) => {
            setUserData({
              ...userData,
              location: val,
            });
          }}
        />
      </div>
      <div className={"descriptionEntry"}>
        <TextView
          label={"Bio"}
          value={userData.shortDescription}
          rows={4}
          placeholder={"Enter a bio..."}
          onUserInput={(val) => {
            setUserData({
              ...userData,
              shortDescription: val,
            });
          }}
        />
        <div className={"bioMax"}>Max 160 characters</div>
      </div>

      <div className={"socialItems"}>
        <div className={"addLinks"}>Social</div>

        {/* <SocialItem>
          {!userData.twitter ? (
            <LoginSocialTwitter
              client_id={process.env.REACT_APP_TWITTER_API_KEY || ""}
              redirect_uri={`${process.env.PUBLIC_URL}/profile/supporter/settings`}
              onResolve={({ provider, data }: IResolveParams) => {
                setUserData({
                  ...userData,
                  twitter: data,
                });
                toastSuccess("Twitter Authentication Success", "");
              }}
              onReject={(err: any) => {
                console.log(err);
              }}
            >
              <MotionButton
                bgColor={"#F5F8FF"}
                fontSize={"14px"}
                color={"#444CE7"}
                fontWeight="600"
                borderRadius="200px"
              >
                <TwitterIcon
                  fill={"#2D3282"}
                  width={"24px"}
                  marginRight={"14px"}
                />
                CONNECT TWITTER
              </MotionButton>
            </LoginSocialTwitter>
          ) : (
            <>
              <div className={"socialInfo"}>
                <div className={"icon"}>
                  <TwitterIcon fill={"#101828"} width={"24px"} />
                </div>
                <div>{userData.twitter.screen_name}</div>
              </div>
              <MotionButton
                onClick={() => {
                  setUserData({
                    ...profileData,
                    twitter: null,
                  });
                }}
                color={"#DC6803"}
                bgColor={"#FFFAEB"}
                fontWeight={"600"}
                borderRadius={"200px"}
              >
                DISCONNECT
              </MotionButton>
            </>
          )}
        </SocialItem>
        <SocialItem>
          {!userData.discord ? (
            <LoginDiscord
              client_id={process.env.REACT_APP_DISCORD_CLIENT_ID!}
              client_secret={process.env.REACT_APP_DISCORD_CLIENT_SECRET!}
              redirect_uri={process.env.REACT_APP_DISCORD_BASE_URI!}
              onResolve={(user) => {
                console.log("user = ", user);
                setUserData({
                  ...userData,
                  discord: user,
                });
                toastSuccess("Discord Authentication Success", "");
              }}
              onReject={() => {}}
            >
              <MotionButton
                bgColor={"#F5F8FF"}
                fontSize={"14px"}
                color={"#444CE7"}
                fontWeight="600"
                borderRadius="200px"
              >
                <TwitterIcon
                  fill={"#2D3282"}
                  width={"24px"}
                  marginRight={"14px"}
                />
                CONNECT DISCORD
              </MotionButton>
            </LoginDiscord>
          ) : (
            <>
              <div className={"socialInfo"}>
                <div className={"icon"}>
                  <DiscordIcon fill={"#101828"} width={"20px"} />
                </div>
                <div>{userData.discord.username}</div>
              </div>
              <MotionButton
                onClick={() => {
                  setUserData({
                    ...userData,
                    discord: null,
                  });
                  toastSuccess("Link Removed", "Discord Link Removed");
                }}
                color={"#DC6803"}
                bgColor={"#FFFAEB"}
                fontWeight={"600"}
                borderRadius={"200px"}
              >
                DISCONNECT
              </MotionButton>
            </>
          )}
        </SocialItem> */}
        <SocialItem>
          <div className={"socialInfo"}>
            <div className={"icon"}>
              <BsGlobe fill={"#101828"} width={"24px"} />
            </div>
            <textarea
              className={"urlEntry"}
              rows={1}
              placeholder={"URL"}
              value={website ?? ""}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          {!userData.website ? (
            <MotionButton
              bgColor={"#F5F8FF"}
              color={"#444CE7"}
              fontWeight={"600"}
              disabled={!website}
              onClick={() =>
                setUserData({
                  ...userData,
                  website: website?.startsWith("https://")
                    ? website
                    : `https://${website}`,
                })
              }
            >
              ADD WEBSITE
            </MotionButton>
          ) : (
            <MotionButton
              onClick={() => {
                setUserData({
                  ...userData,
                  website: null,
                });
                setWebsite(null);
                toastSuccess("Link Removed", "Website Link Removed");
              }}
              color={"#DC6803"}
              bgColor={"#FFFAEB"}
              fontWeight={"600"}
              borderRadius={"200px"}
            >
              DISCONNECT
            </MotionButton>
          )}
        </SocialItem>
      </div>

      <div className={"ExitWrapper"}>
        <MotionButton
          bgColor={"#FFFFFF"}
          color={"#101828"}
          className={"Cancel"}
        >
          CANCEL
        </MotionButton>
        <MotionButton
          bgColor={"#3538CD"}
          color={"#FFF"}
          className={"Save"}
          onClick={handleSave}
        >
          SAVE
        </MotionButton>
      </div>
    </ProfileSettingsWrapper>
  );
}
