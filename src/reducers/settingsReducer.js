import { SETTINGS_DATA_LOADED, SETTINGS_DATA_ERROR, START_FETCHING_SETTINGS_DATA } from '../actions/constants'
const initialState = {
    loading: false,
    error: null,
    headerNav: [],
    footerNav: []
}

const settings = (state= initialState, action) => {
    switch (action.type) {
        case START_FETCHING_SETTINGS_DATA:
            return {
                ...state,
                loading: true
            }
        case SETTINGS_DATA_ERROR:
            return {
                ...state,
                error: action.errorMsg
            }
        case SETTINGS_DATA_LOADED:
            return {
                ...state,
                loading: false,
                headerNav: action.data.headerNav,
                footerNav: action.data.footerNav
            }
        default:
            return state
    }
}

export default settings