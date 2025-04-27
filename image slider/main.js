let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get number of slides
let slidesCount = sliderImages.length;

//set current slide
let currentSlide = 1;

//slide number element
let slideNumberElement = document.getElementById('slide-number');

//previous and next buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

//handle click on next and previous buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the main ul element
let paginationElement = document.createElement('ul');
paginationElement.setAttribute("id", "pagination-ul");

//create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);


//get the new created ul
let paginationCreatedUl = document.getElementById('pagination-ul');

//get pagination items
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));  


//loop through pagination items
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function(){
    currentSlide  = parseInt(this.getAttribute("data-index"));
    checker();
    }

}


checker();
//next slide function
function nextSlide() {
if(nextButton.classList.contains("disabled")){
    return false;
}else{
currentSlide++;
checker();
}
};

//previous slide function
function prevSlide() {
if(prevButton.classList.contains("disabled")){
return false;
}else{
currentSlide--;
checker();
}
};


//checker function
function checker() {
slideNumberElement.textContent = "slide #" + currentSlide + `of ${slidesCount}`;

removeAllActive();
//set active class on current slide
sliderImages[currentSlide - 1].classList.add("active");

//set active class on current pagination item
paginationCreatedUl.children[currentSlide - 1].classList.add("active");


//check if current slide is the first
if (currentSlide == 1) {
prevButton.classList.add("disabled");
}else{
prevButton.classList.remove("disabled");
}

//check if current slide is the last
if(currentSlide == slidesCount){
nextButton.classList.add("disabled");
}else{
nextButton.classList.remove("disabled");
}

};


//remove active class from all images and pagination bullets function
function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    });

    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    });


    };

