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

const lists = [
  {
    id:1,
    title: "Empresa",
    item1: "Sobre nós",
    item2: "Nossos serviços",
    item3: "Política de privacidade",
    item4:"Programa de afiliados"
    
  },
  {
    id:2,
    title: "Obter ajuda",
    item1: "Perguntas frequentes",
    item2: "Envio",
    item3: "Retornos",
    item4:"Status do pedido"
    
  },
  {
    id:3,
    title: "Ajuda",
    item1: "Condições",
    item2: "Blogs",
    item3: "Trabalhe conosco",
    item4:"Entrar em contato"
    
  },
]

for (const list of lists) {
  const item = `<div class="footer-content">
  <h4>${list.title}</h4>
  <ul>
    <li><a href="#">${list.item1}</a></li>
    <li><a href="#">${list.item2}</a></li>
    <li><a href="#"> ${list.item3}</a></li>
    <li><a href="#">${list.item4} </a></li>
  </ul>
</div>`
document.querySelector(".footer-1").innerHTML +=item
}

