import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { deleteBuyedItems } from '../redux/firstSlice'
import { Link } from 'react-router-dom'

export const ShopCart = function ShopCart() {
  const buyed = useSelector((state: RootState) => state.shopy.buyedItems)
  const dispatch = useDispatch<AppDispatch>()

  const reducerFunc = () => {
    return Math.floor(buyed.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price
    }, 0))
  }

  return (
    <>
      {
        buyed.length >= 1
          ?
          <button className='bg-green-500 shadow-md shadow-green-300 p-3 w-full'>Complete your payment ${reducerFunc()}</button>
          : ""
      }
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-10 px-10 m-10'>
          {
            buyed.length >= 1 ? buyed.map((item, index) => {
              return <div className='w-[300px] h-auto p-3 border-2 rounded m-5' key={index}>
                <div className='flex flex-col'>
                  <img className='size-[300px]' src={item.image} />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <button className='bg-green-500 rounded mb-2'>Buy</button>
                  <button onClick={() => dispatch(deleteBuyedItems(index))} className='bg-red-500 rounded'>Delete</button>
                </div>
              </div>
            }) : <div className='absolute flex flex-col justify-center'><p className='text-[24px] mr-3'>You have no items...</p><Link to="/"><p className='text-green-500 text-[24px] hover:text-green-600'>Continue your shoping</p></Link></div>
          }
        </div>
      </div>
    </>
  )
}
