import { START_FETCHING_SETTINGS_DATA, SETTINGS_DATA_ERROR, SETTINGS_DATA_LOADED } from './constants'
import fetchSettings from "../utils/fetchSettings";

const startFetchingSettingData = () => {
    return {
        type: START_FETCHING_SETTINGS_DATA
    }
}

const fetchingSettingsDataSuccess = (data) => {
    return {
        type: SETTINGS_DATA_LOADED,
        data
    }
}

const fetchingSettingsDataError = (errorMsg) => {
    return {
        type: SETTINGS_DATA_ERROR,
        errorMsg
    }
}

export const fetchSettingsData = () => {
    return async dispatch => {
        dispatch(startFetchingSettingData());
        const data = await fetchSettings();
        if(data.errorMsg) dispatch(fetchingSettingsDataError(data.errorMsg));
        else dispatch(fetchingSettingsDataSuccess(data))

    }
}


