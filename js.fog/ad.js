const ads = [
    {
        image: "images/ads/reactor.png",
        alt: "Реклама реактора"
    },
    {
        image: "images/ads/uranium.png",
        alt: "Урановый батончик"
    },
   
];

const random = ads[Math.floor(Math.random() * ads.length)];

const ad = document.getElementById("random-ad");

ad.src = random.image;
ad.alt = random.alt;