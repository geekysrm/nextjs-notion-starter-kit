module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '9d7e9163785242ffa79314d1db62dd04',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Soumya Ranjan Mohanty',
  domain: 'soumya.dev',
  author: 'Soumya Ranjan Mohanty',

  // open graph metadata (optional)
  description:
    'Personal website of Soumya Ranjan Mohanty aka geekySRM, Software Developer from India',
  socialImageTitle: 'Soumya Ranjan Mohanty',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'geekysrm',
  github: 'geekysrm',
  linkedin: 'geekysrm',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: 'https://res.cloudinary.com/geekysrm/image/fetch/q_auto,f_auto',

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'geekysrm/blog-comments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
