import { useState } from "react";
import { createPostApi } from "../api/posts.api";

export default function CreatePost({ onCreated }) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!body.trim()) return;
    try {
      setLoading(true);
      await createPostApi({ body });
      setBody("");
      onCreated();    
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <textarea
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button disabled={loading} onClick={submit}>
        {loading ? "Posting..." : "Post"}
      </button>
    </div>
  );
}
