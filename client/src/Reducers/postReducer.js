export const postReducer = (state = { isLoading: false, posts: [] }, action) => {
    switch (action.type) {

        case "FETCH_ALL":
            return {
                ...state,
                posts: action.payload.data,
                numberOfPages: action.payload.numberOfPages,
                currentPage: action.payload.currentPage
            }

        case "FETCH_BY_SEARCH":
            return {
                ...state, posts: action.payload.data
            };

        case "LIKE":
        case "UPDATE":
            return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) };

        case "CREATE":
            return { ...state, posts: [...state.posts, action.payload] };

        case "DELETE":
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };

        case "START_LOADING":
            return { ...state, isLoading: true };

        case "END_LOADING":
            return { ...state, isLoading: false };

        default:
            return state;
    }
}
