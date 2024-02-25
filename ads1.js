const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
let urllist = ['https://onstock.in/startmarket', 'https://onstock.in/whatsapp', 'https://onstock.in/email', 'https://onstock.in/startmarket']
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
            await page.waitForTimeout(40000);

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
            await page.waitForTimeout(43000);

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
