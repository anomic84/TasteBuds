import React, { useState } from 'react';
import './commentinput.css';

const CommentInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className='formInput mx-auto flex  flex-col py-10 '>
            <label
                htmlFor='comment'
                className='text-darkblue text-sm leading-lg pb-1 font-manrope mb-2 font-bold
                              lg:text-lg
                              xl:text-xl'
            >
                {label}
            </label>
            <textarea
                className='rounded border border-borderblue text-slate-800 font-[500] p-1
                         xl:text-xl'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'confirmPassword' && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className='text-[10px] text-aboutbg font-manrope font-semibold mt-1 error'>
                {errorMessage}
            </span>
        </div>
    );
};

export default CommentInput;
