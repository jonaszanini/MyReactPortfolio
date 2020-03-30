import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import jonas from '../images/jonas.png'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h2> Jonas Zanini</h2>
                        <img src={jonas} style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', color: 'white'}}>
                            A web developer seeking a developer position in a fast-growing organization to utilize expertise in software development, testing as well as deployment and support.
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton mono', color: 'white'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        (647) 834 7570
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton mono', color: 'white'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        jonaszanini@gmail.com
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton mono', color: 'white'}}>
                                        <i class="fas fa-house-user"></i>
                                        Steels x Younge
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;