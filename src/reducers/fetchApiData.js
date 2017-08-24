export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

function sortData(list,ratings,year){
    console.log(ratings);
    console.log(year);
    // var decidingFactor = "";
    // if(list){
    //    var tempArrSort = [];
    //    tempArrSort = [...list]; 
    // }    
    // if(ratings != ""){
    //     if(sortParam == "rLow"||sortParam =="rHigh"){//Based on rating
    //         var temp = tempArrSort.sort(function(a,b){
    //             var dataA =  parseInt(a.vote_count);
    //             var dataB =  parseInt(b.vote_count);
    //             if(sortParam == "rLow"){
    //               return dataA - dataB;  
    //             }
    //             else if(sortParam == "rHigh"){
    //               return dataB - dataA;  
    //             }
                
    //         });
    //      }else if (ratings == "pLow"||ratings =="pHigh"){// Based on Popularity
    //         var temp = tempArrSort.sort(function(a,b){
    //             var dataA =  parseInt(a.popularity);
    //             var dataB =  parseInt(b.popularity);
    //             if(sortParam == "pLow"){
    //               return dataA - dataB;  
    //             }
    //             else if(sortParam == "pHigh"){
    //               return dataB - dataA;  
    //             }
    //         });
    //     }else{//Based on year
    //         var temp = list.filter(function(item){
    //             var tempDate = item.release_date.split("-");
    //             return tempDate[0] == sortParam;
    //         });
    //     }
        
    //     return temp;
    // }
    return list;   
}

export function items(state = [], action) {
    console.log(state.currRatings);
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({},state, {
                      didInvalidate: true,

                      results:action.items.results
                    }); break;
        case 'SORT_RATING_AND_YEAR':   
            return Object.assign({}, state, {
                      didInvalidate: true,

                      sorted:sortData(state.results,state.currRatings,state.currYear)
                    });
            break;
        default:
            return state;
    }
}

export function searchTerm(state = '',action){
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return action.searchTerm;
        default:
            return state;
    }
}
export function currRatings(state = '',action){
    switch (action.type) {
        case 'SET_STATE_RATINGS':
            return action.ratings;
        default:
            return state;
    }
}
export function currYear(state = '',action){
    switch (action.type) {
        case 'SET_STATE_YEAR':
            return action.year;
        default:
            return state;
    }
}
