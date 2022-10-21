export default function orderByProps(data, orders) {
  const resultParam = [];
  const resultNotParam = [];
  for (const prop in data) {
    if (orders.includes(prop)) {
      resultParam.push({ key: prop, value: data[prop] });
    } else {
      resultNotParam.push({ key: prop, value: data[prop] });
    }
  }
  resultNotParam.sort((prev, next) => (prev.key > next.key ? 1 : -1));
  const sortParams = resultParam.concat(resultNotParam);
  return sortParams;
}
