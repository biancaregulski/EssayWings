import { useState } from "react";

// import type { } from '@mui/x-tree-view/themeAugmentation';

import { columnsFromBackend } from "../WritingBoardData";
import { TreeView, TreeItem } from "@mui/x-tree-view";

const WritingTree = () => {

    const [columns, setColumns] = useState(columnsFromBackend);

    const selectSection = (id) => {
        console.log(id);
    };


    // nodeIds should be 1.0, 1.1, 1.2, 2.0, 2.1, 2.1.0, etc.

    var currentLevel = 1;
    return (
        <div className='writing-tree-container'>
            <div className="writing-tree-header">
                <h4>Table of Contents</h4>
            </div>
            <div className="writing-tree">
                <TreeView>
                    <div className="tree-section">
                        <TreeItem nodeId={"1"} className="tree-title" label="Principles of Web Design">
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    column.items.map((item, index) => (
                                        <div className="tree-section">
                                            <TreeItem className={columnId} nodeId={item.id} label={item.task} >
                                            </TreeItem>
                                            <div className="section-select" onClick={() => selectSection(item.id)}>{">"}</div>
                                        </div>
                                    ))
                                );
                            })}
                        </TreeItem>
                        <div className="section-select" onClick={() => selectSection("1")}>{">"}</div>
                    </div>
                </TreeView>
            </div>
        </div >
    );
};

export default WritingTree;