/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


const freelancers = arry.from({length: NUM_FREELANCERS}, makeFreelancer);
const averageRate = getAverageRate();


function getRandom (arry) {
    const index = Math.floor(Math.random() * arry.length);
    return arry[index];
}

function create () {
    const name = getRandom(NAMES);
    const occupation = getRandom(OCCUPATIONS);
    const rate = getRandom(PRICE_RANGE);

    return {
        name, occupation, rate
    };
}

const freelancer = []
for (let i = 0; i < NUM_FREELANCERS; i++) {
    freelancer.push(create());
}
console.log(freelancer);

function getAverageRate() {
    const total = freelancers.reduce(
        (total, freelancer) => total + freelancer.rate, 0);
}
    return total / freelancers.length;

function FreelancerRow({ name, occupation, rate}) {
    const $tr = document.createElement("tr")
    $tr.innerHTML = 
    '<td>${name}</td>'
    '<td>${occupation}</td>'
    '<td>$${rate}</td>'
    ;
    return $tr
}

function FreelancersRow() {
    const $tbody = document.createElement("tbody");
    const $freelancers = freelancers.map(FreelancerRow);
    $tbody.replaceChildren($freelancers);
    return $tbody;
}

function AverageRate() {
    const $p = document.createElement("p")
    $p.textContent = 'The rate is ${averageRate.toFixed(2)}.';
    return $p;
}

function render() {
    const $app = document.querySelector("#app");
    $app.querySelector("AverageRate").replaceWith(AverageRate());
    $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());

}

Render ();



