import React, {useEffect, useState} from 'react'
import useSearch from '~/hooks/useSearch'
import Pagination from "~/components/Pagination";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import userApi from "~/apis/userApi"

const ManageUser = () => {
  
      const {search, handleSearching, handleSubmitSearch} = useSearch()
      const [users, setUsers] = useState([])
      const [currentPage, setCurrentPage] = useState(1)
      const [numberProduct, setNumberProduct] = useState()
      const [filters, setFilters] = useState();
      useEffect(() => {
      const  fetchUserList = async () => {
          try {
                const res = await userApi.getAllUsers(currentPage)
                setUsers(res.user)
                setNumberProduct(res.count)
            } catch (error) {
                console.log('Failed to fetch category list: ',error)
            }

        }
        fetchUserList()
    }, [currentPage])

    const handleDeleteUser = async (user) => {
      console.log(user)
const id = user._id;
await userApi.deleteAUser(id)
const currentUser = users.filter(users => users._id !== user._id)
setUsers(currentUser)
}
 //pagination
const limitPage = 15
 const pages = Math.ceil(numberProduct/limitPage)
//  const handlePaginationChange = (newFilters) => {
//   setFilters((prevFilters)=> ({
//     ...prevFilters,
//     ...newFilters
//   }))
// }
  return (
    <>
       <div className="row cardAdmin">
        <div className="col l-2"></div>
        <div className="l-2"></div>
        <div className="l-2"></div>
       <div className='manageProduct-search col l-6 m-8'>
        <input type='text' placeholder='Search...' value={search} onChange={handleSearching} />
        <button onClick={handleSubmitSearch}><AiOutlineSearch/></button>
        </div>
      </div>

      <div className="cardAdmin ">
        <div className="manageProduct-title center">
        <div className="l-1"></div>
        <div className="l-3">Name</div>
        <div className="l-3">Email</div>
        <div className="l-2">Phone</div>
        <div className="l-2">Address</div>
        <div className="l-1">Edit / Delete</div>
      </div>
        {users.map((user) => (
        <div className='manageUser-list row '>
        <div className="l-1"></div>
        <div className="l-3">{user.username}</div>
        <div className="l-3">{user.email}</div>
        <div className="l-2">Phone</div>
        <div className="l-2">Address</div>
        <div className="l-1">
        <span onClick={() => handleDeleteUser(user)}> <AiOutlineDelete/></span></div>
        </div>
        ))}
      <Pagination pages={pages} setCurrentPage={setCurrentPage}  />
      </div>
    </>
  );
}

export default ManageUser