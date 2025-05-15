document.getElementById('swapi-search-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent page from reloading

    const type = document.getElementById('swapiType').value;
    const query = document.getElementById('query').value.trim();
    const resultDisplay = document.getElementById('result');

    if(!query) {
        resultDisplay.textContent = 'Please enter a search term.';
        return;
    }

    try {
        const response = await fetch(`https://swapi.tech/api/${type}/?name=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.result && data.result.length > 0) {
            resultDisplay.textContent = JSON.stringify(data.result[0], null, 2);
        } else {
            resultDisplay.textContent = `No results found for "${query}" in ${type}.`;
        }
        } catch (err) {
            resultDisplay.textContent = `Error: ${err.message}`;
        }

})