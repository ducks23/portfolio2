import PostCard from "@/components/blog/PostCard";
import PostWidget from "@/components/blog/PostWidget";
import Categories from "@/components/blog/Categories";
import { getPosts } from "@/services";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="dark:bg-darkmain min-h-[1200px]">
      <div className="dark:bg-darkmain dark:text-darksecondary  container mx-auto px-10 pt-24 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lfg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
