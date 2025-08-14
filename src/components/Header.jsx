import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Logout from "./Logout.jsx";

function Header(props) {
    const [logOpen, setLogOpen] = useState(false)
    const activeClass = 'bg-[#9edc68]'; // active bg color
    const inactiveClass = 'hover:bg-[#90C461]';

    const LogOpen = () => {
        setLogOpen(true)
    }

    return (
        <div className={'w-[350px] hidden xl2:block bg-[#90C461] min-h-[100vh] xl2:fixed top-0 left-0'}>
            <div className={'p-5 bg-[#9EDC68FF] leading-[25px]'}>
                <h1 className={'text-[30px] text-white'}>Admin Panel</h1>
                <h1 className={'text-[18px] text-[#763A1A]'}>FullLearning.com</h1>
            </div>
            <hr className={'text-[#f2f2f2]'}/>

            <div className={'p-5 mt-5'}>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="#fff" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                        </svg>
                        <span className={'text-[20px] text-white ms-3'}>Վահանակ</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/users'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                        </svg>

                        <span className={'text-[20px] text-white ms-3'}>Օգտատերեր</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/courses'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                        </svg>


                        <span className={'text-[20px] text-white ms-3'}>Դասընթացներ</span>
                    </div>

                </NavLink>
                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/posts'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                        </svg>


                        <span className={'text-[20px] text-white ms-3'}>Փոստեր</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/donations'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>


                        <span className={'text-[20px] text-white ms-3'}>Նվիրաբերումներ</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/documents'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinejoin="1.5"
                             stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>
                        </svg>


                        <span className={'text-[20px] text-white ms-3'}>Փաստաթղեր</span>
                    </div>

                </NavLink>

                <button onClick={LogOpen}
                        className={'ms-2 rounded-xl p-4 flex items-center cursor-pointer hover:bg-[#9EDC68FF] duration-200'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/>
                    </svg>
                    <span className={'text-white text-[20px] ms-2'}>Լոգաութ</span>
                </button>

            </div>
            <Logout open={logOpen} setOpen={setLogOpen}/>

        </div>
    )

        ;
}

export default Header;