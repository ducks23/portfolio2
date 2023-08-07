import React from "react";

import PostDetail from "@/components/blog/PostDetail";
import Categories from "@/components/blog/Categories";
import PostWidget from "@/components/blog/PostWidget";
import { getPostDetails } from "@/services";

export default async function PostDetails({ params }) {
  const post = await getPostDetails(params.id);

  return (
    <div className="dark:bg-darkmain">
      <div className="container dark:text-darksecondary dark:bg-darkmain mx-auto pt-20 px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
