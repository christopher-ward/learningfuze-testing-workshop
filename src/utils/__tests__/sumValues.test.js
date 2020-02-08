import {sumValues} from "../sumValues";

describe('sumValues', () => {
  test('should return __ when adding 1,2,3,4 and 5', () => { //can write test or it
    // act
    const sum = sumValues([1,2,3,4,5])
    // assert
    // expect(actual).toEqual()
    expect(sum).toEqual(15);
  });
})
