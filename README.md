# Tic Tac Toe

## Building for deployment
Run --> lein do clean, with-profile dev compile
then the static files are built and index.html will run the whole app

## Building for dev
Run "`lein do clean, figwheel`" in a terminal to compile the app, and then open `http://localhost:7001/example.html`.

Any changes to ClojureScript source files (in `src`) will be reflected in the running page immediately (while "`lein figwheel`" is running).

## Comments
Be able to determine when one player has won `(CHECK)`
Display animations when placing an X or an O on the board.
  `(Was not sure how to do css transitions so I made the buttons resize when selected)`
Include two of the following (pick whichever you think will best showcase your skill):
 - Create a computer AI which can always win or tie.
     `(Added button, but didn't get to the AI in time... would probably need another 30 to 45 mins to complete)`
 - Share game state over websockets and accept moves from different browsers to implement a simple form of multiplayer game.
     `(Don't have experience with this task, and the research would have taken an hour or 2. Excited to learn how to do this in the future)
 - Save previous games to a database and view them.
     `(Did this using the local app state because I didn't have time to set up a database. I would have just stored straight edn in an s3 bucket because the data structure isn't complex enough to require a database)`

## BONUS
Added an undo button
    `(basically because I remember getting upset as a child when I would click the wrong button on accident)`

Added a progress bar
    `Just because it was simple and I could do it in 5 mins`

Deployed the app to my github pages account (jtackett.github.io)
    `Also technically deployed to the google play store under a real estate calculator because that app is simply a webview to jtackett.github.io`

This project also includes the real estate calculator if you want to take a look at those calculations
    `Has a mortgage calculator that could be helpful to some people!`


## Limitations
 - Used a library called re-com which is basically a bootstrap for clojure, but it is only optimized for the chrome browser
 - Most of this project was completed using global state, which can lose speed as the application scales. Because the application was so small, it seemed appropriate, but some of these features could be achieved using local state (local to the component that is)
 - I also did most of my css inline with the html, but in an ideal world and with more time, all of this would be abstracted to the example.css style sheet
 - Used both form 1 and form 2 reagent components. With more time, this would be refactored and optimized for speed based on the subs signal graph
 - I'm not a designer...that's why it looks like a developer designed it...
 - This designed for a webpage and not a mobile device
