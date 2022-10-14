const puppeteer = require("puppeteer");
const fs = require('fs');

async function getLinksFromPage(urlToGetLinks, selector) {

  console.log(`Scanning page: ${urlToGetLinks}, Selector: ${selector}`)
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(urlToGetLinks, { waitUntil: 'load', timeout: 0 });
    const hrefs = await page.$$eval(selector, links => {

      return links.map(link => link.href);
      // return links.map(link => link.includes('http') ? `https://cor.europa.eu${link.getAttribute("href")}` : link.getAttribute("href"));
    });

    const absoluteHrefs = hrefs.map(href => href.includes('http') ? href : `https://cor.europa.eu${href}`);

    await browser.close();

    // console.log(`Links results: ${absoluteHrefs}`)


    const internalLinks = absoluteHrefs.filter(href => href.includes('cor.europa.eu'));

    const linksToScan = internalLinks.slice(0, 5);

    console.log(internalLinks.length);
    console.log(linksToScan);


    return internalLinks;
  }
  catch (error) {
    console.error(`Could not get links: ${error}`);
  }
}


/*
const sitemap = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cor.europa.eu/en/Pages/sitemap.aspx');
  const pages = await page.$$eval(".sitemap-container a", links => {
    return links.map(link => {
      href = link.includes('http') ? `https://cor.europa.eu${link.getAttribute("href")}` : link.getAttribute("href");
      return href;
    });
  });

  await browser.close();

  return pages;
}
*/
/*
sitemap().then(data => {
  console.log("data", data);
});
*/

const pages = [
  'https://cor.europa.eu/en',
  'https://cor.europa.eu/fr',
  'https://cor.europa.eu/de'
];

/*

async function scan(pageToScan) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cor.europa.eu/en');
  const metaDescription = await page.$eval("head > meta[name='description']", el => el.content);
  console.log("scan:", metaDescription);
  await browser.close();

  return metaDescription;
};

const scanResults = pages.forEach(pageItem => {
  scan(pageItem);
});
*/

async function scrap(pagesToScrap) {
  console.log('In Scrapping');

  puppeteer.launch().then(async browser => {
    const promises = [];
    const results = [];

    for (let i = 0; i < pagesToScrap.length; i++) {
      console.log('Page ID Spawned', i, pagesToScrap[i]);

      promises.push(browser.newPage().then(async page => {
        await page.goto(pagesToScrap[i], { waitUntil: 'load', timeout: 0 });

        // const metaDescription = await page.$eval("head > meta[name='description']", el => el.content);
        const metaDescription = await page.$eval("head > meta[name='description']", el => el.content);


        if (await page.$("head > meta[name='description']")) {
          throw new Error('Unexpected element ON', page.title());
        } else {
          console.log("ok");
        }

        const metaDescriptionLength = metaDescription.length;
        const metaDescriptionSliced = metaDescription.slice(0, 160);

        const title = await page.title();


        const url = pagesToScrap[i];

        results.push({ url, title, metaDescription, metaDescriptionLength, metaDescriptionSliced });
      }))
    };

    await Promise.all(promises)
    await browser.close();

    console.log("scrapping results", results);

    return results;


  })
};


async function writeFile(content) {
  console.log("writing file");
  // WriteFile
  const path = './_data/pages.json';

  fs.writeFileSync(path, JSON.stringify(content), (error) => {
    if (error) {
      console.log('An error has occurred ', error);
      return;
    }
    console.log('Data written successfully to disk');
  });
}



const urlToGetLinks = "https://cor.europa.eu/en/Pages/sitemap.aspx";
const selector = "#cor_TopNavigationMenu a";


function getLinks(urlToGetLinks, selector) {
  console.log("Step 1.1");
  return new Promise(function (resolve) {
    resolve(getLinksFromPage(urlToGetLinks, selector))
  });
}

async function getContent(pages) {

  console.log('In Scrapping', pages);
  const results = [];

  await puppeteer.launch().then(async browser => {
    const promises = [];


    for (let i = 0; i < pages.length; i++) {
      console.log('Page ID Spawned', i, pages[i]);

      promises.push(browser.newPage().then(async page => {
        await page.goto(pages[i], { waitUntil: 'load', timeout: 0 });

        console.log(page.title());



        const metaDescription = await page.$("head > meta[name='description']") ? await page.$eval("head > meta[name='description']", el => el.content) : "ERROR";
        const metaDescriptionLength = metaDescription.length;
        const metaDescriptionSliced = metaDescription.slice(0, 160);

        const title = await page.title();


        const url = pages[i];

        results.push({ url, title, metaDescription, metaDescriptionLength, metaDescriptionSliced });
      }))
    };


    await Promise.all(promises)
    await browser.close();


  })

  return new Promise(async function (resolve) {
    resolve(results);
  });
}

getLinks(urlToGetLinks, selector)
  .then(linksToScan => {
    console.log("Step 2", linksToScan);
    return getContent(linksToScan);
  })
  .then(results => {
    console.log("Step 3", results);
    return writeFile(results)
  })

