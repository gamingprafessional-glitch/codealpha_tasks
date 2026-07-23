const images = document.querySelectorAll(".gallery img");
let current = 0;

function openLightbox(index){
    current=index;
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=images[current].src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function changeImage(step){
    current += step;
    if(current<0)
        current=images.length-1;
    if(current>=images.length)
        current=0;
    document.getElementById("lightbox-img").src=images[current].src;
}

function filterSelection(category){
    const items=document.querySelectorAll(".image");
    items.forEach(item=>{
        if(category==="all"){
            item.classList.remove("hide");
        }
        else if(item.classList.contains(category)){
            item.classList.remove("hide");
        }
        else{
            item.classList.add("hide");
        }
    });
    document.querySelectorAll(".buttons button").forEach(btn=>{
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
}

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        closeLightbox();
    }
    if(e.key==="ArrowRight"){
        changeImage(1);
    }
    if(e.key==="ArrowLeft"){
        changeImage(-1);
    }
});

document.getElementById("lightbox").addEventListener("click",function(e){
    if(e.target===this){
        closeLightbox();
    }
});