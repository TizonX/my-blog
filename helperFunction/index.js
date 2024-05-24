import { client } from "../tina/__generated__/client"; // Adjust the import path based on your project structure

export default async function handler(req, res) {
  try {
    const { data } = await client.queries.blogPosts(); // Adjust based on your query name and structure
    res.status(200).json(data.blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
}
