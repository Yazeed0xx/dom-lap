let firstt= document.getElementsByClassName("first")[0];
firstt.style.color ="red"
firstt.style.backgroundColor="green"
console.log(firstt);

let par = document.getElementById("parg")

par.setAttribute("class", "hh")




let pic = document.getElementsByTagName("img")[0]
pic.src = "images.jpg"
console.log(pic);



let list = document.querySelector("ul")
list.innerHTML =`<li>sdsd</li>
<li>ss</li>
<li>ssdd</li>


`
list.style.border = "solid"

console.log(list);
let box1= document.getElementById("box")


function move(){

//    let box1= document.getElementById("box")
   box1.style.left = Math.floor(Math.random()* 500)+ "px"
   box1.style.top = Math.floor(Math.random()* 500)+ "px"
   box1.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16);

    console.log(box1);
}
setInterval(move, 1000)





