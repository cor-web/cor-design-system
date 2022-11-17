---
layout: layouts/base.njk
title: SEO Tips
templateClass: tmpl-post
eleventyNavigation:
  key: "SEO meta description tips"
  order: 3
---
# {{ title }}

```html
<meta name="description" content="A description of the page">
```

Use this tag to provide a short description of the page. In some situations, this description is used in the snippet shown in search results.

## Best practices for creating quality meta descriptions

- Use a unique description for each page.
- Make descriptions clear and concise. Avoid vague descriptions like "Home."
- Avoid keyword stuffing. It doesn't help users, and search engines may mark the page as spam.
- Descriptions don't have to be complete sentences; they can contain structured data.


Google will sometimes use the <meta name="description"> tag from a page to generate a snippet in search results, if we think it gives users a more accurate description than would be possible purely from the on-page content. A meta description tag generally informs and interests users with a short, relevant summary of what a particular page is about. They are like a pitch that convince the user that the page is exactly what they're looking for. There's no limit on how long a meta description can be, but the snippet is truncated in Google Search results as needed, typically to fit the device width.

Good descriptions are human-readable and diverse.

Keep in mind that meta descriptions comprised of long strings of keywords don't give users a clear idea of the page's content, and are less likely to be displayed as a snippet.

### Create unique descriptions for each page on your site

Identical or similar descriptions on every page of a site aren't helpful when individual pages appear in search results. Wherever possible, create descriptions that accurately describe the specific page. Use site-level descriptions on the main home page or other aggregation pages, and use page-level descriptions everywhere else. If you don't have time to create a description for every single page, try to prioritize your content; at the very least, create a description for the critical URLs like your home page and popular pages.


### Include relevant information about the content in the description

The meta description doesn't just have to be in sentence format; it's also a great place to include information about the page. For example, news or blog postings can list the author, date of publication, or byline information. This can give potential visitors very relevant information that might not be displayed in the snippet otherwise. Similarly, product pages might have the key bits of information—price, age, manufacturer—scattered throughout a page. A good meta description can bring all this data together.

For example, the following meta description provides detailed information about a book, and information is clearly tagged and separated:

```html
<meta name="description" content="Written by A.N. Author, Illustrated by V. Gogh, Price: $17.99, Length: 784 pages">
```

### Use quality descriptions

Make sure your descriptions are truly descriptive. Because meta descriptions aren't displayed in the pages the user sees, it's easy to let this content slide. But high-quality descriptions can be displayed in Google's search results, and can go a long way to improving the quality and quantity of your search traffic.

Here are some examples of how a meta description can be improved:

**Bad (list of keywords)** : 

```html
<meta name="description" content="Sewing supplies, yarn, colored pencils, sewing machines, threads, bobbins, needles">
```

**Better (explains what the shop sells and details like opening hours and location)** :

```html
<meta name="description" content="Get everything you need to sew your next garment. Open Monday-Friday 8-5pm, located in the Fashion District.">
```



**Bad (same description used for every news article)** : 

```html
<meta name="description" content="Local news in Whoville, delivered to your doorstep. Find out what happened today.">
```

**Better (uses a snippet from the specific news article)** :

```html
<meta name="description" content="Upsetting the small town of Whoville, a local elderly man steals everyone's presents the night before an important event. Stay tuned for live updates on the matter.">
```


**Bad (doesn't summarize the page)** : 

```html
<meta name="description" content="Eggs are a source of joy in everyone's life. When I was a small child, I remember picking eggs from the hen house and bringing them to the kitchen. Those were the days.">
```

**Better (summarizes the whole page)** :

```html
<meta name="description" content="Learn how to cook eggs with this complete guide in 1 hour or less. We cover all the methods, including: over-easy, sunny side up, boiled, and poached.">
```



**Bad (too short)** : 

```html
<meta name="description" content="Mechanical pencil">
```

**Better (specific and detailed)** :

```html
<meta name="description" content="Self-sharpening mechanical pencil that autocorrects your penmanship. Includes 2B auto-replenishing lead. Available in both Vintage Pink and Schoolbus Yellow. Order 50+ pencils, get free shipping.">
```