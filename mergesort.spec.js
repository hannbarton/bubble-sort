describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect( split([4,1]) ).toEqual( [[4],[1]] );
    })
});
describe('a Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        expect( merge([3],[4]) ).toEqual( [3,4] )
    })
});

describe('Split Merge function', function() {
    it('Merge an array in order from smallest to greatest', function() {
        var wholeArray = [4, 3, 2, 1]
        spyOn(wholeArray, 'mergeSort').and.returnValue([1, 2, 3, 4]);
    });
});
