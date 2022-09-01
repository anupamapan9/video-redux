import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
    videos: [],
    loading: false,
    isError: false,
    error: ''
}
// thunk --------------
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tags, search }) => {
    const videos = await getVideos(tags, search)
    return videos
})

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state) => {
            state.isError = false;
            state.loading = true;
        }).addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        }).addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})



export default videosSlice.reducer;