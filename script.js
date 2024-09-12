const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	//Convert imput string to lowercase for case-insensitive matching
	str = str.toLowerCase();
	//Filter the fruit array for the items that include the input string
	return fruit.filter(item => item.toLowerCase().includes(str));
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value;
	//Get search results based on input value
	const results = search(inputVal);
	//Show the suggestions
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {

	// TODO
	//Clear existing suggestions
	suggestions.innerHTML = '';
	//If there are no results, exit
	if (results.lenght === 0) {
		return;
	}
	results.forEach(result => {
		//Create a list item for each result
		const item = document.createElement('li');
		//Highlight matching text
		const highlighted = highlightText(result, inputVal);
		item.innerHTML = highlighted;
		suggestions.appendChild(item);
	});
}
//Function to highlight matching text
function highlightText(text, query) {
	const index = text.toLowerCase().indexOf(query.toLowerCase());
	if (index === -1) return text;
	const beforeMatch = text.substring(0, index);
	const match = text.substring(index, index + query.length);
	const afterMatch = text.substring(index + query.length);
	return `${beforeMatch}<span class="highlight">${match}</span>${afterMatch}`;
}

function useSuggestion(e) {
	// TODO
	if (e.target.tagName === 'LI') {
		// Set the iput value to the clicked suggestion 
		input.value = e.target.textContent;
		//Clear the suggestions list
		suggestions.innrHTML = '';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);