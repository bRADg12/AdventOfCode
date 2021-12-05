import * as utils from '../utils/utils_fns';

test('Binary String to Number:', () => {
  expect(utils.binaryStringToInt('0')).toBe(0);
  expect(utils.binaryStringToInt('1')).toBe(1);
  expect(utils.binaryStringToInt('111011100110')).toBe(3814);
});

test('Match First X:', () => {
  expect(utils.matchFirstX('hello', 'h', 0)).toBe(true);
  expect(utils.matchFirstX('hello', 'h', 1)).toBe(false);
  expect(utils.matchFirstX('hello', 'hello', 5)).toBe(true);
  expect(utils.matchFirstX('hello', 'hell', 3)).toBe(true);
  expect(utils.matchFirstX('hello', 'wello', 3)).toBe(false);

  expect(utils.matchFirstX('111001010001', '1110010', 6)).toBe(true);
  expect(utils.matchFirstX('111001000000', '1110010', 6)).toBe(true);

});