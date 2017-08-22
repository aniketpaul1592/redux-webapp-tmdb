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

function sortData(list,sortParam){
    var decidingFactor = "";
    if(sortParam != " "){
        if(sortParam == "rLow"||sortParam =="rHigh"){//Based on rating
            var temp = list.sort(function(a,b){
                var dataA =  parseInt(a.vote_count);
                var dataB =  parseInt(b.vote_count);
                if(sortParam == "rLow"){
                  return dataA - dataB;  
                }
                else if(sortParam == "rHigh"){
                  return dataB - dataA;  
                }
                
            });
         }else if (sortParam == "pLow"||sortParam =="pHigh"){// Based on Popularity
            var temp = list.sort(function(a,b){
                var dataA =  parseInt(a.popularity);
                var dataB =  parseInt(b.popularity);
                if(sortParam == "pLow"){
                  return dataA - dataB;  
                }
                else if(sortParam == "pHigh"){
                  return dataB - dataA;  
                }
            });
        }else{//Based on year
            var temp = list.filter(function(item){
                var tempDate = item.release_date.split("-");
                return tempDate[0] == sortParam;
            });
        }
        
        return temp;
    }
    return list;   
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items; break;
        case 'SORT_RATING':
            return Object.assign({}, state, {
                      didInvalidate: true,

                      sorted:sortData(state.results,action.sortParam)
                    });
            break;
            //return {state.items.results: sortData(state.items.results,action.sortParam)};
        case 'SORT_YEAR':
            return Object.assign({}, state, {
                      didInvalidate: true,
                      
                      filtered:sortData(state.results,action.sortParam)
                    }); break;
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
