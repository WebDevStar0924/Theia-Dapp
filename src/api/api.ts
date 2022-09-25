import axios from 'axios';
const gapi = window.gapi;
const GAPI_KEY = 'AIzaSyAiK1PWbCUhzSOV-op_oVid0Js48WFSw9M';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const CLIENT_ID = '410546094128-8p5cae7mlh2hcvqhpfd4cui9lkb3oa96.apps.googleusercontent.com';
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export function initClient(callback) {

  gapi.load('client:auth2', () => {
    try {

      gapi.client.init({
        apiKey: GAPI_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(function () {

        if (typeof (callback) === 'function') {
          callback(true)
        }
      }, function (error) {
        console.log(error);
        console.log("error initialize", '');
        console.log(error.msg, '');
      });
    } catch (error) {
      console.log(error);
    }
  });
}
export const checkSignInStatus = async () => {
  try {
    const status = await gapi.auth2.getAuthInstance().isSignedIn.get();
    return status;
  } catch (error) {
    console.log("error check signin status", '');

    console.log(error);
  }
}

export const signInToGoogle = async () => {
  try {
    console.log("now calling sign in to google");
    const googleuser = await gapi.auth2.getAuthInstance().signIn({ prompt: 'consent' });
    if (googleuser) {
      return true;
    }
  } catch (error) {
    console.log("error signin to google", '');
    console.log(error)
  }
}
export const signOutFromGoogle = () => {
  try {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      auth2.disconnect();
    });
    return true;
  } catch (error) {
    console.log("error check signout from google", '');
    console.log(error)
  }
}

export const getSignedInUserEmail = async () => {
  try {
    const status = await checkSignInStatus();
    if (status) {
      const auth2 = gapi.auth2.getAuthInstance();
      const profile = auth2.currentUser.get().getBasicProfile();
      return profile.getEmail()
    } else {
      return null;
    }
  } catch (error) {
    console.log("error get signedin user email", '');
    console.log(error)
  }
}

export const publishTheCalenderEvent = (event) => {
  try {
    gapi.client.load('calendar', 'v3', () => {
      const request = gapi.client['calendar'].events.insert({
        'calendarId': 'primary',
        'resource': event
      });
      request.execute(function (event) {
        console.log('Event created: ' + event.htmlLink);
      });
    })

  } catch (error) {
    console.log("error to create event", '');
    console.log(error)
  }
}

export default class API {
  static getAvailbleTokens(chainId) {
    return axios.get(`${process.env.BRIDGE_SERVER_URL}/v2/serverInfo/${chainId}`)
  }

  static getProjectDetails() {
    return axios.get(`${process.env.REACT_APP_API_URL}/project-details`)
  }

  static getMarketplace1Invest(projectID, interval = '7d') {
    return axios.get(`${process.env.REACT_APP_API_URL}/getInvest`, {
      params: {
        projectID,
        interval,
      },
    })
  }

  static updateMarketplace1Invest(projectID, data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/updateInvest`, {
      projectID,
      data,
    })
  }

  static getRequestUSDC(address) {
    return axios.post(`${process.env.REACT_APP_API_URL}/getRequestUSDC`, {
      address,
    })
  }

  static updateRequestUSDC(address, amount, twitterId, twitterUsername) {
    return axios.post(`${process.env.REACT_APP_API_URL}/updateRequestUSDC`, {
      address,
      amount,
      twitterId,
      twitterUsername,
    })
  }

  static createProject(projectInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/create`, {
      projectInfo,
    })
  }

  static updateProject(projectInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/update`, {
      projectInfo,
    })
  }

  static getProjectByID(projectID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/project/${projectID}`)
  }

  static getProjectList(page, limit, filterStr, category) {
    return axios.get(`${process.env.REACT_APP_API_URL}/project/list`, {
      params: {
        page,
        limit,
        filter: filterStr,
        category,
      },
    })
  }

  static updateTP(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/project/updateTP`, {
      data,
    })
  }

  static getInvestByUser(projectID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/getInvestByAddress`, {
      params: {
        projectID,
        address,
      },
    })
  }

  static getInvestorsForProject(projectID) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/getInvestorsForProject`,
      {
        params: {
          projectID,
        },
      },
    )
  }

  static getActivity(projectID, page, limit) {
    return axios.get(`${process.env.REACT_APP_API_URL}/getActivity`, {
      params: {
        projectID,
        page,
        limit,
      },
    })
  }

  static getUserCollectives(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/collectives`, {
      params: {
        address,
        page,
        pageSize,
      },
    })
  }

  static getUserProjects(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/projects`, {
      params: {
        address,
        page,
        pageSize,
      },
    })
  }

  static getUserFavorites(address, page, pageSize) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile/favorites`, {
      params: {
        address,
        page,
        pageSize,
      },
    })
  }

  static getProfile(address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      params: {
        walletaddress: address,
      },
    })
  }

  static createProfile(userInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/profile/create`, {
      ...userInfo,
    })
  }

  static createCollective(collectiveInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/collective/create`, {
      collectiveInfo,
    })
  }

  static getCollectiveByID(collectiveID) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/collective/${collectiveID}`,
    )
  }

  static getGalleries(collectiveID, address, sort) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/get`, {
      params: {
        collectiveID,
        address,
        sort,
      },
    })
  }

  static addGalleries(collectiveID, nfts, owneraddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/gallery/add`, {
      collectiveID,
      nfts,
      owneraddress,
    })
  }

  static removeGalleries(gallery_ids) {
    return axios.post(`${process.env.REACT_APP_API_URL}/gallery/remove`, {
      gallery_ids,
    })
  }

  static getGalleryByID(galleryID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/getByID`, {
      params: {
        galleryID,
        address,
      },
    })
  }

  static getMembers(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/members/get`, {
      params: {
        collectiveID,
      },
    })
  }

  // TODO make api on server side
  static removeNfts(collectiveID, data) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/collective/${collectiveID}/remove`,
      {
        data,
      },
    )
  }

  static getCollectiveList(limit, page, filter, type) {
    return axios.get(
      `${process.env.REACT_APP_API_URL}/collective/list?limit=${limit}&page=${page}&filter=${filter}&type=${type}`,
    )
  }

  static getCollectiveByName(name, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/collective/by_name`, {
      params: {
        name,
        address,
      },
    })
  }

  static updateCollective(collectiveInfo) {
    return axios.post(`${process.env.REACT_APP_API_URL}/collective/update`, {
      collectiveInfo: collectiveInfo,
    })
  }

  static getComments(postID, type, address, sort) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/comments`, {
      params: {
        postID,
        type,
        address,
        sort,
      },
    })
  }

  static getForums(collectiveID, type, address = '', sortOption) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/list`, {
      params: {
        collectiveID,
        type,
        address,
        sort: sortOption,
      },
    })
  }

  static createForum(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/forum/create`, data)
  }

  static getForumById(forum_id, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/getById`, {
      params: {
        forum_id,
        address,
      },
    })
  }

  static updateVote(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/votes/update`, {
      postID,
      type,
      action,
      ownerAddress,
    })
  }

  static updateFavorite(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/favorites/update`, {
      postID,
      type,
      action,
      ownerAddress,
    })
  }

  static updateCrown(postID, type, action, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/crown/update`, {
      postID,
      type,
      action,
      ownerAddress,
    })
  }

  static replyComment(postID, parentID, type, text, ownerAddress) {
    return axios.post(`${process.env.REACT_APP_API_URL}/comments/reply`, {
      postID,
      parentID,
      type,
      text,
      ownerAddress,
    })
  }

  static uploadFiles(formData) {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
  }

  static checkMember(collectiveID, address) {
    return axios.get(`${process.env.REACT_APP_API_URL}/members/check`, {
      params: {
        collectiveID,
        address,
      },
    })
  }

  static getForumLast36(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forum/last36`, {
      params: {
        collectiveID,
      },
    })
  }

  static getGalleryLast36(collectiveID) {
    return axios.get(`${process.env.REACT_APP_API_URL}/gallery/last36`, {
      params: {
        collectiveID,
      },
    })
  }

  static voteForumPoll(forum_poll_id, address, forum_id) {
    return axios.post(`${process.env.REACT_APP_API_URL}/forum/poll/vote`, {
      forum_poll_id,
      address,
      forum_id,
    })
  }

  static getPopularCollectives() {
    return axios.get(`${process.env.REACT_APP_API_URL}/collective/popular`)
  }

  static createEvent(
    title,
    location,
    location_type,
    event_date,
    starttime,
    endtime,
    description,
    details,
    collective_id,
    owneraddress,
    timezone
  ) {
    return axios.post(`${process.env.REACT_APP_API_URL}/events/create`, {
      title,
      location,
      location_type,
      event_date,
      starttime,
      endtime,
      description,
      details,
      collective_id,
      owneraddress,
      timezone
    })
  }

  static getEventList(collective_id) {
    return axios.post(`${process.env.REACT_APP_API_URL}/events/list`, {
      collective_id,
    })
  }
  static getEventById(event_id) {
    return axios.post(`${process.env.REACT_APP_API_URL}/events/getById`, {
      event_id,
    })
  }
}
