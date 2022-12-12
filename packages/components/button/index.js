import { WebC } from "@11ty/webc";

page.setInputPath("cor-button.webc");

let { html, css, js, components } = await page.compile();

export { html, css, js, components };
