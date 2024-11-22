import { useEffect, useRef, useState } from "react";
import IInputProps from "./IInputProps.props";
import Button from "../Buttons/Button";
import './Input.css'
import './InputDate.css'
import { IconCalendarMonth } from "../Icons";

const InputDate = (props: IInputProps) => {
    const [value, setValue] = useState<Date>(props.value ?? undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        inputRef?.current?.showPicker(); // Abre el calendario cuando se hace clic en el botón
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(new Date(event.target.value));
        else setValue(value);
    }
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    return (
        <div className="input-date-container">
            <input
                className={`input input-date-input ${props.className ?? ''}`}
                type="date"
                placeholder={props.placeholder}
                value={value ? value.toISOString().split('T')[0] : undefined}
                name={props.name}
                id={props.id}
                onChange={handleChange}
                ref={inputRef}
            />
            <Button
                onClick={handleButtonClick}
                className="btn-secondary input-date-btn"
                icon={<IconCalendarMonth />}
            >
            </Button>
        </div>
    );
}
export default InputDate;