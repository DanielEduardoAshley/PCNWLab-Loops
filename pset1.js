/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average =(arr)=>{
    let sum = 0
    for(let i = 0; i < arr.length  ; i++){
      sum = sum + arr[i] 

      


    }
    console.log(      sum  ) 

    return  sum / arr.length



}
console.log(average([1,2,3,4]))
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
const squareEach = arr =>{
    let square = []
    for(let i = 0 ; i < arr.length; i++){
        square.push(arr[i]**2)


    }

    return square


} 

console.log(squareEach([1,2,3,4]))

/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
const averageSquare = arr =>{
    let sum = 0
    let square = []
    for(let i = 0 ; i < arr.length; i++){
        square.push(arr[i]**2)


    }

     

    
    for(let i = 0; i < square.length  ; i++){
      sum = sum + square[i] 

      


    }
    console.log(      sum  ) 

    return  sum / arr.length
}






console.log(averageSquare([1,2,3,4]))

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = arr =>{
    let negNum = []
    for(let i = 0 ; i< arr.length ; i++){


      negNum.push(arr[i] * -1)

    }

    return negNum




}
console.log(negateArr([1,2,3,4]))
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/

const reverseArr = arr =>{
    let reverse = []
    for(let i = arr.length-1 ; i >=  0 ; i--){
      reverse.push(arr[i])


    }
    return reverse
}

console.log(reverseArr([1,2,3,4]))
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/

const negateBackwards = arr =>{
let reverse = []
for(let i = arr.length-1 ; i>= 0 ; i--){

    reverse.push(arr[i])



}
let neg = []
for(let i =0 ; i < reverse.length; i++){

neg.push(reverse[i]*-1)


}

return neg

}
console.log(negateBackwards([1,2,3,4]))
