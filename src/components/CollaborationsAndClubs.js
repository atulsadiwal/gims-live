import React from 'react';

const collaborations = [
    { name: "Academic Institution 1", logo: "/apply-now/image/logos/logo1.webp" },
    { name: "AICTE", logo: "/apply-now/image/logos/logo2.webp" },
    { name: "MSME", logo: "/apply-now/image/logos/logo3.webp" },
    { name: "HLACT", logo: "/apply-now/image/logos/logo4.webp" },
    { name: "IBA", logo: "/apply-now/image/logos/logo5.webp" },
    { name: "IIMB", logo: "/apply-now/image/logos/logo6.webp" },
    { name: "NHRD", logo: "/apply-now/image/logos/logo7.webp" },
    { name: "DCAL", logo: "/apply-now/image/logos/logo8.webp" },
    { name: "AIMS", logo: "/apply-now/image/logos/logo9.webp" },
    { name: "Coursera", logo: "/apply-now/image/logos/logo10.webp" },
    { name: "ATAL", logo: "/apply-now/image/logos/logo11.webp" },
    { name: "Analytics SI", logo: "/apply-now/image/logos/logo12.webp" },
    { name: "XLRI", logo: "https://www.gims.net.in/admission/img/recrue/shield-logo.svg" },
];

const clubs = [
    { name: "AIT", logo: "/apply-now/image/logos/logo13.webp" },
    { name: "LSUS", logo: "/apply-now/image/logos/logo14.webp" },
    { name: "BFSI", logo: "/apply-now/image/logos/logo15.webp" },
    { name: "Kathmandu", logo: "/apply-now/image/logos/logo16.webp" },
    { name: "University of Dubai ", logo: "/apply-now/image/logos/logo17.webp" },
    { name: "MAHSA", logo: "/apply-now/image/logos/logo18.webp" },
    { name: "DE MONTFORT", logo: "/apply-now/image/logos/logo19.webp" },
    { name: "POLITEKNIK", logo: "/apply-now/image/logos/logo20.webp" },
    { name: "Financial Uni", logo: "/apply-now/image/logos/logo24.webp" },
    { name: "Uniglobe College", logo: "/apply-now/image/logos/logo22.webp" },
];

const CollaborationsAndClubs = () => {
    return (
        <>
            <section style={{
                backgroundImage: 'url(/img/pattern.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundSize: 'contain',
            }}>
                <div
                    className="max-w-7xl mx-auto px-4 py-12">

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-2 my-3">
                                <svg
                                    className="w-6 h-6 text-primary mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <h2 className="text-2xl font-bold">Collaborations & MoUs</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {collaborations.map((collab, index) => (
                                    <div
                                        key={index}
                                        className="p-1 flex items-center justify-center hover:shadow-md transition-shadow rounded-lg border border-gray-200"
                                    >
                                        <img
                                            src={collab.logo}
                                            alt={collab.name}
                                            className="w-[119px] h-[55px] object-contain"
                                            loading="eager"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 my-3">
                                <svg
                                    className="w-6 h-6 text-primary mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <h2 className="text-2xl font-bold">Institutional Clubs</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {clubs.map((club, index) => (
                                    <div
                                        key={index}
                                        className="p-1 flex items-center justify-center hover:shadow-md transition-shadow rounded-lg border border-gray-200"
                                    >
                                        <img
                                            src={club.logo}
                                            alt={club.name}
                                            loading="eager"
                                            className="w-[119px] h-[55px] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollaborationsAndClubs;
