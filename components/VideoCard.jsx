import React from "react";

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.CHANNEL_ID;

const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

async function fetchYouTubeData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
}

export default async function VideoCard() {
  var vids = [];
  const posts = await fetchYouTubeData();
  console.log(posts);

  vids.push(posts[14]);
  vids.push(posts[15]);

  return (
    <div className="z-0 p-4 dark:bg-darkmain">
      <h1 className="text-center pb-2 dark:text-darksecondary text-secondary text-4xl pt-8">
        Check Out My Most Recent Videos :)
      </h1>
      <div className="flex pt-4 flex-col md:flex-row justify-center">
        {vids.map((post, index) => (
          <div className="p-4 mt-4 relative h-[590px]">
            <div className="max-w-md h-[590px] pt-2 mx-auto rounded-2xl dark:bg-darkthird dark:text-darksecondary bg-main">
              <a
                href={`https://www.youtube.com/watch?v=${post.id.videoId}&ab_channel=JesseLeonard-CloudArchitect`}
                className="cursor-pointer"
              >
                <img
                  className="w-full h-64 z-0 object-cover rounded-2xl p-2"
                  src={post.snippet.thumbnails.high.url}
                  alt="Card Image"
                />
              </a>

              <div className="px-6 py-4">
                <div className="font-bold text-secondary dark:text-darksecondary text-xl mb-2">
                  {post.snippet.title}
                </div>
                <p className="text-secondary dark:text-darksecondary text-base">
                  Description:
                </p>
                <p className="text-secondary dark:text-darksecondary text-base">
                  {post.snippet.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
