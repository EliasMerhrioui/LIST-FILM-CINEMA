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

        let image = this.dataset.image;
        let title = this.dataset.title;
        let description = this.dataset.description;
        let dates = this.dataset.dates;
        modale.classList.add("modale-active")
        document.querySelector(".modale img").setAttribute("src", image)
        document.querySelector(".modale figcaption h3").innerText = title;
        document.querySelector(".modale figcaption p").innerText = description;
        document.querySelector(".modale figcaption time").innerText = `Annee ${dates}`;
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

