import React, {useState, useMemo, useEffect, use} from 'react';
import usersData2024 from '../assets/jsons/users-2024.json';
import usersData2023 from '../assets/jsons/users-2023.json';
import usersData2021 from '../assets/jsons/users-2021.json';
import EditingUser from "../components/EditingUser.jsx";

function Users() {
    const [searchDateFieled, setSearchDateFieled] = useState("2024")
    const [data, setData] = useState([])
    const [editUser, setEditUser] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        let dataset = []
        if (searchDateFieled === "2024") dataset = usersData2024;
        else if (searchDateFieled === "2023") dataset = usersData2023;
        else if (searchDateFieled === "2021") dataset = usersData2021;

        const loadedData = Array.isArray(dataset) ? dataset : dataset.users || Object.values(dataset);
        setData(loadedData);
        setSearchTerm('');
        setCurrentUser(null);
        setEditUser(false);
    }, [searchDateFieled]);

    const handleUserSave = (updatedUser) => {
        setData(prevData =>
            prevData.map(user => user.id === updatedUser.id ? {...user, ...updatedUser} : prev)
        );
        setEditUser(false);
        setCurrentUser(null);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('email');


    const Delete = (user) => {
        setData(prevData =>
            prevData.map(prev => prev.id === user.id ? {...prev, del: true} : prev)
        );
    };

    const filteredUsers = useMemo(() => {
        if (!data) return [];

        const filtered = data.filter(user => !user.del);

        if (!searchTerm) return filtered;

        return filtered.filter(user =>
            (user[searchField] || '').toLowerCase().includes(searchTerm.toLowerCase())
        );

    }, [data, searchTerm, searchField]);


    const renderNoData = (title, message, iconPath) => (
        <div className="text-center py-12 bg-white shadow sm:rounded-lg">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d={iconPath} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
    );


    return (
        <div className="flex justify-end bg-gray-50 w-full">
            <div className="w-[calc(100%-60px)] xl:w-[calc(100%-300px)] p-5 min-h-screen">
                <h1 className="text-[15px] font-bold text-gray-800 mb-6">Code Battle Մասնակիցներ</h1>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder={`Փնտրել ${searchField}ով...`}
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="pl-10 pr-3 py-2 w-full border border-gray-300 focus:border-[#749F4DFF] rounded-md bg-white text-sm focus:ring-2 focus:ring-[#9DDA68FF]"
                        />
                    </div>
                    <select
                        value={searchField}
                        onChange={e => {
                            setSearchField(e.target.value);
                            setSearchTerm('');
                        }}
                        className="md:w-48 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#9DDA68FF]"
                    >
                        <option value="email">Էլ․ հասցե</option>
                        <option value="phone">Հեռախոսահամար</option>
                        <option value="specialization">Մասնագիտոիթյուն</option>
                        <option value="fullName">Անուն</option>
                    </select>
                    <select
                        value={searchDateFieled}
                        onChange={e => {
                            setSearchDateFieled(e.target.value);
                        }}
                        className="md:w-48 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#9DDA68FF]"
                    >
                        <option value="2024">Code Battle 2024</option>
                        <option value="2023">Code Battle 2023</option>
                        <option value="2021">Code Battle 2021</option>

                    </select>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                    Showing {filteredUsers.length} of {data.length} data
                </p>

                {!data?.length
                    ? renderNoData('No users data available', 'The users data could not be loaded or is empty.', 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z')
                    : filteredUsers.length
                        ? (
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    {/* ... (previous code remains the same until the table header) ... */}
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 hidden sm:table-cell text-left text-xs bg-[#9DDA68] font-medium text-gray-700 uppercase tracking-wider">
                                            Անուն Ազգանուն
                                        </th>
                                        <th className="px-6 py-3 hidden md:table-cell text-left text-xs bg-[#9DDA68] font-medium text-gray-700 uppercase tracking-wider">
                                            Էլ․Հասցե
                                        </th>
                                        <th className="px-6 py-3 hidden medium:table-cell text-left text-xs bg-[#9DDA68] font-medium text-gray-700 uppercase tracking-wider">
                                            Հեռախոսահամար
                                        </th>
                                        <th className="px-6 py-3 hidden lg:table-cell text-left text-xs bg-[#9DDA68] font-medium text-gray-700 uppercase tracking-wider">
                                            Գործողություն
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredUsers.map(user => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-2 md:px-6 py-4 whitespace-nowrap flex items-center">
                                                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[50%] bg-[#9DDA68FF] text-[20px] text-white">
                                                    {user.firstName?.[0]}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-[10px] md:text-sm font-medium text-gray-900">{user.fullName}</div>
                                                    <div className="text-[10px] md:text-sm text-gray-500">{user.specialization}</div>
                                                    <div className="text-[10px] md:text-sm text-gray-500">{user.languages}</div>
                                                    <div className="block text-[10px] md:text-sm text-gray-500 medium:hidden">
                                                        {user.phone}
                                                    </div>
                                                    <div className="block md:hidden text-[10px] text-gray-500">
                                                        {user.email}
                                                    </div>
                                                    <div className="text-[10px] md:text-sm text-gray-500">{user.status}</div>
                                                    <div className="mt-2 block lg:hidden space-x-2">
                                                        <button
                                                            onClick={() => {
                                                                setEditUser(true);
                                                                setCurrentUser(user);
                                                            }}
                                                            className="px-3 py-1 bg-[#9DDA68FF] text-white rounded-md text-xs"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => Delete(user)}
                                                            className="px-3 py-1 bg-red-600 text-white rounded-md text-xs"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-500">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 hidden medium:table-cell text-sm text-gray-500">
                                                {user.phone}
                                            </td>
                                            <td className="px-6 py-4 hidden lg:table-cell text-sm">
                                                <button
                                                    onClick={() => {
                                                        setEditUser(true);
                                                        setCurrentUser(user);
                                                    }}
                                                    className="px-4 m-2 py-2 bg-[#9DDA68FF] text-white rounded-md mr-2"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => Delete(user)}
                                                    className="px-4 m-2 py-2 bg-red-600 text-white rounded-md"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    {/* ... (rest of the code remains the same) ... */}
                                </table>
                            </div>
                        )
                        : renderNoData('No users found', 'Try adjusting your search or filter.', 'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z')
                }
            </div>

            <EditingUser
                user={currentUser}
                open={editUser}
                setOpen={setEditUser}
                onSave={handleUserSave}
            />
        </div>
    );
}

export default Users;
