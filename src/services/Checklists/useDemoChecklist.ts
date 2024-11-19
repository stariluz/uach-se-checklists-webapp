import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ChecklistWithGuestModel } from "src/models/Checklists";
import { RoleType } from "src/models/Roles";
import { UserModel } from "src/models/Users";
import UUID from "src/types/uuid.type";
import { ChecklistGuestModel } from "src/models/ChecklistGuests";

const useDemoChecklist = ({ id, role }: { id?: UUID, role: RoleType }) => {
    const [item] = useState<ChecklistWithGuestModel>(
        new ChecklistWithGuestModel({
            user: new UserModel({
                google_token: `token_${id ?? uuidv4()}`,
                email: `user${id ?? uuidv4()}@example.com`,
                picture_url: ``
            }),
            guest: new ChecklistGuestModel({
                role: role
            }),
            url: `${id ?? uuidv4()}`,
        })
    );
    return item;
};

export default useDemoChecklist;