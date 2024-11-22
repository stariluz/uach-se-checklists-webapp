import { useEffect, useState } from "react";

import UUID from "src/types/uuid.type";
import ChecklistGuestWithUserModel from "src/models/ChecklistGuests/ChecklistGuestWithUserModel";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "src/models/Users";

const useDemoChecklistGuests = (count: number = 5, checklistId?: UUID,) => {
    const [items, setItems] = useState<ChecklistGuestWithUserModel[]>([]);
    useEffect(() => {
        const generatedItems: ChecklistGuestWithUserModel[] = Array.from({ length: count }, (_, index) => {
            return new ChecklistGuestWithUserModel({
                id: uuidv4() as UUID,
                role: "SPECTATOR",
                checklistId,
                user: new UserModel({
                    id: uuidv4() as UUID,
                    email: `usuario${index}@email.com`,
                })
            });
        });
        setItems(generatedItems);
    }, [count]);
    return items;
};

export default useDemoChecklistGuests;