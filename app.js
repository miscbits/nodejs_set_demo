const { Set } = require('immutable');

class setCalculator {
    intersection(a, b) {
        var intersectionSet = new Set().asMutable();
        a.forEach(item => {
            if(b.has(item)) {
                intersectionSet.add(item);
            }
        });

        return intersectionSet;
        // for(item : a) {
        //     item
        // }
    }

    union(a, b) {
        var unionSet = new Set().asMutable();
        a.forEach(item => unionSet.add(item));
        b.forEach(item => unionSet.add(item));

        return unionSet;
    }

    complement(a, b) {
        var complementSet = new Set().asMutable();
        a.forEach(item => {
            if(! b.has(item) ) {
                complementSet.add(item);
            }
        });

        return complementSet;
    }

    symmDiff(a, b) {
        var cA = this.complement(a,b);
        var cB = this.complement(b,a);

        return this.union(cA, cB);
    }

    cartProd(a, b) {
        var crossProduct = new Set().asMutable();
        a.forEach(aItem => {
            b.forEach(bItem => {
                crossProduct.add([aItem, bItem]);
            });
        });

        return crossProduct;
    }

    powerSet(a, currentSet = Set.of(new Set()).asMutable()) {
        if(currentSet.has(a)) {
            return currentSet;
        }
        a.forEach(item => {
            var b = a.filter(i => i !== item);
            this.powerSet(b, currentSet).forEach(innSet => {
                currentSet.add(innSet);
            });
        });
        currentSet.add(a);
        return currentSet;
    }
}

set1 = Set.of(1, 2, 3, 4);
set2 = Set.of(2, 3, 4, 5);

calc = new setCalculator();

set3 = Set.of("hello", "recurse", "parabola", "dog", "Nova", "Zip", "Code", "Rocks", "pyhapple", "iphone");

console.log(calc.powerSet(set3).toString());

// a { 1, 2 }  b {1 , 2 , 3}
// { 1 }
// { 2 }
// { 1, 3 }
// a { 1, 2, 3} b { 1, 2 , 3}
// a is a subset of b
// b is a subset of a

// {}

// Intersection
// Union
// Set Difference (Complements)
// Symmetric Difference
// Cartesian Product
// Power Set

// a {1, 2}
// b {red, blue}

// {[1, red], [1, blue], [2, red], [2, blue] }


// {} = { {} }
// { 1 } = { {1}, {} }
// {1,2} = { {}, {1}, {2}, {1, 2} }
// 1,2,3 = {{}, {1}, {2}, {1, 2}, {1,3}, {2,3}, {1,2,3}}

// [1, 2, 3]
// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111
// [ {}, {3}, {2}, {2,3} ]

// 555 2376

// jjkadpn
