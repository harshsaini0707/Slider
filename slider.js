const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const block4 = document.getElementById("block4")

const click = document.getElementById("Click")
const reset = document.getElementById("reset")
let flag=0;

click.addEventListener("click",function(){
    if(flag ==0){
block1.style.display="block"
console.log("hello");
flag =1;
    }
else if(flag ==1){
    block2.style.display="block"
    console.log("hello");
    flag =2;
     }
else if(flag ==2){
        block3.style.display="block"
        console.log("hello");
        flag =3;
 }
 else     if(flag ==3){
    block4.style.display="block"
    console.log("hello");
    flag =0;
        }
})
let score =0
reset.addEventListener("click", function () {
    if(score==0  ){
    block4.style.display = "none";
    score =1;
    }
else if(score ==1){
    block3.style.display = "none";
    score =2;
    }
    else if(score ==2){
        block2.style.display = "none";
        score =3;
        }
        else if(score ==3){
            block1.style.display = "none";
            score =0;
            }
    flag = 0;
    
});