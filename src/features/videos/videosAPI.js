import axios from '../../utils/axios'

export const getVideos = async () => {
    const response = await axios.get('/videos2');
    return response.data.videos
}