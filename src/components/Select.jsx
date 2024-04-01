import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} id={id}>
            {/*options are an array 
            ?.map is loops only when the options value are present*/}
            {options?.map((option) => 
            <option key={option} value={option}>
              {option}
            </option>)}
        </select>
    </div>
  )
}

export default React.forwardRef(Select) // a different syntax for the forwardRef

// forwardRef lets your component expose a DOM node to parent component with a ref.


// Clicking the button will focus the input.
// The Form component defines a ref and passes it to the MyInput
// component. The MyInput component forwards that ref to 
// the browser <input>. This lets the Form component focus the <input>.