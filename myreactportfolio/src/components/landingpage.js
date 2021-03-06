import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import jonas from '../images/jonas.png'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={jonas}
                            alt="Jonas Picture"
                            //width="250px" height="250px"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack web developer</h1>

                            <hr />

                            <p> C# .NET | API REST | Unit test | SQL | Angular | HTML/CSS | JavaScript | GitHub | Agile</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/jonaszanini/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"> </i>
                                </a>
                                <a href="https://github.com/jonaszanini" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"> </i>
                                </a>
                                <a href="http://jonaszanini.com/" rel="noopener noreferrer" target="_blank">
                                    <i class="fas fa-user-tie" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;