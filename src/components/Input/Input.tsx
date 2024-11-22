import IInputProps from './IInputProps.props';
import InputDate from './InputDate';
import InputText from './InputText';
import InputToggle from './InputToggle';

const Input = (props: IInputProps) => {
    switch (props.type) {
        case 'date':
            return <InputDate {...props} />;
            break;
        case 'toggle':
            return <InputToggle {...props} />;
            break;
        default: // text
            return <InputText {...props} />
            break;
    }
}
export default Input;