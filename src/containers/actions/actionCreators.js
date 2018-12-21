/* Gestion JOURNAUX */
// fetch JOURNAUX
export function fetchPosts(donnees) {
 return {
   type: 'FETCH_POSTS',
   donnees
 }
}
// Add Post
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}
// Donnees JOURNAUX State to []
export function setStatePostsEmpty() {
  return {
    type: 'SET_STATE_POSTS_EMPTY'
  }
}
