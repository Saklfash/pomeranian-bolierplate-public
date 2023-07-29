import './styles.css';

function newObj(props) {
  return { ...props, nested: props.nested ? newObj(props.nested) : undefined };
}

const f2 = () => {
  console.log('f2');
};

f2();

function f1(number1, number2) {}
const f3 = () => {};

function multiplyBy(factor = 1, ...rest) {
  return rest.map((number) => number * factor).join(',');
}

function tags(...tags) {
  return tags.join(',');
}

export function ExampleComponent(obj) {
  const args = [3, 'react', 8, 'js', JSON.stringify({ foo: 'bar' })];

  return (
    <>
      <div>{multiplyBy(obj.factor, obj.x, 3, 4, 5, 6, 7, 8)}</div>
      <div>{tags(...args)}</div>
      <div>{`${f2 === f3}`}</div>
    </>
  );
}

export function Exercise() {
  const props = {
    factor: 5,
    x: 10,
    nested: { y: 7 },
  };

  const props2 = newObj(props);

  props.nested.y = 13;
  console.log(props2.nested.y);

  return (
    <>
      <ExampleComponent {...props} />
    </>
  );
}
// // funkcja anonimowa

// // funkcja strzałkowa
// const f3 = () => ({ foo: 'bar' });

// f1(function () {});
// f2(() => {});

// const multiplyBy2 = (number) => {
//   if (number === undefined) {
//     return 'brak argumentu';
//   }
//   return number * 2;
// };

// const array = [1, 2, 3];
// array.map(multiplyBy2);

// multiplyBy2(1, 2, 3, 4, 5, 6, 7);
// multiplyBy2();

// function funkcjaZewnętrzna() {
//   function funkcjaWewnętrzna() {
//     debugger;
//     console.log('To jest funkcja wewnętrzna');
//   }
//   return funkcjaWewnętrzna;
// }

// funkcjaZewnętrzna()();

// const obj = {
//   x: {
//     foo: 'bar',
//     prop: {
//       name: 'Michał',
//     },
//   },
// };

// const splaszcz = (obj) => {
//   let temp = {};
//   for (const key in obj) {
//     temp[key] = splaszcz(obj[key]);
//   }
// };