import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Dashboard(props) {
    return (
        <div className={'flex justify-end w-full '}>
            <div className={'bg-[#f2f2f2] w-[calc(100%-350px)] flex justify-center items-center h-[100vh]'}>
                <div>
                    <div className={'flex flex-wrap justify-end'}>
                        <div
                            className="rounded-xl m-2 bg-white p-5 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                            <Link
                                to="/courses"
                                className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#749F4DFF"
                                    strokeWidth="1.5"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                                    />
                                </svg>
                                <p className="text-[#749F4DFF] text-[40px] text-center font-bold leading-none">5</p>
                                <p className="text-[#749F4DFF] text-center font-bold"><em>Դասընթաց</em></p>
                            </Link>
                        </div>

                        <div
                            className="rounded-xl m-2 bg-white p-5 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                            <Link
                                to="/posts"
                                className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#749F4DFF"
                                    strokeWidth="1.5"
                                    className="w-10 h-10"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                </svg>
                                <p className="text-[#749F4DFF] text-[40px] text-center font-bold leading-none">3</p>
                                <p className="text-[#749F4DFF] text-center font-bold"><em>Փոստ</em></p>
                            </Link>
                        </div>

                        <div
                            className="rounded-xl m-2 bg-white p-5 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                            <Link
                                to="/users"
                                className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#749F4DFF"
                                    strokeWidth="1.5"
                                    className="w-10 h-10"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                </svg>
                                <p className="text-[#749F4DFF] text-[40px] text-center font-bold leading-none">154</p>
                                <p className="text-[#749F4DFF] text-center font-bold"><em>Օգտատեր</em></p>
                            </Link>
                        </div>

                        <div
                            className="rounded-xl m-2 bg-white p-5 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                            <Link
                                to="/donations"
                                className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-xl shadow-md hover:shadow-xl duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#749F4DFF"
                                    strokeWidth="1.5"
                                    className="w-10 h-10"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="text-[#749F4DFF] text-[40px] text-center font-bold leading-none">154</p>
                                <p className="text-[#749F4DFF] text-center font-bold"><em>Նվիրատվություն</em></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Dashboard;