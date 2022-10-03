(async function () {
  const { WebC } = await import("@11ty/webc");
})();

page.setInputPath("cor-button.webc");

let { html, css, js, components } = await page.compile();

export { html, css, js, components };

