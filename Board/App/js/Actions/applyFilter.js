import constants from '../constants/constants';
import $ from "jquery";


export const applyFilter = (filter) => {
    return {
        type: constants.APPLY_FILTER,
        filter: filter
    }
}
    

    