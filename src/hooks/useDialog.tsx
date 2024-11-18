import { createContext, useContext, useState } from 'react';
import Overlay from 'src/components/Overlay/Overlay';

interface DialogContextType {
    showDialog: (content: React.ReactNode) => void;
    closeDialog: () => void;
}

const DialogContext = createContext<DialogContextType>({
    showDialog: () => { },
    closeDialog: () => { },
});

interface Props {
    children: React.ReactNode;
}

export const DialogProvider = (props: Props) => {
    const [dialogStack, setDialogStack] = useState(new Array<React.ReactNode>());

    // Mostrar un nuevo diálogo
    const showDialog = (content: React.ReactNode) => {
        setDialogStack((prev: Array<React.ReactNode>) => {
            return [...prev, content]
        });
    };

    // Cerrar el diálogo más reciente
    const closeDialog = () => {
        setDialogStack((prev: Array<React.ReactNode>) => prev.slice(0, -1));
    };
    // Obtener el diálogo más reciente
    const currentDialog = dialogStack.length > 0 ? dialogStack[dialogStack.length - 1] : null;

    return (
        <DialogContext.Provider value={{ showDialog, closeDialog }}>
            {/* Renderizar solo el diálogo actual */}
            {currentDialog && (
                <Overlay isActive={true}>
                    {currentDialog}
                </Overlay>
            )}
            {props.children}
        </DialogContext.Provider>
    );
};

const useDialog = (): DialogContextType => useContext(DialogContext);

export default useDialog;