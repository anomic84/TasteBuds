import React, { useState } from 'react';
import './logininput.css';

const LoginInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className='formInput mx-auto flex flex-col'>
            <label
                className='p-2 text-darkblue font-titan
                          xl:text-2xl'
            >
                {label}
            </label>
            <input
                className='p-2 rounded
                   xl:text-2xl'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'confirmPassword' && setFocused(true)
                }
                focused={focused.toString()}
            />
        </div>
    );
};

export default LoginInput;
