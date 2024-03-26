let lists= document.getElementsByClassName("list")
let right_box= document.getElementById("right")
let left_box= document.getElementById("left")


for(lists of lists){
    lists.addEventListener("dragstart",function(e){
        let selected = e.target;
        
        right_box.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        right_box.addEventListener("drop",function(e){
            right_box.appendChild(selected)
            selected=null
        })
        left_box.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        left_box.addEventListener("drop",function(e){
            left_box.appendChild(selected)
            selected=null
        })
    })
}