const appConfig = {
  name: 'GoodGames', // The name of the application
  version: '1.0.0', // The version of the application
  description: 'Good Games', // The description of the application
  url: 'https://goodgames.com', // The URL of the application
  logo: 'https://goodgames.com/img/logo.png', // The logo of the application
  author: { // The author of the application
    name: 'Good Games', // The name of the author
    url: 'https://goodgames.com', // The URL of the author
    image: 'https://goodgames.com/img/logo.png', // The image of the author
    email: 'info@goodgames.com', // The email address of the author
    twitter: 'https://twitter.com/goodgames', // The twitter of the author
    github: 'https://github.com/goodgames', // The github of the author
    linkedin: 'https://www.linkedin.com/in/goodgames', // The linkedin of the author
    instagram: 'https://www.instagram.com/goodgames', // The instagram of the author
    youtube: 'https://www.youtube.com/goodgames', // The youtube of the author
    facebook: 'https://www.facebook.com/goodgames', // The facebook of the author
  }
}

var appDarkTheme: boolean = false;

var minSongPauseInterval: number = 10; // Min interval to pause the song
var maxSongPauseInterval: number = 40; // Max interval to pause the song

export {
  appConfig, 
  appDarkTheme, 
  minSongPauseInterval, 
  maxSongPauseInterval 
}
