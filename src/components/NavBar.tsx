import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { setInputValue } from '../redux/firstSlice'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const buyedItems = useSelector((state: RootState) => state.shopy.buyedItems)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='bg-blue-500 p-5 h-[80px] flex justify-between align-middle shadow-lg'>
      <div className='flex align-middle gap-4'>
        <Link to="/"><p className='text-[20px] text-white p-1 cursor-pointer hover:text-yellow-300'>Shopy</p></Link>
        <input className='w-[200px] h-[35px] rounded' type="text" onChange={(e) => dispatch(setInputValue(e.target.value))} />
      </div>
      <div>
        <ul className='flex align-middle relative'>
          {
            buyedItems.length > 0 &&
            <div className='absolute right-[-15px] top-[-10px] text-center w-6 h-6 bg-green-400 border rounded-md border-white'>
              <p>{buyedItems.length}</p>
            </div>
          }
          <Link to="shop"><li className='text-[20px] text-white cursor-pointer border-2 rounded p-1 hover:border-yellow-300 hover:text-yellow-300'>Shop cart</li></Link>
        </ul>
      </div>
    </div>
  )
}
