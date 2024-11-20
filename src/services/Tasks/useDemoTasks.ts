import { useEffect, useState } from "react";
import { TaskModel } from "src/models/Tasks";
import UUID from "src/types/uuid.type";

const useDemoTasks = (count: number = 5, checklist_id?: UUID, task_group_id?: UUID,) => {
    const [items, setItems] = useState<TaskModel[]>([]);
    useEffect(() => {
        const generatedItems: TaskModel[] = Array.from({ length: count }, (_, index) => {
            return new TaskModel({
                title: `Task ${index} demo`,
                task_group_id: task_group_id ?? undefined,
                checklist_id: checklist_id ?? undefined,
            });
        });
        setItems(generatedItems);
    }, [count]);

    return items;
};

export default useDemoTasks;