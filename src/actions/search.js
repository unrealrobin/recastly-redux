import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  // passing in thunks dispatch method to be able to use
  //weutilize thunk here to be able to use a function in an action
    //the action rnus the search and dispatches 2 other actions.
      //those other actions make calls to their respective reducers
  return (dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q},
        (videos) => {
          //calling 2 other actions with the response (success callback)
          dispatch(changeVideoList(videos));
          dispatch(changeVideo(videos[0]));
        }
      )
  }

};

export default handleVideoSearch;

//dispatch is a middleware that connects an event to an action
//do not directly mutate or modify state, reducers do that.