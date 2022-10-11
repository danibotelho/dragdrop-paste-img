import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

let styleImage = {
  height: '15em',
  width: 'auto ',
};

export const CtrlV = () => {
  const [image, setImage] = useState();

  const handleChange = (e: any) => {
    let item = e.clipboardData.items[0];

    if (item.type.indexOf('image') === 0) {
      setImage(item.getAsFile());
    } else {
      alert('Just Image');
    }
  };
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ margin: '0px 0px 15px 0px' }}>
          CTRL + V
        </Typography>
        <TextField
          type="text"
          placeholder="Image Ctrl + V"
          id="image"
          onPaste={handleChange}
          required
          fullWidth
        />
      </Box>
      <Typography variant="h6" sx={{ margin: '15px 0px 15px 0px' }}>
        Image onPaste
      </Typography>
      {image && (
        <Box>
          <img
            alt="not fount"
            style={styleImage}
            src={URL.createObjectURL(image)}
          />
        </Box>
      )}
      {image && (
        <Box>
          <Button
            variant="contained"
            onClick={() => {
              setImage(undefined);
            }}
          >
            Remove
          </Button>
        </Box>
      )}
    </Box>
  );
};
