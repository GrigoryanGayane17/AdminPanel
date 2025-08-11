import React from 'react';

function Logout({ open, setOpen }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000082] bg-opacity-70 backdrop-blur-sm">
            <div className="w-full max-w-md mx-4">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#9DDA68FF] to-[#749F4DFF] p-5">
                        <h2 className="text-2xl font-bold text-white text-center">Confirm Logout</h2>
                    </div>

                    <div className="p-6">
                        <p className="text-gray-700 text-lg text-center mb-6">
                            Դուք համոզված եք, որ ցանկանում եք դուրս գալ ադմին պանելից?
                        </p>

                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setOpen(false)}
                                className="cursor-pointer transition-all bg-gray-400 text-white font-medium px-6 m-2 py-2 rounded-lg
border-gray-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"                            >
                                Չեղարկել
                            </button>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                }}
                                className="cursor-pointer transition-all bg-red-400 text-white font-medium px-6 m-2 py-2 rounded-lg
border-red-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"                            >
                                Դուրս գալ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;