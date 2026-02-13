import { useEffect, useState } from "react";
import { getAllPostsApi, deletePostApi } from "../../api/posts.api";
import { Link } from "react-router-dom";
import CreatePost from "../../components/createpost";



export default function Home() {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    getAllPostsApi().then((res) => {
      setPosts(res.data.posts || res.data.data);
    });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>

      <CreatePost onCreated={loadPosts} />

      {posts.map((post) => (
        
        <PostItem key={post._id} post={post} onUpdated={loadPosts} />
        
      ))}
    </div>
  );
}


