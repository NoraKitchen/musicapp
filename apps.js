
//Do Not Modify the getMusic function
var currentSong;
var audioPlaying = false;

function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList){
  
  var songListElem = document.getElementById("song-list");
  songListElem.innerHTML = "";
  var songs = '' 
  
  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    var songURLQuoted = '"' + currentSong.preview + '"';
    songs += "<li><div class='well song-entry'>";
    songs += "<img src='" + currentSong.albumArt + "' class='album-img'><br><br>";
    songs += "<p class='song-title text-info'>" + currentSong.title + "</p>";
    songs += "<p><i>Album</i>: " + currentSong.collection + "<br>"
    songs += "<i>Artist</i>: " + currentSong.artist + "<br>";
    songs += "<i>Price</i>: $" + currentSong.price + "</p>";
    songs += "<button class='btn btn-info' onclick='playPreview(" + songURLQuoted + ")'><span class='glyphicon glyphicon-play'></span></button>";
    songs += "</div></li>";
  }
    
    
    /*
    songs += "<tr>";
    songs += "<td><button class='thumbnail text-center' onclick='playPreview(" + songURLQuoted + ")' style='width: 150px'><img src='" + currentSong.albumArt + "'><h6>" + currentSong.collection + "</h6></button></td>";
   songs += "<td style='vertical-align: middle'>" + currentSong.title + "</td>";
    songs += "<td style='vertical-align: middle'>$" + currentSong.price + "</td>";
    songs += "<td style='vertical-align: middle'> <button class='btn btn-info' onclick='playPreview(" + songURLQuoted + ")'><span class='glyphicon glyphicon-play'></span></button></td>";
    songs += "</tr>";
  }
  
  */
  songListElem.innerHTML = songs;
}


function playPreview(songURL){
  if (audioPlaying) {
    currentSong.pause();
  }
  
  currentSong = new Audio(songURL);
  currentSong.play();
  audioPlaying = true;
}


