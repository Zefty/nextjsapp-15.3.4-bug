"use client";

import { useState } from "react";

export default function ClientComponent({
  data,
}: {
  data: { id: number; title: string; content: string }[];
}) {
  const [posts, setPosts] = useState(() => data);
  return (
    <ul className="mb-4">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
