import { Award, LineChart, User } from "lucide-react";
import React from "react";

const AdmissionProcess = () => {
    return (
        <>
            <section className="relative bg-BG3 bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-blue-800 opacity-95 z-0"></div>
                <div className="text-white py-16 px-4 relative z-10 max-lg:py-13 max-md:py-10 max-sm:py-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-FONT2 mb-4 uppercase max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Gims Admission Process</h2>
                            <p className="max-w-4xl mx-auto font-FONT1 max-sm:text-sm">
                                Any institution acquires its standing through its stakeholders. The students are one of the biggest stakeholders which play a major role in pivoting the journey of any educational institution. Keeping its
                                stakeholders at the core of the institute, the admission process begins with the screening of the candidate’s profile.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 place-items-center gap-3">
                            <div className="flex flex-col border border-gray-300 p-6 rounded-xl h-full w-full">
                                <div className="mb-4 max-md:mb-3 max-sm:mb-2">
                                    <LineChart className="w-10 h-10 max-sm:w-9 max-sm:h-9" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 max-md:text-lg max-sm:text-base">Application Screening</h3>
                                <ul className="text-base list-disc list-inside max-md:text-sm max-sm:text-xs">
                                    <li>Applying to the Institute</li>
                                    <li>Screening the Application</li>
                                </ul>
                            </div>
                            <div className="flex flex-col border border-gray-300 p-6 rounded-xl h-full w-full">
                                <div className="mb-4 max-md:mb-3 max-sm:mb-2">
                                    <User className="w-12 h-12  max-sm:w-9 max-sm:h-9" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 max-md:text-lg max-sm:text-base">Testing</h3>
                                <ul className="text-base list-disc list-inside max-md:text-sm max-sm:text-xs">
                                    <li>CET</li>
                                    <li>Group Discussion</li>
                                    <li>PI</li>
                                </ul>
                            </div>
                            <div className="flex flex-col border border-gray-300 p-6 rounded-xl h-full w-full">
                                <div className="mb-4 max-md:mb-3 max-sm:mb-2">
                                    <Award className="w-12 h-12  max-sm:w-9 max-sm:h-9" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 max-md:text-lg max-sm:text-base">Rejection</h3>
                                <p className="text-base max-sm:text-xs max-md:text-sm">Based on the Performance <br /> in CET/GD/PI</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto py-8 max-md:py-6 max-sm:py-6">
                        <div className="w-full overflow-auto">
                            <div className="text-center">
                                <h3 className="text-3xl mb-3 font-FONT2 max-md:text-2xl max-sm:text-xl">Scholarship at GIMS</h3>
                            </div>
                            <table className="min-w-full table-auto border-collapse">
                                <thead className="border border-gray-300">
                                    <tr>
                                        <th className="text-base text-white bg-indigo-950 font-medium py-2 px-4 border-b max-sm:text-xs max-sm:px-2.5 max-sm:py-1.5">ENTRANCE EXAMINATION</th>
                                        <th className="text-base text-white bg-indigo-950 font-medium py-2 px-4 border-b border-x max-sm:text-xs max-sm:px-2.5 max-sm:py-1.5">ELIGIBILITY FOR SCHOLARSHIP</th>
                                        <th className="text-base text-white bg-indigo-950 font-medium py-2 px-4 border-b max-sm:text-xs max-sm:px-2.5 max-sm:py-1.5">SCHOLARSHIP OFFERED ON TUITION FEE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base text-white text-center max-sm:text-sm">
                                    <tr className="border border-gray-300">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5 max-sm:text-xs">
                                            MAT
                                        </td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">Composite score 750 or above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 40,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">Composite score 650 or 749 above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 30,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">
                                            CAT
                                        </td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">80 Percentile or above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 60,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">70-79 Percentile</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">
                                            XAT
                                        </td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">80 Percentile or above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 60,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">70-79 Percentile</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">
                                            C-MAT
                                        </td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">90 Percentile or above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">70-89 Percentile</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 40,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">GAT</td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">65 percentile or above</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 30,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="border border-gray-300">
                                        <td className="font-medium py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">10th, 12th, Graduation</td>
                                        <td className="py-2 px-4 border-x border-b max-sm:py-1.5 max-sm:px-2.5">80% aggregate with GAT</td>
                                        <td className="py-2 px-4 border-b max-sm:py-1.5 max-sm:px-2.5">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdmissionProcess;
