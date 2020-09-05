# Modify Relative Image URLs in Markdown Text

Let suppose you have some text written in **Markdown** and it contains **relative image urls** like `![Image Caption](/images/some-image.png)` and you want to modify these urls into **absolute urls** like `![Image Caption](https://somehost.com/images/some-image.png)`. Then this package will work for you.

## Installation

```
npm i modify-image-url-md
```

## Usage

```js
const miu = require("modify-image-url-md");

const markdownText = `
# Hello
Just experimenting with [strapi](https://strapi.io)
![Some caption for the image](/uploads/some-image.png)
## Some other image
![Another image caption](https://unsplash.com/photos/QxTTK-NhKsY)
`;

const markdownWithModifiedUrls = miu(markdownText, "https://somehost.com");
```

The `markdownWithModifiedUrls` will contain the `markdownText` but the **relative image urls** are now changed to **absolute image urls** according to the provided `host` as a second parameter to `miu`:

```md
# Hello

Just experimenting with [strapi](https://strapi.io)
![Some caption for the image](https://somehost.com/uploads/some-image.png)

## Some other image

![Another image caption](https://unsplash.com/photos/QxTTK-NhKsY)
```
