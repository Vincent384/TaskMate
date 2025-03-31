import React from 'react'

export const Input = ({placeholderText,labelText,inputType,valueInput,onChangeHandler,nameInput}) => {
  return (
    <div className='flex flex-col gap-3 mt-5'>
        <label className='text-lg' htmlFor="">{labelText}</label>
        <input className='border pr-10 pl-2 py-2 rounded-lg' 
        type={inputType} value={valueInput}
        name={nameInput}
         onChange={(e) =>onChangeHandler(e)}
         placeholder={placeholderText}/>
    </div>
  )
}
