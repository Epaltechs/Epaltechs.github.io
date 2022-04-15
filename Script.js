const speakersData = [{
  id: 1,
  name: 'Luciandro',
  title: 'Head of Web development unit in MTN',
  details: 'MTN, a leading South African company that has become muti-national telecommunications company',
  image: './images/Luciandro.jpg',
},
{
  id: 2,
  name: 'Olivier',
  title: 'Senior web developer',
  details: 'A seasoned web developer working with RSA, a leading tech company in Rwanda.',
  image: './images/Olivier.png',
},
{
  id: 3,
  name: 'Firdavs',
  title: 'A technocrat, with wealth of experience',
  details: 'A researcher, software engineer, who has won several awards in the field of information technology.',
  image: './images/Firdavs.png',
},
{
  id: 4,
  name: 'Emeh',
  title: 'An expatriate in foreign country',
  details: 'Well recognized program analyst, an African from Nigeia who is currently working in Saudi Arabia.',
  image: './images/Emeh.jpg',
},
{
  id: 5,
  name: 'Emmanuel',
  title: 'An academician, Lecturer',
  details: 'Well renowned Lecturer in the deartment of Computer software engineering, University of Science and Technology, Ikot Akpaden, Nigeria.',
  image: './images/Emmanuel.jpg',
},
{
  id: 6,
  name: 'Jauhari',
  title: 'A civil engineer cum software developer',
  details: 'Currently spearheading web design in NTech, a leading software company in the Netherlands.',
  image: './images/Jauhari.png',
},
];

function speakerfunc() {
  const container = document.querySelector('.experts');
  speakersData.map((el) => {
    const div = document.createElement('div');
    div.innerHTML = `<img class="images" src=${el.image} width="200" height="200" alt="Exhibition image" />
<div class="details">
  <h4>${el.name}</h4>
  <h5>${el.title}</h5>
  <p>
  ${el.details}
  </p>
</div>`;
    return container.appendChild(div);
  });
}
window.addEventListener('load', speakerfunc);