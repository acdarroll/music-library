function Library(name, creator) {
  if(name === undefined) {
    throw "Need to pass a name to Playlist constructor";
  }
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

function Playlist(name) {
  if(name === undefined) {
    throw "Need to pass a name to Playlist constructor";
  }
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

Playlist.prototype.overallRating = function() {
  return this.tracks.reduce((acc, track) => acc + track.rating, 0) / this.tracks.length;
};

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc, track) => acc + track.length, 0);
};

function Track(title, artist, rating, length) {
  if(title === undefined) {
    throw "Need to pass a name to Playlist constructor";
  }
  this.title = title;
  this.artist = artist;
  this.rating = rating;
  this.length = length;
}

module.exports = {
  Library,
  Playlist,
  Track
};





