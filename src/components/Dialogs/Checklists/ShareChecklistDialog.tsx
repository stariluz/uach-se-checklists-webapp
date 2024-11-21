import useDialog from "src/hooks/useDialog";
import Field from "src/components/Fields/Field";
import { useEffect, useState } from "react";
import IconCheck from "src/components/Icons/IconCheck";
import Button from "src/components/Buttons/Button";
import { IconArrowBack, IconLink, IconTrashXFilled } from "src/components/Icons";
import ChecklistGuestWithUserModel from "src/models/ChecklistGuests/ChecklistGuestWithUserModel";
import { RoleType } from "src/models/Roles";
import InputToggle from "src/components/Input/InputToggle";
import UUID from "src/types/uuid.type";
import useDemoChecklistGuests from "src/services/Checklists/useDemoChecklistGuests";
import ProfilePicture from "src/components/UserImage/ProfilePicture";

import '../Form.css'
import './ShareChecklistDialog.css'
import '../Dialog.css'


interface Props {
    className?: string;
    checklist_id?: UUID;
    isDemo?: boolean;
}

const ShareChecklistDialog = (props: Props) => {
    const { closeDialog } = useDialog();
    const [newContact, setNewContact] = useState("");

    // @todo Get ChecklistGuests with their emails
    const checklistGuestsData = useDemoChecklistGuests();
    const [checklistGuests, setChecklistGuests] = useState<ChecklistGuestWithUserModel[]>([]);


    useEffect(() => {
        setChecklistGuests(checklistGuestsData)
    });

    const onCopyLink = () => {
    }

    const onConfirm = () => {
        // @todo verify data is right and call update checklist methods
        // @todo check exceptions and show alerts with them
    }

    const changeChecklistGuest = (index: number, value: RoleType) => {
        setChecklistGuests((previousList) => {
            previousList[index].role = value;
            return [
                ...previousList.slice(0, index),
                previousList[index],
                ...previousList.slice(index),
            ]
        })
    }

    return <div className={`dialog dialog-open dialog-lg dialog-share`}>
        <header className="dialog-header">
            <Button
                className="btn-secondary btn-ghost btn-back"
                icon={<IconArrowBack />}
                onClick={closeDialog}
            />
            <h2>
                ¡Invita a tus contactos a colaborar o ver tu lista!
            </h2>
        </header>
        <main className="dialog-content">
            <form action="put" className="form">
                <Field
                    label="Invita a más contactos a tu checklist"
                    type="text"
                    placeholder="correo@correo.com"
                    value={newContact}
                    onChange={(value) => setNewContact(value)}
                />
                <div className="table">
                    <div className="row table-header">
                        <div className="col col-delete"></div>
                        <div className="col">Usuarios</div>
                        <div className="col">Nivel de permisos</div>
                    </div>
                    {
                        checklistGuests.map((checklistGuest: ChecklistGuestWithUserModel, index: number) =>
                            <div className="row" key={checklistGuest.id}>
                                <div className="col col-delete">
                                    <Button
                                        className="btn-danger btn-ghost"
                                        icon={<IconTrashXFilled />}
                                    />
                                </div>
                                <div className="col col-user">
                                    <ProfilePicture picture_url={checklistGuest.user?.picture_url} />
                                    {checklistGuest.user?.email}
                                </div>
                                <div className="col">
                                    <InputToggle
                                        type="toggle"
                                        placeholder="¿Puede colaborar?"
                                        value={checklistGuest.role}
                                        onChange={(value) => changeChecklistGuest(index, value)}
                                        acceptValue={"COLABORATOR"}
                                        rejectValue={"SPECTATOR"}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </form>
        </main>
        <footer className="dialog-footer">
            <Button
                className='btn-secondary'
                icon={<IconLink />}
                onClick={onCopyLink}
            >
                Copiar enlace de invitación
            </Button>

            <Button
                className='btn-primary'
                icon={<IconCheck />}
                onClick={onConfirm}
            >
                Guardar cambios
            </Button>
        </footer>
    </div>
}
export default ShareChecklistDialog;