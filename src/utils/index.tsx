import { BsDiscord, BsGlobe, BsLinkedin, BsTwitter } from "react-icons/all";
import React from "react";
import moment from "moment";

export const formatNumber = (number: number | undefined, maxPrecision = 2) => {
  if (!number) {
    return "0";
  }
  return number.toFixed(maxPrecision);
};

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export function formatBlockchainAddress(address, precision = 4, precisionEnd) {
  if (!address) {
    return "";
  }

  return `${address.slice(0, precision + 2)}...${address.slice(
    precisionEnd ? -precisionEnd : -precision
  )}`;
}

export function parseDays(seconds) {
  const hours = Math.floor(seconds / 60 / 60);
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    return `${days} Days`;
  }
  return `${hours} Hours`;
}

export function getLinkIcon(type) {
  switch (type) {
    case "Twitter":
      return <BsTwitter />;
    case "Website":
      return <BsGlobe />;
    case "Linkedin":
      return <BsLinkedin />;
    case "Discord":
      return <BsDiscord />;
  }
}

export function getRemainTime(time) {
  const now = moment();
  const seconds = moment.duration(time.diff(now)).asSeconds();
  if (seconds < 60) {
    return "Just Now";
  } else if (seconds < 60 * 60) {
    const value = Math.floor(seconds / 60);
    return value + (value === 1 ? " min left" : " mins left");
  } else if (seconds < 60 * 60 * 24) {
    const value = Math.floor(seconds / 60 / 60);
    return value + (value === 1 ? " hour left" : " hours left");
  } else if (seconds < 60 * 60 * 24 * 7) {
    const value = Math.floor(seconds / 60 / 60 / 24);
    return value + (value === 1 ? " day left" : " days left");
  } else if (seconds < 60 * 60 * 24 * 30) {
    const value = Math.floor(seconds / 60 / 60 / 24 / 7);
    return value + (value === 1 ? " week ago" : " weeks left");
  } else {
    const value = Math.floor(seconds / 60 / 60 / 24 / 30);
    return value + (value === 1 ? " month left" : " months left");
  }
}

export function getDiffTime(time) {
  const now = moment();
  const seconds = moment.duration(now.diff(time)).asSeconds();
  if (seconds < 60) {
    return "Just Now";
  } else if (seconds < 60 * 60) {
    const value = Math.floor(seconds / 60);
    return value + (value === 1 ? " min ago" : " mins ago");
  } else if (seconds < 60 * 60 * 24) {
    const value = Math.floor(seconds / 60 / 60);
    return value + (value === 1 ? " hour ago" : " hours ago");
  } else if (seconds < 60 * 60 * 24 * 7) {
    const value = Math.floor(seconds / 60 / 60 / 24);
    return value + (value === 1 ? " day ago" : " days ago");
  } else if (seconds < 60 * 60 * 24 * 30) {
    const value = Math.floor(seconds / 60 / 60 / 24 / 7);
    return value + (value === 1 ? " week ago" : " weeks ago");
  } else {
    const value = Math.floor(seconds / 60 / 60 / 24 / 30);
    return value + (value === 1 ? " month ago" : " months ago");
  }
}

export function checkVideoUrl(url) {
  return url.match(/\.(mp4|avi)$/) != null;
}

export function getImageLinkFromMetadata(nftInfo) {
  let imageLink: string | null = null;
  let mediaImage: string | null = null;
  let animationUrl: string | null = null;
  if (nftInfo) {
    if (nftInfo.media[0]) {
      if (nftInfo.media[0].thumbnail) {
        mediaImage = nftInfo.media[0].thumbnail;
      } else if (nftInfo.media[0].gateway) {
        mediaImage = nftInfo.media[0].gateway;
      } else if (nftInfo.media[0].raw) {
        mediaImage = nftInfo.media[0].raw;
      }
    }

    if (nftInfo.metadata.image) {
      imageLink = nftInfo.metadata.image;
    }

    animationUrl = nftInfo.metadata.animation_url;
  }

  if (imageLink && imageLink.startsWith("ipfs://")) {
    imageLink = imageLink.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return {
    animationUrl: animationUrl,
    metadataImage: imageLink,
    mediaImage: mediaImage,
  };
}
