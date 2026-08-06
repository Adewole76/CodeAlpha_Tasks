const imagesContainer = document.querySelector('.images-container');
const filterButtons = document.querySelectorAll('.filter')
console.log(filterButtons)
console.log(imagesContainer)
let Images = [
    {
        ImageSource: 'images/Stuff.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'God of war',
        ImageId: 1
    },

    {
        ImageSource: 'images/Stuff2.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Living Room',
        ImageId: 2
    },
    {
        ImageSource: 'images/Stuff3.jpg',
        ImageCategory: 'Travel',
        ImageCaption: 'Architecture',
        ImageId: 3
    },
    {
        ImageSource: 'images/Stuff4.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'Play room',
        ImageId: 4
    },
    {
        ImageSource: 'images/Stuff5.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Street',
        ImageId: 5
    },
    {
        ImageSource: 'images/Stuff6.jpg',
        ImageCategory: 'Travel',
        ImageCaption: 'bus',
        ImageId: 6
    },
    {
        ImageSource: 'images/Stuff7.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'Restaurant',
        ImageId: 7
    },
    {
        ImageSource: 'images/Stuff8.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Art',
        ImageId: 8
    },
    {
        ImageSource: 'images/Stuff9.jpg',
        ImageCategory:'Nature',
        ImageCaption: 'Chinese restaurant',
        ImageId: 9
    },
    {
        ImageSource: 'images/Stuff10.jpg',
        ImageCategory: 'Travel',
        ImageCaption: 'Road Street',
        ImageId: 10
    },
    {
        ImageSource: 'images/Stuff11.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'City View',
        ImageId: 11
    },
    {
        ImageSource: 'images/Stuff12.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Wall Art',
        ImageId: 12
    },
    {
        ImageSource: 'images/Stuff13.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Old TV',
        ImageId: 13
    },
    {
        ImageSource: 'images/Stuff14.jpg',
        ImageCategory: 'Travel',
        ImageCaption: 'Shadow',
        ImageId: 14
    },
    {
        ImageSource: 'images/Stuff15.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'Girl Working on Compute',
        ImageId: 15
    },
    {
        ImageSource: 'images/Stuff16.jpg',
        ImageCategory: 'Portrait',
        ImageCaption: 'Wall SHdow',
        ImageId: 16
    },
    {
        ImageSource: 'images/Stuff17.jpg',
        ImageCategory: 'Travel',
        ImageCaption: 'Detroit',
        ImageId: 17
    },
    {
        ImageSource: 'images/Stuff18.jpg',
        ImageCategory: 'Nature',
        ImageCaption: 'Clothes Store',
        ImageId: 18
    },

]
const mappingImagesArray = (arr) => {
const mappedImagesArray = arr.map((image,index) => {
    return `
    <div class="image-container">
    <img class="actual-image" src="${image.ImageSource}">
    <div class="image-overlay"></div>
    <p class="image-caption">${image.ImageCaption}</p>
    </div>
    `
}).join('')
imagesContainer.innerHTML = mappedImagesArray;
}
mappingImagesArray(Images);

const filteringImagesArray = (buttonString) => {
    const filteredImagesArray = Images.filter(image => image.ImageCategory === buttonString)
   console.log(filteredImagesArray.length)
   mappingImagesArray(filteredImagesArray);
}


for(let i = 0; i < filterButtons.length; i++){
    if(filterButtons[i].textContent === 'All'){
        filterButtons[i].addEventListener('click',function(){
        mappingImagesArray(Images);
        })
    }else{
    filterButtons[i].addEventListener('click',function(){
        filteringImagesArray(filterButtons[i].textContent)
    })
}
}