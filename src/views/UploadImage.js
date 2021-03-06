import React, { useState, useRef } from "react";
import { Container, Paper, Button, Typography, Box } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageBlock: {
    backgroundColor: "lightgray",
    width: "100%",
    height: "480px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const classes = useStyles();
  const inputRef = useRef(null);
  const onUploadClick = () => {
    console.log(inputRef);
    inputRef.current.click();
  };

  const onFileUpload = (event) => {
    console.log("upload: " + selectedFile);
  };

  const onFileChange = (event) => {
    // Update the state
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container>
      <Paper style={{ maxHeight: "100vh", overflow: "auto", padding: "16px" }}>
        <Button variant="contained" color="primary" onClick={onFileUpload}>
          上傳圖片
        </Button>
        <input
          ref={inputRef}
          accept="image/*"
          type="file"
          hidden
          onChange={onFileChange}
        />
        <Box my={2}>
          <Typography variant="h6" component="p">
            檔案名稱： {selectedFile && selectedFile.name}
          </Typography>
        </Box>

        <Paper
          variant="outlined"
          onClick={onUploadClick}
          className={classes.imageBlock}
        >
          {selectedFile && (
            <img
              className={classes.image}
              src={URL.createObjectURL(selectedFile)}
            />
          )}
          {!selectedFile && (
            <Box className={classes.imageBlock}>
              <AddPhotoAlternateIcon
                style={{ color: "white", fontSize: 96, display: "block" }}
              />
            </Box>
          )}
        </Paper>
      </Paper>
    </Container>
  );
}

export default UploadImage;
