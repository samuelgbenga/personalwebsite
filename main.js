function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
  	x.className += " visible"
    console.log(x.className)
  } else {
  	x.className = 'topnav'
    console.log('i am not here')
  }
}

function myFunc(){
	var x = document.getElementById("navbar");
	x.className = 'topnav'
}