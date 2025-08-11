import React, {useState} from 'react';
import courses from '../assets/jsons/courses.json'
import EditingCourse from "../components/EditingCourse.jsx";
import DeleteFieldCourse from "../components/DeleteFieldCourse.jsx";


function Courses(props) {


    const [coursesData, setCoursesData] = useState(courses)
    const [delField, setDelField] = useState(false)
    const [delItem, setDelItem] = useState(null)
    const [editingItem, setEditingItem] = useState(null)
    const [openEditingItem, setOpenEditingItem] = useState(false)
    const Delete = (item) => {
        setDelField(true)
        setDelItem(item)
        console.log(coursesData)
    }
    return (
        <div className={'flex justify-end bg-[#f2f2f2] w-full'}>
            <div className={'w-[calc(100%-350px)] flex p-5 flex-wrap min-h-[100vh]'}>
                {coursesData.filter((course) => course.del === false).map((item) => (
                    <div
                        className="rounded-xl m-2 bg-white max-w-[350px] h-[350px] flex justify-center p-5 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer">
                        <div

                            className="w-[300px] p-5 bg-white rounded-xl shadow-md hover:shadow-xl duration-300"
                        >
                            <h1 className="text-[#749F4DFF] text-[20px]  font-bold leading-none">{item.title}</h1>
                            <div className={'mt-5'}>
                                <div className={'flex items-center mt-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="#7A7777FF" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    <p className={'text-[#7A7777FF] text-[15px] ms-2'}>{item.duration}</p>
                                </div>

                                <div className={'flex items-center mt-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="#7A7777FF" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
                                    </svg>
                                    <p className={'text-[#7A7777FF] text-[15px] ms-2'}>{item.price}</p>
                                </div>

                                <div className={'flex mt-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeLinejoin="1.5"
                                         stroke="#7A7777FF" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                                    </svg>
                                    <p className={'text-[#7A7777FF] text-[15px] ms-2'}>{item.topics}</p>
                                </div>
                                {item.bonus !== "" ? (
                                    <div className={'flex items-center mt-2'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5}
                                             stroke="#7A7777FF" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
                                        </svg>

                                        <p className={'text-[#7A7777FF] text-[15px] ms-2'}>{item.bonus}</p>

                                    </div>
                                ) : null}
                                <div className={' mt-3'}>
                                    <button onClick={() => {
                                        setEditingItem(item);
                                        setOpenEditingItem(true);
                                    }} className="cursor-pointer transition-all bg-[#9DDA68FF] text-[#f2f2f2] font-medium px-6 m-2 py-2 rounded-lg
border-[#749f4d]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] ">
                                        Փոփոխել
                                    </button>
                                    <button onClick={() => Delete(item)} className="cursor-pointer transition-all bg-red-400 text-white font-medium px-6 m-2 py-2 rounded-lg
border-red-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                        Ջնջել
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <DeleteFieldCourse open={delField} setOpen={setDelField} item={delItem} data={coursesData}
                               setData={setCoursesData}/>

            <EditingCourse item={editingItem}
                           open={openEditingItem}
                           setOpen={setOpenEditingItem}
                           coursesData={coursesData}
                           setCoursesData={setCoursesData}/>

        </div>
    );
}

export default Courses;