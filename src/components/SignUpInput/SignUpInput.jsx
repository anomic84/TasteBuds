import React, { useState } from 'react'
import "./signupinput.css"

const SignUpInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
    return (
        <div className="formInput mx-auto flex flex-col">
        <label className='text-navtext1 text-lg leading-lg pb-1 font-manrope'>{label}</label>
        <input
        className='rounded border border-footerblue text-slate-800 font-[500] p-1'
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