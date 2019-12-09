import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawBackground() {
  let image = store.State.image;

  document.getElementById(
    "bg-image"
  ).style.backgroundImage = `url("${image.url}" )`;
  // "url( 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80')";
}
export default class ImageController {
  constructor() {
    store.subscribe("image", _drawBackground);
    ImageService.getBackground();
  }
}
