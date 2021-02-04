import React from "react";

function Input({type, name, errorId, inputType, placeholder, minLength, maxLength}) {
    return (
        <>
            <input
                type={type}
                name={name}
                className={`dialog__input dialog__input_type_${inputType}`}
                placeholder={placeholder}
                required
                minLength={minLength}
                maxLength={maxLength}
            />

            <span
                id={errorId}
                className="dialog__error"
            />
        </>
    );
}

export default Input;