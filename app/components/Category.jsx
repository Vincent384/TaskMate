import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export const Category = ({chooseCategory,setChooseCategory}) => {

const [toggle, setToggle] = useState(false)
const [tagName, setTagName] = useState('Home')

const calenderRef = useRef()

const menuCategories = [
    'Home',
    'Work',
    'Calender'
]

useEffect(() => {
    switch (chooseCategory) {
        case 'Home':
            setTagName('Home')
            break;
        case 'Work':
            setTagName('Work')
            break;
        case 'Calender':
            setTagName('Calender')
            break;    
        default:
            break;
    }

}, [chooseCategory])

useEffect(() => {

function clickOutSideHandler(e){
    if(calenderRef.current && !calenderRef.current.contains(e.target)){
        setToggle(false)
    }
}

document.addEventListener('mousedown',clickOutSideHandler)

return () => {
    document.removeEventListener('mousedown',clickOutSideHandler)    
}   


}, [])



function onClickHandler(item){
    setChooseCategory(item)
    setToggle(false)
}

  return (
    <div  className='flex justify-end relative'>
        <button className='flex justify-between items-center p-2 w-[125px] bg-gray-50 border rounded-md mt-5 cursor-pointer' 
        onClick={() => setToggle(prev => !prev)}>
        <span>
        {tagName}
        </span>
         {toggle ? <ChevronUp /> : <ChevronDown />}
        </button>
        <>
            {
                    toggle && (
                    <div ref={calenderRef} className='absolute z-50 flex flex-col top-15.5 right-0
                     w-[125px] bg-gray-50 border rounded-bl-md rounded-br-md'>
                        {
                            menuCategories.map((item,index) =>(
                                <button className='p-1 border-gray-400 cursor-pointer border' 
                                onClick={() => onClickHandler(item)}
                                 key={index}>
                                    {item}
                                </button>
                            ))
                        }
                    </div>  
                    )
                
            }
            </>
    </div>
  )
}
