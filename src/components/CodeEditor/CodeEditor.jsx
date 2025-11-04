import React, { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorState } from '@codemirror/state';
import { tokyoNightStorm, tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import { tomorrowNightBlue } from '@uiw/codemirror-theme-tomorrow-night-blue';
import { basicSetup } from 'codemirror';  // depends on your wrapper
import { javascript } from '@codemirror/lang-javascript';
import { githubLightStyle } from "@uiw/codemirror-theme-github";

const languageExtensions = {
  js: javascript({ jsx: true, typescript: false }),
};

export default function CodeEditor({ language = 'js', value="<CodeMirror \ntheme={tomorrowNightBlueInit({\nsettings: {\n caret: '#c6c6c6',\nfontFamily: 'monospace',\n}\n})}\n/>"
    
    
    
    
    
    , onChange }) {
  const ext = languageExtensions[language] || languageExtensions.js;

  return (
    <CodeMirror
      value={value}
      extensions={[ basicSetup, ext ]}
      onChange={onChange}
      theme={tomorrowNightBlue}
      height="fit-content"
      
    />
  );
}
