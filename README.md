## R10

R10 is an app built for ios and android using React Native.
The premise is that there is a development conference where there are events that feature several different speakers. The R10 app displays a schedule of all events, information about the event code of conduct, information about each particular session, and information about each individual speaker.

## Getting Started

You will need to have Xcode on OSX or Android studio in order to run this project. After cloning this repo, run npm install, and then if you have Xcode installed run "react-native run-ios" in the project directory. In android studio, run "react-native run-android" after setting up Android Studio and your virtual device.

Upon loading the app, you start off on the schedule page. This is a list of all events, and events that have been added to 'faves' have a heart next to them. Clicking on any event takes you to a screen that features more info about that event, and it also features the ability to add that event to faves, or remove the event if you wish. It is from this screen that you have access to the speaker screen, where you can read a bio of the speaker and follow a link to their wikipedia if you wish to learn more. You can see the events that you've added to faves via the faves directory in the menu, and you can read about the code of conduct on the about screen.

## Built With

* React Native
* Redux
* Realm

## Author

Colin Matson-Jones

