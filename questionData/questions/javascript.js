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
        В JavaScript тип «<b>number</b>» не может содержать числа больше, чем 2<sup>53</sup> или меньше чем -2<sup>53</sup>.
        <strong>Bigint</strong> был добавлен в JavaScript, чтобы дать возможность работать с целыми числами произвольной длины которые как правило больше 2<sup>53</sup>
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
  {
    title: "Объясните делегирование событий",
    content: `
    Делегирование событий — это приём, заключающийся в добавлении обработчиков событий к родительскому элементу, а не к дочерним элементам. 
    Обработчик будет срабатывать всякий раз, когда событие будет запущено на дочерних элементах благодаря всплытию событий в DOM. 
    Преимущества этого приёма:
    <ul>
    <li>Экономит объем используемой памяти, т.к. для родительского элемента требуется только один обработчик.</li>
    <li>Не нужно привязывать или убирать обработчики при добавлении и удалении элементов.</li>
    </ul>
    `,
  },
  {
    title: "Объясните, как работает this в JavaScript",
    content: `
    Значение this зависит от того, как вызывается функция.<br>
    <br>
    <b>1.</b> Если ключевое слово new используется при вызове функции, this внутри функции является совершенно новым объектом.<br>
    <b>2.</b> Если для вызова/создания функции используются apply, call или bind, то this внутри функции — это объект, который передается в качестве аргумента.<br>
    <b>3.</b> Если функция вызывается как метод, например, obj.method(), то this — это объект, к которому принадлежит функция.<br>
    <b>4.</b> Если функция вызывается без контекста, то есть она вызывается без условий, описанных в пунктах выше, то this является глобальным объектом. В браузере это объект window. В строгом режиме (’use strict’), this будет undefined вместо глобального объекта.<br>
    <b>5.</b> Если применяются несколько из вышеперечисленных правил, то правило, которое выше выигрывает и устанавливает значение this.<br>
    <b>6.</b> Если функция является стрелочной функцией, то она игнорирует все вышеописанные правила и получает значение this из лексического окружения во время ее создания.<br>
    `,
  },
  {
    title: "Расскажите, как работает прототипное наследование",
    content: `
    Этот вопрос очень часто задают на собеседованиях. 
    Все объекты в JavaScript имеют свойство prototype, которое является ссылкой на другой объект. 
    Когда происходит обращение к свойству объекта, и если свойство не найдено в этом объекте, то механизм JavaScript просматривает прототип объекта, затем прототип прототипа и т.д. 
    До тех пор, пока не найдет определенное свойство на одном из прототипов или до тех пор, пока он не достигнет конца цепочки прототипов. 
    Такое поведение имитирует классическое наследование, но на самом деле это скорее делегирование, чем наследование.
    `,
  },
  {
    title: "Что такое замыкание и как/для чего его используют?",
    content: `
    Замыкания — это функции, которые имеют доступ к переменным внешней (замыкающей) функции — цепочке областей видимости даже после того, как внешняя функция вернулась.
    <h4>Для чего его используют?</h4>
    Приватность данных / эмуляция скрытых методов при помощи замыканий.
    `,
  },
  {
    title: "В чем разница между host-объектами и нативными объектами?",
    content: `
    <p>Нативные объекты — это объекты, которые являются частью языка JavaScript, определенного в спецификации ECMAScript, такие как <code>String</code>, <code>Math</code>, <code>RegExp</code>, <code>Object</code>, <code>Function</code> и т.д.<p>
    <p>Хост-объекты предоставляются средой выполнения (браузером или Node), такие как \`<code>window</code>\`, \`<code>XMLHTTPRequest</code>\` и т.д.</p>
    `,
  },
  {
    title: "В чем разница между .call и .apply?",
    content: `
    <p>Сходство заключается в том, что и .call, и .apply используются для вызова функций, а также первый параметр будет использоваться как значение this внутри функции.</p>
    <p>А разница в том, что .call в качестве следующих аргументов принимает аргументы, разделенные запятыми, в то время как .apply в качестве следующих аргументов принимает массив аргументов.</p>
    `,
  },
  {
    title: "Что делает и для чего нужна функция .bind?",
    content: `
    Cогласно MDN (developer mozilla)<br>
    <blockquote>
        Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
        В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
    </blockquote>
    <p>Это наиболее полезно для привязки значения this в методах классов, которые вы хотите передать в другие функции.</p>
    `,
  },
  {
    title: "В каких случаях используется document.write()?",
    content: `
    <b>document.write()</b> записывает строку текста в поток документа, открытого при помощи <b>document.open()</b>.<br>
    Когда <b>document.write()</b> выполняется после загрузки страницы, он вызывает <b>document.open</b>, который очищает весь документ (&lt;head&gt;и&lt;body&gt; будут удалены!) и заменяет содержимое на заданное значение параметра.<br>
    Подобный подход считается опасным и не рекомендуется его использовать.<br>
    `,
  },
  {
    title: "В чем разница между feature detection, feature inference, user-agent?",
    content: `
    <h4>Feature detection (определение возможностей браузера)</h4>
    <p>Определение возможностей браузера заключается в определении, поддерживает ли браузер определенный блок кода - и если нет, то будет выполняться другой код, так что браузер всегда сможет обеспечить работоспособность и предотвратить сбои/ошибки в некоторых браузерах.</p>
    <b>Например: if ('geolocation' in navigator)</b>
    <h4>Feature inference (предположение возможностей)</h4>
    <p>Предположение возможностей проверяет на наличие определенных возможностей, как и предыдущий подход, но использует другую функцию, которая предполагает, что определенная возможность уже существует.</p>
    <b>Например: if (document.getElementsByTagName)</b><br>
    <u>Этот подход не рекомендуется. Первый подход более надежен.</u>
    `,
  },
  {
    title: "",
    content: ``,
  },
  {
    title: "",
    content: ``,
  },
  {
    title: "",
    content: ``,
  },
  {
    title: "",
    content: ``,
  },
];
