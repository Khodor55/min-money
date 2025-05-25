fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let conttainer = document.querySelector('.conttainer');
    for (let i = 0; i < data.length; i++) {
      conttainer.innerHTML += `
        <div class="card">
         
            <div class="logo">
              <img src="${data[i].img}" alt="">
            </div>
            <div class="content"><h4>${data[i].name}</h4></div>
     
        </div>
      `;
    }
  })
  .catch(error => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
  });

let pubg_card = `
  <div class="app_card">
    <div class="card">
      <span class="close_card"><i class="fa-solid fa-circle-xmark"></i></span>
      <div class="img">
        <img src="https://logos-world.net/wp-content/uploads/2023/02/PUBG-Corporation-Logo.png" alt="">
      </div>
      <div class="content">
        <h1>pubg mobile</h1>
        <div class="options">
          <button>300UC</button>
          <button>600UC</button> 
          <button>1200UC</button> 
        </div>
        <input type="name" placeholder="enter your ID">
        <button class="card_button">buy: 0$</button>
      </div>
    </div>
  </div>
`;

let tempDiv = document.createElement('div');
tempDiv.innerHTML = pubg_card;
document.body.appendChild(tempDiv);

// بعد الإضافة، نقدر نختار العناصر
let close_card = document.querySelector('.close_card');
let app_card = document.querySelector('.app_card');

close_card.addEventListener("click", function () {
  app_card.style.display = 'none';
});
