import { YOUTUBE_SEARCH, VIEW_CURRENT_VIDEO } from '../actions/actionTypes';


const INITIAL_STATE = { currentVideo: {}, videos: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (YOUTUBE_SEARCH):
      return {...state, videos: action.payload.videos};
    case (VIEW_CURRENT_VIDEO):
      console.log(action.payload.currentVideo);
      return {...state, currentVideo: action.payload.currentVideo}
    default:
      return state;
  }
}
