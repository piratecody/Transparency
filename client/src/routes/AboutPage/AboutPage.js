import {Container, Typography, Paper} from '@material-ui/core';

import useStyles from './styles';

export default function AboutPage() {
  const classes = useStyles();
    return (
      <main style={{ padding: "1rem 0" }}>
        <Container>
          <Paper className={classes.textContainer}>
            <Typography variant="h4">About</Typography>
          </Paper>
        </Container>
      </main>
    );
  }