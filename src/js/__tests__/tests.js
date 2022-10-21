import orderByProps from '../App';

test('test sort', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const resultSort = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const order = ['name', 'level'];
  expect(orderByProps(obj, order)).toEqual(resultSort);
});
