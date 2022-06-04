    var nameinput = document.createElement("input")
    document.body.append(nameinput)
    nameinput.id="userName"
    nameinput.type="text"
    nameinput.placeholder="enter your name"

    var userAge = document.createElement("input")
    document.body.append(userAge)
    userAge.id= "userAge"
    userAge.type="date"
    userAge.placeholder="enter your Age"

    var myButton = document.createElement("button")
    document.body.append(myButton)
    myButton.innerText="send" 
    myButton.addEventListener("click",chackUserAge)

 function chackUserAge() {
     var thisDay = new Date()
     var h3_line= document.createElement("h3")
     document.body.append(h3_line)
     if (thisDay.getFullYear-userAge.value>18) {
        h3_line.style.innerText = "Welcome"+nameinput.value
        h3_line.style="color:blue"
     }
     else{
         h3_line.innerText="No Entry!"+"<img src="+"https://i.gifer.com/7rO1.gif"+">"
         h3_line.style="color:red"
     }   
}




