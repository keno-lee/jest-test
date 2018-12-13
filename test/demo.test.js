describe('jest demo', () => {
  test('this is a test function', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

function sum(a, b) {
  return a + b
}