/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/

const removeNegatives = arr =>{
let remNeg = []
for(let i = 0 ; i < arr.length ; i++ ){
if (arr[i] < 0){
     

    arr[i] = arr[i] * -1
console.log(    arr[i]
    )
}

}
return arr
}
console.log(removeNegatives([-3,-2,1,2,3,-4]))
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr, val) =>{
    
    for (let i = 0 ; i<arr.length; i++){
            if(arr[i]===val){
                
                return arr.indexOf(arr[i])


            }

                return -1
    }






}
console.log(findVal([1,2,3,4],9))

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/


const removeOdds =arr=>{
let  newArr = [...arr]
    for(let i = 0 ; i<newArr.length; i++){

        if(arr[i]%2 === 1 || typeof arr[i]!== "number"){

            arr.splice(i,1)

        }


    }

    return arr


}

console.log(removeOdds([1,2,3,4]))
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares =arr =>{
   const copyArr = [...arr]

for(let i = 0; i <  copyArr.length ; i++){

copyArr[i] = copyArr[i]**2


}

return arr.concat(copyArr)


}
console.log("wwwwwwwwwwwww")
console.log(addSquares([1,2,3,4]))

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

const doubleify = arr =>{
const copyArr =[...arr]
for(let i = 0; i <=copyArr.length-1 ; i++){
    if(copyArr[i] !== copyArr[i-1])
    copyArr.splice(i,0, copyArr[i])


}
return copyArr
}

console.log(doubleify([1,2,3,3,4]))
/*
    @func findMaxs
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
const findMax = array =>{
let largNum = 0
for(let i = 0 ; i<array.length; i++ ){
if( array[i] > largNum){
    largNum = array[i]
} 


}

return largNum


}

console.log(findMax([100,2,300,99,41]))