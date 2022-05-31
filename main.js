// в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.

let someDate = '2020-11-26';

const changeDate = (date) => date.split('-').reverse().join('.');

console.log(changeDate(someDate));

// дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения массива;
// верните список строк в формате: страна, город, отель.

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const searchByString = function(arr, str) {
    return arr.filter((item) => item.country === str || item.city === str || item.hotel === str)
        .map((item) => `${item.country}, ${item.city}, ${item.hotel}`).join('\n');

}
console.log(searchByString(data, 'Berlin'));