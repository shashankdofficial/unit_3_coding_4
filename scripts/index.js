// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import{navbar,sidebar} from"../components/navbar.js";
let nav=document.getElementById("navbar")
nav.innerHTML=navbar();

let side=document.getElementById("sidebar")
side.innerHTML=sidebar()

function getid(value)
{
    return document.getElementById(value).value
}



   
        fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
       .then(function(res){
           return res.json()
       })
       .then(function(res){
        let container=document.getElementById("results")
        append(res.articles,container)
       })

       
        
   


let country=document.getElementById("countr").children
console.log(country)

function cSearch(){
    console.log(this.id)
    let data= searching(this.id).then((data)=>{
        console.log(data)
    let container=document.getElementById("results")
    container.innerHTML=null

        append(data.articles,container)
    })
}

for(let el of country)
{
    
    el.addEventListener("click",cSearch)
}

let enter=(event)=>{
    if(event.key=="Enter"){
        let value=getid("search_input")
        localStorage.setItem("value",JSON.stringify(value))
        window.location.href="search.html"
        
   

        let data=searchin(value).then((data)=>{
        let container=document.getElementById("results")
         container.innerHTML=null
        
         append(data.articles,container)
        })
    }
}
document.getElementById("search_input").addEventListener("keydown",enter)
import { searching ,append,searchin} from "./fetch.js";