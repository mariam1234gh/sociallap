import { useState } from "react";
import { updatePostApi, deletePostApi } from "../api/posts.api";
import { Link } from "react-router-dom";

export default function PostItem({ post, onUpdated }) {
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(post.body);

  const save = async () => {
    await updatePostApi(post._id, { body });
    setEditing(false);
    onUpdated();
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: 10 }}>
      {editing ? (
        <>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={save}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>{post.body}</p>
          <Link to={`/posts/${post._id}`}>View Details</Link>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deletePostApi(post._id).then(onUpdated)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
