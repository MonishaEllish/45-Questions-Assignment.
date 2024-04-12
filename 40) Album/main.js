function make_album(artist, title, track) {
    var album = {
        artist: artist,
        title: title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Artist1", "Album Title 1");
console.log(album1);
var album2 = make_album("Artist2", "Album Title 2");
console.log(album2);
var album3 = make_album("Artist3", "Album Title 3", 12);
console.log(album3);
