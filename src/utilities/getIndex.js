const getIndex = (arr, title) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].title === title){
            return i
        }
    }
};

export default getIndex