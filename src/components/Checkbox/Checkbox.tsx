import { useState } from 'react';
import styles from './Checkbox.module.css'
import { IconLockSquare, IconSquare, IconSquareCheck } from '../Icons';

interface Props {
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    disabled?: boolean;
}

const Checkbox = (props: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(props.checked ?? false);

    const handleCheckboxChange = () => {
        if (props.disabled) return;

        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (props.onChange) props.onChange(newCheckedState);
    };

    return (
        <div className={`${styles['checkbox-container']
            } ${props.disabled ? styles['checkbox-disabled'] : ''
            }`}>
            <label className={`${styles['checkbox-label']}`}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className={`${styles['checkbox-input']}`}
                    disabled={props.disabled}
                />

                <div className={`${styles['checkbox-icon']}`}>
                    {isChecked ?
                        <IconSquareCheck
                            className={`${styles['checked']
                                } ${props.disabled ? styles['disabled'] : ''
                                }`}
                        /> :
                        props.disabled ?
                            <IconLockSquare className={`${styles['disabled']}`} />
                            :
                            <IconSquare className={`${styles['unchecked']}`} />
                    }
                </div>
            </label>
        </div>
    );
}
export default Checkbox;