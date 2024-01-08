# HaramBlur Extension

HaramBlur is a browser extension designed to help you navigate the web with respect for your Islamic values, privacy, and reduced distractions.

![HaramBlur Demo](demos/demo1.png)

## Introduction

HaramBlur utilizes face detection and NSFW content detection to uphold the Islamic gaze protection principle. It allows you to tailor your online experience by automatically blurring images and videos containing unwanted or impermissible content.

## Features

- Works on images and videos with unwanted content
- Configurable detection settings for a personalized browsing experience
- Interactive pop-up for easy on/off toggling
- Customizable hover to unblur feature
- Works on most websites and social media platforms

## How it Works

HaramBlur uses face detection and recognition features provided by [Human library](https://github.com/vladmandic/human) and NSFW detection from [nsfwjs](https://github.com/infinitered/nsfwjs/). Configure detection type, blur amount, hover to unblur, or toggle the extension via the interactive pop-up.

# Installation Guide

## Option 1: Using the Plugin from the Extensions Store

1. Visit the HaramBlur extension on the [Chrome Web Store](https://chrome.google.com/webstore/detail/haramblur/pbcoegikffnadpahojjhgdladmmddeji) or the [Firefox Add-ons Store](https://addons.mozilla.org/addon/haramblur/).
2. Follow the installation instructions on the page.

## Option 2: Compiling it On Your Own

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/alganzory/HaramBlur.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Code Your Magic:**
   Make necessary modifications or enhancements to the code.

4. **Build the Extension:**
   - Run:
     ```bash
     npm run build
     ```
   - Load the extension in Chrome:
     - Go to `chrome://extensions/`.
     - Enable "Developer mode".
     - Click "Load unpacked" and select the project folder.

5. **Generate a Release (Optional):**
   ```bash
   npm run release
   ```

# Improvements

- Support for more browsers
- Improve the speed of detection
- Enhance NSFW detection accuracy
- Make the extension more Shariah-compliant with additional privacy controls

# Open Source

HaramBlur is an open-source project, and contributions are welcome. Feel free to open an issue or submit a pull request for suggestions or improvements.

# Like the project?

If you find HaramBlur helpful, please consider giving it a star ⭐️. To support further development, [buy me a coffee ☕️](https://www.buymeacoffee.com/alganzory). Thank you! 😊

Don't forget us in your Du'a! 🤲
