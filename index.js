console.log("Hello World!");

// ctrl + / to create comments

//Current date for the title

const dateElement = document.getElementById('date');
//this line grabs the element with the id="date"

console.log(dateElement); //check if we are targetting the span tag

let currentDate = new Date(); // this creates a JS Date object representing the current date and time

console.log(currentDate); //check the current date

//span's content = currentDates
dateElement.innerHTML = currentDate;

let dateOptions = {year:'numeric', month:'long', day:'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);
//this replaces the date with a nicely formatted one using US style formatting

//rapid api start

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': 'd460191d79msh9ca319191cf343dp1d3e73jsn01aad6b78f58',
        'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({woeid: '23424977'})
};


// rapid api end

fetch(url,options)
.then(res=>res.json())
.then(data=>{
	console.log(data);
})

let myPost = {

	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
}

console.log(myPost);
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

//Arrays -> list of elements

let graphData = [
	{ name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
	{ name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
];

console.log(graphData);
console.log(graphData[1]);
console.log(graphData[1].name);

// we can also add elements with the use of push
graphData.push(myPost);
console.log(graphData);

//======
//copy paste to fetch request
//======

console.log(graphData.length); //counts the elements in the graph data :3

// for loops are used to do repetitive tasks

for(let i=0; i < 2; i++){
	console.log(graphData[i]);
	console.log(graphData[i].name);
	console.log(graphData[i].queryUrl);
	console.log(graphData[i].volume);
} 

let topics = graphData.map(object=>{

	console.log(object);
	console.log(object.name);
	return object.name;

})

console.log(topics);

let volumes = graphData.map(object=>{
	return object.volume;
})

console.log(volumes);

const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
  labels: topics,
  datasets: [{
    label: '# of tweets/xeets',
    data: volumes,
    borderWidth: 2,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
    ],
    hoverBackgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
    ]
  }]
},
    options: {
    indexAxis:'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });