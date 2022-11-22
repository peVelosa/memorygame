const grid4X1 = [0, 0, 1, 1]
const grid4X2 = [0, 0, 1, 1, 2, 2, 3, 3]
const grid5X2 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]
const grid4X3 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const grid4X4 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
const grid5X4 = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

const getShuffledArr = (arr: number[]) => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr
};

const createGrid = (opt: string) => {
  const grid: Array<Array<number>> = []
  switch (opt) {
    case '4X1':
      {
        const shuffledArr = getShuffledArr(grid4X1)
        grid.push(shuffledArr.slice(0, 4))
        return grid;
      }
    case '4X2':
      {
        const shuffledArr = getShuffledArr(grid4X2)
        grid.push(shuffledArr.slice(0, 4))
        grid.push(shuffledArr.slice(4, 8))
        return grid;
      }
    case '4X3':
      {
        const shuffledArr = getShuffledArr(grid4X3)
        grid.push(shuffledArr.slice(0, 4))
        grid.push(shuffledArr.slice(4, 8))
        grid.push(shuffledArr.slice(8, 12))
        return grid;
      }
    case '4X4':
      {
        const shuffledArr = getShuffledArr(grid4X4)
        grid.push(shuffledArr.slice(0, 4))
        grid.push(shuffledArr.slice(4, 8))
        grid.push(shuffledArr.slice(8, 12))
        grid.push(shuffledArr.slice(12, 16))
        return grid;
      }

    case '5X2':
      {
        const shuffledArr = getShuffledArr(grid5X2)
        grid.push(shuffledArr.slice(0, 5))
        grid.push(shuffledArr.slice(5, 10))
        return grid;
      }

    case '5X4':
      {
        const shuffledArr = getShuffledArr(grid5X4)
        grid.push(shuffledArr.slice(0, 5))
        grid.push(shuffledArr.slice(5, 10))
        grid.push(shuffledArr.slice(10, 15))
        grid.push(shuffledArr.slice(15, 20))
        return grid;
      }

    default:
      return [[0, 0], [1, 1]]
  }
}


const OPTIONS: Record<string, string> = {
  '41': '4X1',
  '42': '4X2',
  '43': '4X3',
  '44': '4X4',
  '52': '5X2',
  '54': '5X4',
}


export { createGrid, OPTIONS }