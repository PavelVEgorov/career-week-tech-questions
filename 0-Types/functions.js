// NOTE: Различия между стрелочной и обычной функцией

/* Answers */
{
  // 1. У стрелочных нет this; он определяется лексически;
  
  // 2. Синтаксис (implicit return)
  // const print = () => console.log(this);

  // 3. Псевдомассив arguments отсутствует в стрелочных функциях
  // function bar() {
  //  console.log(arguments)
  // }
  // const barfoo = () => {
  //   console.log(arguments) // undefined
  // }

  // 4. Стрелочные функции не могут быть использованы в качестве конструкторов
  // const Animal = (name, age) => {
  //   this.name = name;
  //   this.age = age;
  // }
  // new Animal() // error

  // 5. Метод попадет в прототип / метод попадет в сам экземпляр класса
  // class Hero {
  //   print() {}
  // }
  
  // const batman = new Hero()
  // batman.print() // from Hero.prototype
  
  // class Hero {
  //   print = function() {};
  // }
  
  // const batman = new Hero()
  // batman.print() // from batman object 
}

// NOTE: Training

/* Function questions */
{
  // var n = 1;
  // function f(n) {
  //   n = 3;
  // }
  // f(n);
  // console.log(n); // ?

  
  // var obj = { a: 1 };
  // function f1(o) {
  //   o.a = 5;
  // }
  // f1(obj);
  // console.log(obj);
  

  // var obj = { a: 1 };
  // function f2(o) {
  //   o = { hello: 1 };
  // }
  // f2(obj);
  // console.log(obj);
}