{
  "$schema": "https://astro.build/config",
  "output": "static",
  "site": "https://astrocodix.com",
  "trailingSlash": "ignore",
  "markdown": {
    "shikiConfig": {
      "theme": "github-light"
    }
  },
  "integrations": [
    "@astrojs/tailwind",
    "@astrojs/sitemap"
  ],
  "build": {
    "inlineStyles": true
  }
}