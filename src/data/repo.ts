import { type Pet } from '../model/pet';

export const repo = () => {
  const data: Pet[] = [
    {
      id: crypto.randomUUID(),
      name: 'Gorda',
      breed: 'mestizo',
      isAdopted: true,
      owner: 'Ivana',
    },

    {
      id: crypto.randomUUID(),
      name: 'Mordelon',
      breed: 'doberman',
      isAdopted: true,
      owner: 'Ivana',
    },
    {
      id: crypto.randomUUID(),
      name: 'Emma',
      breed: 'mestizo',
      isAdopted: true,
      owner: 'Angela',
    },
  ];
  return data;
};
