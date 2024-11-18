import { useState } from 'react';
import styles from './Checkbox.module.css'
import IconCheck from '../Icons/IconCheck';
import IconX from '../Icons/IconX';

interface Props {
    label?: string;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
}

const Checkbox = (props: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked ?? false);

    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (props.onChange) props.onChange(newCheckedState);
    };

    return (
        <div className={`${styles['checkbox-container']}`}>
            <label className={`${styles['checkbox-label']}`}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className={`${styles['checkbox-input']}`}
                />

                <div className={`${styles['checkbox-icon']}`}>
                    {isChecked ? <IconCheck /> : <IconX />}
                </div>
            </label>
        </div>
    );
}
export default Checkbox;