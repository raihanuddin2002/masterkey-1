// ADD BUTTONS
function adBtn(element) {
    const dataValue = element.getAttribute("data-details");
    document.querySelector('.ad-heading').innerText = element.innerText;
    document.querySelector('.ad_para').innerText = dataValue;


    document.querySelector('.active_ad_btn').classList.remove('active_ad_btn');
    element.classList.add("active_ad_btn");
}


// Testimonial Button
const btnScrollLeft = document.getElementById("scroll_left");
const btnScrollRight = document.getElementById("scroll_right");

btnScrollLeft.onclick = function () {
    document.querySelector('.testimonials_section').scrollLeft -= 700;
};

btnScrollRight.onclick = function () {
    document.querySelector('.testimonials_section').scrollLeft += 700;
};