'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const TextEditor = ({ value, changeHandler }) => {
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            value={value}
            tabIndex={1}
            onChange={(data) => changeHandler(data)}
        />
    );
};

export default TextEditor;
