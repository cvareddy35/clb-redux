import { addNumbers, subtractNumbers } from './math';

describe('Math Library', () => {

  test('Add Numbers', () => {
    const result = addNumbers(45, 46);
    expect(result).toEqual(91);
  })

  test('Subtract Numbers', () => {
    const result = subtractNumbers(500, 78);
    expect(result).toEqual(422);
  })

})