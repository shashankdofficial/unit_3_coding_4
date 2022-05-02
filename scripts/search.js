// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

function getid(value)
{
    return document.getElementById(value).value
}

let value=JSON.parse(localStorage.getItem("value"))
let data=searchin(value).then((data)=>{
let container=document.getElementById("results")
 container.innerHTML=null

 append(data.articles,container)
})
let nav=document.getElementById("navbar")
nav.innerHTML=navbar();
import { navbar } from "../components/navbar.js"




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




import {append,searchin} from "./fetch.js";


