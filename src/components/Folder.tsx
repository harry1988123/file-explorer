import React from "react";
import { useState } from "react";
import { IExplorer } from "../data/folderData";

const Folder = ({ data, key, handleInsertNode }: { data: IExplorer; key: any, handleInsertNode: Function }) => {
    const [isClicked, setIsClicked] = useState({
        folder: false,
        file: false,
    });
    const onFolderClick = (e: any) => {

        setIsClicked({
            file: false,
            folder: true,
        });
    };
    const onFileClick = () => {
        setIsClicked({
            folder: false,
            file: true,
        });
    };

    const inputOnSubmit = (e: any) => {
        console.log("Input submitted");
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(data.id, e.target.value, isClicked.folder);

        }
    };

    if (data.isFolder || (data as any)?.length > 0) {
        //for folder
        return (
            <div
                style={{ padding: "1rem", margin: "1rem", border: "1px solid black" }}
            >
                <p>
                    {data?.name}{" "}
                    <button onClick={onFolderClick}>Create folder +</button>{" "}
                    <button onClick={onFileClick}>Create file +</button>
                </p>
                {(isClicked.file || isClicked.folder) && (
                    <>
                        <input
                            type="text"
                            onKeyDown={inputOnSubmit}
                            placeholder={`Create ${isClicked.file === true ? "file" : "folder"
                                }`}
                        />
                        <br />
                    </>
                )}
                {data?.items?.map((ele: any) => {
                    return <Folder data={ele} key={ele.id} handleInsertNode={handleInsertNode} />;
                })}
            </div>
        );
    } else {
        //for file
        return <><span>{data?.name}</span><br /></>;
    }
};

export default Folder;
