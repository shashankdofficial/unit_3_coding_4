// Ude Import export (MANDATORY)
let searching=async (value)=>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let data=await res.json()
        return data
    }
    catch(err){
        console.log("err:",err)
    }
}


function getid(value)
{
    return document.createElement(value)
}
let append=(data,container)=>{
    data.forEach(({title,urlToImage},index) => {
        let div=getid("div")
        div.addEventListener("click",function(){
            news(data[index])
        })
        div.setAttribute("class","news")
        let img=getid("img")
        img.setAttribute("id","img")
        let h3=getid("h3")
        img.src=urlToImage
        h3.innerText=title
        div.append(img,h3)
        container.append(div)
    });
}

let searchin=async (value)=>{
    try{
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value} `)
        let data=await res.json()
        return data
    }
    catch(err){
        console.log("err:",err)
    }
}


function news(data)
{
    let arr=[]
    arr.push(data)
    
    localStorage.setItem("news",JSON.stringify(arr))
    window.location.href="news.html"
}

let append2=(data,container)=>{
    data.forEach(({title,urlToImage,description}) => {
        let div=getid("div")
        div.setAttribute("id","news1")
        let img=getid("img")
        img.setAttribute("id","imag")
        let h3=getid("h3")
        let p=getid("p")

        img.src=urlToImage
        h3.innerText=title
        p.innerText=description
        div.append(img,h3,p)
        container.append(div)
    });
}





export{searching,append,append2,searchin}