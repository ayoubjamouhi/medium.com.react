import React from 'react';
import {
   CardBody,
   CardFooter,
   Button,
   Col,
   FormGroup,
   Input,
   Label,
   Row,
} from 'reactstrap';
import './Home.scss'
import './featured-members.scss'
class Home extends React.Component {
   render() {
       return (
            <React.Fragment>
                <section className="featured">
                    <Row>
                        <Col className="left" xs="12" sm="5" md="5" lg="5" xl="5">
                            <img src="http://via.placeholder.com/300x200" alt="img" />
                            <h1><a href="#">The Surprising Good News About Parental Burnout</a></h1>
                            <h2 className="desc">
                                You can’t quit this job, but you can make it better
                            </h2>
                            <h6 className="author">
                                <a href="#">K.J. Dell'Antonia in LOVE/HATE</a>
                            </h6>
                            <h6 className="date">
                                Dec 12 * 5 min read
                            </h6>
                        </Col>
                        <Col className="center" xs="12" sm="4" md="4" lg="4" xl="4">
                            <div>
                                <div className="col-img">
                                    <img src="http://via.placeholder.com/300x200" alt="img" />
                                </div>
                                <h1>
                                    <a href="#">The Surprising Good News About Parental Burnout</a>
                                </h1>
                                <h2 className="desc">
                                    You can’t quit this job, but you can make it better
                                </h2>
                                <h6 className="author">
                                    <a href="#">K.J. Dell'Antonia in LOVE/HATE</a>
                                </h6>
                                <h6 className="date">
                                    Dec 12 * 5 min read
                                </h6>
                            </div>
                            <div>
                                <div className="col-img">
                                    <img src="http://via.placeholder.com/300x200" alt="img" />
                                </div>
                                <h1>
                                    <a href="#">The Surprising Good News About Parental Burnout</a>
                                </h1>
                                <h2 className="desc">
                                    You can’t quit this job, but you can make it better
                                </h2>
                                <h6 className="author">
                                    <a href="#">K.J. Dell'Antonia in LOVE/HATE</a>
                                </h6>
                                <h6 className="date">
                                    Dec 12 * 5 min read
                                </h6>
                            </div>
                        </Col>
                        <Col className="right" xs="12" sm="3" md="3" lg="3" xl="3">
                        <img src="http://via.placeholder.com/300x200" alt="img" />
                            <h1><a href="#">The Surprising Good News About Parental Burnout</a></h1>
                            <h2 className="desc">
                                You can’t quit this job, but you can make it better
                            </h2>
                            <h6 className="author">
                                <a href="#">K.J. Dell'Antonia in LOVE/HATE</a>
                            </h6>
                            <h6 className="date">
                                Dec 12 * 5 min read
                            </h6>
                        </Col>
                    </Row>
                </section>
                <section className="welcome">
                    <div className="text">
                        <h1>Welcome to readinGarden</h1>
                        <h5>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</h5>
                        <div>
                            <Button className="get--started">Get started</Button>
                            <Button className="learn--more">Learn more</Button>
                        </div>
                    </div>
                </section>
                <section className="featured-members">
                    <Row>
                        <Col className="left" xs="12" sm="7" md="7" lg="7" xl="7">
                            <div className="posts--top">
                                <h2>Featured for members</h2>
                                <a href="#">More ></a>
                            </div>
                            <div className="clearfix"></div>
                            <div className="posts">
                                <Row className="post">
                                    <Col xs="12" sm="9" md="9" lg="9" xl="9">
                                        <h1>
                                        <a href="#">How to Escape the Fear Virus in a Digital World</a>
                                        </h1>
                                        <h2 className="desc">I can’t trust a computer to make split-second decisions when it matters most</h2>
                                        <h6 className="author"><a href="#">The Real Janine</a></h6>
                                        <h6 className="date">Dec 5 * 5 min read</h6>
                                    </Col>
                                    <Col xs="12" sm="3" md="3" lg="3" xl="3" className="col-img">
                                    <img src="http://via.placeholder.com/300x200" alt="img" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs="4" sm="1" md="1" lg="1" xl="1"></Col>
                        <Col xs="12" sm="4" md="4" lg="4" xl="4" className="right">
                            <h2 className="top">
                                Popular on readinGarden
                            </h2>
                            <div className="posts">
                                <Row className="post">
                                    <Col xs="2" className="left">
                                        <span>01</span>
                                    </Col>
                                    <Col xs="10" className="right">
                                        <h1><a>The Blockchain Is a Reminder of the Internet’s Failure</a></h1>
                                        <h5 className="author--categorie">
                                            <a>Andrew Leonard</a>
                                            <span> in</span> <a>LOVE/HATE</a>
                                        </h5>
                                        <h6 className="date">Dec 5 . 6 min read</h6>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </section>
            </React.Fragment>
       );
   }
}
export default Home;