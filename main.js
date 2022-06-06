    var nameinput = document.createElement("input")
    document.body.append(nameinput)
    nameinput.id="userName"
    nameinput.type="text"
    nameinput.placeholder="enter your name"

    var userAge = document.createElement("input")
    document.body.append(userAge)
    userAge.id= "userAge"
    userAge.type="date"
    
    
    var myButton = document.createElement("button")
    document.body.append(myButton)
    myButton.innerText="send" 
    myButton.addEventListener("click",chackUserAge)
    
    var thisDay = new Date()
    
    function turntonumber(str) {
        for (var i = 0; i < str.lenght; i++) {
            var year= ""
            year+=str[i]
            if (str[i]=="-") {
                return parseInt (year)             
            }   
        }
    }
    function chackUserAge() {
        var h3_line= document.createElement("h3")
        document.body.append(h3_line)
        if (thisDay.getFullYear()- turntonumber(userAge.value)<18) {
            h3_line.innerHTML="No Entry!"+"<br>"+"<img src=https://i.gifer.com/7rO1.gif>";
            h3_line.style.color="red"
        }
        else{
            h3_line.style.innerText = "Welcome"+nameinput.value
            h3_line.style="color:blue"
        }   
    }