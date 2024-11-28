import React, { useState, useEffect } from 'react';
import { SiSass, SiWordpress, SiJquery, SiTailwindcss, SiHtml5, SiBootstrap } from 'react-icons/si';

const courses = [
    { icon: SiSass, title: 'Sass Basic To Advanced', color: 'text-pink-500' },
    { icon: SiWordpress, title: 'WordPress Advanced', color: 'text-blue-500' },
    { icon: SiJquery, title: 'jQuery Plugin', color: 'text-blue-400' },
    { icon: SiTailwindcss, title: 'Tailwind', color: 'text-cyan-500' },
    { icon: SiHtml5, title: 'HTML (Web Design)', color: 'text-orange-500' },
    { icon: SiBootstrap, title: 'Bootstrap', color: 'text-purple-500' },
    { icon: SiSass, title: 'Sass Basic To Advanced', color: 'text-pink-500' },
    { icon: SiWordpress, title: 'WordPress Advanced', color: 'text-blue-500' },
    { icon: SiJquery, title: 'jQuery Plugin', color: 'text-blue-400' },
    { icon: SiTailwindcss, title: 'Tailwind', color: 'text-cyan-500' },
    { icon: SiHtml5, title: 'HTML (Web Design)', color: 'text-orange-500' },
    { icon: SiBootstrap, title: 'Bootstrap', color: 'text-purple-500' },
];

const Highlights = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const getWrappedCourses = () => {
        const startIndex = currentIndex;
        let wrappedCourses = [];

        for (let i = 0; i < 5; i++) {
            wrappedCourses.push(courses[(startIndex + i) % courses.length]);
        }

        return wrappedCourses;
    };

    const wrappedCourses = getWrappedCourses();

    return (
        <div className="w-full px-4 py-8">
            <div className="relative flex justify-center items-center overflow-hidden max-w-7xl mx-auto">
                <div className="flex gap-4 transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${(100 / 100) * currentIndex}%)`,
                    }}>
                    {wrappedCourses.map((course, index) => (
                        <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer bg-white">
                            {React.createElement(course.icon, {
                                className: `w-10 h-10 ${course.color}`,
                            })}
                            <span className="text-sm font-medium text-gray-700">
                                {course.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlights;