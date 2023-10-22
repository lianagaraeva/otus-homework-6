/**
 * Получить сумму всех баллов
 * @param {object} scores - объект, в котором ключ - это ник, а значение - это успеваемость.
 * @returns {number} сумма всех баллов.
 */
function getScore(scores) {
  return Object.values(scores).reduce((sum, current) => sum + current, 0)
}

const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
}
const sum = getScore(scores)
console.log(sum)
