import { START_FETCHING_PAGE_DATA, PAGE_DATA_ERROR, PAGE_DATA_LOADED } from './constants'
import fetchPage from "../utils/fetchPage";

const startFetchingPageData = () => {
    return {
        type: START_FETCHING_PAGE_DATA
    }
}

const fetchingPageDataSuccess = (data) => {
    return {
        type: PAGE_DATA_LOADED,
        data
    }
}

const fetchingPageDataError = (errorMsg) => {
    return {
        type: PAGE_DATA_ERROR,
        errorMsg
    }
}

export const fetchPageData = () => {
    return async dispatch => {
        dispatch(startFetchingPageData());
        const data = await fetchPage();
        if(data.errorMsg) dispatch(fetchingPageDataError(data.errorMsg));
        else dispatch(fetchingPageDataSuccess(data))

    }
}


