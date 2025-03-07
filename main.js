const appState = {
    selectedSpeakerIndex: 0,
    selectedSpeakerCategoryIndex: 0
}

const speakerCarouselData = [
    {
        imgSrc: 'images/speaker-1.png',
        categories: [
            {
                type: 'Web Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Digital Marketing',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SaaS Products',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Apps Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SEO Services',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Data Analysis',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
        ]
    },
    {
        imgSrc: 'images/speaker-2.png',
        categories: [
            {
                type: 'Web Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Digital Marketing',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SaaS Products',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Apps Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SEO Services',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Data Analysis',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
        ]
    },
    {
        imgSrc: 'images/speaker-3.png',
        categories: [
            {
                type: 'Web Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Digital Marketing',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SaaS Products',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Apps Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'SEO Services',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
            {
                type: 'Data Analysis',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.'
            },
        ]
    },
];

function decrementSpeakerIndex() {
    if (appState.selectedSpeakerIndex - 1 < 0) {
        appState.selectedSpeakerIndex = speakerCarouselData.length - 1;
    } else {
        appState.selectedSpeakerIndex -= 1;
    }

    appState.selectedSpeakerCategoryIndex = 0;
    initSpeakerCarousel();
}

function incrementSpeakerIndex() {
    if (appState.selectedSpeakerIndex + 1 === speakerCarouselData.length) {
        appState.selectedSpeakerIndex = 0;
    } else {
        appState.selectedSpeakerIndex += 1;
    }

    appState.selectedSpeakerCategoryIndex = 0;
    initSpeakerCarousel();
}

//TODO
function incrementSpeakerCategoryIndex() {
    let speaker = speakerCarouselData[appState.selectedSpeakerIndex];
    
    if (appState.selectedSpeakerCategoryIndex + 1 < speaker.categories.length) {
        appState.selectedSpeakerCategoryIndex += 1;
    } else {
        appState.selectedSpeakerCategoryIndex = 0; 
    }

    initSpeakerCarousel(); 
}

//TODO
function decrementSpeakerCategoryIndex() {
    let speaker = speakerCarouselData[appState.selectedSpeakerIndex];

    if (appState.selectedSpeakerCategoryIndex - 1 >= 0) {
        appState.selectedSpeakerCategoryIndex -= 1;
    } else {
        appState.selectedSpeakerCategoryIndex = speaker.categories.length - 1;
    }

    initSpeakerCarousel(); 
}


function bindSpeakerCarouselEvents() {
    Array.from(document.getElementsByClassName('speaker-carousel-previous'))
        .forEach(previous => {
            previous.removeEventListener('click', decrementSpeakerIndex);
            previous.addEventListener('click', decrementSpeakerIndex);
        });

    Array.from(document.getElementsByClassName('speaker-carousel-next'))
        .forEach(next => {
            next.removeEventListener('click', incrementSpeakerIndex);
            next.addEventListener('click', incrementSpeakerIndex);
        });

    Array.from(document.getElementsByClassName('category-btn'))
        .forEach((button) => {
            button.removeEventListener('click', handleCategoryClick);
            button.addEventListener('click', handleCategoryClick);
        });
}

function handleCategoryClick(event) {
    const index = parseInt(event.target.getAttribute('data-index')); 
    appState.selectedSpeakerCategoryIndex = index; 

    initSpeakerCarousel(); 
}


function initSpeakerCarousel() {
    let speaker = speakerCarouselData[appState.selectedSpeakerIndex];
    let selectedSpeakerCategory = speakerCarouselData[appState.selectedSpeakerIndex].categories[appState.selectedSpeakerCategoryIndex];

    let speakersCarouselItems = `<div class="duration-200 ease-linear" data-carousel-item>
        <div class="flex flex-wrap justify-between bg-[#E2E6EE] h-[80%] md:h-[68%] p-5 md:p-[50px] gap-4 md:gap-0">
            <img src="${speaker.imgSrc}" class="h-[25%] w-full md:w-[33%] md:h-full" alt="speaker-1">
            <div class="flex flex-wrap md:content-start md:w-[63%] justify-center gap-3 md:gap-0">
                <!--Main info-->
                <div id="main-card" class="flex flex-wrap content-center bg-white py-3 px-3 md:w-[100%] md:h-[48%] md:px-[29px] md:mb-[55px] border-[1.5px] border-black rounded-2xl shadow-lg border-b-6 border-r-6 border-l-6">
                    <span id="card-title" class="text-[14px] md:text-[28px] font-extrabold">${selectedSpeakerCategory.type}</span>
                    <p id="card-description" class="text-[10px] md:text-[18px]">${selectedSpeakerCategory.description}</p>
                </div>
                <!--Choosing direction-->
                <div data-category="${selectedSpeakerCategory.category}" class=" flex flex-wrap justify-center  md:w-[100%] md:h-[20%] gap-1 md:gap-3 md:mb-[8%]">
                    ${speaker.categories.map((category, index) => (
                        `<button data-index="${index}" class="category-btn active ${index === appState.selectedSpeakerCategoryIndex ? 'bg-black text-white' : 'border'} border rounded-[28px] text-[10px] md:text-lg font-medium px-1.5 py-1 md:px-4 md:py-1.5 cursor-pointer category-btn">${category.type}</button>`
                    )).join('')}
                </div>
                <!-- Slider controls -->
                <div class="flex flex-wrap content-end">
                    <button type="button" class="flex items-center justify-center cursor-pointer group focus:outline-none speaker-carousel-previous" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10">
                            <img src="images/arrowToLeft.png" alt="arrowToLeft">
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <span class="content-center cursor-default text-sm md:font-normal">${appState.selectedSpeakerIndex + 1} / ${speakerCarouselData.length}</span>
                    <button type="button" class="flex items-center justify-center cursor-pointer group focus:outline-none speaker-carousel-next" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10">
                            <img src="images/arrowToRight.png" alt="arrowToRight">
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    carousel = document.getElementById('speakers_carousel');

    carousel.classList.remove("opacity-100");
    carousel.classList.add("opacity-0");

    setTimeout(() => {
        carousel.innerHTML = speakersCarouselItems;

        bindSpeakerCarouselEvents();

        carousel.classList.add("opacity-100");
        carousel.classList.remove("opacity-0");

        setTimeout(() => {
            carousel.classList.remove("fade-in");
        }, 200);
    }, 200);
};

initSpeakerCarousel();






























const itemLessonState = {
    selectedStepIndex: 0
}

const learningStepsData = [
    {
        imgSrc: 'images/videoPreview.png',
    },
    {
        imgSrc: 'images/videoPreview1.png',
    },
    {
        imgSrc: 'images/videoPreview2.png',
    },
    {
        imgSrc: 'images/videoPreview3.png',
    },
]

function decrementStepIndex() {
    if (itemLessonState.selectedStepIndex - 1 < 0) {
        itemLessonState.selectedStepIndex = learningStepsData.length - 1;
    } else {
        itemLessonState.selectedStepIndex -= 1;
    }
    
    initStepsCarousel();
}

function incrementStepIndex() {
    if (itemLessonState.selectedStepIndex + 1 === learningStepsData.length) {
        itemLessonState.selectedStepIndex = 0;
    } else {
        itemLessonState.selectedStepIndex += 1;
    }

    initStepsCarousel();
}

function bindStepsCarouselEvents() {
    Array.from(document.getElementsByClassName('learning-steps-previous'))
        .forEach(previous => {
            previous.removeEventListener('click', decrementStepIndex);
            previous.addEventListener('click', decrementStepIndex);
        });

    Array.from(document.getElementsByClassName('learning-steps-next'))
        .forEach(next => {
            next.removeEventListener('click', incrementStepIndex);
            next.addEventListener('click', incrementStepIndex);
        });
}

function initStepsCarousel() {
    let learningStep = learningStepsData[itemLessonState.selectedStepIndex];

    let learningStepItems = `<img src="images/mainPhotoPage2.png" alt="mainBackground2" class="w-full h-screen absolute  bg-cover opacity-[1] rounded-b-[72px] z-[-1]">
        <!--First part of 4th page-->
        <div class="flex flex-wrap md:gap-6 content-start gap-3 md:content-evenly items-center w-[85%] h-[40%] md:w-[43%] md:h-[80%] md:bg-[#1A1A1A] md:py-8 md:px-5 rounded-[25px] md:border border-white">
          <img src="${learningStep.imgSrc}" class="w-full h-[70%] md:h-[80%] border rounded-2xl" alt="videoPreview">
          <button class="flex flex-wrap bg-white text-black items-center justify-center rounded-[25px] w-full h-[10%] md:h-[15%] hover:bg-[#B4b4b4] duration-100 active:bg-white">
              <img src="images/playCircle.png" class="w-[6%] h-auto md:w-[5%] md:h-5" alt="playCircle">
              <p class="text-[12px] md:text-xl font-medium px-[9px]">Watch video</p>
          </button>
        </div>
        <!--Second part of 4th page-->
        <div class="flex flex-wrap justify-center md:justify-start bg-white text-black w-[85%] h-[60%] md:w-[43%] md:h-[80%] py-4 px-4 md:py-8 md:px-5 rounded-[25px] border border-white">
          <p class="text-[16px] md:text-[32px] font-extrabold">Get to know the platform</p>
          <p class="text-[12px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur. Felis amet consectetur sollicitudin at aliquam tincidunt laoreet auctor elit. Lectus ipsum sapien id turpis elit cras ac. Velit risus nisl ut dictum venenatis mauris faucibus. Aliquam vehicula gravida fermentum in sodales fringilla mi at. Turpis volutpat parturient elit blandit proin magna pretium vestibulum elit. A massa adipiscing pellentesque tempor ac vel.</p>
          <!-- Slider controls -->
          <div class="flex flex-wrap content-center md:content-end">
            <button type="button" class="flex items-center justify-center cursor-pointer group focus:outline-none learning-steps-previous" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10">
                  <img src="images/arrowToLeft.png" alt="arrowToLeft">
                  <span class="sr-only">Previous</span>
              </span>
            </button>
            <span class="ontent-center cursor-default text-sm md:font-normal">${itemLessonState.selectedStepIndex + 1} / ${learningStepsData.length}</span>
            <button type="button" class="flex items-center justify-center cursor-pointer group focus:outline-none learning-steps-next" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10">
                  <img src="images/arrowToRight.png" alt="arrowToRight">
                  <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>`;

    let carousel = document.getElementById('steps_carousel');

    carousel.classList.remove("opacity-100");
    carousel.classList.add("opacity-0");

    setTimeout(() => {
        carousel.innerHTML = learningStepItems;

        bindStepsCarouselEvents(); 

        carousel.classList.add("opacity-100");
        carousel.classList.remove("opacity-0");

        setTimeout(() => {
            carousel.classList.remove("fade-in");
        }, 200);
    }, 200);
};

initStepsCarousel();






























 // Testimonials data
 const testimonials = [
    {
        text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
        name: "Yusuf Amin",
        position: "Founder"
    },
    {
        text: "Exceptional service and attention to detail. The team went above and beyond our expectations, delivering outstanding results on time and within budget.",
        name: "Fouad Osman",
        position: "Officer"
    },
    {
        text: "Working with this team has transformed our business. Their innovative solutions and dedicated support have been invaluable to our growth.",
        name: "Fairouz Mhmd",
        position: "Manager"
    },
    {
        text: "The level of professionalism and expertise demonstrated by the team is remarkable. They truly understand our needs and deliver excellence.",
        name: "Sarah Chen",
        position: "Director"
    },
    {
        text: "A game-changing partnership that has helped us scale efficiently. Their strategic insights have been crucial to our success.",
        name: "Michael Ross",
        position: "CEO"
    },
    {
        text: "Incredible attention to detail and customer service. They're not just service providers, they're trusted partners in our journey.",
        name: "Elena Silva",
        position: "Operations Head"
    }
];

const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
let itemsPerView = window.innerWidth >= 1280 ? 3 : 1;

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = `flex-none w-full md:w-[calc(33.333%-1rem)] bg-black md:px-5 md:py-8 py-3 px-3 text-white`;
    card.innerHTML = `
        <div class="h-full flex flex-nowrap flex-row">
            <span class="invisible absolute md:relative md:visible text-[100px] w-[22%] font-serif mb-4 text-start">“</span>
            <div class="flex flex-wrap pl-3 border border-white md:border-black px-2 py-4 rounded-[20px]">
                <p class="flex-grow w-[75%] text-[16px] md:text-lg mb-8">${testimonial.text}</p>
                <div class="">
                    <h3 class="text-[20px] md:font-bold md:text-xl">${testimonial.name}</h3>
                    <p class="text-[20px] font-extralight text-gray-300 italic">${testimonial.position}</p>
                </div>
            </div>
        </div>
    `;
    return card;
}

function initCarousel() {
    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    testimonials.forEach(testimonial => {
        track.appendChild(createTestimonialCard(testimonial));
    });

    const numDots = Math.ceil(testimonials.length / itemsPerView);
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-white w-4' : 'bg-gray-400'}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    updateCarousel();
}

function updateCarousel() {
    const slideWidth = track.children[0].offsetWidth + 16; // Width + gap
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    Array.from(dotsContainer.children).forEach((dot, index) => {
        if (index === Math.floor(currentIndex / itemsPerView)) {
            dot.classList.add('bg-gray-400', 'w-4');
            dot.classList.remove('bg-white');
        } else {
            dot.classList.remove('bg-gray-400', 'w-4');
            dot.classList.add('bg-white');
        }
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= testimonials.length - itemsPerView;
}

function goToSlide(index) {
    currentIndex = index * itemsPerView;
    updateCarousel();
}

function next() {
    if (currentIndex < testimonials.length - itemsPerView) {
        currentIndex++;
        updateCarousel();
    }
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

window.addEventListener('resize', () => {
    const newItemsPerView = window.innerWidth >= 1280 ? 3 : 1;
    if (newItemsPerView !== itemsPerView) {
        itemsPerView = newItemsPerView;
        currentIndex = 0;
        initCarousel();
    }
});

initCarousel();