import React from 'react';

function FormFiel({ label ,type, name, value, onChange}){
    return (
        <div>
            <label>
               {label}
                <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormFiel;