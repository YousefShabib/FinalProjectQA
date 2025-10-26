import { shuffle } from '../src/shuffle.js';
import { expect } from 'chai';

describe('shuffle()', () => {
    it('should shuffle array indexes', () => {
        //Original array
        const original = [1, 2, 3, 4, 5];
        const shuffled = shuffle([...original]);

        //Check that the shuffled array has the same elements
        expect(shuffled).to.have.members(original);
        expect(shuffled.join()).to.not.equal(original.join());
    });
});
