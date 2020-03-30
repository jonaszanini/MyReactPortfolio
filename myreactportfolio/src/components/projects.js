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
                    <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover' }}>
                            MyReactPortfolio
                        </CardTitle>
                        <CardText>
                            React project created for study purpose.
                        </CardText>
                        <CardActions border>
                            <div className="projects-buttons">
                                <Button raised colored > Github </Button>
                                <Button raised colored> CodePen </Button>
                                <Button raised colored> Live demo </Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ collor: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
                        <CardTitle style={{ color: 'gray', height: '176px', background: 'url(https://www.vectorlogo.zone/logos/android/android-tile.svg) center / cover' }}>
                            AndroidDataBaseConnection
                        </CardTitle>
                        <CardText>
                            Android project created for SQLite Data Base Connection learning purpose 
                        </CardText>
                        <CardActions border>
                            <div className="projects-buttons">
                                <Button raised colored > Github </Button>
                                <Button raised colored> CodePen </Button>
                                <Button raised colored> Live demo </Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ collor: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
                        <CardTitle style={{ color: 'gray', height: '176px', background: 'url(https://images.vexels.com/media/users/3/129234/isolated/preview/73970c892d748c7507db8e10d71535b0-apple-logo-icon-by-vexels.png) center / cover' }}>
                            IOS-Calculator
                        </CardTitle>
                        <CardText>
                            Calculator made in swift for study purpose
                        </CardText>
                        <CardActions border>
                            <div className="projects-buttons">
                                <Button raised colored > Github </Button>
                                <Button raised colored> CodePen </Button>
                                <Button raised colored> Live demo </Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ collor: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png) center / cover' }}>
                            CSharpWebApi
                        </CardTitle>
                        <CardText>
                            Web API made with C# folowing a Udemy curse
                        </CardText>
                        <CardActions border>
                            <div className="projects-buttons">
                                <Button raised colored > Github </Button>
                                <Button raised colored> CodePen </Button>
                                <Button raised colored> Live demo </Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ collor: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '500', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png) center / cover' }}>
                            DOM-Pig-Game-JS
                        </CardTitle>
                        <CardText>
                            Small game made in JavaScript for study purpose
                        </CardText>
                        <CardActions border>
                            <div className="projects-buttons">
                                <Button raised colored > Github </Button>
                                <Button raised colored> CodePen </Button>
                                <Button raised colored> Live demo </Button>
                            </div>
                        </CardActions>
                        <CardMenu style={{ collor: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Android</Tab>
                    <Tab>IOS</Tab>
                    <Tab>C# WEB API</Tab>
                    <Tab>JavaScript</Tab>
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