// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'okenwa kenneth',
  siteDescription: 'Personal Blog by Okenwa Kenneth. He is a software developer, he is passionate about cyber security and making the web save for everyone.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [

    {
        
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-122741298-3',
      }
    },

    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }, 
    }

  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
