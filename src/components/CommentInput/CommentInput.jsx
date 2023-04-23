import React, {useState} from 'react'
import './commentinput.css'

const CommentInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="formInput mx-auto flex  flex-col ">
            <label className='text-navtext1 text-sm leading-lg pb-1 font-manrope
                              lg:text-lg
                              xl:text-xl'>{label}
            </label>
            <input
                className='rounded border border-borderblue text-slate-800 font-[500] p-1
                         xl:text-xl'
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



export default CommentInput