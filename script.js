// function alertSearch() {
//   var gooGles = document.getElementById("googleinput").value;
//   alert("You searched for:  " + gooGles);
// }
// document.getElementById("ggsearch").addEventListener("click", alertSearch);


document.getElementById('btnsearch').addEventListener('click', function() {
  const searchTerm = document.getElementById('googleinput').value;
  if (searchTerm) { 
    alert('You searched for: ' + searchTerm);
  } else {
    alert('Please enter a search term.');
  }
});