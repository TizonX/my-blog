"use client";
import React from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../../styles/blog.css";
const Blog = (props) => {
  const { data } = useTina(props);
  const { blog } = data;
  const { title, description, body } = blog;
  return (
    <div class="container">
      <h1 class="blog-title">{title}</h1>
      <p class="blog-description">{description}.</p>
      <div class="blog-body">
        <TinaMarkdown content={body} />
      </div>
    </div>
  );
};

export default Blog;
