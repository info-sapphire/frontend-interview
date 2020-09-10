module.exports = [
  {
    title: "Типы данных - сколько типов данных в javascript?",
    content: `
    Cогласно MDN (developer mozilla)<br>
    <strong>9 типов</strong>: number, bigint, string, boolean, null, undefined, object, function, symbol<br>
    <strong>6 примитивных типов</strong>: number, bigint, string, boolean, null, undefined<br>
    <ul>
        <li><strong>number</strong> для любых чисел целочисленных или чисел с плавающей точкой.</li>
        <li><strong>bigint</strong> для целых чисел произвольной длины.</li>
        <li><strong>string</strong> для строк.</li>
        <li><strong>boolean</strong> для true/false.</li>
        <li><strong>null</strong> для неизвестных значений – отдельный тип, имеющий одно значение null.</li>
        <li><strong>undefined</strong> для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.</li>
        <li><strong>object</strong> для более сложных структур данных.</li>
        <li><strong>symbol</strong> для уникальных идентификаторов.</li>
    </ul>

    <u>Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.</u>
    <ul>
        <li>Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.</li>
    </ul>
    `,
  },
  {
    title: "Тип Object",
    content: `
    По спецификации, в качестве ключей для свойств объекта могут использоваться только строки или символы.<br>
    Ни числа, ни логические значения не подходят, разрешены только эти два типа данных.
    `,
  },
  {
    title: "Тип Symbol",
    content: `
    <b>Symbol</b> – примитивный тип данных, использующийся для создания уникальных идентификаторов:<br>
    <b>1.</b> Символы создаются вызовом функции <b>Symbol()</b>, в которую можно передать описание (имя) символа.<br>
    <b>2.</b> Даже если символы имеют одно и то же имя, это – разные символы.<br>
    <b>3.</b> Если мы хотим, чтобы одноимённые символы были равны, то следует использовать глобальный реестр: вызов <b>Symbol.for(key)</b> возвращает (или создаёт) глобальный символ с key в качестве имени.<br>
    <b>4.</b> Многократные вызовы команды <b>Symbol.for</b> с одним и тем же аргументом возвращают один и тот же символ.<br>
    <b>5.</b> Символы имеют два основных варианта использования:<br>
    &nbsp;&nbsp;<b>5.1.</b> «Скрытые» свойства объектов<br>
    &nbsp;&nbsp;<b>5.2.</b> <br>
    <b>6.</b> Символы игнорируются циклом <b>for ... in</b>, но технически символы скрыты не на 100%.<br>
    <b>7.</b> Существует встроенный метод <b>Object.getOwnPropertySymbols(obj)</b> – с его помощью можно получить все свойства объекта с ключами-символами.<br>
    <b>8.</b> Также существует метод <b>Reflect.ownKeys(obj)</b>, который возвращает все ключи объекта, включая символьные.
    <h2>Зачем нужен Symbol?</h2>
    <p>Представим, у вас есть некий объект в приложении, который используется много где, да и с ним работаете не только вы, он передаётся по разным функциям, над ним издеваются с помощью разных методов, и вдруг вам понадобилось запихнуть в этот объект свои данные, например логи.</p>
    <p>Что вы будете делать — создадите новое поле объекта и присвоите ему свои логи. Но тут есть нюанс, если объект используется в большом количестве логики и другие разработчики как-то взаимодействуют с параметрами объекта, то есть шанс, что ваше новое поле где-то сможет сломать цикл, а где-то перезапишет собой другие поля.</p>
    `,
  },
  {
    title: "Тип Number и Bigint",
    content: `
        <strong>Bigint</strong> является встроенным объектом, который предоставляет способ представления целых чисел, которые больше 2<sup>53</sup>
        <strong>Number</strong>:<br>
        <ul>
            <li>Cпециальные числовые значения <strong>Infinity</strong> (бесконечность) и <strong>NaN</strong> (ошибка вычислений)</li>
            <li>Бесконечность <strong>Infinity</strong> получается при делении на ноль</li>
            <li>Некорректная математическая операция вернет <strong>NaN</strong> (string * number)</li>
        </ul>
    `,
  },
  {
    title: "JavaScript - однопоточный?",
    content: `да, но при этом в нем присутствует механизм асинхронности благодаря event loop`,
  },
  {
    title: "EventLoop",
    content: ``,
  },
  {
    title: "Main Thread",
    content: `Это основной поток, где браузер выполняет JS, делает перерисовки, обрабатывает пользовательские действия и многое другое.`,
  },
];
