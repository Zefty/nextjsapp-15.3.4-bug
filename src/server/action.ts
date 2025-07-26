"use server";

import fs from "fs";
import { revalidatePath } from "next/cache";
import path from "path";

export async function addPost() {
  try {
    // 1. Read the file - use correct path
    const dataPath = path.join(process.cwd(), "src", "server", "data.json");
    const fileContent = fs.readFileSync(dataPath, "utf8");

    console.log(fileContent);

    // 2. Parse the JSON
    const data = JSON.parse(fileContent);

    // 3. Modify the object (add a new post)
    const newPost = {
      id: data.length + 1,
      title: "New Post",
      content: "This is a new post",
    };
    data.push(newPost);

    // 4. Stringify the object
    const updatedContent = JSON.stringify(data);

    // 5. Write back to the file
    fs.writeFileSync(dataPath, updatedContent);

    console.log("Post added!");
    revalidatePath("/");
    return { success: true, post: newPost };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, error: "Failed to add post" };
  }
}
