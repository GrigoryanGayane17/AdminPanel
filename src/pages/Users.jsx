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
            <div className="w-[calc(100%-350px)] p-5 min-h-screen">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Code Battle Մասնակիցներ</h1>

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
                                    <thead className="bg-gray-50">
                                    <tr>
                                        {['Անուն Ազգանուն', 'Էլ․Հասցե', 'Հեռաղոսահամար', 'Գործողություն'].map(header => (
                                            <th key={header}
                                                className="px-6 py-3 text-left text-xs bg-[#9DDA68FF] font-medium text-gray-500 uppercase tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredUsers.map(user => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                                <div
                                                    className={'w-[50px] flex justify-center items-center h-[50px] rounded-[50%] bg-[#9DDA68FF] text-[20px] text-white'}>
                                                    {user.firstName[0]}
                                                </div>
                                                <div className="ml-4">
                                                    <div
                                                        className="text-sm font-medium text-gray-900">{user.fullName}</div>
                                                    <div
                                                        className="text-sm text-gray-500">{user.specialization} | {user.languages}</div>

                                                    <div className="text-sm text-gray-500">{user.status}</div>

                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{user.phone}</td>
                                            <td className="px-6 py-4 text-right text-sm">
                                                <button
                                                    onClick={() => {
                                                        setEditUser(true);
                                                        setCurrentUser(user);
                                                    }}
                                                    className="px-4 cursor-pointer py-2 mr-3 bg-[#9DDA68FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#749F4DFF] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                >
                                                    Edit
                                                </button>

                                                <button onClick={() => Delete(user)}
                                                        className={"px-4 cursor-pointer py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400"}
                                                >
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
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
