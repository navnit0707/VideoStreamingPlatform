const apiKey = process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`;
export const commentsData = [
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [
      {
        name: "Navnit",
        text: "Hello parents comments how are you ! ",
        replies: [],
      },
      {
        name: "Navnit",
        text: "Hello parents comments how are you ! ",
        replies: [
          {
            name: "Navnit",
            text: "Hello child comments how are you ! ",
            replies: [
              {
                name: "Navnit",
                text: "Hello child comments how are you ! ",
                replies: [
                  {
                    name: "Navnit",
                    text: "Hello child comments how are you ! ",
                    replies: [],
                  },
                ],
              },
              {
                name: "Navnit",
                text: "Hello child comments how are you ! ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Navnit",
        text: "Hello child comments how are you ! ",
        replies: [
          {
            name: "Navnit",
            text: "Hello parents comments how are you ! ",
            replies: [
              {
                name: "Navnit",
                text: "Hello child comments how are you ! ",
                replies: [
                  {
                    name: "Navnit",
                    text: "Hello child comments how are you ! ",
                    replies: [
                      {
                        name: "Navnit",
                        text: "Hello child comments how are you ! ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Navnit",
                    text: "Hello child comments how are you ! ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Navnit",
        text: "Hello child comments how are you ! ",
        replies: [
          {
            name: "Navnit",
            text: "Hello parents comments how are you ! ",
            replies: [
              {
                name: "Navnit",
                text: "Hello child comments how are you ! ",
                replies: [
                  {
                    name: "Navnit",
                    text: "Hello child comments how are you ! ",
                    replies: [
                      {
                        name: "Navnit",
                        text: "Hello child comments how are you ! ",
                        replies: [
                          {
                            name: "Navnit",
                            text: "Hello parents comments how are you ! ",
                            replies: [
                              {
                                name: "Navnit",
                                text: "Hello child comments how are you ! ",
                                replies: [
                                  {
                                    name: "Navnit",
                                    text: "Hello child comments how are you ! ",
                                    replies: [
                                      {
                                        name: "Navnit",
                                        text: "Hello child comments how are you ! ",
                                        replies: [],
                                      },
                                    ],
                                  },
                                  {
                                    name: "Navnit",
                                    text: "Hello child comments how are you ! ",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Navnit",
                    text: "Hello child comments how are you ! ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [],
  },
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [],
  },
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [],
  },
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [],
  },
  {
    name: "Navnit",
    text: "Hello child comments how are you ! ",
    replies: [],
  },
];
