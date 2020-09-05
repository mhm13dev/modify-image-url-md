// The actual function that takes care of modifying the urls
module.exports = (text, host) => {
  /*
  text: this is the text in which there are some urls that you want to modify

  host: the hostname that you want to prepend to the urls
  */

  // Get All the images from the text
  let images = text.match(/\!\[.*\]\(.*\)/g);

  images.forEach((img) => {
    // Get the url of single image
    const url = img.match(/[\(].*[^\)]/)[0].split("(")[1];

    if (!url.startsWith("http")) {
      // Modified url
      const modifiedImageUrl = `${host}${url}`;

      // replace the image url with modifiedImageUrl
      text = text.replace(url, modifiedImageUrl);
    }
  });

  // return the text that contains Modified Images Urls
  return text;
};
