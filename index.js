const employees = [
	{
	    "_id": "1",
	    "name": "Klein Blackburn",
	    "position": "Marketing Disigner",
	    "office": "Bannock",
	    "age": 26,
	    "start_date": "2014-02-22T01:05:05 -04:00",
	    "salary": "$1,960.64"
	  },
	  {
	    "_id": "20",
	    "name": "Vaughan Sutton",
	    "position": "Junior Javascript Developer",
	    "office": "Ellerslie",
	    "age": 34,
	    "start_date": "2017-06-15T08:21:44 -03:00",
	    "salary": "$3,400.20"
	  },
	  {
	    "_id": "3",
	    "name": "Laurel Stuart",
	    "position": "Support Lead",
	    "office": "Tivoli",
	    "age": 35,
	    "start_date": "2014-10-23T12:33:13 -04:00",
	    "salary": "$3,796.19"
	  },
	  {
	    "_id": "4",
	    "name": "Winnie Graham",
	    "position": "Support Lead",
	    "office": "Needmore",
	    "age": 32,
	    "start_date": "2016-06-24T10:13:44 -03:00",
	    "salary": "$2,877.57"
	  },
	  {
	    "_id": "5",
	    "name": "Bruce Gross",
	    "position": "Support Lead",
	    "office": "Baden",
	    "age": 34,
	    "start_date": "2017-08-03T02:37:54 -03:00",
	    "salary": "$2,235.80"
	  },
	  {
	    "_id": "6",
	    "name": "Consuelo Tucker",
	    "position": "Junior Javascript Developer",
	    "office": "Iola",
	    "age": 36,
	    "start_date": "2018-07-25T10:26:58 -03:00",
	    "salary": "$1,718.98"
	  },
	  {
	    "_id": "7",
	    "name": "Cherie Gilliam",
	    "position": "Marketing Disigner",
	    "office": "Ruffin",
	    "age": 28,
	    "start_date": "2016-10-21T12:02:18 -03:00",
	    "salary": "$2,875.93"
	  },
	  {
	    "_id": "8",
	    "name": "Britney Ellis",
	    "position": "Junior Javascript Developer",
	    "office": "Wilsonia",
	    "age": 28,
	    "start_date": "2015-05-09T02:14:59 -03:00",
	    "salary": "$3,387.66"
	  },
	  {
	    "_id": "9",
	    "name": "Bray Sanchez",
	    "position": "Support Lead",
	    "office": "Kenwood",
	    "age": 24,
	    "start_date": "2015-03-04T08:40:13 -03:00",
	    "salary": "$1,401.25"
	  },
	  {
	    "_id": "10",
	    "name": "James Rowe",
	    "position": "Seniour Java Developer",
	    "office": "Downsville",
	    "age": 29,
	    "start_date": "2015-10-13T03:12:27 -03:00",
	    "salary": "$3,053.64"
	  },
	  {
	    "_id": "11",
	    "name": "Laverne Gonzalez",
	    "position": "Seniour Java Developer",
	    "office": "Welch",
	    "age": 24,
	    "start_date": "2017-12-18T07:58:57 -03:00",
	    "salary": "$2,333.97"
	  },
	  {
	    "_id": "12",
	    "name": "Wolf Finley",
	    "position": "Marketing Disigner",
	    "office": "Sabillasville",
	    "age": 39,
	    "start_date": "2015-05-19T04:33:04 -03:00",
	    "salary": "$1,182.25"
	  },
	  {
	    "_id": "13",
	    "name": "Stephanie Mccullough",
	    "position": "Junior Javascript Developer",
	    "office": "Grenelefe",
	    "age": 19,
	    "start_date": "2017-09-29T10:43:38 -03:00",
	    "salary": "$2,028.24"
	  },
	  {
	    "_id": "14",
	    "name": "Garcia Heath",
	    "position": "Seniour Java Developer",
	    "office": "Bagtown",
	    "age": 24,
	    "start_date": "2015-11-21T02:45:38 -03:00",
	    "salary": "$1,692.91"
	  },
	  {
	    "_id": "15",
	    "name": "Elva Roy",
	    "position": "Junior Javascript Developer",
	    "office": "Glenshaw",
	    "age": 28,
	    "start_date": "2016-11-26T02:24:05 -03:00",
	    "salary": "$2,973.16"
	  },
	  {
	    "_id": "16",
	    "name": "Dana Knox",
	    "position": "Junior Javascript Developer",
	    "office": "Gerber",
	    "age": 27,
	    "start_date": "2018-05-08T02:33:40 -03:00",
	    "salary": "$1,249.54"
	  },
	  {
	    "_id": "17",
	    "name": "Ellison Solis",
	    "position": "Marketing Disigner",
	    "office": "Greenwich",
	    "age": 40,
	    "start_date": "2018-08-07T03:08:09 -03:00",
	    "salary": "$3,835.63"
	  }
]


const EMPLOYEES_ON_THE_PAGE = 5;

const getEmployeesForPage = (employees, pageNum) =>{
	let startItem = (pageNum - 1) * EMPLOYEES_ON_THE_PAGE;
	const employeesForPage = employees.slice(startItem,startItem + EMPLOYEES_ON_THE_PAGE);
	return employeesForPage;
}

const getPagesAmount = (employees) => {
	return Math.ceil(employees.length/EMPLOYEES_ON_THE_PAGE)
}

const filteremployees = (employees, searchValue) =>{
	const employeesfiltered = employees.filter((employee)=>{
		for(key in employee){
			if(employee[key] === searchValue){
				return employee
			}
		}
	})
	return employeesfiltered;
}

const loadPage = (pageNum, employeesToShow = employees) =>{
	let searchValue = document.getElementById('searchValue').value;
	if(searchValue){
		employeesToShow = filteremployees(employees,searchValue);
	}
	rerenderTableAndPages(pageNum,employeesToShow);
}

const renderFilter = () =>{
	let filterInput = `<input type="text" id="searchValue"><button id="searchButton" onclick="loadPage()">Search</button>`;
	document.body.insertAdjacentHTML('beforeEnd', filterInput);
}

const renderTable = (employees, pageNum) =>{
	const employeesOnPage = getEmployeesForPage(employees, pageNum);
	let tableStringstart = `<div id="employeeTable"><table class="employeesTable" border="1"><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start Date</th><th>Salary</th></tr>`;
	let tableStringend = `</table></div>`;
	let employeesString = ``;
	for(let employee of employeesOnPage){
		employeesString += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.office}</td><td>${employee.age}</td><td>${employee.start_date}</td><td>${employee.salary}</td></tr>`;
	}
	let tableString = tableStringstart + employeesString + tableStringend;
    document.body.insertAdjacentHTML('beforeEnd', tableString);
}

const rerenderTableAndPages = (pageNum = 1, searchemployees = employees) => {
	document.body.removeChild(document.getElementById('employeeTable'));
	document.body.removeChild(document.getElementById('buttons'))
	renderTable(searchemployees,pageNum);
	renderPages(searchemployees);
}

const renderPages = (empl = employees) =>{
	let pagesAmount = getPagesAmount(empl);
	let buttons = ``;
	for(let i=1; i<=pagesAmount; i+=1){
		buttons+= `<button onclick="loadPage(${i})">${i}</button>`
	}
	const table = document.querySelector('#employeeTable');
	buttons = `<div id="buttons">${buttons}</div>`;
	table.insertAdjacentHTML('afterEnd', buttons);
}

renderFilter();
renderTable(employees,1);
renderPages();
























