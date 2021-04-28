import React from 'react';
import { videoData } from '@data/video';
import VideoCard from '@components/VideoCard';
import Breadcumb from '@components/Breadcumb';

export const getStaticProps = async () => {
    return {
        props: {
            videoData
        }
    };
};

const Video = ({ videoData }) => {
    return (
        <section className="pt-10 ">
            <div>
                <Breadcumb list={[{ href: null, name: 'Videos' }]} />
            </div>
            <h2 class="text-3xl md:text-4xl xl:text-5xl tracking-tight mt-4 font-bold leading-tight  dark:text-white text-gray-1200">
                Videos
            </h2>
            <div class="flex flex-col md:-mx-6 pt-2  ">
                {videoData.map((el) => (
                    <VideoCard key={el.id} dt={el} />
                ))}
            </div>
        </section>
    );
};

export default Video;