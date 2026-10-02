const imagesContainer = document.querySelector('.images-container');
const filterButtons = document.querySelectorAll('.filter');
const lightBoxView = document.querySelector('.lightbox-view');
const buttonsImage = document.querySelector('.button-image');
const lightBoxImageContainer = document.querySelector('.light-box-image')
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const imageFilterContainer = document.querySelector('.image-filter')
const closeButton = document.querySelector('.close-button')
console.log(filterButtons)
console.log(imagesContainer)
let Images = [
    {
        ImageSource: 'outputImgs/Stuff.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'God of war',
        ImageId: 1
    },

    {
        ImageSource: 'outputImgs/Stuff2.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Living Room',
        ImageId: 2
    },
    {
        ImageSource: 'outputImgs/Stuff3.webp',
        ImageCategory: 'Travel',
        ImageCaption: 'Architecture',
        ImageId: 3
    },
    {
        ImageSource: 'outputImgs/Stuff4.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'Play room',
        ImageId: 4
    },
    {
        ImageSource: 'outputImgs/Stuff5.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Street',
        ImageId: 5
    },
    {
        ImageSource: 'outputImgs/Stuff6.webp',
        ImageCategory: 'Travel',
        ImageCaption: 'bus',
        ImageId: 6
    },
    {
        ImageSource: 'outputImgs/Stuff7.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'Restaurant',
        ImageId: 7
    },
    {
        ImageSource: 'outputImgs/Stuff8.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Art',
        ImageId: 8
    },
    {
        ImageSource: 'outputImgs/Stuff9.webp',
        ImageCategory:'Nature',
        ImageCaption: 'Chinese restaurant',
        ImageId: 9
    },
    {
        ImageSource: 'outputImgs/Stuff10.webp',
        ImageCategory: 'Travel',
        ImageCaption: 'Road Street',
        ImageId: 10
    },
    {
        ImageSource: 'outputImgs/Stuff11.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'City View',
        ImageId: 11
    },
    {
        ImageSource: 'outputImgs/Stuff12.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Wall Art',
        ImageId: 12
    },
    {
        ImageSource: 'outputImgs/Stuff13.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Old TV',
        ImageId: 13
    },
    {
        ImageSource: 'outputImgs/Stuff14.webp',
        ImageCategory: 'Travel',
        ImageCaption: 'Shadow',
        ImageId: 14
    },
    {
        ImageSource: 'outputImgs/Stuff15.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'Girl Working on Compute',
        ImageId: 15
    },
    {
        ImageSource: 'outputImgs/Stuff16.webp',
        ImageCategory: 'Portrait',
        ImageCaption: 'Wall SHdow',
        ImageId: 16
    },
    {
        ImageSource: 'outputImgs/Stuff17.webp',
        ImageCategory: 'Travel',
        ImageCaption: 'Detroit',
        ImageId: 17
    },
    {
        ImageSource: 'outputImgs/Stuff18.webp',
        ImageCategory: 'Nature',
        ImageCaption: 'Clothes Store',
        ImageId: 18
    },

]
const mappingImagesArray = (arr) => {
const mappedImagesArray = arr.map((image,index) => {
    return `
    <div class="image-container" data-user-id="${index}">
    <img class="actual-image" src="${image.ImageSource}" loading = "lazy">
    <div class="image-overlay"></div>
    <p class="image-caption">${image.ImageCaption}</p>
    </div>
    `
}).join('')
console.log(mappedImagesArray);
imagesContainer.innerHTML = mappedImagesArray;
}
mappingImagesArray(Images);

const filteringImagesArray = (buttonString) => {
    const filteredImagesArray = Images.filter(image => image.ImageCategory === buttonString)
   console.log(filteredImagesArray.length)
   mappingImagesArray(filteredImagesArray);
   return filteredImagesArray
}

let myFilteredImages;
let filterToggle = false

imageFilterContainer.addEventListener('click', (event)=>{
    if(event.target.closest('button')){
        const particularFilterButton = event.target.closest('button');
        console.log(particularFilterButton);
        particularFilterButton.classList.add('active');

        for(let i = 0; i < filterButtons.length; i++){
            if(filterButtons[i].classList.contains('active') && filterButtons[i].textContent !== particularFilterButton.textContent){
                filterButtons[i].classList.remove('active');
                console.log(filterButtons);
            }
        }
    }
})


for(let i = 0; i < filterButtons.length; i++){
    if(filterButtons[i].textContent === 'All'){
        filterButtons[i].addEventListener('click',function(){
        filterToggle = false
        mappingImagesArray(Images);
        })
    }else{
    filterButtons[i].addEventListener('click',function(){
        filteringImagesArray(filterButtons[i].textContent)
        filterToggle = true;
        myFilteredImages = filteringImagesArray(filterButtons[i].textContent)
        console.log(myFilteredImages)
        console.log(filterToggle)
    })
}
}
let currentLightboxImage = 0;
imagesContainer.addEventListener('click',(event) =>{
  if(event.target.closest('.image-container') && filterToggle === false){
    const particularImage = event.target.closest('.image-container');
    console.log(particularImage);
    const particularImageId = particularImage.dataset.userId;
    currentLightboxImage = Number(particularImageId);
    let imageToBeDisplay = Images.find((image,index) => index === currentLightboxImage)
    console.log(imageToBeDisplay);
    lightBoxView.classList.remove('hidden');
    lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${imageToBeDisplay.ImageSource}">`

}else if(event.target.closest('.image-container') && filterToggle === true){
    const particularfilteredImage = event.target.closest('.image-container');
    console.log(particularfilteredImage);
    const particularfilteredImageId = particularfilteredImage.dataset.userId;
    currentLightboxImage = Number(particularfilteredImageId);
    let filteredImageTobeDisplayed = myFilteredImages.find((image,index)=> index === currentLightboxImage)
    console.log(filteredImageTobeDisplayed);
    lightBoxView.classList.remove('hidden');
    lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${filteredImageTobeDisplayed.ImageSource}">`
}
})
nextButton.addEventListener('click', function(){
    if(filterToggle === false){
     currentLightboxImage = currentLightboxImage + 1;
     console.log(currentLightboxImage)
     if(currentLightboxImage > Images.length - 1){
        currentLightboxImage = 0;
        imageToBeDisplay = Images.find((image,index) => index === currentLightboxImage)
        lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${imageToBeDisplay.ImageSource}">`
     }else{
     imageToBeDisplay = Images.find((image,index) => index === currentLightboxImage)
     lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${imageToBeDisplay.ImageSource}">`
     }
    }else if(filterToggle === true){
        currentLightboxImage = currentLightboxImage + 1;
     console.log(currentLightboxImage)
     if(currentLightboxImage > myFilteredImages.length - 1){
        currentLightboxImage = 0;
        filteredImageTobeDisplayed = myFilteredImages.find((image,index) => index === currentLightboxImage)
        lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${filteredImageTobeDisplayed.ImageSource}">`
     }else{
     filteredImageTobeDisplayed = myFilteredImages.find((image,index) => index === currentLightboxImage)
     lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${filteredImageTobeDisplayed.ImageSource}">`
     }
    }
})
previousButton.addEventListener('click', function(){
    if(filterToggle === false){
    currentLightboxImage = currentLightboxImage - 1;
     console.log(currentLightboxImage)
     if(currentLightboxImage < 0){
        currentLightboxImage = Images.length - 1;
        imageToBeDisplay = Images.find((image,index) => index === currentLightboxImage)
        lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${imageToBeDisplay.ImageSource}">`
     }else{
     imageToBeDisplay = Images.find((image,index) => index === currentLightboxImage)
     lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${imageToBeDisplay.ImageSource}">`

     }
    }else if(filterToggle === true){
        currentLightboxImage = currentLightboxImage - 1;
     console.log(currentLightboxImage)
     if(currentLightboxImage < 0){
        currentLightboxImage = myFilteredImages.length - 1;
        filteredImageTobeDisplayed = myFilteredImages.find((image,index) => index === currentLightboxImage)
        lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${filteredImageTobeDisplayed.ImageSource}">`
     }else{
     filteredImageTobeDisplayed = myFilteredImages.find((image,index) => index === currentLightboxImage)
     lightBoxImageContainer.innerHTML = `<img class="lightbox-image" src="${filteredImageTobeDisplayed.ImageSource}">`

     }
    }
})
closeButton.addEventListener('click', function(){
    lightBoxView.classList.add('hidden');
    currentLightboxImage = 0;
})