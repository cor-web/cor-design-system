---
layout: layouts/base.njk
title: "SEO Tips: Title"
templateClass: tmpl-post
eleventyNavigation:
  key: "SEO Title tips"
  order: 2
---

Create unique, accurate page titles

A <title> element tells both users and search engines what the topic of a particular page is. Place the <title> element within the <head> element of the HTML document, and create unique title text for each page on your site.



---


# {{ title }}

A title link is the title of a search result on Google Search and other properties (for example, Google News) that links to the web page. 

![Description snippet](/images/description.png)


## Best practices for influencing title links

Title links are critical to giving users a quick insight into the content of a result and why it's relevant to their query. It's often the primary piece of information people use to decide which result to click on, so it's important to use high-quality title text on your web pages.

- Make sure every page on your site has a title specified in the ```<title>``` element.
- Write descriptive and concise text for your ```<title>``` elements. Avoid vague descriptors like "Home" for your home page, or "Profile" for a specific person's profile.
Also avoid unnecessarily long or verbose text in your ```<title>``` elements, which is likely to be cut short when it shows up in search results.
- Avoid keyword stuffing. It's sometimes helpful to have a few descriptive terms in the ```<title>``` element, but there's no reason to have the same words or phrases appear multiple times. Title text like "Foobar, foo bar, foobars, foo bars" doesn't help the user, and this kind of keyword stuffing can make your results look spammy to Google and to users.
- Avoid repeated or boilerplate text in ```<title>``` elements. It's important to have distinct text that describes the content of the page in the ```<title>``` element for each page on your site. Titling every page on a commerce site "Cheap products for sale", for example, makes it impossible for users to distinguish between two pages. Long text in the ```<title>``` element that varies by only a single piece of information ("boilerplate" titles) is also bad; for example, a common ```<title>``` element for all pages with text like "Band Name - See videos, lyrics, posters, albums, reviews and concerts" contains a lot of uninformative text.
One solution is to dynamically update the ```<title>``` element to better reflect the actual content of the page. For example, include the words "video", "lyrics", etc., only if that particular page contains video or lyrics.
- Brand your titles concisely. The ```<title>``` element on your site's home page is a reasonable place to include some additional information about your site. For example:
  ```
  <title>ExampleSocialSite, a place for people to meet and mingle</title>
  ```
- But displaying that text in the ```<title>``` element of every single page on your site will look repetitive if several pages from your site are returned for the same query. In this case, consider including just your site name at the beginning or end of each ```<title>``` element, separated from the rest of the text with a delimiter such as a hyphen, colon, or pipe, like this:
  ```
  <title>ExampleSocialSite: Sign up for a new account.</title>
  ```

## Source
https://developers.google.com/search/docs/appearance/title-link