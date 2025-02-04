const dashboard = document.getElementById('dashboard');
// let tasks;

const appendItem = (item) => {
  // add the markup for each item to the DOM
  const category = item.title.toLowerCase().replace(' ','-')+'-card';
  const container = document.getElementById(category);
  const card = container.querySelector('.frontside');
  card.innerHTML = `
    <div class='category'>
        <p class="text-body">${item.title}</p>
        <p class=ellipse></p>
    </div>
    <div class="timeframe daily">
        <p class="text-headXL">${item.timeframes.daily.current} hrs</p>
        <p class="text-bodyS">yesterday - ${item.timeframes.daily.previous} hrs</p>
    </div>
    <div class="timeframe weekly">
        <p class="text-headXL">${item.timeframes.weekly.current} hrs</p>
        <p class="text-bodyS">last week - ${item.timeframes.weekly.previous} hrs</p>
    </div>
    <div class="timeframe monthly">
        <p class="text-headXL">${item.timeframes.monthly.current} hrs</p>
        <p class="text-bodyS">last month - ${item.timeframes.monthly.previous} hrs</p>
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
const main = document.querySelector('main');
const period = document.getElementById('period');
const elms = period.querySelectorAll('li');
for(let elm of elms) {
    elm.addEventListener('click', (e)=> {
        console.log(e.target.textContent);
        main.setAttribute('period', e.target.textContent);
        //period.setAttribute('period', e.target.textContent);        
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
