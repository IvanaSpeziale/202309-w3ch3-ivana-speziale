import { repo } from '../data/repo';
import { Pet } from '../model/pet';

const listedPets = repo();

export const list = (pets: Pet) => {
  const template = `<ul>
  <li id="">
    <p>Id: ${pets.id}</p>
  </li>
  <li id="">
    <p>Nombre: ${pets.name}</p>
  </li>
  <li id="">
    <p>Dueño: ${pets.owner}</p>
  </li>
  <li id="">
    <p>Procedencia: ${pets.isAdopted ? 'Adoptado' : 'No adoptado'}</p>
  </li>
</ul>`;

  return template;
};

export const renderList = (parentElement: HTMLElement, listedPets: Pet[]) => {
  let htmlElement = `<ul class="pet-list">`;
  htmlElement += listedPets.map((pet) => list(pet));
  htmlElement += `</ul>`;
  parentElement.innerHTML += htmlElement;

  return htmlElement;
};
