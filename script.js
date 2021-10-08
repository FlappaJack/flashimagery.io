document.onload = myfunc()

function myfunc(){
  fetch("../headerFooterNav/header.html").then (response => {
    return response.text()
  } )
  .then (data =>{
    document.querySelector("header").outerHTML= data;
  });

  fetch("../headerFooterNav/nav.html").then (response =>{
    return response.text()
  })
  .then(data => {
  document.querySelector("nav").outerHTML = data;
  });
  fetch("../headerFooterNav/footer.html").then (response =>{
    return response.text()
  })
  .then(data => {
  document.querySelector("footer").outerHTML = data;
  });
}

function dropDown() {
  var myLinks = document.getElemenetById("navList")
  if (myLinks.style.display === block){
    myLinks.style.display = none;
  } else {
    myLinks.style.display = block;
  }
}


function showMenu(){
  var x = document.getElementById("navList")
  if (x.style.height === "150px") {
    x.style.height = "0px";
  } else {
    x.style.height = "150px";
  }
}
