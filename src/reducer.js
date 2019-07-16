export default function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet !== action.payload)
      };
    case "CREATE_TWEET":
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      };  
    default:
      return state;
  }
}
