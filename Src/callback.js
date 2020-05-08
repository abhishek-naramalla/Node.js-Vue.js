const request = require('request')

// //
// // Goal: Mess around with the callback pattern
// //
// // 1. Define an add function that accepts the correct arguments
// // 2. Use setTimeout to simulate a 2 second delay
// // 3. After 2 seconds are up, call the callback function with the sum
// // 4. Test your work!

// const add = (a,b,callback)=>{
//     setTimeout(()=>{
//        callback(a+b)
//     },3000)
// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
const getTemp = (city,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=298a35f2e2b891bbc4b6e2b457c3a260&query='+city
    
    request({'url':url,'json':true},(error,response)=>{
            if(error){
                callback('error occured!..',undefined)
            }
            else{

                callback(undefined,response.body.current.temperature)
            }
    })

}
var city = process.argv[2];
const inputCity = {city:'phoenix'}

getTemp(inputCity.city,(error,data)=>{
    if(error){
        console.log('Error : '+ error)

    }
        console.log('Current Temp in is ' +city+' : '+data)
})

module.exports = getTemp;
//console.log(process.argv)

//below logic is not working
// const cities = ['phoenix','hyderabad','karimnagar']


// cities.filter((city)=>{
//     getTemp(city,(result)=>{
//         console.log('The current temperature in '+city+' is '+ result)
//     })
// })