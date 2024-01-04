import React, { useCallback } from 'react';
import { useHelpers, useRemirrorContext } from '@remirror/react';
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { sampleDoc, saveDoc } from '../sample-doc';

// on new header, create new section

function LoadButton() {
  const { setContent } = useRemirrorContext();
  const handleClick = useCallback(() => setContent(sampleDoc), [setContent]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = useCallback(() => saveDoc(getJSON()), [getJSON]);

  return (
    <button onMouseDown={(event) => event.preventDefault()} onClick={handleClick}>
      Save
    </button>
  );
}

const Editor = () => (
  <WysiwygEditor placeholder='Start typing...'>
    <LoadButton />
    <SaveButton />
  </WysiwygEditor>
);

export default Editor;