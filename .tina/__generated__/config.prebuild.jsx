// .tina/config.ts
import { defineConfig } from "tinacms";

// .tina/schema.ts
var BlogPosts = {
  label: "Blog Posts",
  name: "posts",
  path: "posts",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "string",
      label: "Description",
      name: "description"
    },
    {
      type: "string",
      label: "Date",
      name: "date"
    },
    {
      type: "string",
      label: "Tags",
      name: "tags"
    },
    {
      type: "string",
      label: "Image URL",
      name: "imageUrl"
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      templates: [
        {
          name: "Quote",
          label: "Quote",
          fields: [
            {
              type: "string",
              name: "content",
              label: "Content"
            },
            {
              type: "string",
              name: "author",
              label: "Author"
            },
            {
              type: "string",
              name: "cite",
              label: "Cite"
            }
          ]
        },
        {
          name: "ArticleImage",
          label: "ArticleImage",
          fields: [
            {
              type: "string",
              name: "src",
              label: "Src"
            },
            {
              type: "string",
              name: "caption",
              label: "Caption"
            }
          ]
        },
        {
          name: "Code",
          label: "Code",
          fields: [
            {
              type: "string",
              name: "code",
              label: "Code"
            },
            {
              type: "string",
              name: "language",
              label: "Language"
            },
            {
              type: "string",
              name: "selectedLines",
              label: "Selected Lines"
            },
            {
              type: "boolean",
              name: "withCopyButton",
              label: "With Copy Button"
            },
            {
              type: "boolean",
              name: "withLineNumbers",
              label: "With Line Numbers"
            },
            {
              type: "string",
              name: "caption",
              label: "Caption"
            }
          ]
        },
        {
          name: "h2",
          label: "H2",
          inline: true,
          fields: []
        },
        {
          name: "h3",
          label: "H3",
          inline: true,
          fields: []
        },
        {
          name: "br",
          label: "BR",
          inline: true,
          fields: []
        },
        {
          name: "p",
          label: "P",
          inline: true,
          fields: []
        }
      ]
    }
  ]
};

// .tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "master";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      BlogPosts
      // {
      //   name: "post",
      //   label: "Posts",
      //   path: "content/posts",
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body",
      //       isBody: true,
      //     },
      //   ],
      //   ui: {
      //     // This is an DEMO router. You can remove this to fit your site
      //     router: ({ document }) => `/demo/blog/${document._sys.filename}`,
      //   },
      // },
    ]
  }
});
export {
  config_default as default
};
