
var car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);
console.log(cars[0]); //index 0부터 시작. 이름 대신 array로
console.log(cars[1]);
console.log(cars[2]);

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

var j;
for(j = 0; j < 10; j++){
    console.log(j);
}

for(i=0; i<cars.length; i++) {
    if(cars[i] == "BMW"){
        console.log('BMW 차량이 있습니다.');
    }
    else {
        console.log('BMW 차량이 없습니다.');
    }
}




