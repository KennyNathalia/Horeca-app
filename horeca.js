const frisPrice= 2.00;
const bierPrice= 2.50;
const wijnPrice= 3.00;
const bit8Price= 4.00;
const bit16Price= 5.00;



var frisAmount= 0;
var bierAmount= 0;
var wijnAmount= 0;
var bit8Amount= 0;
var bit16Amount= 0;


var loop= false;
while(loop==false){


var drinken = prompt("Hallo en welkom bij Cafe-bar Davinci! \nWelke bestelling wilt u toevoegen? \n(fris, bier, wijn of snack.) \nFris= $2.00  Bier= $2.50  Wijn= 3.00  Bitterballen 8= $2.70  Bitterballen 16= $5.40").toLowerCase();
if(drinken=="fris"){
	var frisAmount = Number(prompt("Hoeveel flesjes fris wilt u toevoegen aan uw bestelling?"))
	document.getElementById("frisBon").style.display="block";
	document.getElementById("fris2").style.display="block";


} else if(drinken=="bier"){
	var bierAmount = Number(prompt("Hoeveel glazen bier wilt u toevoegen aan uw bestelling?"))
	document.getElementById("bierBon").style.display="block";
	document.getElementById("bier2").style.display="block";



} else if(drinken=="wijn"){
	var wijnAmount = Number(prompt("Hoeveel glazen wijn wilt u toevoegen aan uw bestelling?"))
	document.getElementById("wijnBon").style.display="block";
	document.getElementById("wijn2").style.display="block";


	

} else if(drinken=="snack"){
	var snack = Number(prompt("Hoeveel bitterballen wilt u toevoegen aan uw bestelling? \n(8 of 16)"))
	if (snack=="8") {
		var bit8Amount= Number(prompt("Hoeveel bitterbalschalen van 8 wilt u hebben?"))
		var afrond = snack.toFixed(2);
		document.getElementById("bit8bon").style.display="block";
		document.getElementById("bit2").style.display="block";

	} else if (snack=="16"){
		var bit16Amount= Number(prompt("Hoeveel bitterbalschalen van 16 wilt u hebben"))
		var afrond = snack.toFixed(2);
		document.getElementById("bit16bon").style.display="block";
		document.getElementById("bit3").style.display="block";

	} else {
		alert("U kunt alleen kiezen tussen 8 of 16.")
	}
}

 


  else if(drinken=="stop"){
	loop=true
	var totalFris= frisPrice * frisAmount
    var totalBier= bierPrice * bierAmount
    var totalWijn= wijnPrice * wijnAmount
    var totalBit8= bit8Price * bit8Amount
    var totalBit16= bit16Price * bit16Amount

    var totalPrice= totalFris + totalBier + totalWijn + totalBit8 + totalBit16
    document.getElementById("frisBon").innerHTML = "Het aantal fris wat u heeft is " + frisAmount
    document.getElementById("fris2").innerHTML = "Dat kost dan $" + totalFris	
    document.getElementById("bierBon").innerHTML = "Het aantal bier wat u heeft is " + bierAmount
    document.getElementById("bier2").innerHTML = "Dat kost dan $" + totalBier
    document.getElementById("wijnBon").innerHTML = "Het aantal wijn wat u heeft is " + wijnAmount
    document.getElementById("wijn2").innerHTML = "Dat kost dan $" + totalWijn
    document.getElementById("bit8bon").innerHTML = "Het aantal bitterballen van 8 wat u heeft is " + bit8Amount
    document.getElementById("bit2").innerHTML = "Dat kost dan $" + totalBit8
    document.getElementById("bit16bon").innerHTML = "Het aantal bitterballen van 16 wat u heeft is " + bit16Amount
    document.getElementById("bit3").innerHTML = "Dat kost dan $" + totalBit16
	document.getElementById("bon").innerHTML = "Het totale wat u heeft is $" + totalPrice;

}

else {
 alert("Dit staat niet op het menu.")
}
}

