import IInputProps from '../Input/IInputProps.props';
import Input from '../Input/Input';
import './Field.css'

interface Props {
    label?: React.ReactNode;
}

const Field = (props: IInputProps & Props) => {
    return (
        <div className="input-field">
            {
                props?.label ?
                    <label className="input-field-label" htmlFor={props.name ?? ''}>
                        {props.label}
                    </label>
                    :
                    null
            }

            <Input {...props} />
        </div>
    );
}
export default Field;