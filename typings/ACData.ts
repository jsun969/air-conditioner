export type ACData = {
  power: boolean;
  temperature: number;
  mode: 'cool' | 'heat';
};

export const initialACData: ACData = {
  power: false,
  temperature: 26,
  mode: 'cool',
};
