const assert = require("chai").assert;
const music = require("../library");

describe("Music Library", function() {

  let library;
  beforeEach(function() {
    library = new music.Library("LHL-music", "Andrew");
  });

  describe("Library", function() {
    context("when called with no arguments", function() {
        let blankLibrary = function() { return new music.Library(); };
        assert.throws(blankLibrary);
    });

    context("when passed a name", function() {
      it("should return an object that is an instance of Library", function() {
        assert.instanceOf(library, music.Library);
      });
      it("should return a library with name, creator and playlists", function() {
        assert.hasAllKeys(library, ["name", "creator", "playlists"]);
      });
      it("should return a library with the correct keys", function() {
        assert.propertyVal(library, "name", "LHL-music");
        assert.propertyVal(library, "creator", "Andrew");
        assert.sameMembers(library.playlists, []);
      });
    });
  });

  describe("Playlist", function() {

    let playlist1;
    let playlist2;
    let playlist3;
    beforeEach(function() {
      playlist1 = new music.Playlist("Coding");
      playlist2 = new music.Playlist("Workout");
      playlist3 = new music.Playlist("Classical");
    });

    context("when called with no arguments", function() {
      it("should throw an error", function() {
        let playlist = function() { return new music.Playlist(); };
        assert.throws(playlist);
      });
    });
    context("when called with a name", function() {
      it("should return a playlist with the correct keys", function() {
        assert.hasAllKeys(playlist1, ["name", "tracks"]);
      });
      it("should return a playlist with the correct values", function() {
        assert.propertyVal(playlist1, "name", "Coding");
        assert.propertyVal(playlist2, "name", "Workout");
        assert.propertyVal(playlist3, "name", "Classical");
        assert.sameMembers(playlist1.tracks, []);
        assert.sameMembers(playlist2.tracks, []);
        assert.sameMembers(playlist3.tracks, []);
      });
      it("should return an object that is an instance of Playlist", function() {
        assert.instanceOf(playlist1, music.Playlist);
      });
    });
  });

  describe("Playlist Methods", function() {

    let track1;
    let track2;
    let track3;
    let playlist;
    beforeEach(function() {
      track1 = new music.Track("OOP", "John", 4, 3);
      track2 = new music.Track("Java Jive", "Javascript", 3, 8);
      track3 = new music.Track("Functional", "Scala", 5, 5);
      playlist = new music.Playlist("Coding");
      playlist.addTrack(track1);
      playlist.addTrack(track2);
      playlist.addTrack(track3);
    });

    describe("addTrack", function() {
      context("when called with an object that isn't an instance of Track", function() {
        it("should throw an error", function() {
          let track = function() { music.Playlist.addTrack({ title: "OOP", artist: "John", rating: 4, length: 3 }); };
          assert.throws(track);
        });
      });
      context("when called with a track", function() {
        it("should add the track to the tracks array", function() {
          assert.deepEqual(playlist.tracks[0], { title: "OOP", artist: "John", rating: 4, length: 3 });
        });
      });
    });

    describe("overallRating", function() {
      context("when called on a playlist", function() {
        it("should return the average rating for all its tracks", function() {
          assert.equal(playlist.overallRating(), 4);
        });
      });
    });

    describe("totalDuration", function() {
      context("when called on a playlist", function() {
        it("should return the total length of all songs", function() {
          assert.equal(playlist.totalDuration(), 16);
        });
      });
    });
  });

  describe("Track", function() {

    let track1;
    beforeEach(function() {
        track1 = new music.Track("OOP", "John", 4, 3);
    });

    context("when passed the wrong number of arguments", function() {
      it("should throw an error", function() {
        let track = function() { new music.Track(); };
        assert.throws(track);
      });
    });
    context("when called with the proper number of arguments", function() {
      it("should create an object that is an instance of Track", function() {
        assert.instanceOf(track1, music.Track);
      });
      it("should create an object with the right properties", function() {
        assert.propertyVal(track1, "title", "OOP");
        assert.propertyVal(track1, "artist", "John");
        assert.propertyVal(track1, "rating", 4);
        assert.propertyVal(track1, "length", 3);
      });
    });
  });
});