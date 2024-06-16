import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { setBuyedItems } from '../redux/firstSlice'

export default function Description() {
  const descriptionNumber = useSelector((state: RootState) => state.shopy.descriptionItem)
  const data = useSelector((state: RootState) => state.shopy.fetchItems)
  const dispatch = useDispatch<AppDispatch>()

  const idToIndex = descriptionNumber - 1

  return (
    <div className='mx-[10%] mt-[5%] p-[24px] border-2 border-blue-600 rounded'>
      <div className='flex flex-row'>
        <img className='w-[500px] h-[550px] mr-[56px]' src={data[idToIndex].image} alt="item" />
        <div className='flex flex-col gap-5 relative'>
          <div className='flex justify-between'>
            <p className='text-[28px]'>{data[idToIndex].title}</p>
            <p className='text-yellow-400 text-[20px]'>Rating: {data[idToIndex].rating.rate}</p>
          </div>
          <p className='text-[20px]'><span className='text-blue-600'>Price: </span>${data[idToIndex].price}</p>
          <p className='text-[20px]'><span className='text-blue-600'>Description: </span>{data[idToIndex].description}</p>
          <p className='text-[20px]'><span className='text-blue-600'>Category: </span>{data[idToIndex].category}</p>
          <button onClick={() => dispatch(setBuyedItems(data[idToIndex]))} className='bg-green-500 active:bg-green-700 rounded absolute bottom-1 w-[950px] h-[40px]'>Buy</button>
        </div>
      </div>
    </div>
  )
}
