import { useActive, useCommands } from '@remirror/react';

const TextEditorMenu = () => {
    const { toggleBold, toggleItalic, toggleHeading, toggleSamp, focus } = useCommands();
    const active = useActive();

    const headerButton = (headerLevel: number) => {
        return (
            <button
                onClick={() => {
                    toggleHeading({ level: headerLevel });
                    focus();
                }}
                style={{
                    fontWeight: active.heading({ level: headerLevel }) ? 'bold' : undefined
                }}
                disabled={toggleHeading.enabled({ level: headerLevel }) === false}
            >h{headerLevel}</button>
        );
    };

    return (
        <div>
            {headerButton(1)}
            {headerButton(2)}
            {headerButton(3)}

            <button
                onClick={() => {
                    toggleItalic();
                    focus();
                }}
                style={{
                    fontWeight: active.italic() ? 'bold' : undefined
                }}
                disabled={toggleItalic.enabled() === false}
            ><i>I</i></button>

            <button
                onClick={() => {
                    toggleBold();
                    focus();
                }}
                style={{
                    fontWeight: active.bold() ? 'bold' : undefined
                }}
                disabled={toggleBold.enabled() === false}
            >B</button>

            <button
                onClick={() => {
                    toggleSamp();
                    focus();
                }}
                style={{
                    fontWeight: active.bold() ? 'bold' : undefined
                }}
                disabled={toggleSamp.enabled() === false}
            >{"{}"}</button>
        </div>
    );
};

export default TextEditorMenu;