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

var Movie = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    var movie = this.props.movie;

    return React.createElement('li', {},
      React.createElement(MovieTitle, {title: movie.title}, ),
      React.createElement(MovieDescription, {desc: movie.desc}, ),
      React.createElement(MovieImage, {src: movie.image, alt: movie.title}, )
    );
  }
});

var MovieTitle = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
  },

  render: function() {
    return React.createElement('h2', {}, this.props.title)
  },
});

var MovieDescription = React.createClass({

  propTypes: {
    desc: React.PropTypes.string,
  },

  render: function() {
    return React.createElement('p', {}, this.props.desc)
  },
});

var MovieImage = React.createClass({

  propTypes: {
    src: React.PropTypes.string,
    alt: React.PropTypes.string
  },

  render: function() {
    return React.createElement('img', {
      className: 'image',
      src: this.props.src,
      alt: this.props.alt,
      width: '300px',
      height: '445px'
    })
  },
});

var MovieList = React.createClass({

  render: function() {
    var moviesCell = movies.map(function(movie) {
      return React.createElement(Movie, {
        movie: movie,
        key: movie.id
      });
    });
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesCell)
      )
    )
  },
});

var element = React.createElement(MovieList);

ReactDOM.render(element, document.getElementById('app'));
