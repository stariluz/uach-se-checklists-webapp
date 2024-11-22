import { useEffect, useState } from "react";
import { TaskModel } from "src/models/Tasks";
import UUID from "src/types/uuid.type";

const useDemoTasks = (count: number = 5, checklistId?: UUID, task_groupId?: UUID,) => {
    const [items, setItems] = useState<TaskModel[]>([]);
    useEffect(() => {
        const generatedItems: TaskModel[] = Array.from({ length: count }, (_, index) => {
            return new TaskModel({
                title: `Task ${index} demo`,
                task_groupId: task_groupId ?? undefined,
                checklistId: checklistId ?? undefined,
            });
        });
        setItems(generatedItems);
    }, [count]);

    return items;
};

export default useDemoTasks;