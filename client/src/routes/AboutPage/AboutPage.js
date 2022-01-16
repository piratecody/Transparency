import {Container, Typography, Paper} from '@material-ui/core';

import useStyles from './styles';

export default function AboutPage() {
  const classes = useStyles();
    return (
      <main>
        <Container>
          <Paper className={classes.textContainer}>
            <Typography variant="h4">About</Typography>
          </Paper>
        </Container>
      </main>
    );
  }