import React from "react";

const mentors = [
    { img: '/image/mentors/img1.webp', name: 'Ms. Shaweta Berry', position: 'Director Marketing & Head of Strategic Alliances', companyname: 'Aeris Communications' },
    { img: '/image/mentors/img2.webp', name: 'Mr. Bhasker Das', position: 'Chief Strategy Officer', companyname: 'MCN Solutions Pvt. Ltd.' },
    { img: '/image/mentors/img3.webp', name: 'Ms. Alka Sachdeva', position: 'Vice President', companyname: 'All India Council for Robotics & Automation (ACRA)' },
    { img: '/image/mentors/img4.webp', name: 'Ms. Richa Daga', position: 'Technologist/Author & Speaker Software Engineer', companyname: 'CISCO' },
    { img: '/image/mentors/img5.webp', name: 'Mr. Gurinder Ratra', position: 'Digital Evangelist & Excellence, Director-AP T&L', companyname: 'Deloitte' },
    { img: '/image/mentors/img6.webp', name: 'Mr. Ankit Nigam', position: 'Product Management & Innovation Expert', companyname: 'Allianz Partners' },
    { img: '/image/mentors/img7.webp', name: 'Mr. Mayur Gupta', position: 'Sales Leader-B2B & B2C, Associate Director', companyname: 'CARS24' },
    { img: '/image/mentors/img8.webp', name: 'Dr. Aparajita Prasad', position: 'Director', companyname: 'PwC' },
    { img: '/image/mentors/img9.webp', name: 'Mr. Neeten Rohatgi', position: 'Manager- EMEA, Reinsurance Support', companyname: 'MetLife' },
    { img: '/image/mentors/img10.webp', name: 'Mr. Ramit Tyagi', position: 'Director, Talent Acquisition', companyname: 'Ultimate Kronos Group' },
    { img: '/image/mentors/img11.webp', name: 'Ms. Punam Dagar', position: 'DOM HR', companyname: 'Varun Beverages Ltd' },
    { img: '/image/mentors/img12.webp', name: 'Mr. Vir Bharat', position: 'Head HR Business Partner', companyname: 'Yamaha Motor Solutions India' },
    { img: '/image/mentors/img13.webp', name: 'Mr. Raizada Sorabh Bali', position: 'Partner & Principal-People Solutions', companyname: 'Posterity Consulting' },
    { img: '/image/mentors/img14.webp', name: 'Ms. Priti Goel', position: 'Founder, CEO & MD', companyname: 'Prisha Wealth Management Pvt. Ltd.' },
    { img: '/image/mentors/img15.webp', name: 'Mr. Ashish Kumar', position: 'Mentor of Change-ATL (NITI Aayog), YPC 40 Under 40- Service Delivery Manager', companyname: 'TCS' },
    { img: '/image/mentors/img16.webp', name: 'Mr. Anurag Mohan', position: 'Skill Portfolio Manager', companyname: 'Nokia Network Pvt. Ltd' },
    { img: '/image/mentors/img17.webp', name: 'Ms. Shivani Sharma Singh', position: 'National Head Government Projects', companyname: 'LO Electronics' },
    { img: '/image/mentors/img18.webp', name: 'Mr. Anurag Chandra', position: 'Chief Information Security Officer', companyname: 'IAF' },
    // { img: '/image/mentors/img19.webp', name: 'Mr. Shivendra Mishra', position: 'Associate Vice President', companyname: 'Kotak Mahindra Bank' },
    // { img: '/image/mentors/img20.webp', name: 'Mr. Harsh Raghubanshi', position: 'Assistant Manager', companyname: 'Aditya Birla Group' },
    // { img: '/image/mentors/img21.webp', name: 'Ms. Anuricha Chander', position: 'P&C Managing Director', companyname: 'BDO RISE Pvt. Ltd.' },
    // { img: '/image/mentors/img22.webp', name: 'Mr. Neil Nazareth', position: 'P&C Managing Director', companyname: 'Midland Credit' },
    // { img: '/image/mentors/img23.webp', name: 'Ms. Sheetal Jerath Sharma', position: 'Associate Director, People & Culture', companyname: 'Grant Thornton Bharat LLP' },
    // { img: '/image/mentors/img24.webp', name: 'Mr. Nitin Chawla', position: 'Executive Director', companyname: 'Ernst & Young' },
    // { img: '/image/mentors/img25.webp', name: 'Mr. Sandeep Rastogi', position: 'Senior Vice President - Financial Services', companyname: 'Cokwik Commerce' },
    // { img: '/image/mentors/img26.webp', name: 'Mr. Umesh Kumar', position: 'Founder & Chief Executive Officer', companyname: 'Ronniab Technologies' },
    // { img: '/image/mentors/img27.webp', name: 'Mr. Harsh Raj Jain', position: 'Head of Talent India & APAC', companyname: 'Ebbx India' },
    // { img: '/image/mentors/img28.webp', name: 'Mr. Himanshu Wadia', position: 'Director - IT Infrastructure & BSS', companyname: 'Amdocs' },
    // { img: '/image/mentors/img29.webp', name: 'Mr. Abhishu Kharub', position: 'DGM, Supply Chain', companyname: 'JK Tyre & Industries Ltd.' },
    // { img: '/image/mentors/img30.webp', name: 'Mr. Shubham Dang', position: 'Senior Product Manager', companyname: 'Microsoft' }
];

const CorporateMentor = () => {
    return (
        <section className='max-w-[1400px] mx-auto px-2 py-10'>
            <div className='text-center mb-3'>
                <h3 className='text-4xl font-FONT2'>Corporate Mentors</h3>
            </div>
            <div className="py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 px-2">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_0px_10px] rounded-lg overflow-hidden p-4 hover:shadow-xl transition duration-300">
                            <img 
                                src={mentor.img || "https://via.placeholder.com/150"} 
                                alt={mentor.name} 
                                className="w-full h-36 rounded-t-3xl mb-4 object-contain bg-gray-200" 
                            />
                            <h3 className="text-base font-semibold mb-2">{mentor.name}</h3>
                            <p className="text-gray-700 text-sm">{mentor.position}</p>
                            <p className="text-gray-500 text-sm">{mentor.companyname}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CorporateMentor;