export const getRandomColor = () => {
  const red = randomInt(255);
  const green = randomInt(255);
  const blue = randomInt(255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const randomInt = (max) => {
  return Math.floor(Math.random() * max);
}