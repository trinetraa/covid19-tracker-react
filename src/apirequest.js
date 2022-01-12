fetch("https://covid-193.p.rapidapi.com/statistics?country=india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "711bfa8026mshd398dcea80f917cp125e11jsn917c0477c078"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});