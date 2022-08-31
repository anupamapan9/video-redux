import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import RelatedVideoListItem from './RelatedVideoListItem';

const RelatedVideos = ({ id, tags }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id }))
    }, [dispatch, tags, id])
    const { videos, loading, isError, error } = useSelector(state => state.relatedVideos);
    console.log(videos)
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {/* <!-- single related video --> */}
            {videos?.map(relatedVideo => <RelatedVideoListItem relatedVideo={relatedVideo} key={relatedVideo.id} />)}

        </div>
    );
};

export default RelatedVideos;