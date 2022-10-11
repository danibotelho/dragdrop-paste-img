import React from 'react';
import { DragDrop } from './components/DragDrop';
import { CtrlV } from './components/CtrlV';
import { Box } from '@mui/material';
import './style.css';
import { TextEditor } from './components/ReactQuill';

function App() {
  return (
    <Box className="Container">
      <Box className="Content">
        <DragDrop />
        <CtrlV />
        <TextEditor />
      </Box>
    </Box>
  );
}

export default App;
