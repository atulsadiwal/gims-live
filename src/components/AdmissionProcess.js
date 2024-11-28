import { Award, LineChart, User } from "lucide-react";
import React from "react";

const AdmissionProcess = () => {
    return (
        <>
            <section className="relative bg-BG3 bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 bg-blue-800 opacity-95 z-0"></div>
                <div className="text-white py-16 px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Gims Admission Process</h2>
                            <p className="max-w-3xl mx-auto text-sm md:text-base">
                                Any institution acquires its standing through its stakeholders. The students are one of the biggest stakeholders which play a major role in pivoting the journey of any educational institution. Keeping its
                                stakeholders at the core of the institute, the admission process begins with the screening of the candidate’s profile.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <LineChart className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Application Screening</h3>
                                <ul className="list-disc list-inside">
                                    <li>Applying to the Institute</li>
                                    <li>Screening the Application</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <User className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Testing</h3>
                                <ul className="list-disc list-inside">
                                    <li>CET</li>
                                    <li>Group Discussion</li>
                                    <li>PI</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <Award className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Rejection</h3>
                                <p className="text-sm">Based on the Performance in CET/GD/PI</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto py-8">
                        <div className="w-full overflow-auto">
                            <div className="text-center">
                                <h3 className="text-4xl mb-3 font-novaBold">Scholarship at GIMS</h3>
                            </div>
                            <table className="min-w-full table-auto border-collapse">
                                <thead className="bg-blue-900">
                                    <tr>
                                        <th className="text-white font-medium py-2 px-4 border-b">ENTRANCE EXAMINATION</th>
                                        <th className="text-white font-medium py-2 px-4 border-b">ELIGIBILITY FOR SCHOLARSHIP</th>
                                        <th className="text-white font-medium py-2 px-4 border-b">SCHOLARSHIP OFFERED ON TUITION FEE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black text-center">
                                    <tr className="bg-amber-50">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b">
                                            MAT
                                        </td>
                                        <td className="py-2 px-4 border-b">Composite score 750 or above</td>
                                        <td className="py-2 px-4 border-b">Rs. 40,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-2 px-4 border-b">Composite score 650 or 749 above</td>
                                        <td className="py-2 px-4 border-b">Rs. 30,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b">
                                            CAT
                                        </td>
                                        <td className="py-2 px-4 border-b">80 Percentile or above</td>
                                        <td className="py-2 px-4 border-b">Rs. 60,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-2 px-4 border-b">70-79 Percentile</td>
                                        <td className="py-2 px-4 border-b">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b">
                                            XAT
                                        </td>
                                        <td className="py-2 px-4 border-b">80 Percentile or above</td>
                                        <td className="py-2 px-4 border-b">Rs. 60,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-2 px-4 border-b">70-79 Percentile</td>
                                        <td className="py-2 px-4 border-b">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td rowSpan={2} className="font-medium py-2 px-4 border-b">
                                            C-MAT
                                        </td>
                                        <td className="py-2 px-4 border-b">90 Percentile or above</td>
                                        <td className="py-2 px-4 border-b">Rs. 50,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="py-2 px-4 border-b">70-89 Percentile</td>
                                        <td className="py-2 px-4 border-b">Rs. 40,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="font-medium py-2 px-4 border-b">GAT</td>
                                        <td className="py-2 px-4 border-b">65 percentile or above</td>
                                        <td className="py-2 px-4 border-b">Rs. 30,000/- on tuition fee</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="font-medium py-2 px-4 border-b">10th, 12th, Graduation</td>
                                        <td className="py-2 px-4 border-b">80% aggregate with GAT</td>
                                        <td className="py-2 px-4 border-b">Rs. 50,000/- on tuition fee</td>
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
