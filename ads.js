const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());
let i = 0;
while (i <= 5) {
    (async () => {
        // Define your proxy server here

        // Create a new proxy server with ProxyChain

        // Launch Puppeteer with the configured proxy
        const browser = await puppeteer.launch({
            headless: true, // Set to true if you don't want to see the browser window
            args: ['--no-sandbox']
        });

        const page = await browser.newPage();
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
        // Emulate human-like interaction
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://startmarket.in/post/elevate-your-digital-strategy-with-startmarketin', { waitUntil: 'domcontentloaded' });

        // Scroll up and down for 5 seconds
        const scrollInterval = setInterval(() => {
            page.evaluate(() => {
                window.scrollBy(0, 100);
            });
        }, 100);

        setTimeout(async () => {
            clearInterval(scrollInterval);
            await page.waitForTimeout(5000);
            await page.click('iframe');

            // Click on the anchor tag with class exo-native-widget-item
            await page.evaluate(() => {
                const anchor = document.querySelector('.exo-native-widget-item');
                if (anchor) {
                    anchor.click();
                }
            });

            // Wait for 5 seconds after clicking
            await page.waitForTimeout(50000);

            await browser.close();
        }, 5000);
    })();
    i = i + 1;
}
