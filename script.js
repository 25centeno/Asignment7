// Global Variables //
var selection = "";
var num = 0;
var doOnce = "";

// Function //
function setupPage(){
    const bodystyle = document.body;
    bodystyle.style.backgroundColor = "gray"
    bodystyle.style.textAlign = "center"

    const input = document.createElement("input");
    input.setAttribute("placeholder", "Enter A Number Here");
    input.setAttribute("id", "input");

    const button = document.createElement("button");
    button.setAttribute("onclick", "function1()");
    button.setAttribute("id", "button");
    button.innerHTML = "Submit Number";

    const output = document.createElement("p");
    output.innerHTML = num+"*"+1+"="+num*1+"<br>"+num+"*"+2+"="+num*2+"<br>"+num+"*"+3+"="+num*3+"<br>"+num+"*"+4+"="+num*4+"<br>"+num+"*"+5+"="+num*5+"<br>"+num+"*"+6+"="+num*6+"<br>"+num+"*"+7+"="+num*7+"<br>"+num+"*"+8+"="+num*8+"<br>"+num+"*"+9+"="+num*9+"<br>"+num+"*"+10+"="+num*10;
    output.setAttribute("id", "output");

    const select = document.createElement("select");
    select.setAttribute("id", "select");
    select.setAttribute("name", "selection");

    const option1 = document.createElement("option");
    option1.setAttribute("value", "red");
    option1.innerHTML = "Red";
    const option2 = document.createElement("option");
    option2.setAttribute("value", "green");
    option2.innerHTML = "Green";
    const option3 = document.createElement("option");
    option3.setAttribute("value", "blue");
    option3.innerHTML = "Blue";
    const option4 = document.createElement("option");
    option4.setAttribute("value", "random");
    option4.innerHTML = "Random";
    const option5 = document.createElement("option");
    option5.setAttribute("value", "reset");
    option5.innerHTML = "Reset";
    option5.setAttribute("selected", true);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);

    const br = document.createElement("br");

    const a1 = document.createElement("a");
    a1.setAttribute("id", "a1");
    a1.innerHTML = "rgb(250, 200, 150)";
    a1.style.userSelect = "none";
    a1.style.color = "black";
    a1.style.backgroundColor = "rgb(250, 200, 150)";
    const a2 = document.createElement("a");
    a2.setAttribute("id", "a2");
    a2.innerHTML = "rgb(111, 111, 111)";
    a2.style.userSelect = "none";
    a2.style.color = "black";
    a2.style.backgroundColor = "rgb(111, 111, 111)";
    const a3 = document.createElement("a");
    a3.setAttribute("id", "a3");
    a3.innerHTML = "rgb(167, 121, 169)";
    a3.style.userSelect = "none";
    a3.style.color = "black";
    a3.style.backgroundColor = "rgb(167, 121, 169)";
    const a4 = document.createElement("a");
    a4.setAttribute("id", "a4");
    a4.innerHTML = "rgb(255, 255, 100)";
    a4.style.userSelect = "none";
    a4.style.color = "black";
    a4.style.backgroundColor = "rgb(255, 255, 100)";
    const a5 = document.createElement("a");
    a5.setAttribute("id", "a5");
    a5.innerHTML = "rgb(1, 1, 1)";
    a5.style.userSelect = "none";
    a5.style.color = "black";
    a5.style.backgroundColor = "rgb(1, 1, 1)";
    const a6 = document.createElement("a");
    a6.setAttribute("id", "a6");
    a6.innerHTML = "rgb(55, 55, 255)";
    a6.style.userSelect = "none";
    a6.style.color = "black";
    a6.style.backgroundColor = "rgb(55, 55, 255)";
    const a7 = document.createElement("a");
    a7.setAttribute("id", "a7");
    a7.innerHTML = "rgb(188, 0, 188)";
    a7.style.userSelect = "none";
    a7.style.color = "black";
    a7.style.backgroundColor = "rgb(188, 0, 188)";
    const a8 = document.createElement("a");
    a8.setAttribute("id", "a8");
    a8.innerHTML = "rgb(0, 0, 200)";
    a8.style.userSelect = "none";
    a8.style.color = "black";
    a8.style.backgroundColor = "rgb(0, 0, 200)";
    const a9 = document.createElement("a");
    a9.setAttribute("id", "a9");
    a9.innerHTML = "rgb(67, 67, 67)";
    a9.style.userSelect = "none";
    a9.style.color = "black";
    a9.style.backgroundColor = "rgb(67, 67, 67)";
    const a10 = document.createElement("a");
    a10.setAttribute("id", "a10");
    a10.innerHTML = "rgb(255, 255, 255)";
    a10.style.userSelect = "none";
    a10.style.color = "black";
    a10.style.backgroundColor = "rgb(255, 255, 255)";


    const div1 = document.createElement("div");
    div1.appendChild(input);
    div1.appendChild(button);
    div1.appendChild(output);

    const div2 = document.createElement("div");
    div2.appendChild(select);
    div2.appendChild(br);
    div2.appendChild(a1);
    div2.appendChild(a2);
    div2.appendChild(a3);
    div2.appendChild(a4);
    div2.appendChild(a5);
    div2.appendChild(a6);
    div2.appendChild(a7);
    div2.appendChild(a8);
    div2.appendChild(a9);
    div2.appendChild(a10);

    const section = document.createElement("section");
    section.appendChild(div1);
    section.appendChild(div2);

    document.body.appendChild(section);
};

function function1(){
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const output = document.getElementById("output");

    var thenumber = input.value;
    thenumber = parseFloat(thenumber);

    if (thenumber !== thenumber){
        input.value = "";
        input.setAttribute("placeholder", "Invalid Number");
        button.setAttribute("disabled", true);
        setTimeout(() => {
            button.removeAttribute("disabled");
            input.setAttribute("placeholder", "Enter A Number Here");
        }, 1000);
    } else {
        num = thenumber;
        input.value = "";
        input.setAttribute("placeholder", "Sucess!");
        button.setAttribute("disabled", true);
        setTimeout(() => {
            button.removeAttribute("disabled");
            input.setAttribute("placeholder", "Enter A Number Here");
        }, 1000);
        output.innerHTML = num+"*"+1+"="+Math.round(num*1)+"<br>"+num+"*"+2+"="+Math.round(num*2)+"<br>"+num+"*"+3+"="+Math.round(num*3)+"<br>"+num+"*"+4+"="+Math.round(num*4)+"<br>"+num+"*"+5+"="+Math.round(num*5)+"<br>"+num+"*"+6+"="+Math.round(num*6)+"<br>"+num+"*"+7+"="+Math.round(num*7)+"<br>"+num+"*"+8+"="+Math.round(num*8)+"<br>"+num+"*"+9+"="+Math.round(num*9)+"<br>"+num+"*"+10+"="+Math.round(num*10);
    };
}

function function2(){
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    const a4 = document.getElementById("a4");
    const a5 = document.getElementById("a5");
    const a6 = document.getElementById("a6");
    const a7 = document.getElementById("a7");
    const a8 = document.getElementById("a8");
    const a9 = document.getElementById("a9");
    const a10 = document.getElementById("a10");

    selection = document.getElementById("select").value;



    if (selection == "reset" && doOnce != "reset"){
        a1.innerHTML = "rgb(250, 200, 150)";
        a1.style.backgroundColor = "rgb(250, 200, 150)";
        a2.innerHTML = "rgb(111, 111, 111)";
        a2.style.backgroundColor = "rgb(111, 111, 111)";
        a3.innerHTML = "rgb(167, 121, 169)";
        a3.style.backgroundColor = "rgb(167, 121, 169)";
        a4.innerHTML = "rgb(255, 255, 100)";
        a4.style.backgroundColor = "rgb(255, 255, 100)";
        a5.innerHTML = "rgb(1, 1, 1)";
        a5.style.backgroundColor = "rgb(1, 1, 1)";;
        a6.innerHTML = "rgb(55, 55, 255)";
        a6.style.backgroundColor = "rgb(55, 55, 255)";
        a7.innerHTML = "rgb(188, 0, 188)";
        a7.style.backgroundColor = "rgb(188, 0, 188)";
        a8.innerHTML = "rgb(0, 0, 200)";
        a8.style.backgroundColor = "rgb(0, 0, 200)";
        a9.innerHTML = "rgb(67, 67, 67)";
        a9.style.backgroundColor = "rgb(67, 67, 67)";
        a10.innerHTML = "rgb(255, 255, 255)";
        a10.style.backgroundColor = "rgb(255, 255, 255)";
    } else if (selection == "red" && doOnce != "red"){
        a1.innerHTML = "rgb(255, 0, 0)";
        a1.style.backgroundColor = "rgb(255, 0, 0)";
        a2.innerHTML = "rgb(255, 0, 0)";
        a2.style.backgroundColor = "rgb(255, 0, 0)";
        a3.innerHTML = "rgb(255, 0, 0)";
        a3.style.backgroundColor = "rgb(255, 0, 0)";
        a4.innerHTML = "rgb(255, 0, 0)";
        a4.style.backgroundColor = "rgb(255, 0, 0)";
        a5.innerHTML = "rgb(255, 0, 0)";
        a5.style.backgroundColor = "rgb(255, 0, 0)";
        a6.innerHTML = "rgb(255, 0, 0)";
        a6.style.backgroundColor = "rgb(255, 0, 0)";
        a7.innerHTML = "rgb(255, 0, 0)";
        a7.style.backgroundColor = "rgb(255, 0, 0)";
        a8.innerHTML = "rgb(255, 0, 0)";
        a8.style.backgroundColor = "rgb(255, 0, 0)";
        a9.innerHTML = "rgb(255, 0, 0)";
        a9.style.backgroundColor = "rgb(255, 0, 0)";
        a10.innerHTML = "rgb(255, 0, 0)";
        a10.style.backgroundColor = "rgb(255, 0, 0)";
    } else if (selection == "green" && doOnce != "green"){
        a1.innerHTML = "rgb(0, 255, 0)";
        a1.style.backgroundColor = "rgb(0, 255, 0)";
        a2.innerHTML = "rgb(0, 255, 0)";
        a2.style.backgroundColor = "rgb(0, 255, 0)";
        a3.innerHTML = "rgb(0, 255, 0)";
        a3.style.backgroundColor = "rgb(0, 255, 0)";
        a4.innerHTML = "rgb(0, 255, 0)";
        a4.style.backgroundColor = "rgb(0, 255, 0)";
        a5.innerHTML = "rgb(0, 255, 0)";
        a5.style.backgroundColor = "rgb(0, 255, 0)";
        a6.innerHTML = "rgb(0, 255, 0)";
        a6.style.backgroundColor = "rgb(0, 255, 0)";
        a7.innerHTML = "rgb(0, 255, 0)";
        a7.style.backgroundColor = "rgb(0, 255, 0)";
        a8.innerHTML = "rgb(0, 255, 0)";
        a8.style.backgroundColor = "rgb(0, 255, 0)";
        a9.innerHTML = "rgb(0, 255, 0)";
        a9.style.backgroundColor = "rgb(0, 255, 0)";
        a10.innerHTML = "rgb(0, 255, 0)";
        a10.style.backgroundColor = "rgb(0, 255, 0)";
    } else if (selection == "blue" && doOnce != "blue"){
        a1.innerHTML = "rgb(0, 0, 255)";
        a1.style.backgroundColor = "rgb(0, 0, 255)";
        a2.innerHTML = "rgb(0, 0, 255)";
        a2.style.backgroundColor = "rgb(0, 0, 255)";
        a3.innerHTML = "rgb(0, 0, 255)";
        a3.style.backgroundColor = "rgb(0, 0, 255)";
        a4.innerHTML = "rgb(0, 0, 255)";
        a4.style.backgroundColor = "rgb(0, 0, 255)";
        a5.innerHTML = "rgb(0, 0, 255)";
        a5.style.backgroundColor = "rgb(0, 0, 255)";
        a6.innerHTML = "rgb(0, 0, 255)";
        a6.style.backgroundColor = "rgb(0, 0, 255)";
        a7.innerHTML = "rgb(0, 0, 255)";
        a7.style.backgroundColor = "rgb(0, 0, 255)";
        a8.innerHTML = "rgb(0, 0, 255)";
        a8.style.backgroundColor = "rgb(0, 0, 255)";
        a9.innerHTML = "rgb(0, 0, 255)";
        a9.style.backgroundColor = "rgb(0, 0, 255)";
        a10.innerHTML = "rgb(0, 0, 255)";
        a10.style.backgroundColor = "rgb(0, 0, 255)";
    } else if (selection == "random" && doOnce != "random"){
        var num1 = Math.round(Math.random()*255);
        var num2 = Math.round(Math.random()*255);
        var num3 = Math.round(Math.random()*255);
        a1.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a1.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a2.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a2.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a3.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a3.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a4.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a4.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a5.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a5.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a6.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a6.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a7.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a7.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a8.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a8.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a9.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a9.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
        num1 = Math.round(Math.random()*255);
        num2 = Math.round(Math.random()*255);
        num3 = Math.round(Math.random()*255);
        a10.innerHTML = "rgb("+num1+", "+num2+", "+num3+")";
        a10.style.backgroundColor = "rgb("+num1+", "+num2+", "+num3+")";
    };

    doOnce = selection;
};


// Run Functions //
setupPage();

setInterval(() => {
    function2();
}, 10);