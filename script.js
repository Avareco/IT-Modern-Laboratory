function promptUser(){var istory = [""]
  var prom=prompt('Write some values','')
  istory.push(prom)
var strHistory=istory.join('')
var arrHistoriString=[strHistory]
var UserValueForPre=prompt('For Predict','');
var userlength=UserValueForPre.length
var numbe =arrHistoriString[0].indexOf(UserValueForPre)+userlength
var nextNumb=arrHistoriString[0][numbe]
  	document.getElementById('display').innerHTML=nextNumb
}
var i =0;
function displayHidden(){
	i+=1
document.getElementById('display').hidden=false
if(i%2==0){
	document.getElementById('display').hidden=true
}
}
