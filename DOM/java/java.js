// Thay đổi font 3 đoạn văn
function changefontsize(){
	var x=document.getElementById('x1').value;
	p1.style.fontSize= Number(x) + "px";
	p2.style.fontSize=Number(x) + "px";
	p3.style.fontSize= Number(x) + "px";
}

function increasefontsize () {
	var ele = document.getElementsByTagName('p');
	var tt = document.getElementById('x2').value;
	var num=ele[tt - 1 ].style.fontSize ;
	var numb= parseInt(num);
	
	if (numb<=30){
		ele[tt-1].style.fontSize = numb() +"px" ;
	}numb=numb+1 ;
}

function decreasefontsize(){
	var ele = document.getElementsByTagName('p');
	var tt = document.getElementById('x2').value;
	var num=ele[tt - 1 ].style.fontSize ;
	var numb= parseInt(num);
	numb= numb-1 ;
	if (numb>=10) {
		ele[tt-1].style.fontSize = numb +"px" ;
	}
}

var d=3;
function changecolor(){
	if (d%3==0){
		p1.style.color="blue";
		p2.style.color=" red";
		p3.style.color= "yellow ";
	}
	else if (d%3==1){
		p1.style.color="green";
		p2.style.color=" orange";
		p3.style.color= "purple ";
	}
	else if (d%3==2){
		p1.style.color="black";
		p2.style.color=" black";
		p3.style.color= "black ";
	}
	d=d+1;
}

var e=3;
function changebgcolor(){
	if (e%3==0){
		p1.style.backgroundColor ="blue";
		p2.style.backgroundColor = "red";
		p3.style.backgroundColor ="yellow";
		
	}
	else if (e%3==1){
		p1.style.backgroundColor ="green";
		p2.style.backgroundColor = "orange";
		p3.style.backgroundColor = "purple";
	
	}
	else if (e%3==2){
		p1.style.backgroundColor ="white";
		p2.style.backgroundColor = "white";
		p3.style.backgroundColor = "white";	
	}
	e=e+1;
}

function copyContent(){
	var arrp = document.getElementsByTagName('p');
	var pchange1 = document.getElementById('para').value;
	var pchange2 = document.getElementById('para2').value;
	var a=pchange1.charAt(1);
	var b=pchange2.charAt(1);
	arrp[Number(a)-1].innerText = arrp[Number(b)-1].innerText ;

}
