import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetailsApi } from "../../api/posts.api";
import {
  createCommentApi,
  deleteCommentApi,
  updateCommentApi,
} from "../../api/comments.api";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const loadPost = async () => {
    const res = await getPostDetailsApi(id);
    setPost(res.data.post || res.data.data);
  };

  useEffect(() => {
    loadPost();
  }, []);

  const addComment = async () => {
    if (!newComment.trim()) return;
    await createCommentApi(id, { content: newComment });
    setNewComment("");
    loadPost();
  };

  const saveEdit = async (commentId) => {
    await updateCommentApi(commentId, { content: editValue });
    setEditingId(null);
    loadPost();
  };

  const deleteComment = async (commentId) => {
    if (!confirm("Delete this comment?")) return;
    await deleteCommentApi(commentId);
    loadPost();
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Post Details</h2>
      <p>{post.body}</p>

      <h3>Comments</h3>
      {post.comments?.map((c) => (
        <div key={c._id} style={{ borderBottom: "1px solid #ddd" }}>
          {editingId === c._id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => saveEdit(c._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{c.content}</p>
              <button
                onClick={() => {
                  setEditingId(c._id);
                  setEditValue(c.content);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteComment(c._id)}>Delete</button>
            </>
          )}
        </div>
      ))}

      <input
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
}
