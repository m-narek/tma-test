export function getImageURL(imageName: string) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}
