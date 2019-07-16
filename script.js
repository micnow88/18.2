var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'http://moznaprzeczytac.pl/wp-content/uploads/2012/07/harry-potter-i-kamiec-filozoficzny.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQxrPrBUVm3aFMMPVPM2pTWOymuk2KSHc1yzgjpoyCdjajHnoAV'
  },
  {
  	id: 3,
  	title: 'Szeregowiec Ryan',
  	desc: 'Film o II wojnie światowej',
  	image: 'https://s3.viva.pl/newsy/plakat-filmu-szeregowiec-ryan-steven-spielberg-439257-movie_cover.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  	return React.createElement('li', {key: movie.id},
      	React.createElement('h2', {}, movie.title),
      	React.createElement('p', {}, movie.desc),
      	React.createElement('img', {
      		className: 'image',
      		src: movie.image,
      		alt: movie.title,
      		width: '300px',
      		height: '445px'
      	})
	);
});

var element = 
	React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement('ul', {}, moviesElements)
  	);

ReactDOM.render(element, document.getElementById('app'));