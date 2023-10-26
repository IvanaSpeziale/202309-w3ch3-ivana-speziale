import { renderList } from './list';

describe('renderList', () => {
  it('Should render a list', () => {
    const parentElement = document.createElement('div');

    const listedPets = [{ id: 'sdfsdf', name: 'Firulais', especie: 'Perro' }];

    renderList(parentElement, listedPets);

    expect(parentElement.innerHTML).toBe(
      '<ul class="pet-list"><li>Firulais - Perro</li></ul>'
    );
  });
});

describe('your test case message', (): void => {
  describe('your test case message', (): void => {});
});
