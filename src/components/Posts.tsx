import { Post } from "../models/interfaces/Post";

function Posts({ posts }: { posts: Array<Post> }) {
  return (
    <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {posts.length > 0 &&
          posts.map((post) => (
            <div
              key={crypto.randomUUID()}
              className="rounded overflow-hidden shadow-lg bg-purple-600"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={post.imageUrl}
                  alt="Imagem do post criado"
                />
              </div>
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <div className="absolute bottom-0 left-0 bg-orange-500 px-2 py-1 rounded-e-md text-white text-sm hover:bg-white hover:text-purple-600 transition duration-500 ease-in-out"></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Posts;
