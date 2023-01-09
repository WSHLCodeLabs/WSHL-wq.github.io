var calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", function() {
  // Get the values of the input fields
  var gpaxscore = document.getElementById("gpaxscore").value;
  var gpaxpercentage = document.getElementById("gpaxpercentage").value;
  var tgatscore = document.getElementById("tgatscore").value;
  var tgatpercentage = document.getElementById("tgatpercentage").value;
  var tpatscore = document.getElementById("tpatscore").value;
  var tpatpercentage = document.getElementById("tpatpercentage").value;
  var mathscore = document.getElementById("mathscore").value;
  var mathpercentage = document.getElementById("mathpercentage").value;
  var sciscore = document.getElementById("sciscore").value;
  var scipercentage = document.getElementById("scipercentage").value;
  var physcore = document.getElementById("physcore").value;
  var phypercentage = document.getElementById("phypercentage").value;
  var chemscore = document.getElementById("chemscore").value;
  var chempercentage = document.getElementById("chempercentage").value;
  var bioscore = document.getElementById("bioscore").value;
  var biopercentage = document.getElementById("biopercentage").value;
  var socscore = document.getElementById("socscore").value;
  var socpercentage = document.getElementById("socpercentage").value;
  var thascore = document.getElementById("thascore").value;
  var thapercentage = document.getElementById("thapercentage").value;
  var engscore = document.getElementById("engscore").value;
  var engpercentage = document.getElementById("engpercentage").value;
  // Calculate the result
  var gpaxresult = ((gpaxscore * 25) * gpaxpercentage) / 100;
  var gatresult = (tgatscore / 100) * tgatpercentage;
  var patresult = (tpatscore / 100) * tpatpercentage;
  var mathresult = (mathscore / 100) * mathpercentage;
  var sciresult = (sciscore / 100) * scipercentage;
  var phyresult = (physcore / 100) * phypercentage;
  var chemresult = (chemscore / 100) * chempercentage;
  var bioresult = (bioscore / 100) * biopercentage;
  var socresult = (socscore / 100) * socpercentage;
  var tharesult = (thascore / 100) * thapercentage;
  var engresult = (engscore / 100) * engpercentage;



  var sumall = gatresult + patresult + gpaxresult + mathresult + sciresult + phyresult + chemresult + bioresult + socresult + tharesult + engresult;

  // Display the result in the span element
  // document.getElementById("gatresult").innerHTML = gatresult;
  // document.getElementById("patresult").innerHTML = patresult;
  // document.getElementById("gpaxresult").innerHTML = gpaxresult;
  document.getElementById("sumall").innerHTML = sumall;
});
