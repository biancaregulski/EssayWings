import React from "react";
import { HeadingExtension, BoldExtension, ItalicExtension, CalloutExtension } from 'remirror/extensions';
import { EditorComponent, Remirror, useRemirror } from '@remirror/react';
import 'remirror/styles/all.css';


const TextEditor = () => {
    const Menu = () => <button onClick={() => alert('clicked!')}>menu</button>;

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
            new CalloutExtension({ defaultType: 'warn' }), // Override defaultType: 'info'
        ],

        content: remirrorJsonFromStorage,
    });

    return (
        <div className="text-editor remirror-theme">
            <Remirror manager={manager} initialContent={state}>
                <EditorComponent />
                <Menu />
            </Remirror>
        </div>
    );
};

export default TextEditor;