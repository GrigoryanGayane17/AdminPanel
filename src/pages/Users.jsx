import React, {useState, useMemo, useEffect} from 'react';
import usersData2024 from '../assets/jsons/users-2024.json';
import usersData2023 from '../assets/jsons/users-2023.json';
import usersData2021 from '../assets/jsons/users-2021.json';
import EditingUser from '../components/EditingUser.jsx';

function Users() {
    const [searchDateField, setSearchDateField] = useState('2024');
    const [data, setData] = useState([]);
    const [editUser, setEditUser] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('fullName');

    useEffect(() => {
        let dataset = [];

        if (searchDateField === '2024') dataset = usersData2024;
        else if (searchDateField === '2023') dataset = usersData2023;
        else if (searchDateField === '2021') dataset = usersData2021;

        const loadedData = Array.isArray(dataset)
            ? dataset
            : dataset.users || Object.values(dataset);

        setData(loadedData);
        setSearchTerm('');
        setCurrentUser(null);
        setEditUser(false);
    }, [searchDateField]);

    const handleUserSave = (updatedUser) => {
        setData((prevData) =>
            prevData.map((user) =>
                user.id === updatedUser.id ? {...user, ...updatedUser} : user
            )
        );
        setEditUser(false);
        setCurrentUser(null);
    };

    const handleDelete = (user) => {
        setData((prevData) =>
            prevData.map((u) => (u.id === user.id ? {...u, del: true} : u))
        );
    };

    const filteredUsers = useMemo(() => {
        const filtered = data.filter((user) => !user.del);

        if (!searchTerm) return filtered;

        return filtered.filter((user) =>
            (user[searchField] || '')
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm, searchField]);

    const renderNoData = (title, message, iconPath) => (
        <div className="text-center py-12 bg-white shadow sm:rounded-lg">
            <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    d={iconPath}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
        </div>
    );

    return (
        <div className="flex justify-end bg-gray-50 w-full">
            <div className="w-full xl2:w-[calc(100%-350px)] p-5 min-h-screen">
                <h1 className="text-3xl font-bold text-[#9DDA68FF] mb-6">
                    Code Battle
                </h1>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              🔍
            </span>
                        <input
                            type="text"
                            placeholder={`Փնտրել ${searchField}ով...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-3 py-2 w-full border border-gray-300 focus:border-[#749F4DFF] rounded-md bg-white text-sm focus:ring-2 focus:ring-[#9DDA68FF]"
                        />
                    </div>

                    <select
                        value={searchField}
                        onChange={(e) => {
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
                        value={searchDateField}
                        onChange={(e) => setSearchDateField(e.target.value)}
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
                    ? renderNoData(
                        'No users data available',
                        'The users data could not be loaded or is empty.',
                        'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    )
                    : filteredUsers.length
                        ? (
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <table className=" min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50 hidden xl2:table-header-group">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs bg-[#9DDA68FF] font-medium text-gray-500 uppercase tracking-wider">
                                            Անուն Ազգանուն
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs bg-[#9DDA68FF] font-medium text-gray-500 uppercase tracking-wider">
                                            Էլ․Հասցե
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs bg-[#9DDA68FF] font-medium text-gray-500 uppercase tracking-wider">
                                            Հեռախոսահամար
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs bg-[#9DDA68FF] font-medium text-gray-500 uppercase tracking-wider">
                                            Գործողություններ
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-2 whitespace-nowrap flex items-center">
                                                <div
                                                    className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-[#9DDA68FF] text-[20px] text-white">
                                                    {user.firstName?.[0]}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {user.fullName}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.specialization}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.languages}
                                                    </div>
                                                    <div
                                                        className={'block xl2:hidden text-sm text-gray-500'}>{user.email}</div>
                                                    <div
                                                        className={'block xl2:hidden text-sm text-gray-500'}>{user.phone}</div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.status}
                                                    </div>

                                                    <div className={'block xl2:hidden '}>
                                                        <button
                                                            onClick={() => {
                                                                setEditUser(true);
                                                                setCurrentUser(user);
                                                            }}
                                                            className="px-2 cursor-pointer m-1 py-1 xl2:px-4 xl2:py-2 bg-[#9DDA68FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#749F4DFF] transition duration-300 ease-in-out"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f2f2f2"
                                                                 className="size-5 xl2:size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                                                            </svg>

                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(user)}
                                                            className="px-2 cursor-pointer m-1 py-1 xl2:px-4 xl2:py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f2f2f2"
                                                                 className="size-5 xl2:size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 hidden xl2:table-cell py-4 text-sm text-gray-500">{user.email}</td>
                                            <td className="px-6 hidden xl2:table-cell py-4 text-sm text-gray-500">{user.phone}</td>
                                            <td className="px-4 py-2  hidden xl2:table-cell  text-right flex justify-start items-center flex-wrap text-sm">
                                                <button
                                                    onClick={() => {
                                                        setEditUser(true);
                                                        setCurrentUser(user);
                                                    }}
                                                    className="px-2 cursor-pointer m-1 py-1 xl2:px-4 xl2:py-2 bg-[#9DDA68FF] text-white font-semibold rounded-lg shadow-md hover:bg-[#749F4DFF] transition duration-300 ease-in-out"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f2f2f2"
                                                         className="size-5 xl2:size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                                                    </svg>

                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user)}
                                                    className="px-2 cursor-pointer m-1 py-1 xl2:px-4 xl2:py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f2f2f2"
                                                         className="size-5 xl2:size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                    </svg>

                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : renderNoData(
                            'No users found',
                            'Try adjusting your search or filter.',
                            'M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        )}

                <EditingUser
                    user={currentUser}
                    open={editUser}
                    setOpen={setEditUser}
                    onSave={handleUserSave}
                />
            </div>
        </div>
    );
}

export default Users;
