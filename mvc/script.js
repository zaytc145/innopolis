const model = {
    index: 0,
    images: []
};

const watchedModel = new Proxy(model, {
    set(target, path, value) {
        target[path] = value;
        if (path === 'images') {
            drawImages(value)
        }
    },
});

const carouselContent = document.querySelector('.carousel-content');
const arrowLeft = document.querySelector('.carousel-arrow-left')
const arrowRight = document.querySelector('.carousel-arrow-right')
const toggleActive = (index) => {
    carouselContent.childNodes[index].classList.toggle('active')
}

const drawImages = (images) => {
    images.forEach((image, index) => {
        const imageEl = document.createElement('img');
        imageEl.src = image.src;
        imageEl.classList.add('carousel-content-image');
        if (index === 0) {
            imageEl.classList.add('active');
        }
        carouselContent.appendChild(imageEl)
    })
}

arrowLeft.addEventListener('click', () => {
    toggleActive(watchedModel.index)
    const targetIndex = watchedModel.index - 1;
    if (targetIndex < 0) {
        watchedModel.index = watchedModel.images.length - 1
        toggleActive( watchedModel.images.length - 1)
        return
    }
    watchedModel.index = targetIndex;
    toggleActive(targetIndex)

});

arrowRight.addEventListener('click', () => {
    toggleActive(watchedModel.index)
    const targetIndex = watchedModel.index + 1;
    if (targetIndex === watchedModel.images.length) {
        watchedModel.index = 0
        toggleActive(0)
        return
    }
    watchedModel.index = targetIndex;
    toggleActive(targetIndex)
});

watchedModel.images = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1684407617257-58c3ba45589d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        src: 'https://images.unsplash.com/photo-1706559907937-4c2cb61f38f2?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        src: 'https://images.unsplash.com/photo-1707079918070-7962c5084643?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]