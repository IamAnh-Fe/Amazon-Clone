import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {handleSearch} from '~/components/Navbar/searchSlice'

const useSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.search)
  const [search, setSearch] = useState(searchValue)

   const handleSearching = (e) => {
    setSearch(e.target.value)  
  }
  const handleSubmitSearch = () => {
    dispatch(handleSearch(search))
  }
   return ({ search, handleSearching, handleSubmitSearch });
}
export default useSearch;