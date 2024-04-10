const app = () => {
    const state = new Proxy({
        index: 0,
        images: [],
        isLoaded: false,
    }, {
        set(target, property, value) {
            target[property] = value;
            if (property === 'images') {
                drawImages(value)
            }
            if (property === 'isLoaded') {
                getImages()
            }
        },
    });

    const getImages = async () => {
        const response = await fetch('https://65e0f9a9d3db23f7624a5791.mockapi.io/images');
        state.images = await response.json();
    }

    const appRender = () => {
        const app = document.createElement('div');
        app.classList.add('app');

        const header = document.createElement('header');
        header.classList.add('header');

        const main = document.createElement('main');
        main.classList.add('main');

        const footer = document.createElement('footer');
        footer.classList.add('footer');

        app.appendChild(header)
        app.appendChild(main)
        app.appendChild(footer);

        document.body.appendChild(app)
    }

    const headerRender = () => {
        const header = document.querySelector('.header');

        const logo = document.createElement('i');
        logo.className = 'logo bi bi-card-image';

        header.appendChild(logo);
    }

    const carouselRender = () => {
        const main = document.querySelector('.main');

        const carousel = document.createElement('div');
        carousel.classList.add('carousel');

        const carouselContent = document.createElement('div');
        carouselContent.classList.add('carousel-content');

        const icon = document.createElement('i');
        icon.classList.add('bi');

        const button = document.createElement('div');
        button.classList.add('carousel-arrow');

        const iconLeft = icon.cloneNode();
        iconLeft.classList.add('bi-arrow-left-circle');
        const buttonLeft = button.cloneNode();
        buttonLeft.classList.add('carousel-arrow-left');
        buttonLeft.appendChild(iconLeft);
        buttonLeft.addEventListener('click', onLeftButtonClick);

        const iconRight = icon.cloneNode();
        iconRight.classList.add('bi-arrow-right-circle');
        const buttonRight = button.cloneNode();
        buttonRight.classList.add('carousel-arrow-right');
        buttonRight.appendChild(iconRight);
        buttonRight.addEventListener('click', onRightButtonClick);

        carousel.appendChild(carouselContent);
        carousel.appendChild(buttonLeft);
        carousel.appendChild(buttonRight);

        main.appendChild(carousel);
    }

    const toggleActive = (index) => {
        const carouselContent = document.querySelector('.carousel-content');
        carouselContent.childNodes[index].classList.toggle('active')
    }

    const drawImages = (images) => {
        const carouselContent = document.querySelector('.carousel-content');
        images.forEach((image, index) => {
            const imageEl = document.createElement('img');
            imageEl.src = image.src + '?random=' + (index + 1);
            imageEl.classList.add('carousel-content-image');
            if (index === 0) {
                imageEl.classList.add('active');
            }
            carouselContent.appendChild(imageEl)
        })
    }

   const onLeftButtonClick = () => {
        toggleActive(state.index)
        const targetIndex = state.index - 1;
        if (targetIndex < 0) {
            state.index = state.images.length - 1
            toggleActive(state.images.length - 1)
            return
        }
        state.index = targetIndex;
        toggleActive(targetIndex)

    };

    const onRightButtonClick = () => {
        toggleActive(state.index)
        const targetIndex = state.index + 1;
        if (targetIndex === state.images.length) {
            state.index = 0
            toggleActive(0)
            return
        }
        state.index = targetIndex;
        toggleActive(targetIndex)
    };

    appRender()
    headerRender()
    carouselRender()

    document.addEventListener('DOMContentLoaded', () => {
        state.isLoaded = true
    })
}

app()
