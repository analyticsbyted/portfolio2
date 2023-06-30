const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thrones';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9170e9bd6msh5574131a4c51b69p191225jsnbec7739913a6',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}