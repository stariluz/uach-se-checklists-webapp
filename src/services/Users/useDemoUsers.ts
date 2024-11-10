import { useEffect, useState } from "react";
import { UserModel } from "src/models/Users";

const useDemoUsers = (count: number = 5) => {
    const [items, setItems] = useState<UserModel[]>([]);

    useEffect(() => {
        const generatedItems: UserModel[] = Array.from({ length: count }, (_, index) => {
            return new UserModel({
                google_token: `token_${index}`,
                email: `user${index}@example.com`,
                picture_url: ``
            });
        });
        setItems(generatedItems);
    }, [count]);

    return items;
};

export default useDemoUsers;