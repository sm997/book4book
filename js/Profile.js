// Create a "close" button and append it to each list item
function createCloseButton(id) {
    var ancestor = document.getElementById(id);
    var myNodelist = ancestor.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}
// Call createCloseButton function
createCloseButton("myUL1");
createCloseButton("myUL2");


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create a new list item when clicking on the "Add" button
function newElement(event) {
    var id = event.data.id;
    var idUL = event.data.idUL;
    console.log(id);
    console.log(idUL);

    var li = document.createElement("li");
    var inputValue = document.getElementById(id).value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById(idUL).appendChild(li);
        li.className = "myItem";
    }
    document.getElementById(id).value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


$(document).ready(function(){
    //add OnClick event to ADD BUTTON
    $("#span1").on("click", { id: "myInput1", idUL: "myUL1" }, newElement);
    $("#span2").on("click", { id: "myInput2", idUL: "myUL2" }, newElement);
});
