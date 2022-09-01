import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videoSlice';
import videoReducer from '../features/Video/videoSlice';
import tagsReducer from '../features/tags/tagsSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import FilterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter: FilterReducer
  },
});
