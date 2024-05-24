"use client";
import { notFound } from "next/navigation";
import client from "@/tina/__generated__/client";
import Blog from "@/app/components/blog/Blog";
import { useEffect, useState } from "react";

export default function BlogPage({ params }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.queries.blog({
          relativePath: `${params.slug}.md`,
        });
        setData(res);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return <div>Error: Somthing wents wrong</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Blog {...data} />
    </div>
  );
}
