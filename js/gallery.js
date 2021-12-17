// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {

  // Goal: Find gallry-thumbnail images so that when user clicks on img, it
  // dispalys the same img but larger in 2nd col and a description
  // of it in the 3rd col.


  // The HTML we're working with:

  // <div class="col col-nav gallery-thumbs" id="gallery-thumbs">
  //   <div class="current">
  //     <img src="/images/small/beach.jpg" alt="Venice Beach"
  //          data-large-version="/images/large/beach.jpg"
  //          data-title="Venice Beach"
  //          data-description="An overhead shot of Venice Beach, California.">
  //   </div>
  //   <div>
  //     <img src="/images/small/boat.jpg" alt="Moorea catamaran"
  //          data-large-version="/images/large/boat.jpg"
  //          data-title="Catamaran"
  //          data-description="A catamaran on Moorea lagoon, French Polynesia.">
  //   </div>
  //   ....


  // To select the thumbnails images we can use:
  // let thumbnails = document.querySelector('#gallery-thumbs').querySelectorAll('img');

  // Or we can us the the followinmg shorter line.
  // This selects id="gallery-thumbs" then selects all the divs where the imgs
  // are inside, then selects all the HTML tags with img.
  let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img')

  // Finds img inside id="gallery-photo"
  // Note: '#gallery-photo img' === '#gallery-photo > img'
  let mainImage = document.querySelector('#gallery-photo img')

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      // Set clicked image as main image.
      // To find large img in HTML tag:
      // "data-large-version="/images/large/beach.jpg"",
      // use dataset.largeVersion
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute('src', newImageSrc);

      // Change alt description with img
      mainImage.setAttribute('alt', thumbnail.alt);


      // Change which image is class="current" - (highlights img in 1st col)
      // 1st we have to remove the .current class the div, and then
      // add it to the parent div (the one being clicked on)
      let currentClass = "current"
      document.querySelector('.current').classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);


      // Update image info on click.
      let galleryInfo       = document.querySelector('#gallery-info');
      let title             = galleryInfo.querySelector('.title');
      let description       = galleryInfo.querySelector('.description');

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    })
  })
}
