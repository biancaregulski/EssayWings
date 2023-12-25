import { useState } from "react";

// import type { } from '@mui/x-tree-view/themeAugmentation';

import { columnsFromBackend } from "../WritingBoardData";
import { TreeView, TreeItem } from "@mui/x-tree-view";

const WritingDetails = () => {

    const [columns, setColumns] = useState(columnsFromBackend);

    return (
        <>
            <h4>Cognitive Load</h4>

            <div className="writing-details">
                <label>Notes:</label>
                <textarea></textarea>
                <button>Save</button>
                <button>Add Subsection</button>
            </div>
        </>
    );
};

export default WritingDetails;