import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { displayCurrent, setBuyedItems } from '../redux/firstSlice'

export default function ItemsBlock(props: any) {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <div className='border-y-2'>
                <div className="w-[300px] h-[350px] m-[75px] flex flex-col justify-center align-middle">
                    <img className="size-[300px]" src={props.item.image} alt='Item' />
                    <div className="text-center">
                        <p>
                            <b>{props.item.title}</b>
                        </p>
                        <p>${props.item.price}</p>
                    </div>
                    <div className='flex justify-center'>
                        <Link onClick={() => dispatch(displayCurrent(props.item.id))} to="/description"><button className='border-2 rounded hover:bg-blue-500 active:bg-blue-600 p-2'>Description</button></Link>
                        <button onClick={() => dispatch(setBuyedItems(props.item))} className='border-2 rounded hover:bg-blue-500 active:bg-blue-600 p-2'>Buy</button>
                    </div>
                </div>
            </div>
        </>
    )
}
