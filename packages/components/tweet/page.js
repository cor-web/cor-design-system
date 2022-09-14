import { WebC } from "@11ty/webc";
import { writeFile } from "node:fs";

let page = new WebC();

page.setInputPath("page.webc");
page.defineComponents({
  "cor-tweet": "tweet.webc"
});

let { html, css, js, components } = await page.compile();
console.log("html", html, "css", css, "js", js, "components", components);

writeFile('tweet.html', html, err => {
  if (err) {
    console.error(err);
  }
});