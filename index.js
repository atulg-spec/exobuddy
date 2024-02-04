/**
 * Require the puppeteer library.
 */
const puppeteer = require('puppeteer');

/**
 * Inside the main function we'll place all the required code
 * that will be used in the scraping process.
 * The reason why we create an async function is to use
 * the power of async programming  that comes with puppeteer.
 */
async function main() {
  /**
   * Launch Chromium. By setting `headless` key to false,
   * we can see the browser UI.
   */
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--proxy-server=socks5://127.0.0.1:9050']
  });

  /**
   * Create a new page.
   */
  const page = await browser.newPage();

  /**
   * Using the newly created page, navigate to https://api.ipify.org
   */
  await page.goto('https://api.ipify.org');
  console.log('opened')
await page.waitForSelector('body');

  // Get the text content of the entire page
  const pageContent = await page.evaluate(() => {
    // Extract text content from all elements on the page
    const elements = document.querySelectorAll('*');
    const texts = Array.from(elements).map(element => element.textContent);

    // Concatenate all text content into a single string
    return texts.join('\n');
  });

  // Print the page content
  console.log(pageContent);
  /**
   * Wait 3 seconds and then close the browser instance.
   */
  setTimeout(() => {
    browser.close();
  }, 3000);
}

/**
 * Start the script by calling main().
 */
main();
