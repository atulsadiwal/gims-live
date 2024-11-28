import React, { useState } from 'react';

const videos = [
    { id: 'mPnsuSYSkPc' },
    { id: 'R3spn6b0GQk' },
    { id: '3ciUNVaJHSc' },
    { id: 'kMMWujcG8rA' },
    { id: 'k0ZTyDDKAE8' },
];

const VideoClips = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <>
            <section className='max-w-[1400px] mx-auto px-2 py-8'>
                <div className='text-center'>
                    <h3 className='text-4xl font-FONT2'>Video Clips</h3>
                </div>
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 py-4 ">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="w-full md:w-1/4 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setActiveVideo(index)}
                        >
                            {activeVideo === index ? (
                                <iframe
                                    className="w-full h-64 md:h-80"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt="Video thumbnail"
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default VideoClips;
