import { Container, Typography, Paper, Card, CardContent, Box } from '@material-ui/core';
import useStyles from './styles';


export default function HomePage() {
    const classes = useStyles();
    return (
      <main style={{padding: 0}}>
        
        <div className={classes.heroImage}>
            <h1 className={classes.heroText}>Welcome to the Local Transparency Project</h1>
        </div>

        <Container>
          <Box className={classes.cardRow}>
            <Card className={classes.homeCard}>
              <CardContent>
                <Typography>Test</Typography>
              </CardContent>
            </Card>
            <Paper className={classes.textContainer}>
              <Typography>Body</Typography>
            </Paper>
          </Box>

          
            
        </Container>
        
      </main>
    );
  }