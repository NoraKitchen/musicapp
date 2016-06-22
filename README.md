# MusicApp

This small app was created two weeks into the BoiseCodeWorks Immersive Full Stack program as the first “checkpoint” test completed independently without help from teachers or aids. At this point in the curriculum, students had experience with HTML, CSS, Bootstrap, and basic Javascript.

The app was initially given to students with a basic HTML form input where users could type a music artist, as well as a service that would deliver back all songs by that artist as an array of song objects from the iTunes api.

###Tasks

In this app, my job was to...

1. Utilize vanilla JavaScript to display each song (and all its properties) returned from the service onto the page
2. Utilize the Bootstrap grid and at least 2 Bootstrap components to make the page visually appealing
3. BONUS: Play a preview of the song when the title is clicked, ensuring the song does not continue to play if another song is clicked

##Process Highlights

Manipulating the DOM to add song elements to the page was a fairly straightforward process, as well as utilizing the Bootstrap grid system and a number of different components. My main hangups turned out to be choosing which bootstrap components were best to use, as well as (unsurprisingly) achieving the bonus task.

###Choosing my components

My initial choice to display each song was a Bootstrap table. I had recently learned about the various table classes Bootstrap offered, such as colored or zebra-stripped tables as well as the ability to make rows highlight on hover, and was eager to try putting them to use.

However, after initially writing the code to create the table and dynamically add its rows, I found the table did not display nicely on a smaller window. At the time, I ended up rewriting the code to use a list of wells instead. Though this was not necessarily a bad choice, I do in retrospect wonder if simply adding a “table-responsive” class to my table would have solved the problem. I believe I was unaware of it at the time.

###Making it play

My first step in attempting the bonus was simply to see if I could hard-code an HTML button (which I preferred to making the title clickable) to the page and make that button play one of the music samples. The end-goal was to have the buttons dynamically added rather than hard coded, but I wanted to make sure I had the basic code right first. The process went smoothly, and my button played the URL I gave it.

However, when I attempted to add the buttons dynamically for each song, my buttons did not play. I eventually realized I was running into a problem with quotation marks. 

Both JavaScript and HTML use quotation marks to delineate certain items, such as a string in JavaScript (e.g. var string = “This is my beautiful string!”) or property values in HTML (e.g. href = “myUrl.html”). Sometimes, you get into situations where you want to use quotes within quotes, but that's ok—you can use double quotes for one job, and single for another ( var string = “This is my 'beautiful' string!”, or onclick=”playSong('songUrl.mp3')”.

But if you're writing HTML in your JavaScript, you can get into situations where you need quotes within quotes within quotes. This was the case with my dynamically added play button.

```javascript
songs += "<button onclick='playPreview('" + currentSong.preview + "')'>Play</button>";
```

My currentSongs.preview was a url, and that url needed to be surrounded by quotes in order to work. My double and single quotes were already in use for other jobs within the string. If I tried to add more quotes, either double or single (as I did above), the code would break.

My solution at the time makes me giggle a little today. I took my url, currentSong.preview, and saved it to a variable (songURLQuoted) with quotes added around it. Then I used songURLQuoted in the code to create the button.

```javascript
var songURLQuoted = '"' + currentSong.preview + '"';

songs += "<button onclick='playPreview(" + songURLQuoted + ")'>Play</button>";
```

I give myself 5 points ingenuity, and 10 points abject shame for not thinking of what was probably the better way. The better way, of course, being escape characters.

```javascript
songs += "<button onclick='playPreview(\”" + currentSong.preview + "\”)'>Play</button>";
```

Inserting a backslash before a quote tells JavaScript to essentially ignore the usual role of the quote and just take it as part of the string. But hindsight (especially after 3 months of a dev bootcamp) is 20/20. We live, we learn, and write really weird code in the meantime.

###To see the original instructions for this activity, visit README2.md