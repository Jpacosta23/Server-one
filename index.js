const http =require('http');

//callback es una función que se pasa como parametro de otra función

// function callback(){

// }

// const callbackFnArrow=()=>{

// }
const books=[
    {
    title:'Cien años',
    author:'Gabo',
    isAvailable:false,
    },
    {
    title:'Rayuela',
    author:'Cortazar',
    isAvailable:false,
    }
]



const app=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'application/json'})
    res.end(JSON.stringify(books))
})

app.listen(5000)   

console.log('Server running ',5000)  