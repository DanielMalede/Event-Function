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

var h3_line= document.createElement("h3");
document.body.append(h3_line);

h3_line.addEventListener("mouseover",()=>{
    h3_line.style.color="green"; });

var thisDay = new Date();

var isEighteen=false;
function chackUserAge() {
    var userYear = +userAge.value.substring(0,4);
    if (thisDay.getFullYear()-userYear >18) {
        h3_line.innerText = "Welcome"+nameinput.value;
        h3_line.style="color:blue";
        isEighteen=true;
    }
    else{
        h3_line.innerHTML="No Entry!"+"<br>"+"<img src=https://i.gifer.com/7rO1.gif>";
        h3_line.style.color="red";         
    }   

    if(isEighteen){
        var array = []

        var myList = document.createElement("ul")
        
        var userLastName = document.createElement("input");
        document.body.append(userLastName);
        userLastName.placeholder="enter your last name";
        
        var inputUserName = document.createElement("input");
        document.body.append(inputUserName);
        inputUserName.placeholder="enter your name";
        
        var arrayButton = document.createElement("button");
        document.body.append(arrayButton);
        arrayButton.innerText="clack me"
        arrayButton.addEventListener("click",()=>{
            array.push(inputUserName.value)
            inputUserName.value=""
            if (array.length==4) {
                for (var i = 0; i < array.length; i++) {
                       myList.innerHTML+="<li id=list"+i+">"+array[i]+" " +userLastName.value+"</li>"       
                       var myarray = array[i]
                       if (myarray[0]==nameinput.value[0]) {
                        document.getElementById("list"+i).style="color:blue";
                    }
                }
                // for (var j = 0; j < array.length; j++) {
                //     if (document.getElementById("list"+i)==nameinput.value[0]) {
                //      myList.style="color:red"  
                // }
            }
            document.body.append(myList);
        })
    }
}






