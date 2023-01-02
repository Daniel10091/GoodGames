export class GenreModel {
  id: number; // id of the genre
  name: string; // name of the genre
}

export class SongModel {
  id: number; // id of the song
  name: string; // name of the song
  genre: string; //genre of the song
  artist: Artist; // id of the artist
  album?: Album; // id of the album
  duration?: number; // duration of the song
  songUrl: string; // url of the song
  isPlaying?: boolean = false; // true if song is playing
}

export class ArtistModel {
  id: number; // id of the artist
  name: string; // name of the artist
  genres?: string[]; // list of genres of the artist
  songs?: Song[]; // list of songs of the artist
}

export class AlbumModel {
  id: number; // id of the album
  name: string; // name of the album
  genre?: string; // genre of the album
  artist?: Artist; // artist of the album
  duration?: number; // duration of the album
  songs?: Song[]; // list of songs in the album
  isPlaying?: boolean = false; // true if album is playing
}

export class PlaylistModel {
  id: number; // id of the playlist
  name: string; // name of the playlist
  genres?: Genre[]; // genre of the playlist
  songs?: Song[]; // list of songs in the playlist
  artists?: Artist[]; // artist of the playlist
  duration?: number; // duration of the playlist
  isPlaying?: boolean = false; // true if playlist is playing
}
