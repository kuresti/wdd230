//define variable for images
const imagesToLoad = document.querySelectorAll("img[data-src]");
//define options for lazy-loading
const options = {
  rootMargin: "0px 0px 50px 0px",
  threshold: 0,
};
//function to load images and replace placeholders
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onLoad = () => {
    image.removeAttribute("data-src");
  };
};
//if statement to observe each item and then unobserve it
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
