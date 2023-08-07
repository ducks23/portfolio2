"use client";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "@/services";

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
        <Link href={`/blog/${post.slug}`} className="text-md " key={index}>
          <div className="dark:bg-darkmain px-3 rounded-full my-4 p-3 ">
            <div key={index} className="flex items-center">
              <div className=" w-16 flex-none">
                <img
                  alt={post.title}
                  height="60px"
                  width="60px"
                  className="align-middle rounded-full"
                  src={post.featuredImage.url}
                />
              </div>
              <div className=" ml-4">
                {post.title}

                <p className="text-gray-500 font-xs">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
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
