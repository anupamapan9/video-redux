import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

const initialState = {
    video: {},
    loading: false,
    isError: false,
    error: ''
}
// thunk --------------
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id)
    return video;
})

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
            state.isError = false;
            state.loading = true;
        }).addCase(fetchVideo.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload;
        }).addCase(fetchVideo.rejected, (state, action) => {
            state.loading = false;
            state.video = {};
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})



export default videoSlice.reducer;