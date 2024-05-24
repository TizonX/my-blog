import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      // home
      {
        name: "homePage",
        label: "Home Page",
        path: "content/home",
        ui: {
          router: () => {
            return `/`;
          },
        },
        fields: [
          {
            type: "object",
            name: "section",
            label: "Section",
            list: true,
            templates: [
              {
                label: "About",
                name: "aboutSection",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                  },
                  {
                    type: "string",
                    name: "btnLabel",
                    label: "Label",
                    required: true,
                    isTitle: true,
                  },
                  {
                    type: "string",
                    name: "type",
                    label: "Button",
                    options: ["button", "link"],
                  },
                ],
              },
              {
                name: "blog_list",
                label: "Blog List",
                fields: [
                  {
                    type: "string",
                    name: "blog_list_name",
                    label: "Blog List Heading",
                  },
                  {
                    type: "boolean",
                    name: "see_all_post",
                    label: "All Post",
                  },
                ],
              },
              {
                name: "lets_connect",
                label: "Let's Connect",
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: true,
                  },
                  {
                    type: "rich-text",
                    name: "content",
                    label: "Content",
                  },
                  {
                    type: "object",
                    name: "social_links",
                    label: "Social Link",
                    list: true,
                    templates: [
                      {
                        label: "Social",
                        name: "social",
                        inline: true,
                        ui: {
                          itemProps: (item) => {
                            return { label: `${item.heading}` };
                          },
                        },
                        fields: [
                          {
                            type: "string",
                            name: "heading",
                            label: "Label",
                            required: true,
                            isTitle: true,
                          },
                          { type: "string", name: "url", label: "URL" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      // blog
      {
        name: "blog",
        label: "Blogs",
        path: "content/blog",
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
