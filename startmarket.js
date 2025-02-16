const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const axios = require('axios');

// Function to fetch data and perform actions with Puppeteer
async function fetchDataAndInteract(proxy) {
    try {
        const response = await axios.get('https://startmarket.in/home/traffic_urls');
        const responseData = response.data;
        const urllist = responseData.links;

        puppeteer.use(StealthPlugin());

        function getRandomValue() {
            return Math.floor(Math.random() * urllist.length);
        }

        function getRandom() {
            return Math.floor(Math.random() * 10);
        }

        let i = 0;
        let z = getRandom();

        while (i <= z) {
            (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                    args: ['--no-sandbox',proxy]
                });

                const page = await browser.newPage();
                await page.goto('https://api.ipify.org');
                console.log('opened');
                await page.waitForSelector('body');

                const pageContent = await page.evaluate(() => {
                    const elements = document.querySelectorAll('*');
                    const texts = Array.from(elements).map(element => element.textContent);
                    return texts.join('\n');
                });

                console.log(pageContent);

                let randval = getRandomValue();
                console.log(randval);

                let url = urllist[randval];
                console.log(url);

                await page.goto(url);

                const scrollInterval = setInterval(() => {
                    page.evaluate(() => {
                        window.scrollBy(0, 100);
                    });
                }, 100);

                setTimeout(async () => {
                    clearInterval(scrollInterval);
                    await page.waitForTimeout(120000);

                    if (randval % 2 == 0) {
                        console.log('Clicked On Ads');
                        // await page.click('iframe');
                    }

                    await page.evaluate(() => {
                        // Find the first anchor tag (<a>) on the page
                        // const firstAnchor = document.querySelector('a');
                    
                        // Check if the anchor tag exists
//                        if (firstAnchor) {
                            // Click on the first anchor tag
  //                          firstAnchor.click();
    //                    }
                    });
                    

                    await page.waitForTimeout(40000);
                    await browser.close();
                }, 3000);

            })();
            i = i + 1;
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to fetch data and interact with the URLs
fetchDataAndInteract('--proxy-server=socks5://127.0.0.1:9050');
fetchDataAndInteract('--proxy-server=socks5://127.0.0.1:9053');
//fetchDataAndInteract('--proxy-server=socks5://127.0.0.1:9054');
//fetchDataAndInteract('--proxy-server=socks5://127.0.0.1:9053');
