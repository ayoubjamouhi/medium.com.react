import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
// import the root reducer
import rootReducer from './containers/reducers/index';

// create an object for the default data
const posts = [
  {
    id: 1,
    title: "The Surprising Good News About Parental Burnout",
    description: "You can’t quit this job, but you can make it better",
    categorie: "love/hate",
    credit: "Photo: sombatkapan/Getty",
    user: "Admin",
    date: "2018-12-11",
    html: "<p>lenty of words come to mind when I think about 2017. And if you want to know my unfiltered thoughts on “emails,” “fake news,” “sexism,” or “Russia,” I’ve written about each of those topics at length in my book. (As well as “bully,” “demagogue,” and “creep”!) But when I step back and reflect on the last twelve months — the people I’ve met, the stories I’ve heard, the activism and organizing I’ve been proud to support — there’s no shortage of uplifting, encouraging words that capture the spirit of this year. It’s difficult to pick just one.</p><p>Resilience was among the first to pop into my head. It’s a word that has meant a lot to me throughout my life, and it’s taken on new meaning in 2017. Resilience doesn’t mean you never get knocked down; it means you get back up when you do. I’ll admit, there were times over the past year when I was tempted to just pull the covers up over my head and shut it all out. Instead, I got back up. At first, I spent time with family and friends, watched HGTV and went into a frenzy of organizing every closet and drawer in my house, did some yoga, and practiced something called “alternate nostril breathing.” I went for long walks in the woods. And yes, I had my fair share of chardonnay.</p>"
  },
  {
    id: 2,
    title: "Costume Dramas Are My Problematic Fave",
    description: "As the smartphone market changes, Apple may be losing its edge",
    categorie: "THE UPGRADE",
    credit: "Photo: sombatkapan/Getty",
    user: "Admin",
    date: "2018-12-11",
    html: "<p>Having kids sometimes feels like running a race you can’t win against a clock you didn’t set. Parenting today is often characterized by feeling overwhelmed and dissatisfied, two feelings that are exacerbated by headlines like “How Having Children Robs Parents of Happiness” and books with titles like All Joy and No Fun. Yes, you love your children, but you’re not alone if you sometimes hate being their parent.</p><p>But for some parents, that feeling is more than a passing mood. Instead, it’s a part of full-on parental burnout, a state that shares many of the same traits as professional burnout: high levels of exhaustion, feelings of inadequacy, and emotional detachment. Unlike a job that’s causing burnout, though, parenting isn’t something that can be quit.</p>"
  },
  {
    id: 3,
    title: "The Golden Age of the iPhone Is Ending",
    description: "Is there something subversive beneath all that good taste and Chantilly lace?",
    categorie: "love/hate",
    credit: "Photo: sombatkapan/Getty",
    user: "Admin",
    date: "2018-12-11",
    html: "<p>Having kids sometimes feels like running a race you can’t win against a clock you didn’t set. Parenting today is often characterized by feeling overwhelmed and dissatisfied, two feelings that are exacerbated by headlines like “How Having Children Robs Parents of Happiness” and books with titles like All Joy and No Fun. Yes, you love your children, but you’re not alone if you sometimes hate being their parent.</p><p>But for some parents, that feeling is more than a passing mood. Instead, it’s a part of full-on parental burnout, a state that shares many of the same traits as professional burnout: high levels of exhaustion, feelings of inadequacy, and emotional detachment. Unlike a job that’s causing burnout, though, parenting isn’t something that can be quit.</p>"
  },
  {
    id: 4,
    title: "The Golden Age of the iPhone Is Ending",
    description: "Is there something subversive beneath all that good taste and Chantilly lace?",
    categorie: "love/hate",
    credit: "Photo: sombatkapan/Getty",
    user: "Admin",
    date: "2018-12-11",
    html: "<p>Having kids sometimes feels like running a race you can’t win against a clock you didn’t set. Parenting today is often characterized by feeling overwhelmed and dissatisfied, two feelings that are exacerbated by headlines like “How Having Children Robs Parents of Happiness” and books with titles like All Joy and No Fun. Yes, you love your children, but you’re not alone if you sometimes hate being their parent.</p><p>But for some parents, that feeling is more than a passing mood. Instead, it’s a part of full-on parental burnout, a state that shares many of the same traits as professional burnout: high levels of exhaustion, feelings of inadequacy, and emotional detachment. Unlike a job that’s causing burnout, though, parenting isn’t something that can be quit.</p>"
  }
];
const defaultState = {
  posts: posts,
};
const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhacers);

if(module.hot) {
  module.hot.accept('./containers/reducers/',() => {
    const nextRootReducer = require('./containers/reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;