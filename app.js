const menu = [
  {
    id: 3,
    title: "Oh, the Places You'll Go!",
    category: "kids",
    url: "https://www.barnesandnoble.com/w/oh-the-places-youll-go-dr-seuss/1100068206;jsessionid=7CBF510B3DC19C9379D984FFBB0B85AA.prodny_store02-atgap14?ean=9780375972959",
    img: "./images/book3.jpg",
    desc: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.” Perhaps the most versatile, inspirational and honest message in all of literature … that happens to come in a colorful, whimsical package.`,
  },
  {
    id: 4,
    title: "Where the Red Fern Grows",
    category: "kids",
    url: "https://www.barnesandnoble.com/w/where-the-red-fern-grows-wilson-rawls/1100192776;jsessionid=7CBF510B3DC19C9379D984FFBB0B85AA.prodny_store02-atgap14?ean=9780440412670",
    img: "./images/book4.jpg",
    desc: `Where the Red Fern Grows is a beloved classic that captures the powerful bond between man and man’s best friend. This edition also includes a special note to readers from Newbery Medal winner and Printz Honor winner Clare Vanderpool.`,
  },
  {
    id: 5,
    title: "Mel Fell",
    category: "kids",
    url: "https://www.barnesandnoble.com/w/mel-fell-corey-r-tabor/1136967585;jsessionid=7CBF510B3DC19C9379D984FFBB0B85AA.prodny_store02-atgap14?ean=9780062878014",
    img: "./images/book5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "LEGO Creator Expert Gingerbread",
    category: "toys",
    url: "https://www.barnesandnoble.com/w/toys-games-lego-creator-expert-gingerbread-house-10267/34852493?ean=0673419302449",
    img: "./images/book6.jpg",
    desc: `Welcome to the cozy Gingerbread House, home to a wealth of festive fun. This wonderful LEGO® Creator Expert model comes with lots of magical details, including frosted roofs with colorful candy buttons and a delicious facade with candy-cane columns, glittery windows and a tall chimney stack with a glowing fireplace. `,
  },
  {
    id: 7,
    title: "Play-Doh Make N Style Ponies",
    category: "toys",
    url: "https://www.barnesandnoble.com/w/toys-games-play-doh-make-n-style-ponies/32461609?ean=0630509342921",
    img: "./images/book7.jpg",
    desc: `Make your own Ponyville world at home! With a rainbow of 9 Play-Doh colors, you can create all kinds of My Little Pony friends including Earth ponies, Pegasus ponies, Unicorns and Princess ponies.`,
  },
  {
    id: 8,
    title: "Shaggy NeeDoh",
    category: "toys",
    url: "https://www.barnesandnoble.com/w/toys-games-shaggy-needoh/35701692?ean=0019649234226",
    img: "./images/book8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 11,
    title: "The Six Wives of Henry VIII",
    category: "teens",
    url: "https://www.barnesandnoble.com/w/six-wives-of-henry-viii-alison-weir/1100314239;jsessionid=FDD071A2CA9F91233DB55F67CDEE4153.prodny_store02-atgap07?ean=9780802136831",
    img: "./images/book1.jpg",
    desc: `The tempestuous, bloody, and splendid reign of Henry VIII of England (1509-1547) is one of the most fascinating in all history, not least for his marriage to six extraordinary women. In this accessible work of brilliant scholarship, Alison Weir draws on early biographies, letters, memoirs, account books, and diplomatic reports to bring these women to life.`,
  },
  {
    id: 12,
    title: "They Both Die at the End",
    category: "teens",
    url: "https://www.barnesandnoble.com/w/they-both-die-at-the-end-adam-silvera/1125317666;jsessionid=FDD071A2CA9F91233DB55F67CDEE4153.prodny_store02-atgap07?ean=9780062457806",
    img: "./images/book2.jpg",
    desc: `vaporware iPhAdam Silvera reminds us that there’s no life without death and no love without loss in this devastating yet uplifting story about two people whose lives change over the course of one unforgettable day.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" data-imgurl=${item.img} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>              
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
             <button class="newurl-btn">
              <a href=${item.url} target="_blank" > Read Me</a>
            </button>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML =
    displayMenu +
    `<div class="modal-overlay">
    <div class="modal-container">      
      <img class="modal-img"/>
      <button class="close-btn"><i class="fas fa-times"></i></button>
    </div>
  </div>`;

  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-btn");
  const modalImg = document.querySelector(".modal-img");

  const modalBtns = document.querySelectorAll(".menu-item img");
  modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.imgurl);
      modalImg.src = e.currentTarget.dataset.imgurl;
      modal.classList.add("open-modal");
      closeBtn.classList.remove("no-transition");
      modal.classList.remove("no-transition");
    });
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("open-modal");
      closeBtn.classList.add("no-transition");
      modal.classList.add("no-transition");
    });
  });
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id="${category}">
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
