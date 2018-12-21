function journaux(state = [], action) {
   switch(action.type) {
       case 'FETCH_POSTS' :
            console.log("FETCH_POSTS");
            return [
                ...state,
                ...action.donnees,
            ]
        case 'ADD_POST' :
            console.log("ADD_POST");
            return [
                ...state,
                action.journal,
            ]
        case 'SET_STATE_POSTS_EMPTY' :
           console.log("SET_STATE_POSTS_EMPTY");
           return [];
     default:
       return state;
   }
}

export default journaux;
