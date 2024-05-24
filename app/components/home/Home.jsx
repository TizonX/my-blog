"use client";
import React from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const HomeComp = (props) => {
  const { data } = useTina(props);
  const { homePage } = data;
  const { section } = homePage;
  const { posts } = props;
  return (
    <div class="mx-auto max-w-screen-sm">
      <div class="space-y-16">
        <div>
          {section.map((fields) => {
            switch (fields.__typename) {
              case "HomePageSectionAboutSection":
                return (
                  <section>
                    <h4
                      class="animate font-semibold text-black dark:text-white show"
                      data-tina-field={tinaField(fields, "heading")}
                    >
                      {fields.heading} <span class="text-xl">👋🏻</span>
                    </h4>
                    <article
                      class="space-y-4"
                      data-tina-field={tinaField(fields, "content")}
                    >
                      <TinaMarkdown content={fields.content} />
                    </article>
                    <div class="animate show">
                      <a
                        href="https://solvative.com/lets-talk/"
                        class="relative group w-fit flex px-5 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                        data-tina-field={tinaField(fields, "btnLabel")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="absolute top-1/2 right-3 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
                        >
                          <line
                            x1="5"
                            y1="12"
                            x2="19"
                            y2="12"
                            class="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                          ></line>
                          <polyline
                            points="12 5 19 12 12 19"
                            class="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                          ></polyline>
                        </svg>
                        <div class="text-sm">{fields.btnLabel}</div>
                      </a>
                    </div>
                  </section>
                );
              case "HomePageSectionBlog_list":
                return (
                  <section class="animate space-y-6 show my-10">
                    <div class="flex flex-wrap gap-y-2 items-center justify-between">
                      <h5
                        class="font-semibold text-black dark:text-white"
                        data-tina-field={tinaField(fields, "blog_list_name")}
                      >
                        {fields.blog_list_name}
                      </h5>
                      {fields.see_all_post && (
                        <a
                          href="/blog"
                          target="_self"
                          class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                          data-tina-field={tinaField(fields, "see_all_post")}
                        >
                          See all posts
                        </a>
                      )}
                    </div>
                    <ul class="flex flex-col gap-4">
                      {posts?.map((post) => (
                        <li>
                          <a
                            href={`/blog/${post.filename}`}
                            class="relative group flex flex-nowrap py-3 px-4 pr-10 rounded-lg border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
                          >
                            <div class="flex flex-col flex-1 truncate">
                              <div
                                class="font-semibold"
                                // data-tina-field={tinaField(post, "blog_title")}
                              >
                                {post.title}
                              </div>
                              <div
                                class="text-sm"
                                // data-tina-field={tinaField(post, "blog_quote")}
                              >
                                {post?.description}
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              class="absolute top-1/2 right-2 -translate-y-1/2 size-5 stroke-2 fill-none stroke-current"
                            >
                              <line
                                x1="5"
                                y1="12"
                                x2="19"
                                y2="12"
                                class="translate-x-3 group-hover:translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                              ></line>
                              <polyline
                                points="12 5 19 12 12 19"
                                class="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                              ></polyline>
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              case "HomePageSectionLets_connect":
                return (
                  <div class="mx-auto max-w-screen-sm">
                    <div class="space-y-16">
                      <section class="animate space-y-4 show">
                        <h5
                          class="font-semibold text-black dark:text-white"
                          data-tina-field={tinaField(fields, "heading")}
                        >
                          {fields.heading}
                        </h5>
                        <article>
                          <p data-tina-field={tinaField(fields, "content")}>
                            <TinaMarkdown content={fields.content} />
                          </p>
                        </article>
                        <ul class="flex flex-wrap gap-2">
                          {fields.social_links.map((lists) => (
                            <li class="flex gap-x-2 text-nowrap">
                              <a
                                href={lists.url}
                                target="_blank"
                                class="inline-block decoration-black/15 dark:decoration-white/30 hover:decoration-black/25 hover:dark:decoration-white/50 text-current hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out underline underline-offset-2"
                                aria-label="Astro Nano on twitter-x"
                                data-tina-field={tinaField(lists, "heading")}
                              >
                                {lists.heading}
                              </a>{" "}
                              /
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
