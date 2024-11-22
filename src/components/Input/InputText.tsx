import { useEffect, useState } from "react";
import IInputProps from "./IInputProps.props";
import './Input.css'

const InputText = (props: IInputProps) => {
    const [value, setValue] = useState<string>(props.value ?? undefined);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) props.onChange(event.target.value);
        else setValue(value);
    }
    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    return (
        <input
            className={`input ${props.className ?? ''}`}
            type="text"
            placeholder={props.placeholder}
            value={value ?? undefined}
            name={props.name}
            id={props.id}
            onChange={handleChange}
        />
    );
}
export default InputText;