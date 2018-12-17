import React from 'react';
import { Link } from 'react-router-dom';
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
import './Posts.scss'
import './Welcome.scss'
class Blog extends React.Component {
   render() {
       return (
            <React.Fragment>
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
                <section className="posts">
                        <div className="posts--top">
                            <h2>Posts</h2>
                            <Link to="/blog">more</Link>
                        </div>
                        <Row>
                            <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6">
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
                            <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6">
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
                            <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6">
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
                            <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6">
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
                            <Col className="left" xs="12" sm="6" md="6" lg="6" xl="6">
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

                        </Row>
                    </section>
            </React.Fragment>
       );
   }
}
export default Blog;