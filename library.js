function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(name) {
  this.playlists.push(playlist);
};

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

Playlist.prototype.overallRating = function() {
  return this.tracks.reduce((acc, track) => acc + track.rating) / this.tracks.length;
};

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc, track) => acc + track.length);
};

function Track(title, artist, rating, length) {
  this.title = title;
  this.artist = artist;
  this.rating = rating;
  this.length = length;
}

let library = new Library("LHL-music", "Andrew");

let playlist1 = new Playlist("Coding");
let playlist2 = new Playlist("Workout");
let playlist3 = new Playlist("Classical");

let track1 = new Track("OOP", "John", 4, 3);
let track2 = new Track("Javascript Jive", "Java", 3, 5);
let track3 = new Track("Darkside of the Moon", "Led Zeppellin", 5, 4);
let track4 = new Track("Beethoven's 4th Symphony", "Beethoven", 3, 5);
let track5 = new Track("The Magic Flute", "Mozart", 5, 6);
let track6 = new Track("Alegro", "Mozart", 3, 2);
let track7 = new Track("You shook me all night long", "AC/DC", 2, 5);
let track8 = new Track("Addicted to you", "Avicii", 2, 7);
let track9 = new Track("Harlem Shake", "Baauer", 4, 3);





