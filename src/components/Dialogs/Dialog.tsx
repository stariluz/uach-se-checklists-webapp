import { MouseEventHandler, MouseEvent, ReactNode } from 'react';
import './Dialog.css'
import Button from '../Buttons/Button';
import IconCheck from '../Icons/IconCheck';
import IconX from '../Icons/IconX';

interface Props {
    children?: ReactNode;
    dialogSmall?: boolean;
    className?: string;
    header?: ReactNode;
    onConfirm?: MouseEventHandler;
    onCancel?: MouseEventHandler;
}

const Dialog = (props: Props) => {
    const onCancel: MouseEventHandler = (event: MouseEvent) => {
        if (props.onCancel) {
            props.onCancel(event);
        }
    }
    const onConfirm: MouseEventHandler = (event: MouseEvent) => {
        if (props.onConfirm) {
            props.onConfirm(event);
        }
    }
    return <div className={`dialog ${props.dialogSmall ?? 'dialog--small'} dialog-open`}>
        {
            props.header ?
                <header className="dialog-header">
                    {props.header}
                </header>
                :
                null
        }
        <main className="dialog-content">
            {props.children}
        </main>
        <footer className="dialog-footer">
            <Button
                className='btn-danger'
                icon={<IconX />}
                onClick={onCancel}
            >
                Cancelar
            </Button>

            <Button
                className='btn-secondary'
                icon={<IconCheck />}
                onClick={onConfirm}
            >
                Aceptar
            </Button>
        </footer>
    </div>
}

export default Dialog;