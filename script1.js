let btn_increase = document.getElementById("increase");   
let btn_decrease = document.getElementById("decrease");  
let btn_reset =  document.getElementById("reset"); 
let display = document.getElementById("span");
let userEnteredCount = document.getElementById("userEnteredCount");
let addUserCount = document.getElementById("addUserCount");

let count = 0;
display.innerHTML = count;

btn_increase.onclick = function(){
    count++;
    display.innerHTML = count;  
    checkColor(count);  
};

btn_reset.onclick = function(){
    count = 0;
    display.innerHTML = count;  
    checkColor(count);
    userEnteredCount.value = " ";
};

btn_decrease.onclick = function(){
    count--;
    display.innerHTML = count;
    checkColor(count);  
};


function checkColor (number){
    
    if(number == 0){
        display.style.color = "";
    }
    else if(number<0){
        display.style.color = "red";
    }
    else if (number>0){
        display.style.color = "greenyellow  ";
    }

}

addUserCount.onclick=function(){
    if(userEnteredCount.value != 0){
        count = userEnteredCount.value ;
    }
    checkColor(count);
    display.innerHTML = count; 
    userEnteredCount.value = " "; 
};

userEnteredCount.onmouseover = function(){
    userEnteredCount.style.fontSize = "15";
};