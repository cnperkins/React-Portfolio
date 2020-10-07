import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://imagizer.imageshack.com/img923/3143/RH5JYV.jpg"
                            alt="chloe"
                            className="chloe-img"
                        />
                        <div className="banner-text">
                            <h1>Chloe Perkins</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/chloe-perkins-5245b6100/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/cnperkins" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;