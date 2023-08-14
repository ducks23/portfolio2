"use client";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "@/services";
import ArticleIcon from "@mui/icons-material/Article";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-gray-200 dark:bg-darkthird dark:text-darksecondary shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <Link
          href={`/blog/${post.slug}`}
          className="text-md max-h-6 "
          key={index}
        >
          <div className="dark:bg-darkmain px-3 rounded-xl my-4 p-3 ">
            <div key={index} className="flex items-center">
              <div className=" flex-none">
                <div className="  overflow-hidden ">
                  <img
                    alt={post.title}
                    className=" rounded-full h-12 w-12"
                    src={post.featuredImage.url}
                  />
                </div>
              </div>

              <div className=" text-xs ml-4">
                {post.title}

                <p className="pt-1 text-center text-gray-500 font-xs">
                  {moment(post.createdAt).format("MM / YYYY")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
