import axios from '../../utils/axios'

export const getTags = async () => {
    const response = await axios.get('/videos2');
    return response.data.tags;
}