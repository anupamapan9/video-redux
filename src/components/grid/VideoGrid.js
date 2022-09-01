import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videoSlice';
import Loading from '../ui/Loading';
import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, loading, isError, error } = useSelector(state => state.videos)
    const { tags, search } = useSelector(state => state.filter)
    useEffect(() => {
        dispatch(fetchVideos({ tags, search }))
    }, [dispatch, tags, search])
    let content;
    if (loading) {
        content = <Loading />
    }
    if (!loading && isError) {
        content = <div className="col-span-12">{error}</div>
    }
    if (!loading && !isError && videos?.length === 0) {
        content = <div className="col-span-12">No videos Found</div>
    }
    if (!loading && !isError && videos?.length > 0) {
        content = videos.map(video => < VideoGridItem video={video} key={video.id} />)
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {/* <!-- single video -->
               */}
                    {content}

                    {/* */}
                </div>
            </section>
        </section>
    );
};

export default VideoGrid;