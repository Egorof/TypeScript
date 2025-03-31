function test(str: string) {
  let res = str.split(' ').reverse().join(' ');
  return res
}

console.log(test('hello world!'))