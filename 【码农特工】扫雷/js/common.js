var tabOn = document.getElementById("tab");
var tabOnTr = tabOn.getElementsByTagName("tr");
var tabOnTd = tabOn.getElementsByTagName('td');
var tabOnTd = [];
console.log(tabOnTd);
var row = 0;
var col = 0;
var data = new Array(
	[0, 0, 0, 0, 0, 0, 0, 0, 0], 
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
	);
var count = 0;
do {
	row = 1 + Math.round(Math.random() * 8);
	col = 1 + Math.round(Math.random() * 8); 
	if (data[row][col] == 0) {
		data[row][col] = "雷";
		count += 1;
		console.log(count);
	}
} 
while (count < 10)
	for (var i = 1; i < 10; i++) {
		for(var j = 1; j < 10; j++) {
			if(data[i][j] != "雷"){ 
				var counter = 0; 
			if(data[i - 1][j - 1] == "雷") {
				counter += 1; 
			} 
			if(data[i - 1][j] == "雷") {
				counter += 1; 
			}
			if(data[i - 1][j + 1] == "雷") {
				counter += 1;
			} 
			if(data[i][j - 1] == "雷") {
				counter += 1;
			} 
			if(data[i][j + 1] == "雷") {
				counter += 1;
			} 
			if(data[i + 1][j - 1]=="雷") {
				counter += 1;} 
			if(data[i + 1][j] == "雷") {
				counter += 1;
			} 
			if(data[i + 1][j + 1] == "雷") {
				counter += 1;
			} 
				data[i][j] = counter; 
			} 
		}
	}
tabOn.onclick = function() {
	check();
}
var tabCol = data[row][col];
function check() {
	for (var i = 0; i < tabOnTr.length; i++) {
		for (var j = 0; j < tabOnTr.length; j++) {
			tabOnTd[i] = tabOnTr[j].getElementsByTagName("td");	
			tabOnTd[i][j].innerHTML = tabCol;
		}
	}
}