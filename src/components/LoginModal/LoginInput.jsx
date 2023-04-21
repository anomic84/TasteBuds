import React, { useState} from 'react'

const LoginInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };

  return (
     <div className="formInput mx-auto flex flex-col">
        <label className=''>{label}</label>
        <input
        className=''
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
      </div>
  )
}

export default LoginInput