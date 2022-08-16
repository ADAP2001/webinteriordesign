// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// fetches testimonials from testimonials array
const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector('.testimonial__cards');
    testimonialsContainer.innerHTML = '';

    // loop through array and print testimonials
    testimonials.forEach(testimonial => {
        const newTestimonial = document.createElement('div');
        newTestimonial.className = 'testimonial__card';
        newTestimonial.innerHTML = `
        <div class="testi-info__personal">
            <div class="testi__image">
                <img src="asset/${testimonial.avatar}.jpg">
            </div>
            <div class="testi-nameJob">
                <h5>${testimonial.name}</h5>
                <p>${testimonial.title}</p>
            </div>

            <div class="star__testi">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
         </div>
        <div class="content__testimonial">
            <p>
            "${testimonial.quote}"
            </p>
        </div>
        `;

        testimonialsContainer.append(newTestimonial);
    })
}

window.addEventListener('load', fetchTestimonials)