

function toggleShade(){
    let shade = document.querySelector(".shade")
    if (shade.style.display === "block"){
        shade.style.display = "none";
    } else{
        shade.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("img").forEach((img)=>{
        img.addEventListener("click",(e)=>{
            e.preventDefault();
            toggleShade();
            e.target.classList.toggle("enlarged")
            e.target.nextElementSibling.nextElementSibling.classList.toggle("enlarged")
        })
    })
    document.querySelector(".shade").addEventListener("click",()=>{
        let target = document.querySelector("img.enlarged")
        target.classList.remove("enlarged")
        target.nextElementSibling.nextElementSibling.classList.toggle("enlarged")
        toggleShade()
    })
})