const names = [
    'David',
    'Anita',
    'Holly',
    'Steward',
    'Ernesto',
    'Joel',
    'Sara',
    'Annette',
    'Arisa',
    'Ana',
    'Adel',
    'Arnold',
    'Ajax',
];

window.onload = () => {
      
}

function handleChangeOnInput(value) {
    const keyword = value.trim();
    const ulEl = document.getElementById('ul');
    ulEl.innerHTML = ""; // remove nodes

    if (keyword !== "") {
        const regex = new RegExp(`^${value}`, 'i');    
        const newArray = names.sort().filter((item) => regex.test(item));

        for (let name of newArray) {
            const liEl = document.createElement("li");
            liEl.textContent = name;
            ulEl.appendChild(liEl);
        }
    }    
}