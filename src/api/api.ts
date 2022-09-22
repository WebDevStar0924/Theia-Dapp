import axios from "axios";

const BRIDGE_SERVER_URL = "https://bridgeapi.anyswap.exchange";

export default class API {
  static getAvailbleTokens(chainId) {
    return axios.get(`${BRIDGE_SERVER_URL}/v2/serverInfo/${chainId}`);
  }

  static getProjectDetails() {
    return axios.get(`${process.env.REACT_APP_API_URL}/project-details`);
  }

  static getMarketplace1Invest(projectID, interval = "7d") {
    return axios.get(`${process.env.REACT_APP_API_URL}/getInvest`, {
      params: {
        projectID,
        interval,
      },
    });
  }

  static updateMarketplace1Invest(projectID, data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/updateInvest`, {
      projectID,
      data,
    });
  }

  static getRequestUSDC(address) {
    return axios.post(`${process.env.REACT_APP_API_URL}/getRequestUSDC`, {
      address,
    });
  }

  static updateRequestUSDC(address, amount, twitterId, twitterUsername) {
    return axios.post(`${process.env.REACT_APP_API_URL}/updateRequestUSDC`, {
      address,
      amount,
      twitterId,
      twitterUsername,
    });
  }

  static createProject(projectInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/create`, {
      projectInfo,
    });
  }

  static updateProject(projectInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/update`, {
      projectInfo,
    });
  }

  static getProjectByID(projectID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/project/${projectID}`);
  }

  static getProjectList(page, limit, filterStr, category) {
    return axios.get(`${process.env.REACT_APP_API_URL}/project/list`, {
      params: {
        page,
        limit,
        filter: filterStr,
        category,
      },
    });
  }

  static updateTP(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/updateTP`, {
      data,
    });
  }

  static getInvestByUser(projectID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/getInvestByAddress`, {
      params: {
        projectID,
        address,
      },
    });
  }

  static getInvestorsForProject(projectID) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/getInvestorsForProject`,
      {
        params: {
          projectID,
        },
      }
    );
  }

  static getActivity(projectID, page, limit) {
    return axios.get(`${process.env.REACT_APP_API_URL}/getActivity`, {
      params: {
        projectID,
        page,
        limit,
      },
    });
  }

  static getUserCollectives(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/collectives`, {
      params: {
        address,
        page,
        pageSize,
      },
    });
  }

  static getUserProjects(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/projects`, {
      params: {
        address,
        page,
        pageSize,
      },
    });
  }

  static getUserFavorites(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/favorites`, {
      params: {
        address,
        page,
        pageSize,
      },
    });
  }

  static getProfile(address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      params: {
        walletaddress: address,
      },
    });
  }

  static createProfile(userInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/profile/create`, {
      ...userInfo,
    });
  }

  static createCollective(collectiveInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/collective/create`, {
      collectiveInfo,
    });
  }

  static getCollectiveByID(collectiveID) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/collective/${collectiveID}`
    );
  }

  static getGalleries(collectiveID, address, sort) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/get`, {
      params: {
        collectiveID,
        address,
        sort,
      },
    });
  }

  static addGalleries(collectiveID, nfts, owneraddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/gallery/add`, {
      collectiveID,
      nfts,
      owneraddress,
    });
  }

  static removeGalleries(gallery_ids) {
    return axios.post(`${process.env.REACT_APP_API_URL}/gallery/remove`, {
      gallery_ids,
    });
  }

  static getGalleryByID(galleryID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/getByID`, {
      params: {
        galleryID,
        address,
      },
    });
  }

  static getMembers(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/members/get`, {
      params: {
        collectiveID,
      },
    });
  }

  // TODO make api on server side
  static removeNfts(collectiveID, data) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/collective/${collectiveID}/remove`,
      {
        data,
      }
    );
  }

  static getCollectiveList(limit, page, filter, type) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/collective/list?limit=${limit}&page=${page}&filter=${filter}&type=${type}`
    );
  }

  static getCollectiveByName(name, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/collective/by_name`, {
      params: {
        name,
        address,
      },
    });
  }

  static updateCollective(collectiveInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/collective/update`, {
      collectiveInfo: collectiveInfo,
    });
  }

  static getComments(postID, type, address, sort) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/comments`, {
      params: {
        postID,
        type,
        address,
        sort,
      },
    });
  }

  static getForums(collectiveID, type, address = "", sortOption) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/list`, {
      params: {
        collectiveID,
        type,
        address,
        sort: sortOption,
      },
    });
  }

  static createForum(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/forum/create`, data);
  }

  static getForumById(forum_id, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/getById`, {
      params: {
        forum_id,
        address,
      },
    });
  }

  static updateVote(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/votes/update`, {
      postID,
      type,
      action,
      ownerAddress,
    });
  }

  static updateFavorite(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/favorites/update`, {
      postID,
      type,
      action,
      ownerAddress,
    });
  }

  static updateCrown(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/crown/update`, {
      postID,
      type,
      action,
      ownerAddress,
    });
  }

  static replyComment(postID, parentID, type, text, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/comments/reply`, {
      postID,
      parentID,
      type,
      text,
      ownerAddress,
    });
  }

  static uploadFiles(formData) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  static checkMember(collectiveID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/members/check`, {
      params: {
        collectiveID,
        address,
      },
    });
  }

  static getForumLast36(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/last36`, {
      params: {
        collectiveID,
      },
    });
  }

  static getGalleryLast36(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/last36`, {
      params: {
        collectiveID,
      },
    });
  }

  static voteForumPoll(forum_poll_id, address, forum_id) {
    return axios.post(`${process.env.REACT_APP_API_URL}/forum/poll/vote`, {
      forum_poll_id,
      address,
      forum_id,
    });
  }

  static getPopularCollectives() {
    return axios.get(`${process.env.REACT_APP_API_URL}/collective/popular`);
  }
}
