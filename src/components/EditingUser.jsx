import React, { useEffect, useState } from 'react';

function EditingUser({ user, open, setOpen, onSave }) {
    const [formData, setFormData] = useState({
        fullName: '',
        role: '',
        email: '',
        phone: '',
        languages: '',
        specialization: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || '',
                role: user.role || '',
                email: user.email || '',
                phone: user.phone || '',
                languages: user.languages || '',
                specialization: user.specialization || '',
            });
        }
    }, [user]);

    if (!open) return null;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSave() {
        if (onSave) {
            onSave({ ...user, ...formData }); // merge updated fields with original user id etc.
        }
        setOpen(false);
    }

    return (
        <div className="fixed inset-0 bg-[#00000082] backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#9DDA68FF] to-[#749F4DFF] p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Փոփոխել օգտատերը</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-white hover:text-gray-200 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Անվանում</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Էլ․ հասցե</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Հեռախոսահամար</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Մասնագիտություն</label>
                        <input
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Skill-եր</label>
                        <input
                            name="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-[#763A1A]">Պաշտոն</label>
                        <input
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DDA68FF] focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                    <button
                        onClick={() => setOpen(false)}
                        className="px-4 cursor-pointer py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9DDA68FF]"
                    >
                        Չեղարկել
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-[#9DDA68FF] border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9DDA68FF]"
                    >
                        Պահպանել
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditingUser;
