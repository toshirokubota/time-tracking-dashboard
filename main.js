const dashboard = document.getElementById('dashboard');
// let tasks;

const appendItem = (item) => {
  // add the markup for each item to the DOM
  const category = item.title.toLowerCase().replace(' ','-')+'-card';
  const container = document.getElementById(category);
  const card = container.querySelector('.frontside');
  card.innerHTML = `
    <p class="text-head">${item.title}</p>
    <div class="timeframe daily">
        <p class="text-headXL">${item.timeframes.daily.current} hrs</p>
        <p class="text-body">yesterday - ${item.timeframes.daily.previous} hrs</p>
    </div>
    <div class="timeframe weekly">
        <p class="text-headXL">${item.timeframes.weekly.current} hrs</p>
        <p class="text-body">last week - ${item.timeframes.weekly.previous} hrs</p>
    </div>
    <div class="timeframe monthly">
        <p class="text-headXL">${item.timeframes.monthly.current} hrs</p>
        <p class="text-body">last month - ${item.timeframes.monthly.previous} hrs</p>
    </div>
  `
  //<input type="checkbox" ${item.completed ? 'checked' : ''} />

//  container.appendChild(todo);
};

// append the data to the DOM
const populateDOM = (data) => {
  // with a forEach loop
  data.forEach((item) => {
    appendItem(item);
  });

//   // this can also be written
//   data.forEach(appendItem);

//   // with a for ... of loop
//   for (const item of data) {
//     appendItem(item);
//   }
}
const period = document.getElementById('period');
const elms = period.querySelectorAll('li');
for(let elm of elms) {
    elm.addEventListener('click', (e)=> {
        console.log(e.target.textContent);
        dashboard.setAttribute('period', e.target.textContent);
    });
}

// fetch the JSON data
fetch('data.json').then((response) => {
  if(!response.ok) return console.log('Oops! Something went wrong.');

  return response.json();
}).then((data) => {
  // handle the data
  console.log(data);
//   tasks = data;
  populateDOM(data);
});
