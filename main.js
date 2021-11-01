"use strict";

(() => {
    const stories = document.getElementById('stories');

    const cards = [
        {
            imageUrl: "./assets/images/card1.png",
            date: "07 FEB",
            title: "The First Jewish Translation of the Book of Books into Spanish",
            description: "As many conversos began to return to their heritage after the Inquisition, several Jewish cultural books were…"
        },
        {
            imageUrl: "./assets/images/card2.png",
            date: "07 FEB",
            title: "A Shattered Childhood: Memories of Kristallnacht",
            description: "When the Gestapo knocked on 12-year-old Lilli Tauber’s door in November of 1938, her life was…"
        },
        {
            imageUrl: "./assets/images/card3.png",
            date: "07 FEB",
            title: "The Cooking Accident that Destroyed a Jewish Greek Community",
            description: "The inferno that decimated Thessalonica left 70,000 people, including 52,000 Jews, homeless…"
        },
        {
            imageUrl: "./assets/images/card4.png",
            date: "07 FEB",
            title: "The Disappearing Headstones from the Jewish Cemetery of Ferr…",
            description: "Were the ancient headstones sold or stolen and who was responsible for their disappearance?"
        }
    ];

    cards.map(card => {
        const storyCard = document.createElement('div');

        const image = document.createElement("img");
        image.setAttribute("src", card.imageUrl);

        const date = document.createElement('span');
        date.innerHTML = card.date;

        const title = document.createElement('h5');
        title.innerHTML = card.title;

        const description = document.createElement('p');
        description.innerHTML = card.description;

        storyCard.appendChild(image);
        storyCard.appendChild(date);
        storyCard.appendChild(title);
        storyCard.appendChild(description);

        stories.appendChild(storyCard);
    });

    const button = document.createElement('button');
    button.setAttribute("class", "learn-more-button");
    button.innerText = "See More...";

    stories.appendChild(button);

    // accessibility

    const enlargeText = document.getElementById('enlargeText');
    const regularText = document.getElementById('regularText');
    const backgroundColorInput = document.getElementById('backgroundColorInput');
    const textColorInput = document.getElementById('textColorInput');
    const zoomIn = document.getElementById('zoomIn');
    const regularZoom = document.getElementById('regularZoom');

    enlargeText.addEventListener('click', () => document.body.style.fontSize = '19px')
    regularText.addEventListener('click', () => document.body.style.fontSize = '14px')
    backgroundColorInput.addEventListener('change', (event) => document.body.style.backgroundColor = event.target.value)
    textColorInput.addEventListener('change', (event) => document.body.style.color = event.target.value)
})();