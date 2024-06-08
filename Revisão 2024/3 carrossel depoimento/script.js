const reviews = [
  {
    id: 1,
    name: 'Leandro Sani',
    img: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
    text: 'Recentemente, tive a oportunidade de experimentar um novo restaurante no bairro e fiquei impressionado. O ambiente é aconchegante e a equipe, extremamente atenciosa. A comida é simplesmente deliciosa, com sabores únicos e uma apresentação impecável.'
  },
  {
    id: 2,
    name: 'João Augusto',
    img: 'https://th.bing.com/th/id/OIP.ymo34jmkIQ6tpwrCDNX5VAHaFj?rs=1&pid=ImgDetMain',
    text: 'Fiquei muito satisfeito com o serviço prestado pela equipe de atendimento ao cliente. Eles foram rápidos, eficientes e resolveram meu problema com muita cortesia. É raro encontrar um suporte tão dedicado hoje em dia. Com certeza, continuarei a ser cliente fiel!'
  },
  {
    id: 3,
    name: 'Terceira Pessoa',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3lfMyEtQSPB5qw8c59VGwlpbqE3EfeA78z7kyrRzFmCWMplZBQcdSge7llG4FF5wuSs&usqp=CAU',
    text: 'Participar do workshop foi uma experiência transformadora. Os instrutores eram extremamente conhecedores e souberam transmitir as informações de maneira clara e envolvente. Sinto que aprendi muito e estou ansioso para aplicar os novos conhecimentos em meu trabalho.'
  },
  {
    id: 4,
    name: "Maria Garcia",
    img: "https://via.placeholder.com/150",
    text: "Maria is a UX/UI designer with a keen eye for user-centered design and aesthetics."
  },
  {
    id: 5,
    name: "Liam Brown",
    img: "https://via.placeholder.com/150",
    text: "Liam is a mobile app developer with experience in both Android and iOS platforms."
  },
  {
    id: 6,
    name: "Emma Wilson",
    img: "https://via.placeholder.com/150",
    text: "Emma is a cloud architect who helps organizations migrate to cloud infrastructure."
  },
  {
    id: 7,
    name: "James Taylor",
    img: "https://via.placeholder.com/150",
    text: "James is a cybersecurity expert specializing in ethical hacking and threat analysis."
  },
  {
    id: 8,
    name: "Olivia Martinez",
    img: "https://via.placeholder.com/150",
    text: "Olivia is a data scientist with a background in machine learning and big data analytics."
  }
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const info = document.querySelector("#info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let cont = 0;

function showPerson(){
  const rev = reviews[cont];
  img.src = rev.img;
  author.textContent = rev.name;
  info.textContent = rev.text;
};

window.addEventListener("DOMContentLoaded",()=>{
  showPerson();
});
 
//O -1 é necessário para ajustar o índice máximo permitido, pois length começa do 1 e um array do 0;
nextBtn.addEventListener("click",()=>{
  cont++;
  if(cont > reviews.length -1){
    cont = 0;
  };
  showPerson();
});

prevBtn.addEventListener("click",()=>{
  cont--;
  if(cont < 0){
    cont = reviews.length -1
  };
  showPerson();
});


randomBtn.addEventListener("click",()=>{
  cont = Math.floor(Math.random() * reviews.length);
  showPerson();
});
