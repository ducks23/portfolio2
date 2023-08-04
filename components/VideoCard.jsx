import React from "react";

// prodction
// const apiKey = process.env.API_KEY;
// const apiUrl = process.env.API_URL;

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
    console.log(data);
    return data.items;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
}

export default async function VideoCard() {
  const posts = await fetchYouTubeData();

  return (
    <div className="p-0">
      <h1 className="text-center text-4xl pt-14">Videos</h1>
      {posts.map((post, index) => (
        <div className="p-4">
          <div className="max-w-md pt-2 mx-auto rounded-2xl bg-gray-300">
            <img
              className="w-full h-64 object-cover rounded-2xl p-2"
              src={post.snippet.thumbnails.high.url}
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.snippet.title}</div>
              <p class="text-gray-700 text-base">Description:</p>
              <p class="text-gray-700 text-base">{post.snippet.description}</p>
            </div>
            <div>
              <div className="mx-auto px-6 pt-2 pb-8">
                <a
                  href={`https://www.youtube.com/watch?v=${post.id.videoId}&ab_channel=JesseLeonard-CloudArchitect`}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
