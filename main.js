
const appendItem = (item) => {
  // add the markup for each item to the DOM
  const category = item.title.toLowerCase().replace(' ','-')+'-card';
  const container = document.getElementById(category);
  const card = container.querySelector('.frontside');
  card.innerHTML = `
    <div class='category'>
        <p class="text-body">${item.title}</p>
        <p class="ellipse" tabindex="0"></p>
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
};

// append the data to the DOM
const populateDOM = (data) => {
  data.forEach((item) => {
    appendItem(item);
  });
}
const main = document.querySelector('main');
const period = document.getElementById('period');
const elms = period.querySelectorAll('li');
for(let elm of elms) {
    elm.addEventListener('click', (e)=> {
        main.setAttribute('period', e.target.textContent);
    });
    elm.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            // console.log(e.target.textContent);
            main.setAttribute('period', e.target.textContent);
        }
    });
}


// fetch the JSON data
fetch('data.json').then((response) => {
  if(!response.ok) return console.log('Oops! Something went wrong.');

  return response.json();
}).then((data) => {
  // handle the data
//   console.log(data);
//   tasks = data;
  populateDOM(data);
});
