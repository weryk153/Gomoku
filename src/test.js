function winner(arr) {
  let winner = '';
  arr.map(item => {
    for (let i = 0; i < item.length - 1; i += 1) {
      if (item[i] === 'O') winner += 'O';
      if (item[i] === 'X') winner += 'X';
    }
  })
  if (winner === 'OOO') return 'O'
  if (winner === 'XXX') return 'X'
  return 'draw'
}

winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'X', 'O']
  ])