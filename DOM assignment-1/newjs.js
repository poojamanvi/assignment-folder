//   function getArray(){
//       let array = [1,2,3]
     
//       return array

//   }
//   console.log(getArray())

//   let a = ( )=>{
//     let array = [1,2,3]
     
//     return array
//   }
//   console.log(a())

//   function getFactorial(num){
//       if(num == 0){
//           return 1
//       }

//     return num*getFactorial(num-1)
    
//   }
//   console.log(getFactorial(5))

// //   5*4*3*2*1


// car={
//     year:2016,
//     modle:"xy",
//     year:2018,
// }
// console.log(car.year)

// first method
S1 = "Pooja"
S2 = "ja"
let array1 = S1.split("")
console.log(S1.includes(S2))


// second method
function getString(array){
    

 for(let i=0; i < array.length;i++){
     if(array[i] =='j'){
         for(let k = 0;k<array.length;k++){
             if(array[k] == 'a' ) {
               return true
             }
         }
     }
     
 }
 return false
     
}
console.log(getString(['p','o','o','j','a']))








