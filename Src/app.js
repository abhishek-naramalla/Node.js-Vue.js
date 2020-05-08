const express = require('express')
const path = require('path')
const hbs = require('hbs')

const getTemp = require('./callback')


const app = express() //express is like a method


const pathdirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup view engine(handlebars), and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
app.set('partilas',partialsPath)

hbs.registerPartials(partialsPath)


app.use(express.static(pathdirectory))

app.get('',(req,res)=>{
    res.render('index',{
        name : 'Abhishek',
        title:'Index'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name : 'Abhishek',
        title:'About me'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        name : 'Abhishek',
        title:'Help'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
       res.send({
           error:'An error occured.Please provide valid address'
       })
    }else{
        console.log(req.query.address)
        getTemp(req.query.address,(error,data)=>{
            console.log(data.temparature)
            res.send({
                forecast:'Currently it is hot in ',
                location:  req.query.address,
                temparature: 'and temparature is ' + data
            })
        })
        

    }
})

app.get('*',(req,res)=>{
      res.render('404',{
          title:'The page requested is not found-404 Error',
          name: 'Error Page'
      })
})

app.listen(3000)
