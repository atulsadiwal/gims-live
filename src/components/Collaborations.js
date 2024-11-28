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
                <div className="w-full text-center mb-4">
                    <h3 className="text-5xl text-black font-semibold">Affiliations, Accreditations & Collaborations</h3>
                </div>

                <div className="grid grid-cols-8 grid-rows-4 gap-4">
                    <div className="col-span-2 row-span-2">
                        <div className="h-[50vh] shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden bg-BG2 bg-no-repeat bg-cover bg-bottom">
                            <div className="py-6 px-2 flex gap-2">
                                <img
                                    src="/image/logos/quality-assured.png"
                                    alt="Trophy and graduation cap"
                                    width={200}
                                    height={60}
                                    className="h-28"
                                />
                                <div>
                                    <h3 className="font-bold">Ranked No. 1</h3>
                                    <p className="text-sm text-muted-foreground">Amongst All Private Universities in India</p>
                                    <p className="text-xs text-muted-foreground mt-2">By QS Asia University Rankings 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 col-start-1 row-start-3">
                        <div className="h-[50vh] shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden bg-BG2 bg-no-repeat bg-cover bg-bottom">
                            <div className="py-6 px-2 flex gap-2">
                                <img
                                    src="/image/logos/aicte.png"
                                    alt="QS University Rankings"
                                    width={200}
                                    height={60}
                                    className="h-28"
                                />
                                <div>
                                    <h3 className="font-bold">Ranked No. 1</h3>
                                    <p className="text-sm text-muted-foreground">Amongst All Private Universities in India</p>
                                    <p className="text-xs text-muted-foreground mt-2">By QS Asia University Rankings 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-3 row-start-1 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/analytics.png"
                                    alt="QS World Rankings"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">Ranked Amongst</h3>
                                    <p className="text-sm text-muted-foreground">India's Top 3 Private Universities</p>
                                    <p className="text-xs text-muted-foreground mt-2">By QS World University Rankings 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-5 row-start-1 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo3.png"
                                    alt="NIRF Rankings"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">Ranked #20</h3>
                                    <p className="text-sm text-muted-foreground">Amongst Top Universities in India</p>
                                    <div className="text-xs text-muted-foreground mt-2">
                                        <p>Engineering #32</p>
                                        <p>Management #36</p>
                                        <p>Pharmacy #20</p>
                                        <p>Architecture & Planning #13</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-7 row-start-1 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo4.png"
                                    alt="ABET"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">First Private Universities in India</h3>
                                    <p className="text-sm text-muted-foreground">to have Highest Number of Engineering Programs</p>
                                    <p className="text-xs text-muted-foreground mt-2">Accredited by ABET</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 col-start-3 row-start-2 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo5.png"
                                    alt="NBA"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">First Private University in Punjab</h3>
                                    <p className="text-sm text-muted-foreground">to be accredited by NBA for Engineering and MBA Programs</p>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 col-start-6 row-start-2 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo6.png"
                                    alt="NAAC"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">Bestowed with A+ Accreditation</h3>
                                    <p className="text-sm text-muted-foreground">by National Assessment and Accreditation Council (NAAC) in the first cycle itself</p>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-3 row-start-3 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo7.png"
                                    alt="Outlook"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">Outlook I-CARE Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-5 row-start-3 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo8.png"
                                    alt="The Week"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">The Week Best University Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-7 row-start-3 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo9.png"
                                    alt="The Week"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">The Week Best University Rankings 2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 col-start-3 row-start-4 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/xlri.png"
                                    alt="The Week"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">The Week Best University Rankings 2024</h3>
                                    <a href="#" className="text-sm text-primary hover:underline">
                                        Click to Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 col-start-6 row-start-4 h-full">
                        <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden h-full bg-[#e8e8e8]">
                            <div className="py-6 px-2 flex gap-4 h-full">
                                <img
                                    src="/image/logos/logo10.png"
                                    alt="The Week"
                                    width={200}
                                    height={60}
                                    className="h-20 object-contain"
                                />
                                <div>
                                    <h3 className="font-bold">The Week Best University Rankings 2024</h3>
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
