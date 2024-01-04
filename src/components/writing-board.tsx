import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "../WritingBoardData";
import { useState } from "react";
import BoardCard, { BoardColumns, BoardItem } from './writing-board-card';

const WritingBoard = () => {
    const [columns, setColumns] = useState<BoardColumns>(columnsFromBackend);


    const onDragEnd = (result: DropResult, columns: BoardColumns, setColumns: React.Dispatch<React.SetStateAction<BoardColumns>>) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId as keyof BoardColumns];
            const destColumn = columns[destination.droppableId as keyof BoardColumns];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId as keyof BoardColumns];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };

    return (
        <div className="writing-board">
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                <div>
                    <div className="writing-board">
                        {Object.entries(columns).map(([columnId, column], index) => {
                            return (
                                <Droppable key={columnId} droppableId={columnId}>
                                    {provided => (
                                        <div className="board-column"
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            <div className='board-column-title'>
                                                {column.title}
                                            </div>
                                            {column.items.map((item: BoardItem, index: number) => (
                                                <BoardCard key={item.id} item={item} index={index} />
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            );
                        })}
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
};

export default WritingBoard;