import { START_FETCHING_PAGE_DATA, PAGE_DATA_ERROR, PAGE_DATA_LOADED } from '../actions/constants'
const initialState = {
    loading: false,
    error: null,
    mostRecent: {},
    latest: [],
    loops: [],
    mostLiked: [],
    latestImages: [],
    topics: []
}

const page = (state= initialState, action) => {
    switch (action.type) {
        case START_FETCHING_PAGE_DATA:
            return {
                ...state,
                loading: true
            }
        case PAGE_DATA_ERROR:
            return {
                ...state,
                error: action.errorMsg
            }
        case PAGE_DATA_LOADED:
            return {
                ...state,
                loading: false,
                mostRecent: action.data.latest[0],
                latest: action.data.latest.slice(1),
                loops: action.data.loops,
                mostLiked: action.data.mostLiked,
                latestImages: action.data.latestImages,
                topics: action.data.topics
            }
        default:
            return state
    }
}

export default page