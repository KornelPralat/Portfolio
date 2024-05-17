function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const rollBox = document.querySelector('.roll_box');
const descriptionBox = document.querySelector('.description-box');
// This is so both containers scroll together and then the second event so it covers both
// events
rollBox.addEventListener('scroll', (event) => {
    rollBox.scrollLeft = event.target.scrollLeft;
    descriptionBox.scrollLeft = event.target.scrollLeft;
});

descriptionBox.addEventListener('scroll', (event) => {
    descriptionBox.scrollLeft = event.target.scrollLeft;
    rollBox.scrollLeft = event.target.scrollLeft;
});

// finding the right amount of scroll distance
const scrollAmount = 250;

function autoScroll() {
    const newScrollLeft = rollBox.scrollLeft + scrollAmount;

    if (newScrollLeft <= rollBox.scrollWidth - rollBox.clientWidth) {
        // Scroll both containers together
        rollBox.scrollLeft = newScrollLeft;
        descriptionBox.scrollLeft = newScrollLeft;
    } else {
        rollBox.scrollLeft = 0;
        descriptionBox.scrollLeft = 0;
    }
}



// Set interval to trigger autoScroll every 5 seconds
setInterval(autoScroll, 5000);
rollBox.scrollIntoView({ behavior: "smooth", });
descriptionBox.scrollIntoView({ behavior: "smooth", });
