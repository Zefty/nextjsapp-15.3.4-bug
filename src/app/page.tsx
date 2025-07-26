import { addPost } from "@/server/action";
import posts from "@/server/data.json";
import ClientComponent from "./components/client-component";

export default function Home() {
  return (
    <div>
      <ClientComponent data={posts} />
      <button className="border rounded-md" onClick={addPost}>
        Add Post
      </button>
    </div>
  );
}
