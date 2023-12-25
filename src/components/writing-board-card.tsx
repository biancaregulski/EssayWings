import { Draggable } from "react-beautiful-dnd";


export interface BoardItem {
    id: string;
    task: string;
    dueDate: string;
}


export interface BoardColumns {
    toDo: {
        title: string;
        items: BoardItem[];
    };
    inProgress: {
        title: string;
        items: BoardItem[];
    };
    done: {
        title: string;
        items: BoardItem[];
    };
}

interface BoardCardProps {
    // key: BoardItem;
    item: BoardItem;
    index: number;
}

const TaskCard = ({ item, index }: BoardCardProps) => {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {provided => (
                <div
                    className="board-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div>
                        <p><b>{item.id}</b> {item.task}</p>
                        <div className="secondary-details">
                            <p>
                                <span>
                                    {new Date(item.dueDate).toLocaleDateString("en-us", {
                                        month: "short",
                                        day: "2-digit",
                                    })}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;