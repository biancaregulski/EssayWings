import { useState } from "react";


import { sampleDoc, saveDoc } from '../sample-doc';
import { TreeView, TreeItem } from "@mui/x-tree-view";

const Tree = () => {

    const HEADING = "heading";

    // const [columns, setColumns] = useState(columnsFromBackend);

    const selectSection = (id) => {
        console.log(id);
    };


    // nodeIds should be 1.0, 1.1, 1.2, 2.0, 2.1, 2.1.0, etc.

    const headerLevel1 = (nodeId, node) => {
        return (
            <>
                <TreeItem nodeId={nodeId} className="tree-title" label={node.content[0].text}>

                </TreeItem>
                <div className="section-select" onClick={() => selectSection(nodeId)}>{">"}</div>
            </>
        );
    };

    const headerLevel2 = (nodeId, node) => {
        return (
            <div className="tree-section">
                <TreeItem className={nodeId} nodeId={nodeId} label={node.content[0].text} >
                </TreeItem>
                <div className="section-select" onClick={() => selectSection(nodeId)}>{">"}</div>
            </div>
        );
    };

    // h1 opening node
    // h2a opening node
    // h2a closing node
    // h2b opening node
    // h2b closing node
    // h1 closing node



    // return heading 1
    // paragraph
    // heading 2
    // heading 3
    // paragraph
    // paragraph
    // heading 2

    // heading 1 -> loop to heading 2a -> loop to heading 3
    // -> return to heading 2b



    var docNodeId = 0;
    var nextHeader = null;

    var documentNodes = sampleDoc.content;

    var treeNodes = [];

    let minimumLevel = 1;

    // loop(minimumLevel);

    // main loop: return <TreeItem h1 with nested TreeItems
    // first call: ignore paragraph
    // second call, return <TreeItem h2

    function loop(currentLevel) {
        if (documentNodes.length <= docNodeId) {
            return null;
        }

        while (documentNodes[docNodeId].type !== HEADING) {
            docNodeId++;

            if (documentNodes.length <= docNodeId) {
                return null;
            }
        }


        let headerLevel = documentNodes[docNodeId].attrs.level;



        console.log('headerLevel: ' + headerLevel);
        console.log('minimumLevel: ' + minimumLevel);

        if (headerLevel < minimumLevel) {
            return null;
        }

        minimumLevel = headerLevel;

        let currentNode = documentNodes[docNodeId].content[0];
        let currentNodeId = docNodeId.toString();

        console.log(currentNode.text);
        console.log(currentNodeId);

        docNodeId++;

        let treeNodes = [];

        while 

        return (
                <>

                    <div className="tree-section">
                        <TreeItem id={currentNodeId} nodeId={currentNodeId} className="tree-title" label={currentNode.text}>

                            {currentLevel < 3 ? loop(headerLevel) : null}

                        </TreeItem>
                        <div className="section-select" onClick={() => selectSection(currentNodeId)}>{">"}</div>
                    </div>
                </>
            );
    }

    // [ 1, p, 2, p, 2]

    // 1 {
    //     2;
    //     2 {
    //         3;
    //     }
    // }

    return (

        <div className='writing-tree-container'>

            <TreeView>
                {loop(1)}
            </TreeView>
            {/* {Object.entries(sampleDoc.content).map(([nodeId, node], index) => {
                if (node.type === 'heading') {
                    if (node.attrs.level === 1) {
                        // console.log(node);
                        return (headerLevel1(nodeId, node));
                    }
                    else if (node.attrs.level === 2) {
                        return (headerLevel2(nodeId, node));
                    }
                }
                // console.log(nodeId);
                // console.log(node);
                // console.log(node['type']);
                return (nodeId);
            })
            } */}



            {/* <div className="writing-tree-header">
                <h4>Table of Contents</h4>
            </div>
            <div className="writing-tree">
                    
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
            </div> */}
        </div >
    );
};

export default Tree;