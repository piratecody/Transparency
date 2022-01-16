import { Container, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';


export default function HomePage() {
    const classes = useStyles();
    return (
      <main>
        
        <div className={classes.heroImage}>
            <h1 className={classes.heroText}>Welcome to the Local Transparency Project</h1>
        </div>

        <Container>
            <Paper className={classes.textContainer}>
                <Typography variant="h4">
                    Deez
                </Typography>
            </Paper>
        </Container>
        
      </main>
    );
  }