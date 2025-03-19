// Select the left and right navigation arrows
const left = document.querySelector('.left');
const right = document.querySelector('.right');

// Select the slider container that holds all images
const slider = document.querySelector('.slider');

// Select all images inside the slider
const images = document.querySelectorAll('.image')

// Initialize slide number (index starts at 1)
let slideNumber = 1;

// Get the total number of images in the slider
const length = images.length;

// ----------------- Start of Dots Navigation -----------------

// Select the bottom section where dots (indicators) will be added
const bottom = document.querySelector('.bottom');

// Dynamically create navigation dots based on the number of images
for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
};

// Select all generated navigation dots
const buttons = document.querySelectorAll('.button');

// Set the first dot's background color to indicate the initial active slide
buttons[0].style.backgroundColor = 'white';

// Function to reset background color for all dots
const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = 'transparent';
    });
};

// Add event listener to each dot for click functionality
buttons.forEach((button, i) =>{
    button.addEventListener('click',()=>{
        resetBg(); // Reset all dot backgrounds
        slider.style.transform = `translateX(-${i*100}%)`;
        slideNumber = i + 1; // Update slide number
        button.style.backgroundColor = 'white'; // Highlight the active dot
    });

});
\
// Function to update dot colors when navigating with arrows
const changeColor = () =>{
    resetBg(); // Reset all dots
    buttons[slideNumber-1].style.backgroundColor = 'white'; // Highlight the active dot
};

// ----------------- End of Dots Navigation -----------------

// Function to move to the next slide
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*100}%)`;
    slideNumber++; // Increase slide number
};

// Function to move to the previous slide
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*100}%)`;
    slideNumber--; // Decrease slide number
};

// Function to jump to the first slide
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0%)`;
    slideNumber = 1; // Reset slide number
};

// Function to jump to the last slide
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*100}%`;
    slideNumber = length; // Set slide number to last image index
}

// Event listener for the right arrow (Next Slide)
right.addEventListener('click',()=>{
    slideNumber < length ? nextSlide() :
    getFirstSlide();
    changeColor(); // Update active dot
})

// Event listener for the left arrow (Previous Slide)
left.addEventListener('click',()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor(); // Update active dot
})
