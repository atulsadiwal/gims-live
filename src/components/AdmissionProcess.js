import { Award, LineChart, User } from "lucide-react";
import React from "react";

const AdmissionProcess = () => {
    return (
        <>
            <section className="bg-BG3">
                <div className="h-[80vh] bg-red-600 text-white py-16 px-4 md:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Gims Admission Process</h2>
                            <p className="max-w-3xl mx-auto text-sm md:text-base">
                                At Chandigarh University, it is our aim to ensure that every deserving student gets the opportunity to achieve success and fulfill their dreams. With CUCET scholarships, we are investing in our collective future
                                and ensuring that our students can fully capitalize on their potential for success.
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
                </div>
            </section>
        </>
    );
};

export default AdmissionProcess;
