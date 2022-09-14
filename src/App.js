import React from 'react';
import styled from 'styled-components';
import { Typography, AppBar,Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return(
      <div className="App">
            <CssBaseline>  
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCamera />
                        <Typography variant="h6">
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div>
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                This is a explanation part of this site and I will going to explaing about each components I used in here.
                                 Thanks for visiting my blog and please leave some comment and subscribe if you want!
                            </Typography>
                            <div>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary Action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </main>
            </CssBaseline>
      </div>
    )

}

export default App;