console.log(10 + 10 + "10"); // 1

console.log(10 + "10" + 10); // 2

console.log(10 + 10 + +"10"); // 3

console.log(10 / -""); // 4

console.log(10 / +"2,5"); // 5

/*

1 - Сложение двух первых чисел даёт 20. Сложение числа и строки приводит к конкатенации;
2 - Первая операция сложения приводит к конкатенации 10 и 10, что даёт нам строку "1010".
    Аналогичный разультат получается в результате второго сложения - "101010";
3 - Знак "+" перед строкой преобразовывает содержащееся внутри строки значение в числовое, 
    в результате чего получаем результат сложения 10 + 10 + 10;
4 - Строка -"" содержит нулевое значение. Деление числа на 0 в javascript возможно, но такая операция приводит к -Infinity. 
5 - Ожидается, что после / стоит число, однако оператор + не может преобразовать строку "2,5" в число, 
    так как все дробные числа записываются строго с точкой, а не с запятой.

*/
