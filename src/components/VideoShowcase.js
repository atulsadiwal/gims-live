import { useState } from 'react'

export default function VideoShowcase() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="max-w-5xl mx-auto py-16 max-lg:py-12 max-md:py-10 max-sm:py-8 max-sm:px-4">
            <div className="relative rounded-lg max-sm:mb-8 max-md:mb-12 mb-16">
                <div className="cursor-pointer" onClick={openModal}>
                    <img
                        src="https://img.youtube.com/vi/mPnsuSYSkPc/maxresdefault.jpg"
                        alt="Video Thumbnail"
                        loading="eager"
                        className="w-full aspect-video object-cover rounded-3xl max-sm:rounded-xl max-md:rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 max-sm:rounded-xl max-md:rounded-2xl rounded-3xl">
                        <img src="./image/play.gif" alt="play" loading="eager" className='rounded-full max-sm:w-10 max-md:w-12 w-14' />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-FONT2 mb-12 max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:mb-4 max-md:mb-7 max-lg:mb-9">
                    GAIN GLOBAL EXPOSURE THROUGH EXTENSIVE INTERNATIONAL NETWORK
                </h2>
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-4 max-sm:gap-3 ">
                    <div className="space-y-2">
                        <div className="text-red-600 text-5xl font-FONT2 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">25+</div>
                        <div className="text-lg font-FONT1 max-md:text-base max-sm:text-sm">Collaborations</div> 
                        <div className="text-sm font-novaReg max-sm:text-xs">
                            with Top Ranked Foreign Universities in 15+ countries
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-red-600 text-5xl font-FONT2 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">500+</div>
                        <div className="text-lg font-FONT1 max-md:text-base max-sm:text-sm">Students</div>
                        <div className="text-sm font-novaReg max-sm:text-xs">
                            Traveled Abroad for Semester, Summer & Cultural Exchange Programs
                        </div>
                    </div>
                    <div className="space-y-2 sm:col-span-2 md:col-span-1">
                        <div className="text-red-600 text-5xl font-FONT2 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">370+</div>
                        <div className="text-lg font-FONT1 max-md:text-base max-sm:text-sm">Internships</div>
                        <div className="text-sm font-novaReg max-sm:text-xs">
                            in Walt Disney, USA (Highest in the Region)
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg max-w-5xl w-full aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-white bg-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/mPnsuSYSkPc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}
