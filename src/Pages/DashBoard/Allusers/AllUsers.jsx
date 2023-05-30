import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })

    const handleUpdate= (id)=>{
        console.log(id)
    }

    const handleMakeAdmin = (id)=>{
        console.log(id)
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h1 className='text-3xl font-semibold'>All users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((usr, index)=>
                            <tr key={usr._id}>
                                <th>{index + 1}</th>
                                <td>{usr.name}</td>
                                <td>{usr.email}</td>
                                <td>{usr.role==='admin'? 'admit': <button className='btn-ghost bg-orange-500' onClick={()=>handleMakeAdmin(usr._id)}><FaUserShield></FaUserShield></button>}</td>
                                <td><button className='btn-ghost bg-orange-500' onClick={()=>handleMakeAdmin(usr._id)}><FaTrashAlt className='text-orange-500'></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;