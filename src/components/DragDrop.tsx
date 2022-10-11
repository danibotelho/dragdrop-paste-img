import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Dropzone from 'react-dropzone';
import './DragDrop.css';

export const DragDrop = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleDrop = (acceptedFiles: any) =>
    setFileNames(acceptedFiles.map((file: any) => file.name));

  return (
    <Box>
      <Box className="formBoxDragDrop">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <Box {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <Typography>
                Drag n drop files, or click to select files
              </Typography>
            </Box>
          )}
        </Dropzone>
      </Box>
      <Box className="fileList">
        <Typography>Files:</Typography>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};
