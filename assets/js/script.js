calculateButton.addEventListener("click", function() {
  // Get the values of the input fields
  var gpaxscore = document.getElementById("gpaxscore").value;
  var gpaxpercentage = document.getElementById("gpaxpercentage").value;
  var patscore = document.getElementById("tpatscore").value;
  var patpercentage = document.getElementById("tpatpercentage").value;
  var gatscore = document.getElementById("tgatscore").value;
  var gatpercentage = document.getElementById("tgatpercentage").value;

  // Calculate the result
  var gpaxresult = ((gpaxscore * 25) * gpaxpercentage) / 100;
  var gatresult = (gatscore / 100) * gatpercentage;
  var patresult = (patscore / 100) * patpercentage;
  var sumall = gatresult + patresult + gpaxresult

  // Display the result in the span element
  document.getElementById("gatresult").innerHTML = gatresult;
  document.getElementById("patresult").innerHTML = patresult;
  document.getElementById("gpaxresult").innerHTML = gpaxresult;
  document.getElementById("sumall").innerHTML = sumall;
});