import { defineConfig, tinaTableTemplate } from 'tinacms';
import { contentBlockSchema } from '../components/blocks/content';
import { featureBlockSchema } from '../components/blocks/features';
import { heroBlockSchema } from '../components/blocks/hero';
import { testimonialBlockSchema } from '../components/blocks/testimonial';
import { ColorPickerInput } from '../components/fields/color';
import { iconSchema } from '../components/util/icon';
import {Global } from '../types/global'
export const BlogPosts = {
  label: 'BlogPos',
  name: 'posts',
  path: 'posts',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/oposts/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
    },
    {
      type: 'string',
      label: 'Date',
      name: 'date',
    },
    {
      type: 'string',
      label: 'Tags',
      name: 'tags',
    },
    {
      type: 'string',
      label: 'Image URL',
      name: 'imageUrl',
    },
    {
      type: 'rich-text',
      label: 'Blog Post Body',
      name: 'body',
      isBody: true,
      templates: [
        {
          name: 'Quote',
          label: 'Quote',
          fields: [
            {
              type: 'string',
              name: 'content',
              label: 'Content',
            },
            {
              type: 'string',
              name: 'author',
              label: 'Author',
            },
            {
              type: 'string',
              name: 'cite',
              label: 'Cite',
            },
          ],
        },
        {
          name: 'ArticleImage',
          label: 'ArticleImage',
          fields: [
            {
              type: 'string',
              name: 'src',
              label: 'Src',
            },
            {
              type: 'string',
              name: 'caption',
              label: 'Caption',
            },
          ],
        },
        {
          name: 'Code',
          label: 'Code',
          fields: [
            {
              type: 'string',
              name: 'code',
              label: 'Code',
            },
            {
              type: 'string',
              name: 'language',
              label: 'Language',
            },
            {
              type: 'string',
              name: 'selectedLines',
              label: 'Selected Lines',
            },
            {
              type: 'boolean',
              name: 'withCopyButton',
              label: 'With Copy Button',
            },
            {
              type: 'boolean',
              name: 'withLineNumbers',
              label: 'With Line Numbers',
            },
            {
              type: 'string',
              name: 'caption',
              label: 'Caption',
            },
          ],
        },
        {
          name: 'h2',
          label: 'H2',
          inline: true,
          fields: [
            {
              type: 'string',
              name: 'src',
              label: 'Src',
            },
          ],
        },
        {
          name: 'h3',
          label: 'H3',
          inline: true,
          fields: [
            {
              type: 'string',
              name: 'src',
              label: 'Src',
            },
          ],
        },
        {
          name: 'br',
          label: 'BR',
          inline: true,
          fields: [
            {
              type: 'string',
              name: 'src',
              label: 'Src',
            },
          ],
        },
        {
          name: 'p',
          label: 'P',
          inline: true,
          fields: [
            {
              type: 'string',
              name: 'src',
              label: 'Src',
            },
          ],
        },
      ],
    },
  ],
};

export const shouldEncode = (path: string, value: string) => {};

export const posts = {
  label: 'Post',
  name: 'post',
  path: 'content/posts',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      name: 'heroImg',
      label: 'Hero Image',
    },
    {
      type: 'rich-text',
      label: 'Excerpt',
      name: 'excerpt',
    },
    {
      type: 'reference',
      label: 'Author',
      name: 'author',
      collections: ['author'],
    },
    {
      type: 'datetime',
      label: 'Posted Date',
      name: 'date',
      ui: {
        dateFormat: 'MMMM DD YYYY',
        timeFormat: 'hh:mm A',
      },
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: '_body',
      templates: [
        tinaTableTemplate,
        {
          name: 'DateTime',
          label: 'Date & Time',
          inline: true,
          fields: [
            {
              name: 'format',
              label: 'Format',
              type: 'string',
              options: ['utc', 'iso', 'local'],
            },
          ],
        },
        {
          name: 'BlockQuote',
          label: 'Block Quote',
          fields: [
            {
              name: 'children',
              label: 'Quote',
              type: 'rich-text',
            },
            {
              name: 'authorName',
              label: 'Author',
              type: 'string',
            },
          ],
        },
        {
          name: 'NewsletterSignup',
          label: 'Newsletter Sign Up',
          fields: [
            {
              name: 'children',
              label: 'CTA',
              type: 'rich-text',
            },
            {
              name: 'placeholder',
              label: 'Placeholder',
              type: 'string',
            },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'string',
            },
            {
              name: 'disclaimer',
              label: 'Disclaimer',
              type: 'rich-text',
            },
          ],
          ui: {
            defaultItem: {
              placeholder: 'Enter your email',
              buttonText: 'Notify Me',
            },
          },
        },
      ],
      isBody: true,
    },
  ],
};
export const global = {
  label: 'Global',
  name: 'global',
  path: 'content/global',
  format: 'json',
  ui: {
    global: true,
  },
  fields: [
    {
      type: 'object',
      label: 'Header',
      name: 'header',
      fields: [
        iconSchema as any,
        {
          type: 'string',
          label: 'Name',
          name: 'name',
        },
        {
          type: 'string',
          label: 'Color',
          name: 'color',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
          ],
        },
        {
          type: 'object',
          label: 'Nav Links',
          name: 'nav',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: 'home',
              label: 'Home',
              outlined: false,
            },
          },
          fields: [
            {
              type: 'string',
              label: 'Link',
              name: 'href',
            },
            {
              type: 'string',
              label: 'Label',
              name: 'label',
            },
            {
              type: 'boolean',
              label: 'Button',
              name: 'outlined',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      label: 'Footer',
      name: 'footer',
      fields: [
        {
          type: 'string',
          label: 'Color',
          name: 'color',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
          ],
        },
        {
          type: 'object',
          label: 'Social Links',
          name: 'social',
          fields: [
            {
              type: 'string',
              label: 'Facebook',
              name: 'facebook',
            },
            {
              type: 'string',
              label: 'Twitter',
              name: 'twitter',
            },
            {
              type: 'string',
              label: 'Instagram',
              name: 'instagram',
            },
            {
              type: 'string',
              label: 'GitHub',
              name: 'github',
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      label: 'Theme',
      name: 'theme',
      // @ts-ignore
      fields: [
        {
          type: 'string',
          label: 'Primary Color',
          name: 'color',
          ui: {
            component: ColorPickerInput,
          },
        },
        {
          type: 'string',
          name: 'font',
          label: 'Font Family',
          options: [
            {
              label: 'System Sans',
              value: 'sans',
            },
            {
              label: 'Nunito',
              value: 'nunito',
            },
            {
              label: 'Lato',
              value: 'lato',
            },
          ],
        },
        {
          type: 'string',
          name: 'darkMode',
          label: 'Dark Mode',
          options: [
            {
              label: 'System',
              value: 'system',
            },
            {
              label: 'Light',
              value: 'light',
            },
            {
              label: 'Dark',
              value: 'dark',
            },
          ],
        },
      ],
    },
  ],
};
export const authors = {
  label: 'Authors',
  name: 'author',
  path: 'content/authors',
  format: 'md',
  fields: [
    {
      type: 'string',
      label: 'Name',
      name: 'name',
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      label: 'Avatar',
      name: 'avatar',
    },
  ],
};
export const pages = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === 'home') {
        return `/`;
      }
      if (document._sys.filename === 'about') {
        return `/about`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      description: 'The title of the page. This is used to display the title in the CMS',
      isTitle: true,
      required: true,
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        // @ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
      ],
    },
  ],
};
