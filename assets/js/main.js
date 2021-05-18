/*
Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
*/

/*
 Milestone 2 Coloriamo le icone per tipo
 */


 /*
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const iconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let newIconList = [];

const selectHtml = document.querySelector(".card_container");
	
generate(iconList);

function selected(){

	deletehtml(selectHtml);

	let select = document.getElementById("select_type").value;
	console.log(select);

	if(select === 'animal'){
		newIconList = iconList.filter((element) => {
			return element.type === 'animal';
		});
	} else if (select === 'vegetable'){
		newIconList = iconList.filter((element) => {
			return element.type === 'vegetable';
		});
	} else if (select === 'user') {
		newIconList = iconList.filter((element) => {
			return element.type === 'user';
		});
	} else {
		newIconList = iconList;
	}

	generate(newIconList);
	console.log(newIconList);
}


function generate(list) {

	list.forEach((element) => {

		if(element.type === 'animal'){
			element.color = 'blue';
		} else if (element.type === 'vegetable'){
			element.color = 'orange';
		} else {
			element.color = 'purple';
		}
		
		selectHtml.insertAdjacentHTML("beforeend", 
			`
			<div class="card d_flex center_middle column">
					<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
					<h3>${element.name}</h3>
			</div>
			`
		);
	
	});
}

function deletehtml(list){
	while(list.hasChildNodes()){
		list.removeChild(list.firstChild);
	}
}