const cards = [
  {
    id: 1,
    nome: "html",
    imagem: "icon-1.png",
  },

  {
    id: 2,
    nome: "CSS",
    imagem: "icon-2.png",
  },
  {
    id: 3,
    nome: "JavaScript",
    imagem: "icon-3.png",
  },
  {
    id: 4,
    nome: "react",
    imagem: "icon-6.png",
  },
  {
    id: 5,
    nome: "bootstrap",
    imagem: "icon-4.png",
  },
  {
    id: 6,
    nome: "github",
    imagem: "icon-5.png",
  },
];


for (const card of cards) {
    const item = `<div class="post-box">
    <div class="img-box">
      <img src="image/${card.imagem}" alt="" />
    </div>
    <span>${card.nome}</span>
  </div>`
    document.querySelector(".post-container").innerHTML += item;

    
}

