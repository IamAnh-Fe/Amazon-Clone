import React, {useEffect, useState} from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import authApi from "~/apis/authApi"
const ManageProduct = () => {
      const [users, setUsers] = useState([])
 useEffect(() => {
      const  fetchUserList = async () => {
          try {
                const res = await authApi.getAllUsers()
                setUsers(res)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchUserList()
    }, [])
  return (
    <div className="grid">
       <div className="row cardAdmin">
        <div className="col l-1">id</div>
        <div className="l-3">Name</div>
        <div className="l-3">Email</div>
        <div className="l-2">Phone</div>
        <div className="l-2">Address</div>
        <div className="l-1">Edit / Delete</div>
      </div>

      <div className=" cardAdmin vh">
                      {users.map((user) => (
        <span className='manageUser-list row '>
        <div className="col l-1">id</div>
        <div className="l-3">{user.username}</div>
        <div className="l-3">{user.email}</div>
        <div className="l-2">Phone</div>
        <div className="l-2">Address</div>
        <div className="l-1">
        <span><AiOutlineEdit/>/ </span> 
        <span> <AiOutlineDelete/></span></div>
        </span>
        ))}
      </div>
    </div>
  );
}

export default ManageProduct