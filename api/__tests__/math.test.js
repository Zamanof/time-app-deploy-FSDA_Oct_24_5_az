function division(a, b){
    return a/b;
}

test("10/2 equqals 5", ()=>{
    expect(division(10, 2)).toBe(5);
})

test("21/3 equqals 7", ()=>{
    expect(division(21, 3)).toBe(7);
})