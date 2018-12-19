import React from 'react';
import {
   Container,
   Row,
   Col
} from 'reactstrap';
import './Post.scss';
class Post extends React.Component {
    componentDidMount () {
        const { match: { params } } = this.props;
        console.log(params)
    }
   render() {
       return (
           <section className="post">
                <div className="image--top">
                    <img src="http://via.placeholder.com/1000x300" alt="img"/>
                    <p className="credit">Credit: fasphotogrpahic/iStock/Getty Images Plus</p>
                </div>
                <Row>
                    <Col xs="12" sm="3" md="3" lg="3" xl="3">
                        <div className="share">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </Col>
                    <Col xs="12" sm="9" md="9" lg="9" xl="9">
                        <h2 className="categorie">love/hate</h2>
                        <h1 className="title">The Surprising Good News About Parental Burnout</h1>
                        <h2 className="description">You can’t quit this job, but you can make it better</h2>
                        <div className="user">
                            <Row>
                                <Col xs="12" sm="1" md="1" lg="1" xl="1">
                                    <img src="http://via.placeholder.com/50x50" alt="images" class="img-circle"/>
                                </Col>
                                <Col xs="12" sm="2" md="2" lg="2" xl="2">
                                    <div className="name--follow">
                                        <h6>K.J. Dell'Antonia</h6>
                                        <button>Follow</button>
                                    </div>
                                    <div className="date">
                                        Dec 12 * 5 min read
                                    </div>

                                </Col>
                            </Row>
                        </div>
                        <article>
                        Having kids sometimes feels like running a race you can’t win against a clock you didn’t set. Parenting today is often characterized by feeling overwhelmed and dissatisfied, two feelings that are exacerbated by headlines like “How Having Children Robs Parents of Happiness” and books with titles like All Joy and No Fun. Yes, you love your children, but you’re not alone if you sometimes hate being their parent.
                        </article>
                    </Col>
                </Row>
           </section>
       )
    }
}
export default Post;