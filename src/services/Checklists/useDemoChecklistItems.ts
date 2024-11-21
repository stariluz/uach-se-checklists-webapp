import { useEffect, useState } from "react";
import { ChecklistGuestModel } from "src/models/ChecklistGuests";
import { ChecklistWithGuestModel } from "src/models/Checklists";
import { ChecklistItemModel } from "src/models/Checklists/ChecklistItemModel";
import { UserModel } from "src/models/Users";

const useDemoChecklistItems = (count: number = 5) => {
    const [items, setItems] = useState<ChecklistItemModel[]>([]);
    useEffect(() => {
        const generatedItems: ChecklistWithGuestModel[] = Array.from({ length: count }, (_, index) => {
            return new ChecklistWithGuestModel({
                user: new UserModel({
                    google_token: `token_${index}`,
                    email: `user${index}@example.com`,
                    picture_url: ``
                }),
                guest: new ChecklistGuestModel({ role: 'OWNER' }),
                url: `${index}`,
            });
        });
        setItems(generatedItems);
    }, [count]);

    return items;
};

export default useDemoChecklistItems;