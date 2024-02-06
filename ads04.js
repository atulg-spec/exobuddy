const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
let urllist = ['https://www.startmarket.in/post/mastering-whatsapp-marketing-a-comprehensive-guide-by-startmarket', 'https://www.startmarket.in/post/the-power-of-whatsapp-marketing-generating-leads-and-emerging-trends', 'https://www.startmarket.in/post/bulk-whatsapp-sender-unlock-the-power-of-personalized-messaging', 'https://www.startmarket.in/post/bulk-whatsapp-software-chatbot-revolutionize-your-customer-communication']
puppeteer.use(StealthPlugin());
function getRandomValue() {
    return Math.floor(Math.random() * 3);
}

function getRandom() {
    return Math.floor(Math.random() * 10);
}


let i = 0;
let z = getRandom()
while (i <= z) {
    (async () => {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--proxy-server=socks5://127.0.0.1:9050']
        });

        const page = await browser.newPage();
        await page.goto('https://api.ipify.org');
        console.log('opened')
        await page.waitForSelector('body');

        const pageContent = await page.evaluate(() => {
            const elements = document.querySelectorAll('*');
            const texts = Array.from(elements).map(element => element.textContent);

            return texts.join('\n');
        });

        console.log(pageContent);
        // Emulate human-like interaction
        await page.setViewport({ width: 1366, height: 768 });
        let randval = getRandomValue()
        console.log(randval)
        let url = urllist[randval]
        console.log(url)
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Scroll up and down for 5 seconds
        const scrollInterval = setInterval(() => {
            page.evaluate(() => {
                window.scrollBy(0, 100);
            });
        }, 100);

        setTimeout(async () => {
            clearInterval(scrollInterval);
            await page.waitForTimeout(7000);
            if (randval % 2 == 0) {
                console.log('Clicked On Ads')
                await page.click('iframe');
            }

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
        }, 3000);
    })();
    i = i + 1;
}

i = 0;
z = getRandom()
while (i <= z) {
    (async () => {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--proxy-server=socks5://127.0.0.1:9053']
        });

        const page = await browser.newPage();
        await page.goto('https://api.ipify.org');
        console.log('opened')
        await page.waitForSelector('body');

        const pageContent = await page.evaluate(() => {
            const elements = document.querySelectorAll('*');
            const texts = Array.from(elements).map(element => element.textContent);

            return texts.join('\n');
        });

        console.log(pageContent);
        // Emulate human-like interaction
        // Emulate Samsung Galaxy S5
        await page.setViewport({
            width: 360,
            height: 640,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            userAgent: 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36'
        });
        let randval = getRandomValue()
        console.log(randval)
        let url = urllist[randval]
        console.log(url)
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Scroll up and down for 5 seconds
        const scrollInterval = setInterval(() => {
            page.evaluate(() => {
                window.scrollBy(0, 100);
            });
        }, 100);

        setTimeout(async () => {
            clearInterval(scrollInterval);
            await page.waitForTimeout(3000);
            if (randval % 2 == 0) {
                console.log('Clicked On Ads')
                await page.click('iframe');
            }

            // Click on the anchor tag with class exo-native-widget-item
            await page.evaluate(() => {
                const anchor = document.querySelector('.exo-native-widget-item');
                if (anchor) {
                    anchor.click();
                }
            });

            // Wait for 5 seconds after clicking
            await page.waitForTimeout(48000);

            await browser.close();
        }, 4000);
    })();
    i = i + 1;
}


i = 0;
z = getRandom()
while (i <= z) {
    (async () => {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--proxy-server=socks5://127.0.0.1:9054']
        });

        const page = await browser.newPage();
        await page.goto('https://api.ipify.org');
        console.log('opened')
        await page.waitForSelector('body');

        const pageContent = await page.evaluate(() => {
            const elements = document.querySelectorAll('*');
            const texts = Array.from(elements).map(element => element.textContent);

            return texts.join('\n');
        });

        console.log(pageContent);
        // Emulate human-like interaction
        // Emulate iPhone X
        await page.setViewport({
            width: 375,
            height: 812,
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        });

        let randval = getRandomValue()
        console.log(randval)
        let url = urllist[randval]
        console.log(url)
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        // Scroll up and down for 5 seconds
        const scrollInterval = setInterval(() => {
            page.evaluate(() => {
                window.scrollBy(0, 100);
            });
        }, 100);

        setTimeout(async () => {
            clearInterval(scrollInterval);
            await page.waitForTimeout(2000);
            if (randval % 2 == 0) {
                console.log('Clicked On Ads')
                await page.click('iframe');
            }

            // Click on the anchor tag with class exo-native-widget-item
            await page.evaluate(() => {
                const anchor = document.querySelector('.exo-native-widget-item');
                if (anchor) {
                    anchor.click();
                }
            });

            // Wait for 5 seconds after clicking
            await page.waitForTimeout(40000);

            await browser.close();
        }, 6000);
    })();
    i = i + 1;
}
