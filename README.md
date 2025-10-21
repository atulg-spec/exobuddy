# 🌐 Puppeteer Stealth Traffic Bot

This Node.js automation script uses **Puppeteer Extra** with the **Stealth Plugin** to simulate human-like browsing behavior across multiple proxies and devices.  
It is primarily designed for testing how web pages behave under different IPs and user agents (such as mobile and desktop views).

---

## 🚀 Features

- Uses **Puppeteer Extra** and **Stealth Plugin** for anti-bot detection.
- Rotates between **multiple SOCKS5 proxies** (`9050`, `9053`, `9054`).
- Simulates **different devices** (Desktop, Samsung Galaxy S5, iPhone X).
- Randomly visits URLs from a predefined list.
- Scrolls, waits, and interacts like a human.
- Randomizes sessions for natural browsing simulation.

---

## 📁 Project Structure

```
puppeteer-bot/
│
├── ads04.js         # Main automation script
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

---

## 🧠 How It Works

The script:
1. Randomly picks a URL from a given list.
2. Launches a browser instance with a specific proxy.
3. Visits the target URL and scrolls naturally.
4. Optionally clicks on elements like ads or links (for testing click interactions).
5. Closes the browser after a random interval.

Each session is unique — IP, device type, and behavior vary to mimic real users.

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Tor](https://www.torproject.org/) or any SOCKS5 proxy running on ports 9050, 9053, 9054.

---

### 2️⃣ Install Dependencies

```bash
npm install puppeteer-extra puppeteer-extra-plugin-stealth
```

---

### 3️⃣ Run the Script

```bash
node index.js
```

---

## 🧩 Configuration

Edit the URL list at the top of the script:

```js
let urllist = [
  'https://www.startmarket.in/post/mastering-whatsapp-marketing-a-comprehensive-guide-by-startmarket',
  'https://www.startmarket.in/post/the-power-of-whatsapp-marketing-generating-leads-and-emerging-trends',
  'https://www.startmarket.in/post/bulk-whatsapp-sender-unlock-the-power-of-personalized-messaging',
  'https://www.startmarket.in/post/bulk-whatsapp-software-chatbot-revolutionize-your-customer-communication'
];
```

To change proxy ports or devices, modify each browser launch block accordingly.

---

## 🧍 Device Emulation

The script emulates:
- **Desktop (Default)**  
- **Samsung Galaxy S5**
- **iPhone X**

You can easily add more devices by updating the viewport and user agent configurations in the script.

---

## ⚠️ Disclaimer

This project is **strictly for educational and testing purposes**.  
Do **not** use this script to generate fake traffic or manipulate ad systems.  
Misuse may violate website terms of service and legal regulations.

---

## 🧑‍💻 Author

**Developer:** Atul Gupta  
**Tech Stack:** Node.js, Puppeteer Extra, Stealth Plugin
