import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { use } from 'react';

async function getBlogs() {
  const files = fs.readdirSync(path.join('content', 'blog'));

  const blogs = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('content', 'blog', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return blogs;
}

export default function BlogsPage() {
  const blogs = use(getBlogs());

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <div>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.date}</p>
                <p>{frontmatter.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
