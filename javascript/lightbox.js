const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')

images.forEach(image => {

    image.addEventListener('click', e =>{

        /*  Clicked on an image, so the lightbox must now activate */
        lightbox.classList.add('active')

        /* Add and img element to the DOM to display the img we clicked on */
        const img = document.createElement('img')
        img.src = image.src

        /*  remove any exsiting child, so we before adding a new one. 
            this prevents 2 images from being active at once. */
        while (lightbox.firstChild)
        {
            lightbox.removeChild(lightbox.firstChild)
        }

        /* make sure the img we added is a child of the this lightbox */
        lightbox.appendChild(img)
    })

})


lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})