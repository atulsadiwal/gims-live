import { useState } from 'react'

export default function VideoShowcase() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="relative rounded-lg mb-16">
                <div className="cursor-pointer" onClick={openModal}>
                    <img
                        src="/image/maxresdefault.webp"
                        alt="Video Thumbnail"
                        className="w-full aspect-[2/1] object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-3xl">
                        <img src="/image/play.gif" alt="play" className='rounded-full w-14' />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-FONT2 mb-12">
                    GAIN GLOBAL EXPOSURE THROUGH EXTENSIVE INTERNATIONAL NETWORK
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <div className="text-red-600 text-5xl font-FONT2">500+</div>
                        <div className="text-lg font-FONT1">Collaborations</div> 
                        <div className="text-sm font-novaReg ">
                            with Top Ranked Foreign Universities in 95+ countries
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-red-600 text-5xl font-FONT2">1700+</div>
                        <div className="text-lg font-FONT1">Students</div>
                        <div className="text-sm font-novaReg">
                            Traveled Abroad for Semester, Summer & Cultural Exchange Programs
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-red-600 text-5xl font-FONT2">370+</div>
                        <div className="text-lg font-FONT1">Internships</div>
                        <div className="text-sm font-novaReg">
                            in Walt Disney, USA (Highest in the Region)
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center "
                    onClick={closeModal}
                >
                    <div
                        className="relative p-4 rounded-lg max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-5 -right-5 text-black bg-white rounded-full w-10 h-10 flex justify-center items-center"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <div>
                            <iframe
                                width="990"
                                height="600"
                                src="https://www.youtube.com/embed/R3spn6b0GQk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

