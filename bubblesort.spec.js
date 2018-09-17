describe('a bubble sort by number function', function(){
    it('handles one item in an array', function(){
      expect( bubbleSortNum([1]) ).toEqual( [1] );
    });

    it('returns smallest to largest', function(){
      expect( bubbleSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
    });

    //we want to have 2 for-loops that compare smallest to largest
    //twoSwapFunc = [1,2];
    //helperfunction = return true or false;
    //swapper = does the swapping
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough();
        //expect
    });
      it('called the helperfunction called swap', function () {
        bubbleSortNum.swap();
        expect(bubbleSortNum.swap.calls.count([6,5,4])).toEqual(3);
    });

});
