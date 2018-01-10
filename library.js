function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function() {
  return this.tracks.reduce((acc, track) => acc + track.rating) / this.tracks.length;
};

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc, track) => acc + track.length);
};