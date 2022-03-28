document.addEventListener("DOMContentLoaded", (e)=> {
    console.log(navigator.userAgent)
    let el,modale,closed,open_modale,closed_all

    el = document.querySelectorAll(".grid-picture li")
    modale = document.querySelector(".modale")
    closed = document.querySelector(".modale button")
    closed_all = document.querySelector(".modale img")
    
    /* propriété des éléments */
    open_modale = function(){
        console.log(this)


        let title = this.dataset.title;
        let genre = this.dataset.genre;
        let image = this.dataset.image;
        let description = this.dataset.description;
        let dates = this.dataset.dates;
        let info = this.dataset.info;

        modale.classList.add("modale-active")
        
        document.querySelector(".modale .headModale h1").innerText = title;
        document.querySelector(".modale .headModale p").innerText = genre;
        document.querySelector(".modale img").setAttribute("src", image)
        document.querySelector(".modale figcaption .synopsisModale").innerText = description;
        document.querySelector(".modale figcaption .dateModale").innerText = dates;
        
        
        
        
        document.querySelector(".modale figcaption h4").innerText = info;
         
    }

    for(rows of el){
        rows.addEventListener("click", open_modale)
    }
    
    closed.addEventListener("click", ()=>{
        modale.classList.remove("modale-active")
    })
    
    closed_all.addEventListener("click", ()=>{
        modale.classList.remove("modale-active")
    })

    
})

