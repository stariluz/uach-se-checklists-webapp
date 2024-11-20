interface IInputProps {
    className?: "string";
    type?: 'text' | 'date' | 'toggle';
    placeholder?: string;
    value?: any;
    name?: string;
    id?: string;
    onChange?: (value: any) => void;
}
export default IInputProps;