import React from "react";
import { Grid, Avatar, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1}>
          <Grid container justify="flex-end">
            <Avatar
              variant="rounded"
              className={classes.large}
              style={{ padding: "8px 16px" }}
              src="https://profile.line-scdn.net/0h-tvHALWncltLMV6Ox9gNDHd0fDY8H3QTMwVuOmsxfGtjCDFYJFU0NGo4fDxnADIMcwA0bT41f20y"
            />
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle1" component="h3">
            KevinFan
          </Typography>
          <Typography variant="body2" component="h3">
            2020-10-30 23:22:12
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={11} justify="flex-end">
          <Typography variant="body1" component="h3">
            本篇介紹如何在 Linux 系統上使用 crontab
            工作排程，設定讓系統定時自動執行指定的指令或程式。 Linux
            的管理者或使用者如果需要定期執行某些指令或程式，最常見的方式就是使用
            cron 來幫忙管理例行性工作排程，只要設定好 crontab
            設定檔之後，系統就會自動依照設定的時間，定期執行重複性的工作。
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
