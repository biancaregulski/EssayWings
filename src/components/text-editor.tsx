import React, { useCallback } from "react";
import { HeadingExtension, BoldExtension, ItalicExtension, CalloutExtension } from 'remirror/extensions';
import { EditorComponent, Remirror, useHelpers, useKeymap, useRemirror } from '@remirror/react';
import 'remirror/styles/all.css';
import TextEditorMenu from "./text-editor-menu";
import { SampExtension } from "../samp-extension";


const textEditorHooks = [
    () => {
        const { getJSON } = useHelpers();
        const handleSaveShortcut = useCallback(
            ({ state }) => {
                console.log(`Save to backend: ${JSON.stringify(getJSON(state))}`);

                // prevents additional key handlers from being run
                return true;
            },
            [getJSON],
        );

        // mod means platform agnostic modifier
        // i.e. ctrl on window, cmd on mac
        useKeymap('Mod-s', handleSaveShortcut);
    }
];

const TextEditor = () => {

    const remirrorJsonFromStorage = {
        type: 'doc',
        content: [
            { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Example header' }] },
            {
                type: 'paragraph',
                content: [
                    { type: 'text', text: 'This is a ' },
                    { type: 'text', marks: [{ type: 'italic' }], text: 'test' },
                ],
            },
        ],
    };

    const { manager, state } = useRemirror({
        extensions: () => [
            new HeadingExtension({}),
            new BoldExtension({}),
            new ItalicExtension({}),
            new SampExtension(),
            new CalloutExtension({ defaultType: 'warn' }), // Override defaultType: 'info'
        ],

        content: remirrorJsonFromStorage,
    });

    return (
        <div className="text-editor remirror-theme">
            <Remirror
                manager={manager}
                initialContent={state}
                hooks={textEditorHooks}>
                <TextEditorMenu />
                <EditorComponent />
            </Remirror>
        </div>
    );
};

export default TextEditor;