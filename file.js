var menu=[{}];
var req=new XMLHttpRequest();
req.open('GET','file.json');
req.onload=function(){
    var data = JSON.parse(req.responseText);
    render(data);
};
req.send();
function render(menu){

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("load", function () {
  diplayMenuItems(menu);
  console.log(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `    <!-- single item -->
    <article class="menu-item">
      <img src="${item.img}" alt="menu item" class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
        <div class="price">
          <h4>$${item.price}</h4>
          <button>SELECT OPTION</button>
          </div
      </div>
    </article>
    <!-- end of single item -->`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["total"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "total") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
}
const ham = document.querySelector(".ham");
const dropdown = document.querySelector(".dropdown");
var list=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
if(dropdown.style.display === "block"){
    dropdown.style.display="none";
}
ham.addEventListener("click",() => {
   if(dropdown.style.display === "block"){
       dropdown.style.display="none";
   }
   else
    dropdown.style.display="block";
});
