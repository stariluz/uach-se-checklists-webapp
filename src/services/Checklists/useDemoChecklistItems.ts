import { useEffect, useState } from "react";
import { ChecklistItemModel } from "src/models/Checklists/ChecklistItemModel";
import { UserModel } from "src/models/Users";

const useDemoChecklistItems = (count: number = 5) => {
    const [items, setItems] = useState<ChecklistItemModel[]>([]);
    useEffect(() => {
        console.log(count, items)
        const generatedItems: ChecklistItemModel[] = Array.from({ length: count }, (_, index) => {
            return new ChecklistItemModel({
                user: new UserModel({
                    google_token: `token_${index}`,
                    email: `user${index}@example.com`,
                    picture_url: ``
                }),
                url: `${index}/${index}`,
            });
        });
        setItems(generatedItems);
    }, [count]);

    return items;
};

export default useDemoChecklistItems;