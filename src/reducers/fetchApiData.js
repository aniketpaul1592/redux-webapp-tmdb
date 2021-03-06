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
    
    if(sortParam.sortRate){
         //console.log(sortParam.sortRate);
    }
    if(sortParam.sortYear){
        //console.log(sortParam.sortYear);
    }
    if(!sortParam.sortYear){
        //console.log("sortYear - undefined");
    }
    if(!sortParam.sortRate){
        //console.log("sortRate - undefined");
    }

   // When both fields are gone 
    if((!sortParam.sortRate)&&(!sortParam.sortYear)){
        return [];
    }else{
        if(list){
            var tempArrSort = [];
            tempArrSort = [...list]; 
        }
        var ratingArr = [];
        var yearArr = [];
        if(sortParam.sortRate){
            if(sortParam.sortRate === "rLow"||sortParam.sortRate ==="rHigh"){//Based on rating
                    ratingArr = tempArrSort.sort(function(a,b){
                    var dataA =  parseInt(a.vote_count);
                    var dataB =  parseInt(b.vote_count);
                    if(sortParam.sortRate === "rLow"){
                      return dataA - dataB;  
                    }
                    else if(sortParam.sortRate === "rHigh"){
                      return dataB - dataA;  
                    }
                    
                });
            }else if (sortParam.sortRate === "pLow"||sortParam.sortRate ==="pHigh"){// Based on Popularity
                    ratingArr = tempArrSort.sort(function(a,b){
                    var dataA =  parseInt(a.popularity);
                    var dataB =  parseInt(b.popularity);
                    if(sortParam.sortRate === "pLow"){
                      return dataA - dataB;  
                    }
                    else if(sortParam.sortRate === "pHigh"){
                      return dataB - dataA;  
                    }
                });
            }
        }
        if(sortParam.sortYear){
            var temp = list;
            if(ratingArr.length!==0){
                temp = ratingArr;
            }
            yearArr = temp.filter(function(item){
                var tempDate = item.release_date.split("-");
                return tempDate[0] === sortParam.sortYear;
            });

            return yearArr; 
        }  
       return ratingArr;  
    }
    // var decidingFactor = "";
    // if(list){
    //    var tempArrSort = [];
    //    tempArrSort = [...list]; 
    // }    
    // if(ratings !== ""){
    //     if(sortParam === "rLow"||sortParam ==="rHigh"){//Based on rating
    //         var temp = tempArrSort.sort(function(a,b){
    //             var dataA =  parseInt(a.vote_count);
    //             var dataB =  parseInt(b.vote_count);
    //             if(sortParam === "rLow"){
    //               return dataA - dataB;  
    //             }
    //             else if(sortParam === "rHigh"){
    //               return dataB - dataA;  
    //             }
                
    //         });
    //      }else if (ratings === "pLow"||ratings ==="pHigh"){// Based on Popularity
    //         var temp = tempArrSort.sort(function(a,b){
    //             var dataA =  parseInt(a.popularity);
    //             var dataB =  parseInt(b.popularity);
    //             if(sortParam === "pLow"){
    //               return dataA - dataB;  
    //             }
    //             else if(sortParam === "pHigh"){
    //               return dataB - dataA;  
    //             }
    //         });
    //     }else{//Based on year
    //         var temp = list.filter(function(item){
    //             var tempDate = item.release_date.split("-");
    //             return tempDate[0] === sortParam;
    //         });
    //     }
        
    //     return temp;
    // }
 //   return list;   
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({},state, {
                      didInvalidate: true,

                      results:action.items.results
                    });
        case 'SORT_RATING_AND_YEAR':   
            return Object.assign({}, state, {
                      didInvalidate: true,

                      sorted:sortData(state.results,action.sortParam)
                    });
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

export function favArr(state = {favArr: [],favArrId:[]},action){
    switch (action.type) {
        case 'SAV_FAVS':
            return {
                ...state,
                favArr: [...state.favArr, action.itemId],
                favArrId: [...state.favArr, action.itemId.id], 
            };
        case 'REMOVE_FAVS':
            return {
                ...state,
                favArr: [...state.favArr].filter(item=>{
                    return item.id !== action.itemId.id
                }),
                favArrId: [...state.favArrId].filter(item=>{
                    return item !== action.itemId.id
                })
            };
        default:
            return state;
    }
}
