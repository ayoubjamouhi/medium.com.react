import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import './Post.scss';
class Post extends React.Component {
    componentDidMount() {

    }
    render() {
        const id = this.props.location.pathname.split('/')[2];
        const post = this.props.posts.find(
            elem => elem.id == id);
        if(post == undefined) {
            this.props.history.push('/404');
        }
        return (
            <section className="post">
                <div className="image--top">
                    <img src="http://via.placeholder.com/1000x300" alt="img" />
                    <p className="credit">Credit: fasphotogrpahic/iStock/Getty Images Plus</p>
                </div>
                <Row className="bottom">
                    <Col xs="12" sm="2" md="2" lg="2" xl="2" className="left">
                        <div className="share">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-youtube"></i>
                        </div>
                    </Col>
                    <Col xs="12" sm="10" md="10" lg="10" xl="10" className="right">
                        <h3 className="categorie">{post.categorie}</h3>
                        <h1 className="title">{post.title}</h1>
                        <h2 className="description">{post.descreption}</h2>
                        <div className="user">
                            <Row>
                                <Col xs="12" sm="1" md="1" lg="1" xl="1" className="image">
                                    <img src="http://via.placeholder.com/50x50" alt="images" className="img-circle" />
                                </Col>
                                <Col xs="12" sm="4" md="4" lg="4" xl="4" className="info">
                                    <div className="name--follow">
                                        <h6>{post.user}</h6>
                                        <button>Follow</button>
                                    </div>
                                    <div className="date">
                                        {post.date}
                                    </div>

                                </Col>
                            </Row>
                        </div>
                        <article>
                            <p>
                                Having kids sometimes feels like running a race you can???t win against a clock you didn???t set. Parenting today is often characterized by feeling overwhelmed and dissatisfied, two feelings that are exacerbated by headlines like ???How Having Children Robs Parents of Happiness??? and books with titles like All Joy and No Fun. Yes, you love your children, but you???re not alone if you sometimes hate being their parent.</p>
                        </article>
                    </Col>
                </Row>
            </section>
        )
    }
}
export default Post;