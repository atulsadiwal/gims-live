import PlacementSlider from "./PlacementSlider";

const placement1 = [
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/abhay-kumar.webp",
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/ankur-kumar-mishra.webp",
]
const placement2 = [
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/dilpreet-singh.webp",
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/hanshika-bhushan.webp",
]
const placement3 = [
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/raksha-shreya.webp",
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/ritika-saxena.webp",
]
const placement4 = [
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/sunaina-thakur.webp",
    "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/vivek-yadav.webp",
]

export default function PlacementHighlights() {
    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 max-sm:px-2">
                <div className="flex flex-col justify-center p-5 md:p-10 lg:p-16 bg-BG1 bg-center bg-cover text-white bg-black bg-blend-multiply bg-opacity-75">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-novaLight">
                        <span className='font-novaSemi bg-gradient-to-r from-green-500 to-indigo-400 bg-clip-text text-transparent animate-gradient'>Placements</span> Overview
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-novaLight leading-5 mt-3">Record-Breaking Achievements and Industry-Driven Success</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">22852</p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Placement <br /> Offers</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">858+</p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Company <br /> Visits</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">20-70 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 150 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">10-20 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 5792 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">5-10 <small className="font-novaLight -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to Approx 7042 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl font-novaThin mt-4">5 <small className="font-novaLight -ml-1 text-lg">LPA</small>
                            </p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Package Offered to 9958 Students</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl text-orange-300 font-novaThin mt-4">23.31 <small className="font-novaLight text-white -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Highest National Package Offered</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl text-orange-300 font-novaThin mt-4">70 <small className="font-novaLight text-white -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Highest International Package Offered</p>
                        </div>
                        <div className="text-start">
                            <p className="text-2xl md:text-3xl lg:text-5xl text-orange-300 font-novaThin mt-4">12.5 <small className="font-novaLight text-white -ml-1 text-lg">LPA</small></p>
                            <p className="text-sm md:text-base font-novaReg leading-none mt-2">Average Package<br /> Offered</p>
                        </div>
                    </div>
                    <div className="flex justify-start space-x-4 mt-6 max-lg:justify-center">
                        <button className="bg-btn-gradient text-white text-sm font-novaBold px-6 py-2 max-[360px]:text-[11px] rounded-md hover:bg-[#3c5686] hover:border-b-4 hover:border-[#ccce48] hover:transform hover:transition-transform hover:ease-in-out hover:duration-500 scale-y-105">APPLY TODAY</button>
                        <button className="border border-white text-white text-sm font-novaBold px-4 py-2 max-[360px]:text-[11px] rounded-md hover:bg-white hover:text-black">VIEW PLACEMENTS</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:place-content-start max-sm:gap-2 h-full max-sm:mb-1.5">
                        <PlacementSlider placement={placement1} delay={4000} />
                        <PlacementSlider placement={placement2} delay={3000} />
                        <PlacementSlider placement={placement3} delay={3500} />
                        <PlacementSlider placement={placement4} delay={4500} />
                    </div>
                </div>
            </div>
        </>
    );
}
