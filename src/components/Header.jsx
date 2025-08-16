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
        <div className={'w-[60px]  xl:w-[300px] bg-[#90C461] min-h-[100vh] fixed top-0 left-0'}>
            <div className={'hidden xl:block'}>
                <div className={'p-5 bg-[#9EDC68FF] leading-[25px]'}>
                    <h1 className={' text-[30px] text-white'}>Admin Panel</h1>
                    <h1 className={' text-[18px] text-[#763A1A]'}>FullLearning.com</h1>
                </div>
                <hr className={'text-[#f2f2f2]'}/>
            </div>

            <div className={'p-0 xl:p-5 mt-5'}>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg className="w-10 h-10 text-[#f2f2f2] fill-current"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
                            <path
                                d="M96 160C96 124.7 124.7 96 160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160zM160 224L160 480L288 480L288 224L160 224zM480 224L352 224L352 480L480 480L480 224z"/>
                        </svg>
                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Վահանակ</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/users'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg className="w-9 h-9 text-[#f2f2f2] fill-current" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 640 640">
                            <path
                                d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z"/>
                        </svg>

                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Օգտատերեր</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/courses'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg className="w-9 h-9 text-[#f2f2f2] fill-current" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 640 640">
                            <path
                                d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/>
                        </svg>
                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Դասընթացներ</span>
                    </div>

                </NavLink>
                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/posts'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg className="w-9 h-9 text-[#f2f2f2] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"> <path d="M144 64C117.5 64 96 85.5 96 112L96 272L176 272L176 240C176 187 219 144 272 144L480 144L480 112C480 85.5 458.5 64 432 64L144 64zM272 192C245.5 192 224 213.5 224 240L224 272L304 272C357 272 400 315 400 368L400 480L560 480C586.5 480 608 458.5 608 432L608 240C608 213.5 586.5 192 560 192L272 192zM472 256L520 256C533.3 256 544 266.7 544 280L544 328C544 341.3 533.3 352 520 352L472 352C458.7 352 448 341.3 448 328L448 280C448 266.7 458.7 256 472 256zM80 320C53.5 320 32 341.5 32 368L32 378.4L188.6 464.6C189.7 465.2 190.8 465.5 192 465.5C193.2 465.5 194.4 465.2 195.4 464.6L352 378.4L352 368C352 341.5 330.5 320 304 320L80 320zM352 433.2L218.6 506.6C210.5 511.1 201.3 513.4 192 513.4C182.7 513.4 173.6 511 165.4 506.6L32 433.2L32 528C32 554.5 53.5 576 80 576L304 576C330.5 576 352 554.5 352 528L352 433.2z"/></svg>


                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Փոստեր</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/donations'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg  className="w-9 h-9 text-[#f2f2f2] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 48C306.7 48 296 58.7 296 72L296 84L294.2 84C257.6 84 228 113.7 228 150.2C228 183.6 252.9 211.8 286 215.9L347 223.5C352.1 224.1 356 228.5 356 233.7C356 239.4 351.4 243.9 345.8 243.9L272 244C256.5 244 244 256.5 244 272C244 287.5 256.5 300 272 300L296 300L296 312C296 325.3 306.7 336 320 336C333.3 336 344 325.3 344 312L344 300L345.8 300C382.4 300 412 270.3 412 233.8C412 200.4 387.1 172.2 354 168.1L293 160.5C287.9 159.9 284 155.5 284 150.3C284 144.6 288.6 140.1 294.2 140.1L360 140C375.5 140 388 127.5 388 112C388 96.5 375.5 84 360 84L344 84L344 72C344 58.7 333.3 48 320 48zM141.3 405.5L98.7 448L64 448C46.3 448 32 462.3 32 480L32 544C32 561.7 46.3 576 64 576L384.5 576C413.5 576 441.8 566.7 465.2 549.5L591.8 456.2C609.6 443.1 613.4 418.1 600.3 400.3C587.2 382.5 562.2 378.7 544.4 391.8L424.6 480L312 480C298.7 480 288 469.3 288 456C288 442.7 298.7 432 312 432L384 432C401.7 432 416 417.7 416 400C416 382.3 401.7 368 384 368L231.8 368C197.9 368 165.3 381.5 141.3 405.5z"/></svg>


                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Նվիրաբերումներ</span>
                    </div>

                </NavLink>

                <NavLink className={({isActive}) =>
                    ` m-2 flex  rounded-xl  items-center duration-300 ${
                        isActive ? activeClass : inactiveClass
                    }`
                } to={'/documents'}>

                    <div
                        className={'flex items-center hover:bg-[#9EDC68FF] w-full pt-2 pb-2 pe-4 ps-4 duration-300 rounded-xl '}>
                        <svg  className="w-9 h-9 text-[#f2f2f2] fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 160C64 124.7 92.7 96 128 96L266.7 96C280.5 96 294 100.5 305.1 108.8L343.5 137.6C349 141.8 355.8 144 362.7 144L512 144C547.3 144 576 172.7 576 208L576 448zM320 224C306.7 224 296 234.7 296 248L296 296L248 296C234.7 296 224 306.7 224 320C224 333.3 234.7 344 248 344L296 344L296 392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392L344 344L392 344C405.3 344 416 333.3 416 320C416 306.7 405.3 296 392 296L344 296L344 248C344 234.7 333.3 224 320 224z"/></svg>
                        <span className={'text-[20px] text-white ms-3 hidden xl:block'}>Փաստաթղեր</span>
                    </div>

                </NavLink>

                <button onClick={LogOpen}
                        className={'ms-2 rounded-xl p-2 md:p-4  flex items-center cursor-pointer hover:bg-[#9EDC68FF] duration-200'}>
                    <svg  className="w-7 h-7 md:w-9 md:h-9 text-[#f2f2f2] fill-current"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"/></svg>
                    <span className={'text-white text-[20px] ms-2 hidden xl:block'}>Լոգաութ</span>
                </button>

            </div>
            <Logout open={logOpen} setOpen={setLogOpen}/>

        </div>
    )

        ;
}

export default Header;