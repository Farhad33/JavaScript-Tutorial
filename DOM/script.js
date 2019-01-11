// console.log("hello");
// camelCase
// you can search by Element name and you will get an array like of elements.
let allH1s = document.getElementsByTagName('h1');
allH1s[0].innerText = "This is the first h1";

// you can search by class name and you will get an array like of elements.
let allParagraph = document.getElementsByClassName("allParagraph");
allParagraph[1].innerHTML = "we're changing this paragraph";

let meysam = document.getElementById("meisam");
meysam.style.fontSize = "50px";

let query = document.querySelectorAll(".ker");

let h2 = document.createElement("h2");
let text = document.createTextNode("we're createing this node");
h2.appendChild(text);
h2.classList.add("newNode");
meysam.appendChild(h2);
meysam.parentNode.insertBefore(h2, meysam.nextSibling);