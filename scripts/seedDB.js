const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mySite"
);

const bookSeed = [
	{
		name: 'Hangman',
		github: 'https://github.com/DefiledSpec/Word-Guess-Game',
		link: 'http://defiledspec.github.io/Word-Game-Hangman',
		img: '/assets/img/web-hangman.png',
		hasSite: true,
	},
	{
		name: 'Crystal Collector',
		github: 'https://github.com/DefiledSpec/Crystal-Collector',
		link: 'https://defiledspec.github.io/Crystal-Collector',
		img: '/assets/img/crystal-collector-2.png',
		hasSite: true,
	},
	{
		name: 'Trivia Game',
		github: 'https://github.com/DefiledSpec/Trivia-Game',
		link: 'https://defiledspec.github.io/Trivia-Game',
		img: '/assets/img/trivia.png',
		hasSite: true,
	},
	{
		name: 'GifTastic',
		github: 'https://github.com/DefiledSpec/GifTastic',
		link: 'https://defiledspec.github.io/GifTastic',
		img: '/assets/img/giftastic.png',
		hasSite: true,
	},
	{
		name: 'Train Scheduler',
		github: 'https://github.com/DefiledSpec/Train-Scheduler',
		link: 'https://defiledspec.github.io/Train-Scheduler',
		img: '/assets/img/train.png',
		hasSite: true,
	},
	{
		name: 'MEH Youtube Player',
		github: 'https://github.com/gustbrad/mehyoutubeplayer',
		link: 'https://gustbrad.github.io/mehyoutubeplayer',
		img: '/assets/img/mehyt.png',
		hasSite: true,
	},
	{
		name: 'Liri Bot',
		github: 'https://github.com/DefiledSpec/liri-bot',
		link: '',
		img: '/assets/img/liri.png',
		hasSite: false,
	},
	{
		name: 'Hangman CLI',
		github: 'https://github.com/DefiledSpec/word-guess-cli',
		link: '',
		img: '/assets/img/hangman-cli.png',
		hasSite: false,
	},
	{
		name: 'Bamazon',
		github: 'https://github.com/DefiledSpec/bamazon-cli',
		link: '',
		img: '/assets/img/bamazon.png',
		hasSite: false,
	},
	{
		name: 'Friend Finder',
		github: 'https://github.com/DefiledSpec/friend-finder',
		link: 'https://defiledspec-friend-finder.herokuapp.com',
		img: '/assets/img/friend-finder.png',
		hasSite: true,
	},
	{
		name: 'Eat Da Burger',
		github: 'https://github.com/DefiledSpec/eat-da-burger',
		link: 'https://ds-eat-da-burger.herokuapp.com/',
		img: '/assets/img/eat-da-burger.png',
		hasSite: true,
	},
	{
		name: 'Get Me My Coffee',
		github: 'https://github.com/EGartland/Group-Project-2',
		link: 'https://getmemycoffee.herokuapp.com/',
		img: '/assets/img/get-me-my-coffee.png',
		hasSite: true,
	},
	{
		name: 'OSRS News Scraper',
		github: 'https://github.com/DefiledSpec/osrs-news-scraper',
		link: 'https://osrs-news-scraper.herokuapp.com/',
		img: '/assets/img/osrs-news-scraper.jpg',
		hasSite: true,
	},
	{
		name: 'Clicky Game',
		github: 'https://github.com/DefiledSpec/Clicky-Game',
		link: 'https://ds-clicky-game.herokuapp.com/',
		img: '/assets/img/clicky-game.jpg',
		hasSite: true
	},
	{
		name: 'NYT React Search',
		github: 'https://github.com/DefiledSpec/nyt-react-search',
		link: 'https://ds-nyt-react-search.herokuapp.com/',
		img: '/assets/img/nyt-react-search.png',
		hasSite: false
	}
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
