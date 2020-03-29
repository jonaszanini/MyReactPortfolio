import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            This is the description of the project I made, here you can put wharever you want.
                        </CardText>
                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> Live demo </Button>
                        </CardActions>
                        <CardMenu style={{collor: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            This is the description of the project I made, here you can put wharever you want.
                        </CardText>
                        <CardActions border>
                            <Button colored> Github </Button>
                            <Button colored> CodePen </Button>
                            <Button colored> Live demo </Button>
                        </CardActions>
                        <CardMenu style={{collor: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1> Angular </h1>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>.NET</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>.NET</Tab>
                </Tabs>


                    <Grid >
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>

            </div>
        )
    }
}

export default Projects;