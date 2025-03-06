const names = ["Michael", "Jessica", "David", "Emily", "Thomas"]

const prices = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]

const occupations = ["Web Developer", "Social Media Manager", "Video Editor", "Virtual Assistant", "JS Specialist"]

const freelancers = [
    {name: "Alex", price: 45, occupation: "Graphic Designer"},
    {name: "Samantha", price: 35, occupation: "Content Writer"},
];

// =========================================

function avgPrice() {
    const avgPriceElement = document.querySelector("#average");
    const priceSum = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
    const average = (priceSum / freelancers.length).toFixed(0);

    avgPriceElement.textContent = `Average price is $${average} per hour`;
}

function addListing() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    freelancers.push({ name, price, occupation })
}

// =========================================

function render() {
    const listingsList = document.querySelector("#listings");
    const listingsElements = freelancers.map((freelancer) => {
        const listingElement = document.createElement("li");
        listingElement.textContent = `${freelancer.name} - $${freelancer.price}/hr - ${freelancer.occupation}`
        return listingElement;
    });
    listingsList.replaceChildren(...listingsElements);
}

// =========================================

const addListingInterval = setInterval(() => {
    addListing();
    render();
    avgPrice();

    if (freelancers.length >= 50) {
        clearInterval(addListingInterval)
    }
}, 1500)

render();
avgPrice();