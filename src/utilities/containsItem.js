function containsItem (arr, item){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].title === item.title){
            return true
        }
    }

    return false
};

export default containsItem