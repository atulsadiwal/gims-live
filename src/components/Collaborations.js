/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Star } from 'lucide-react';

const Collaborations = () => {
    return (
        <>
            <section className="max-w-[1500px] mx-auto px-2 py-10">
                <div className="flex justify-center mb-2 space-x-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                </div>
                <div className="w-full text-center mb-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-black font-FONT2">Affiliations, Accreditations & Collaborations</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    <div className="sm:col-span-2 sm:row-span-2">
                        <div className="h-full rounded-lg overflow-hidden bg-BG2 bg-cover bg-center">
                            <div className="py-4 px-2 flex gap-2">
                                <div className='w-28'>
                                    <img
                                        src="/image/logos/quality-assured.png"
                                        alt="Trophy and graduation cap"
                                        className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">Ranked No. 1</h3>
                                    <p className="text-sm font-novaReg">Amongst All Private Universities in India</p>
                                    <p className="text-xs font-novaReg mt-2">By QS Asia University Rankings 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 sm:row-span-2 md:col-start-1 md:row-start-3">
                        <div className="h-full rounded-lg overflow-hidden bg-BG2 bg-cover bg-center">
                            <div className="py-6 px-2 flex gap-2">
                                <div className='p-4'>
                                    <img
                                        src="/image/logos/aicte.png"
                                        alt="QS University Rankings"
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-FONT2">Ranked No. 1</h3>
                                    <p className="text-sm font-novaReg">Amongst All Private Universities in India</p>
                                    <p className="text-xs font-novaReg mt-2">By QS Asia University Rankings 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-3 xl:row-start-1 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='p-4'>
                                    <img
                                        src="/image/logos/analytics.png"
                                        alt="QS World Rankings"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">Ranked Amongst</h3>
                                    <p className="text-sm font-novaReg">India's Top 3 Private Universities</p>
                                    <p className="text-xs font-novaReg mt-2">By QS World University Rankings 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-5 xl:row-start-1 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='w-28'>
                                    <img
                                        src="/image/logos/logo3.png"
                                        alt="NIRF Rankings"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">Ranked #20</h3>
                                    <p className="text-sm font-novaReg">Amongst Top Universities in India</p>
                                    <div className="text-xs font-novaReg mt-2">
                                        <p>Engineering #32</p>
                                        <p>Management #36</p>
                                        <p>Pharmacy #20</p>
                                        <p>Architecture & Planning #13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-1 lg:row-start-3 xl:col-start-7 xl:row-start-1 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='w-32'>
                                    <img
                                        src="/image/logos/logo4.png"
                                        alt="ABET"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">First Private Universities in India</h3>
                                    <p className="text-sm font-novaReg">to have Highest Number of Engineering Programs</p>
                                    <p className="text-xs font-novaReg mt-2">Accredited by ABET</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 lg:col-start-3 lg:row-start-2 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='w-36'>
                                    <img
                                        src="/image/logos/logo5.png"
                                        alt="NBA"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">First Private University in Punjab</h3>
                                    <p className="text-sm font-novaReg">to be accredited by NBA for Engineering and MBA Programs</p>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 lg:col-start-6 lg:row-start-2 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-40 w-40'>
                                    <img
                                        src="/image/logos/logo6.png"
                                        alt="NAAC"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">Bestowed with A+ Accreditation</h3>
                                    <p className="text-sm font-novaReg">by National Assessment and Accreditation Council (NAAC) in the first cycle itself</p>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-3 lg:row-start-3 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-28 w-28'>
                                    <img
                                        src="/image/logos/logo7.png"
                                        alt="Outlook"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">Outlook I-CARE Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-5 lg:row-start-3 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-32 w-32'>
                                    <img
                                        src="/image/logos/logo8.png"
                                        alt="The Week"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">The Week Best University Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-start-1 lg:row-start-4 xl:col-start-7 xl:row-start-3 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-32 w-32'>
                                    <img
                                        src="/image/logos/logo9.png"
                                        alt="The Week"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">The Week Best University Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 lg:col-start-3 lg:row-start-4 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-32 w-32'>
                                    <img
                                        src="/image/logos/xlri.jpg"
                                        alt="The Week"
                                        className="w-full mt-5"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">The Week Best University Rankings 2024</h3>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 lg:col-start-5 lg:row-start-4 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-32 w-32'>
                                    <img
                                        src="/image/logos/logo10.png"
                                        alt="The Week"
                                        className="w-full mt-5"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">The Week Best University Rankings 2024</h3>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 lg:col-start-7 lg:row-start-4 h-full">
                        <div className="rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <div className='h-32 w-32'>
                                    <img
                                        src="/image/logos/atal.jpg"
                                        alt="The Week"
                                        className="w-full mt-5 object:contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-FONT2">The Week Best University Rankings 2024</h3>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Collaborations;