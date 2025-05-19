fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let conttainer = document.querySelector('.conttainer');
   for(let i = 0 ; i < data.length ; i++){
conttainer.innerHTML +=`
<div class="card">
<a href="${data[i].link}">
                    <div class="logo">
                        <img src="${data[i].img}" alt="">
                    </div>
                    <div class="content"><h4>${data[i].name}</h4></div>
                    </a>
                </div>
              
`
   }
  })
  .catch(error => {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
  });
