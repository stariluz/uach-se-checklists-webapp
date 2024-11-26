import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import IconCheck from "../Icons/IconCheck";
import IconX from "../Icons/IconX";
import './Input.css'
import './InputToggle.css'
import IInputToggleProps from "./IInputToggleProps.props";

const InputToggle = ({
    acceptValue = true,
    rejectValue = false,
    className, id, name, onChange, placeholder, type, value
}: IInputToggleProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    // useEffect(() => {
    //     setCurrentValue(value);
    // }, [value])

    const handleToggle = (currentValue: boolean) => {
        setCurrentValue(currentValue);
        if (onChange) onChange(currentValue); // Notificar al padre si hay un callback
    };
    return (
        <div className={`input-toggle-container ${className ?? ''}`}>
            <span className="input input-toggle-label">{placeholder}</span>
            <div className={`${'input-toggle-actions'}`}>
                <label className={`${'input-toggle-input-label'}`}>
                    <input
                        type="radio"
                        name={name}
                        id={id}
                        checked={currentValue}
                        className={`${'input-toggle-input'}`}
                        readOnly
                    />

                    <Button
                        className={`input-toggle-btn btn-secondary ${currentValue === rejectValue ? 'btn-negative' : ''}`}
                        onClick={() => handleToggle(rejectValue)}
                        icon={<IconX />}
                    >
                    </Button>

                    <Button
                        className={`input-toggle-btn btn-secondary ${currentValue === acceptValue ? 'btn-negative' : ''}`}
                        onClick={() => handleToggle(acceptValue)}
                        icon={<IconCheck />}
                    >
                    </Button>
                </label>
            </div >
        </div >
    );
}
export default InputToggle;