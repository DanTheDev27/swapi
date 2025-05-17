document.getElementById('swapi-search-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent page from reloading

    const type = document.getElementById('swapiType').value;
    const query = document.getElementById('query').value.trim();
    const resultDisplay = document.getElementById('result');

    if(!query) {
        resultDisplay.textContent = 'Please enter a search term.';
        resultDisplay.style.display = 'none' // hide if no search term
        return;
    }

    try {
        const response = await fetch(`https://swapi.tech/api/${type}/?name=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.result && data.result.length > 0) {
            resultDisplay.textContent = JSON.stringify(data.result[0], null, 2);
            resultDisplay.style.display = 'block' // show when results are available
        } else {
            resultDisplay.textContent = `No results found for "${query}" in ${type}.`;
            resultDisplay.style.display = 'block'; // show even when no results are shown
        }
        } catch (err) {
            resultDisplay.textContent = `Error: ${err.message}`;
            resultDisplay.style.display = 'block'; // show in case of error
        }

});

// toggle visibility of <pre>

function togglePreVisibility() {
    const resultDisplay = document.getElementById('result');
    if (!resultDisplay.textContent.trim()) {
        resultDisplay.style.display = 'none'; // hide pre element if empty
    } else {
        resultDisplay.style.display = 'block'; // show pre element if not empty
    }
}