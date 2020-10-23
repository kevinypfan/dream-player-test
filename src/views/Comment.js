import { Container, Divider } from "@material-ui/core";
import React from "react";
import { Grid, Button, TextField, Avatar } from "@material-ui/core";
import styled from "styled-components";
import CommentList from "../components/comment/CommentList";

const Section = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  margin-top: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 16px;
  display: block;
  padding: 1em 2em;
  overflow-y: auto;
`;

// const commentBlock = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow-y: auto;
// `;

const CommentCountText = styled.div`
  display: flex;
`;

function Comment() {
  return (
    <Container>
      <Section>
        <Grid container justify="space-between">
          <Grid item>
            <CommentCountText>5 則留言</CommentCountText>
          </Grid>
          <Grid item>
            <CommentCountText>Powered by KevinFan</CommentCountText>
          </Grid>
        </Grid>

        <Divider></Divider>
        <Grid container>
          <Grid item xs={2} justify="center">
            <Avatar
              variant="rounded"
              src="https://profile.line-scdn.net/0h-tvHALWncltLMV6Ox9gNDHd0fDY8H3QTMwVuOmsxfGtjCDFYJFU0NGo4fDxnADIMcwA0bT41f20y"
            />
          </Grid>
          <Grid item xs={10} justify="center">
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              fullWidth
              rows={3}
              defaultValue="Default Value"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <CommentCountText>使用者名稱 - kevinypfan</CommentCountText>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
        <Divider></Divider>
        <CommentList />
      </Section>
    </Container>
  );
}

export default Comment;
