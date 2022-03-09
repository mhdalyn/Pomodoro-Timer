# Pomodoro Timer React App

## Technologies Used
This app was developed using React, Bootstrap 4, Node, Javascript, HTML, and CSS.

## Project Summary
This page was developed as a part of Thinkful's Front-end Development modules. From the starter code, the goal was to build a web page that allows a user to set and modify two independent timers, one for productive time and one for breaks, and to display that information on the page. The user also needed to be able to start, pause, and stop the timer at any time, and depending on what mode the app was in, certain buttons would be enabled or disabled.

### Initial screen
The initial screen allows the user to set length for productive and break times, as well as start the timers. The stop button is disabled while there is no active session. Pressing play will begin an active study session.

### Active Session
During an active session, the play button converts to a pause button to temporarily pause a session. The stop button is enabled allowing a session to be ended completely, and the duration adjusters are disabled until a session is ended. When the focus timer ends, an alert sound plays, and then the app switches to the break timer, and this process repeates when the break timer ends as well.

### Installation instructions
To install this app locally, follow these steps:

 - Download or clone this repository's code
 - In the terminal run: ~~~ npm install ~~~
 - And then: ~~~ npm start ~~~