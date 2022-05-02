// Ude Import export (MANDATORY)
let nav=document.getElementById("navbar")
nav.innerHTML=navbar();
import { navbar } from "../components/navbar.js"

let data=JSON.parse(localStorage.getItem("news"))

let container=document.getElementById("detailed_news")
 container.innerHTML=null

 append2(data,container)

 function getid(value)
 {
     return document.getElementById(value).value
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
 import {append2,searchin} from "./fetch.js";
