import useDialog from "src/hooks/useDialog";
import Field from "src/components/Fields/Field";
import { useEffect, useState } from "react";
import Button from "src/components/Buttons/Button";
import { IconArrowBack, IconLink, IconTrashXFilled, IconUserStar } from "src/components/Icons";
import ChecklistGuestWithUserModel from "src/models/ChecklistGuests/ChecklistGuestWithUserModel";
import { RoleType } from "src/models/Roles";
import InputToggle from "src/components/Input/InputToggle";
import ProfilePicture from "src/components/UserImage/ProfilePicture";

import '../Form.css'
import './ShareChecklistDialog.css'
import '../Dialog.css'
import useAxiosWithAuth from "src/hooks/useAxiosAuth";
import { useLocation, useNavigate } from "react-router-dom";


interface Props {
    className?: string;
    checklistId?: number;
    isDemo?: boolean;
    onComplete?: any;
    onChange?: any;
}

const ShareChecklistDialog = (props: Props) => {
    const { closeDialog } = useDialog();
    const [newContact, setNewContact] = useState("");
    const [checklistGuests, setChecklistGuests] = useState<ChecklistGuestWithUserModel[]>([]);
    const axiosWithAuth = useAxiosWithAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const controller = new AbortController();

    useEffect(() => {
        getChecklistGuests();
    }, [])

    const getChecklistGuests = async () => {
        try {
            const response = await axiosWithAuth.get(`/checklists-guests/${props.checklistId}`, {
                signal: controller.signal
            });
            console.log("@dev GetChecklistGuests", response);

            setChecklistGuests(response.data.map((checklistGuest: any) => {
                return new ChecklistGuestWithUserModel(checklistGuest)
            }));

        } catch (err) {
            console.error(err);
            // @todo Redirect to 404 page
        }
    }


    const onComplete = () => {
        if (props.onComplete) props.onComplete();
        closeDialog();
    }
    const onCopyLink = () => {
        // Obtiene la URL actual
        const currentUrl = window.location.href;
    
        // Intenta copiarla al portapapeles
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                console.log('Enlace copiado');
                // alert('¡Enlace copiado al portapapeles!');
            })
            .catch((err) => {
                console.error('Error al copiar el enlace:', err);
                // alert('Hubo un problema al copiar el enlace.');
            });
    };
    

    const changeChecklistGuest = async (checklistGuest: ChecklistGuestWithUserModel, value: RoleType) => {
        // @todo verify data is right and call update checklist methods
        // @todo check exceptions and show alerts with them

        try {
            const response = await axiosWithAuth.patch(`/checklists-guests/${checklistGuest?.id}`, {
                role: value
            });
            if (props.onChange) props.onChange();
            console.log("@dev ChangeChecklistGuest", response);
            getChecklistGuests();
        } catch (err) {
            console.error(err);
            // @todo add error alert
        }
    }
    const saveNewContact = async () => {
        // @todo verify data is right and call update checklist methods
        // @todo check exceptions and show alerts with them

        try {
            const response = await axiosWithAuth.post(`/checklists-guests/`, {
                checklistId: props.checklistId,
                email: newContact,
            });
            if (props.onChange) props.onChange();
            console.log("@dev ChangeChecklistGuest", response);
            setNewContact('');
            getChecklistGuests();
        } catch (err) {
            console.error(err);
            setNewContact('');
            // @todo add error alert
        }
    }

    return <div className={`dialog dialog-open dialog-lg dialog-share`}>
        <header className="dialog-header">
            <Button
                className="btn-secondary btn-ghost btn-back"
                icon={<IconArrowBack />}
                onClick={onComplete}
            />
            <h2>
                ¡Invita a tus contactos a colaborar o ver tu lista!
            </h2>
        </header>
        <main className="dialog-content">

            <form action="put" className="form">
                <div className="d-flex">
                    <Field
                        label="Invita a más contactos a tu checklist"
                        type="text"
                        placeholder="correo@correo.com"
                        value={newContact}
                        onChange={(value) => setNewContact(value)}
                    />
                    <Button
                        icon={<IconUserStar />}
                        onClick={saveNewContact}
                    />
                </div>
                {checklistGuests && checklistGuests.length > 0 ?
                    <div className="table">
                        <div className="row table-header">
                            <div className="col col-delete"></div>
                            <div className="col">Usuarios</div>
                            <div className="col">Nivel de permisos</div>
                        </div>
                        {
                            checklistGuests.map((checklistGuest: ChecklistGuestWithUserModel) =>
                                <div className="row" key={checklistGuest.id}>
                                    <div className="col col-delete">
                                        <Button
                                            className="btn-danger btn-ghost"
                                            icon={<IconTrashXFilled />}
                                        />
                                    </div>
                                    <div className="col col-user">
                                        <ProfilePicture className="col-picture" picture_url={checklistGuest.user?.picture_url} />
                                        {checklistGuest.user?.email}
                                    </div>
                                    <div className="col">
                                        <InputToggle
                                            type="toggle"
                                            placeholder="¿Puede colaborar?"
                                            value={checklistGuest.role}
                                            onChange={(value) => changeChecklistGuest(checklistGuest, value)}
                                            acceptValue={"COLABORATOR"}
                                            rejectValue={"SPECTATOR"}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    : <div className='init-list'>
                        ¡Invita a tu primer contacto!<br />Recuerda que debe estar registrado.
                    </div>
                }
            </form>

        </main>
        <footer className="dialog-footer">
            <Button
                className='btn-primary'
                icon={<IconLink />}
                onClick={onCopyLink}
            >
                Copiar enlace de invitación
            </Button>
        </footer>
    </div>
}
export default ShareChecklistDialog;