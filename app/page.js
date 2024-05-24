"use client";
import { useEffect, useState } from "react";
import { client } from "../tina/__generated__/client";
import HomeComp from "./components/home/Home";

export default function Home() {
  const [data, setData] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await client.queries.homePage({
        relativePath: "home.md",
      });
      setData(res);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function handler() {
      const resp = await client.queries.blogConnection();
      const posts = resp.data.blogConnection.edges.map((blog) => {
        return {
          title: blog.node.title,
          description: blog.node.description,
          filename: blog.node._sys.filename,
        };
      });
      setBlog(posts);
    }
    handler();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <HomeComp {...data} posts={blog}/>;
}
