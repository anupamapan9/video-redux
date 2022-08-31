import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
    videos: [],
    loading: false,
    isError: false,
    error: ''
}
// thunk --------------
export const fetchRelatedVideos = createAsyncThunk('video/fetchRelatedVideos', async (tags, id) => {
    const relatedVideos = await getRelatedVideos(tags, id)
    return relatedVideos;
})

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.isError = false;
            state.loading = true;
        }).addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        }).addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.loading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})



export default relatedVideosSlice.reducer;