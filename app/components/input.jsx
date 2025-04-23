import React from 'react'

export const Input = ({placeholderText,
  labelText,
  inputType,
  valueInput,
  onChangeHandler,
  nameInput,
  textArea}) => {
  return (
    <>
    { textArea ? (
      <div className='flex flex-col gap-3 mt-5'>
       
        <label className='text-lg' htmlFor="">{labelText}</label>
        <textarea className='border pl-2 pt-1 rounded-lg resize-none min-h-[100px]'
        name={nameInput}
        value={valueInput} onChange={e => onChangeHandler(e)}
        placeholder={placeholderText} id=""></textarea>
    </div>
    ) :
    (
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
  </>
  )
}
