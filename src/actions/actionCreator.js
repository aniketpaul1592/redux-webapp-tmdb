export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function searchParameter(searchTerm) {
    return {
        type: 'SEARCH_MOVIE',
        searchTerm
    };
}

export function sortAsPerRatingYear() {
    return {
        type: 'SORT_RATING_AND_YEAR'
    };
}

export function updateYear(year) {  
    return {
        type: 'SET_STATE_YEAR',
        year
    };
}

export function updateRatings(ratings) { 
    console.log(ratings); 
    return {
        type: 'SET_STATE_RATINGS',
        ratings
    };
}



