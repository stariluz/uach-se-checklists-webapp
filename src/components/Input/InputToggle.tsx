import { useState } from "react";
import IInputProps from "./IInputProps.props";
import Button from "../Buttons/Button";
import IconCheck from "../Icons/IconCheck";
import IconX from "../Icons/IconX";
import './Input.css'
import './InputToggle.css'

const InputToggle = (props: IInputProps) => {
    const [value, setValue] = useState(props?.value??'');

    const handleToggle = (value: boolean) => {
        setValue(value);
        if (props.onChange) props.onChange(value); // Notificar al padre si hay un callback
    };

    return (
        <div className={`input-toggle-container ${props.className ?? ''}`}>
            <span className="input input-toggle-label">{props.placeholder}</span>
            <div className={`${'input-toggle-actions'}`}>
                <label className={`${'input-toggle-input-label'}`}>
                    <input
                        type="radio"
                        name={props.name}
                        id={props.id}
                        checked={value}
                        className={`${'input-toggle-input'}`}
                        readOnly
                    />

                    <Button
                        className={`input-toggle-btn btn-secondary ${value === false ? 'btn-negative' : ''}`}
                        onClick={() => handleToggle(false)}
                        icon={<IconX />}
                    >
                    </Button>

                    <Button
                        className={`input-toggle-btn btn-secondary ${value === true ? 'btn-negative' : ''}`}
                        onClick={() => handleToggle(true)}
                        icon={<IconCheck />}
                    >
                    </Button>
                </label>
            </div >
        </div >
    );
}
export default InputToggle;