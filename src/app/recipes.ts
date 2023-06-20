export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  time?: string;
  difficulty?: string;
  rating?: number;
}

export const recipes = [
  {
    id: 1,
    name: 'One Pot Stew',
    description: 'A large phone with one of the best screens',
    image: 'https://plus.unsplash.com/premium_photo-1661767148942-32cf7f7c7f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
  },
  {
    id: 2,
    name: 'Apple Baked Biscuits',
    description: 'A great phone with one of the best cameras',
    image: 'https://images.unsplash.com/photo-1474716934413-9f9613f0edb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    name: 'Salmon Dinner',
    description: 'salmon delish',
    image: 'https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }
];
