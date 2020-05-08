

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const lblTemp = document.getElementById('lblTemp')

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value

    if(!location){
      console.log('Error - Enter location')
    }
    else{
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
            response.json().then((data)=>{
                if(data.error){
                    console.log(data.error)
                }
                else{
                //var jsonString = JSON.stringify(data)

                lblTemp.innerText = data.forecast + data.location  +' ' + data.temparature
             }
            })
     })
     
    }
})


