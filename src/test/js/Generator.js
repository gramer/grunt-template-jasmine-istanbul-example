describe('getRandomNumber', function () {
  it('should be chosen by fair dice roll', function () {
    expect(Generator.getRandomNumber()).toBe(4);
  });
});

describe('getRandomNumberByType', function () {
  it('should be chosen by fair dice roll', function () {
    expect(Generator.getRandomNumberByType('a')).toBe(2);
  });
});

describe('Generator', function () {
});
