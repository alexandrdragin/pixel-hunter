import imageLoader from '../image-loader/image-loader';

export const loadImages = (images, data) => {
  if (!images.length) {
    return;
  }

  let index = 0;
  for (let image of images) {
    imageLoader(image).load({
      url: data[index].image.url,
      width: data[index].image.width,
      height: data[index].image.height
    });

    index++;
  }
};
