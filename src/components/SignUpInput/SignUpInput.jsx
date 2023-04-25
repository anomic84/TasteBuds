import React, { useState } from 'react'
import "./signupinput.css"

const SignUpInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput mx-auto flex flex-col ">
      <label className='p-2 text-navtext1 font-titan
                          xl:text-2xl'>{label}
                        </label>
      <input
        className='p-2 rounded
        xl:text-2xl'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='text-[10px] text-aboutbg font-manrope font-semibold mt-1 error'>{errorMessage}</span>
    </div>
  )
}

export default SignUpInput