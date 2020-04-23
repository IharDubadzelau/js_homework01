/*
    1.	Дана строка str со словами. Выведите на экран первое слово, второе слово, последнее слово не используя массивы,
        циклы и регулярные выражения.
 */
const   str = " Дана строка со словами. Выведите на экран первое слово, второе слово, последнее слово не используя массивы. ";

/*
    2.	Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.

        Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].
 */
const   arr1 = [1,2,3],
        arr2 = [101, 2, 1, 10],
        arr3 = [2,1];

union = (...arrays) => {
  let arrResult = [];

  arrays.forEach( (arr) => {
      if ( Array.isArray(arr) ) {
          arr.forEach((el) => {
              if (!arrResult.includes(el)) {
                  arrResult.push(el);
              }
          });
      }
  });

  return arrResult;
};
/*
    3.	Создать javascript функцию counter(), аргументом которой является массив чисел,
    а результатом действия — номера позиций, на которых находятся отрицательные элементы и нули.
 */

const   arrArg = [1,2,-1,2,0,4,5,-6,7,0,0,9,7];

    counter = (arr) => {
    let arrResult = [];

    if ( Array.isArray(arr) ) {
        arr.forEach( (el,i) => {
           if ( el<=0 ) arrResult.push(i);
        });
    }

    return arrResult;
};
/*
    4.	Реализуйте функцию unique, которая будет удалять дубли из массива.
*/
let   arr4 = [1,2,-1,2,0,4,5,-6,7,0,0,9,7];

unique = (arr) => {
    return union(arr);
};

/*
   ---------------------------  ВЫПОЛЕНИЕ ЗАДАНИЙ -----------------------------------
 */
createTeg = (teg, txt, cls) => {
    let p = document.createElement(teg);
    p.innerText = txt;
    p.classList.add(cls);
    return p;
};

const HOME_WORK = new function () {
    let $ = (id) => {return document.getElementById(id)};
    let HOME_WORK = this, cnv;

    HOME_WORK.start = (str) => {
        // 1. вывод результата - 1 задание
        cnv = $('num1');
        let workStr = str.trim();
        let firstIndex = workStr.indexOf(" ");
        let firstStr = workStr.substring(0,firstIndex).trim();
        let lastStr = workStr.substr(workStr.lastIndexOf(" ")).trim();
        workStr = workStr.substr(firstIndex).trim();

        let secondStr = workStr.substring(0,workStr.indexOf(" ")).trim();

        cnv.appendChild(createTeg('p', str, 'white'));
        cnv.appendChild(createTeg('p',"1: "+firstStr, 'red'));
        cnv.appendChild(createTeg('p',"2: "+secondStr, 'red'));
        cnv.appendChild(createTeg('p',"last: "+lastStr, 'red'));

        // 2. вывод результата - 2 задание
        cnv = $('num2');
        cnv.appendChild(createTeg('p', union(arr1,arr2,arr3), 'red'));
        // 3. вывод результата - 3 задание
        cnv = $('num3');
        cnv.appendChild(createTeg('p', "Исходный масссив: "+arrArg, 'white'));
        cnv.appendChild(createTeg('p', "результат: "+counter(arrArg), 'red'));
        // 4. вывод результата - 4 задание
        cnv = $('num4');
        cnv.appendChild(createTeg('p', "Исходный масссив: "+arr4, 'white'));
        arr4 = unique(arr4);
        cnv.appendChild(createTeg('p', "результат - уникальный массив: "+arr4, 'white'));
    }
};

window.addEventListener('load', function () {
    HOME_WORK.start(str);
});
