window.onload = function(){
	var obj = {};
	var ret = document.querySelector("#ret");
	var tb = document.getElementsByTagName('table')[0];
	var tr = tb.getElementsByTagName('tr');
	for( var i = 0 , len = tr.length ; i < len ; i++ ){
		var td = tr[i].getElementsByTagName('td');
		obj[td[0].innerText] = { type : td[1].innerText , description : td[2].innerText }
		// console.log( td[0].innerText +";"+ td[1].innerText +";"+ td[2].innerText);
	}
	var str = JSON.stringify( obj ).replace(/\{/g,"{<br>").replace(/\}/g,"<br>}").replace(/\",\"/g,"\",<br>\"").replace(/\},/g,"},<br>");
	ret.innerHTML = str;
}