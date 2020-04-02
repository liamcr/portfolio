import PartyMixIcon from "../assets/partyMixIcon.svg";
import OneWordStoriesIcon from "../assets/oneWordStoriesIcon.svg";
import MusicpediaIcon from "../assets/musicpediaIcon.svg";
import SmashAPIIcon from "../assets/smashAPIIcon.svg";

export const projects = {
  smashAPI: {
    name: "Smash API",
    date: "Winter 2020",
    technologies: ["awsLambda", "python", "awsDynamoDB", "awsS3", "git"],
    url: "https://smashultimate.ca",
    repoURL: "https://github.com/liamcr/smash-api-documentation-site",
    colour: "hsl(0, 100%, 63%)",
    icon: SmashAPIIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          'The Smash API is a consumption-only (i.e. only GET requests are available) API that can be used to access data related to the video game "Super Smash Bros. Ultimate". The API includes four key endpoints: /characters, /items, /stages, and /moves. Make a request to the /characters endpoint to recieve data about a character, including their name, what video game series they\'re originally from, and various other gameplay attributes. Make a request to the /stages endpoint to retrieve data about any given stage, such as its name, and what game series the stage is inspired by. Check out the docs by clicking the "Live Demo" button below to explore more of that the API has to offer.'
        ]
      }
    ]
  },
  musicpedia: {
    name: "Musicpedia",
    date: "Winter 2020",
    technologies: [
      "javascript",
      "reactjs",
      "materialUI",
      "spotifyAPI",
      "nodejs",
      "git"
    ],
    url: "https://musicpedia-app.web.app/",
    repoURL: "https://github.com/liamcr/musicpedia",
    colour: "hsl(301, 46%, 57%)",
    icon: MusicpediaIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "Musicpedia is a one-stop-shop for all things music. Using Spotify's web API, the app allows the user to find information about any artist, album, or track. You can explore an artist's top tracks, or all of their albums. You can dive deeper into each album, analyzing their popularity and their track list. What's more, for each track you can find out its audio features (key, tempo, etc.) and some general info (duration, popularity, etc.). Spotify's API is also used to perform audio analysis on the track, splitting it into sections (chorus, verse, etc.) for you to listen to. A Spotify account is required to use this app."
        ]
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "The idea for this project came about when I was looking through Spotify's web API documentation. I utilized the Spotify API when developing my project 'Party Mix', but I realized that there was so much more to the API than what I had used. The two most interesting things to me were the audio features and audio analysis capabilities. I found myself searching around for the IDs of my favourite songs so that I could get an analysis of them, and thought that it would be convenient if there was an easy-to-use front-end application for these endpoints.",
          "At the end of the day, this was a project made to meet a very specific goal of mine, and although the project isn't solving a huge problem, I still find myself coming back to it months later to find information about the newest songs and albums."
        ]
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This project as a whole really strengthened my knowledge of React.js past just the basics. I learned how to properly send and receive HTTP requests within a React app using axios. On top of that, this was the first project I had developed that uses routing.",
          "It was also interesting to learn how to use Material-UI. It's a widely used React UI framework, and it gave me the important experience of reading about and implementing a popular third-party library."
        ]
      }
    ]
  },
  oneWordStories: {
    name: "One Word Stories",
    date: "Summer 2019",
    technologies: [
      "javascript",
      "reactjs",
      "firebase",
      "redditAPI",
      "nodejs",
      "git"
    ],
    url: "https://jwieler.github.io/oneWordStories/",
    repoURL: "https://github.com/jwieler/oneWordStories",
    colour: "hsl(198, 100%, 29%)",
    icon: OneWordStoriesIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "One Word Stories is an app that allows you to collaboratively write short stories. The idea is that users take turns adding one word to a story, with each person taking the story slightly in the direction they want it to go. As a result, some funny and interesting stories are made. When first opening the site, you're able to read some of the stories that have been marked as 'completed' by a user. Stories can be sorted by a voting system, which is done in the background using Reddit's API. You have the option to either begin a story by providing a title and the first word, or continue a story by adding a word to an ongoing one."
        ]
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "This was an idea that came about when a friend made a C program before a lecture that took inputs one word at a time. We passed his computer around among our group of friends and wrote short stories one word at a time. We thought it was a fun idea, and wanted to create a website that allowed you to play this game with others around the world.",
          "We also wanted to give users the ability to browse other stories that they may not have gotten the chance to contribute to. We decided to store all finished stories on a subreddit, and create our own front-end for it. This way, users can not only read other stories, but vote on them, and sort by popularity."
        ]
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This entire project was a big learning experience for me, as it was the first time I had used React in a big way. Throughout the development process, I learned and improved on my skills of isolating sections into components, and managing state across them.",
          "This project also marks my first experience with Firebase. We used Firebase as the backend tool to store the stories that hadn't been marked as 'completed' yet. Reading/writing data, as well as understanding how to use a document storage system, were all concepts that I had to learn and become comfortable with.",
          "Lastly, I had to learn how to make requests to Reddit's REST API. Reading from and writing to a subreddit, as well as authenticating with Reddit were the two key concepts I had to understand."
        ]
      }
    ]
  },
  partyMix: {
    name: "Party Mix",
    date: "Summer 2018",
    technologies: ["javascript", "spotifyAPI"],
    url: "https://party-mix.000webhostapp.com/",
    repoURL: "https://github.com/liamcr/party-mix",
    colour: "hsl(141, 73%, 42%)",
    icon: PartyMixIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "Party Mix is an app that allows you to collaboratively create Spotify playlists with friends (regardless of whether they have a Spotify account or not!). As the DJ of whatever social event you're attending, you have the ability to open up any existing playlist (or a brand new one) to collaboration with others at the event. As long as someone has the code that is provided when a playlist is opened for collaboration, they can add a song to it. The playlist's owner can set some restrictions on their playlists as well, including limiting users to a maximum number of added songs, not allowing explicit music, and more!"
        ]
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "This idea came about from a get-together with some friends. One of my friends was in charge of the music selection, and he ended up spending the night focussed on what song he should put on next. To solve this problem, the clear solution was to find a way to allow everyone to have an input on what music gets played. Spotify allows users to make collaborative playlists, but only those with Spotify accounts have the ability to add songs. The Party Mix idea allows a group of people to make a playlist together, and only one of them needs a Spotify account."
        ]
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This project was a huge learning experience for me, as it was the first experience I had with JavaScript. I learned how to properly write event-driven JavaScipt, and learned how to use jQuery and AJAX to perform API requests.",
          "This was also the first time I had used an API, so I had to spend some time learning what an API was, and how to properly send requests to it. In terms of Spotify's API in particular, I had to learn how to authenticate users with it, and how to add songs to a playlist.",
          "Each playlist needed to be put in some type of permanent storage so that other users could push data to them. As a result, I needed to learn how to use and manage a SQL database. In order to connect it to my JavaScript, I learned the basics of PHP to create a bridge between my front-end and back-end."
        ]
      }
    ]
  }
};
