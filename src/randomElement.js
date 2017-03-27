export default (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  const item = arr[index]

  return { index, item }
}
