let breakingImg = document.querySelector('#breakingImg');
let breakingNews_title = document.querySelector('#breakingNews .title');
let breakingNews_desc = document.querySelector('#breakingNews .description');
let topNews = document.querySelector('.topNews');
let businessNews = document.querySelector('#businessNews .newsBox');
let financeNews = document.querySelector('#Finance .newsBox');

let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.bar');
let menu = document.querySelector('nav ul');

const toggle = () => {
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('activeMenu');
};

toggleMenu.addEventListener('click', toggle);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Fetching news data from API
const apiKey = "29f8e42efe874ee2be23f0d1edb6844b";

const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    return response.articles;
};

// Adding breaking news
const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src="${data[0].urlToImage}" alt="image">`;
    breakingNews_title.innerHTML = `<a href="${data[0].url}" target="_blank"><h2>${data[0].title}</h2></a>`;
    breakingNews_desc.innerHTML = `${data[0].description}`;
};
fetchData('general', 5).then(add_breakingNews);

const add_topNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : element.title.slice(0, 100) + "...";

        html += `<div class="news">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${element.url}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    topNews.innerHTML = html;
};
fetchData('general', 20).then(add_topNews);

const add_businessNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : element.title.slice(0, 100) + "...";

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${element.url}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    businessNews.innerHTML = html;
};
fetchData('business', 5).then(add_businessNews);

const add_financeNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : element.title.slice(0, 100) + "...";

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href="${element.url}" target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });
    financeNews.innerHTML = html;
};
fetchData('business', 5).then(add_financeNews);
