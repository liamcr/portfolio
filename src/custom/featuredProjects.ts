import SmashAPI from "../assets/smashAPIPreview.png";
import Musidex from "../assets/musidexPreview.png";
import OneWordStories from "../assets/oneWordStoriesPreview.png";
import PartyMixPreview from "../assets/partyMixPreview.png";

export const featuredProjects = [
  {
    title: "Smash API",
    date: "Winter 2020",
    technologies: ["awsLambda", "awsDynamoDB"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageReference: SmashAPI,
    projectPageURL: "/smashAPI",
    url: "https://smashultimate.ca",
    repoURL: ""
  },
  {
    title: "Musicpedia",
    date: "Winter 2020",
    technologies: ["reactjs", "materialUI"],
    description:
      "Musicpedia is a one-stop-shop for all things music. Using Spotify's web API, the app allows the user to find information about any artist, album, or track. You can explore an artist's top tracks, or all of their albums. You can dive deeper into each album, analyzing their popularity and their track list. What's more, for each track you can find out its audio features (key, tempo, etc.) and some general info (duration, popularity, etc.). Spotify's API is also used to perform audio analysis on the track, splitting it into sections (chorus, verse, etc.) for you to listen to. A Spotify account is required to use this app.",
    imageReference: Musidex,
    projectPageURL: "/musicpedia",
    url: "https://musicpedia-app.web.app/",
    repoURL: "https://github.com/liamcr/musicpedia"
  },
  {
    title: "One Word Stories",
    date: "Summer 2019",
    technologies: ["reactjs", "firebase"],
    description:
      "One Word Stories is an app that allows you to collaboratively write short stories. The idea is that users take turns adding one word to a story, with each person taking the story slightly in the direction they want it to go. As a result, some funny and interesting stories are made. When first opening the site, you're able to read some of the stories that have been marked as 'completed' by a user. Stories can be sorted by a voting system, which is done in the background using Reddit's API. You have the option to either begin a story by providing a title and the first word, or continue a story by adding a word to an ongoing one.",
    imageReference: OneWordStories,
    projectPageURL: "/oneWordStories",
    url: "https://jwieler.github.io/oneWordStories/",
    repoURL: "https://github.com/jwieler/oneWordStories"
  },
  {
    title: "Party Mix",
    date: "Summer 2018",
    technologies: ["javascript", "spotifyAPI"],
    description:
      "Party Mix is an app that allows you to collaboratively create Spotify playlists with friends (regardless of whether they have a Spotify account or not!). As the DJ of whatever social event you're attending, you have the ability to open up any existing playlist (or a brand new one) to collaboration with others at the event. As long as someone has the code that is provided when a playlist is opened for collaboration, they can add a song to it. The playlist's owner can set some restrictions on their playlists as well, including limiting users to a maximum number of added songs, not allowing explicit music, and more!",
    imageReference: PartyMixPreview,
    projectPageURL: "/partyMix",
    url: "https://party-mix.000webhostapp.com/",
    repoURL: "https://github.com/liamcr/party-mix"
  }
];
