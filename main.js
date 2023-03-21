// task 1 greeting
let username = prompt("Say your name?")
alert(`Your name is ${username}`)

//task 2 gopni4ek
let gopnik = prompt("введите строку с запятыми и я переведу Ваше блаблабла на тру язык")
let truLanguage = gopnik.split(',')
let result = truLanguage.join(', блін,')
console.log(result)

//task 3 capitalize
let str = "cANBerRa"
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    

console.log(result) //Canberra

// task 4 String: word count
let wordCount = prompt("Давайте посчитаем сколько слов в Вашем предложении?").split(" ")
let result = wordCount.length
console.log(result)

// task 5 String: credentials

let firstName = prompt("Введіть своє ім'я:");
let middleName = prompt("Введіть своє по-батькові:");
let lastName = prompt("Введіть своє прізвище:");

firstName = firstName.trim().toLowerCase();
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

middleName = middleName.trim().toLowerCase();
middleName = middleName.charAt(0).toUpperCase() + middleName.slice(1);

lastName = lastName.trim().toLowerCase();
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);


let fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

// task 6 String: beer

let str = "Було жарко. Василь пив пиво вприкуску з креветками"
let result = str.split(" ")
result[4] = "чай"
console.log(result.join(" "))

//task 6: String: String: no tag

let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let result = str.slice(0, str.indexOf("<br />")) + str.slice(40)
console.log(result) //Не нашёл более красивого решения, чтобы не использовать slice(40) ;(

//String: big tag

let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let result = 
str.slice(0, str.indexOf("<br />")) + 
str.toUpperCase().slice(str.indexOf("<br />"), 40)  
    
+  str.slice(40)
console.log(result) 

// String: new line
let str = prompt("Введите строчку через '\\n' для обозначения новой строки:");
let multiLineStr = str.split("\\n").join("\n");
console.log(multiLineStr);

// String: youtube

const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/ // регулярний вираз для відокремлення ідентифікатора відео
const userInput = prompt("Введіть текст з посиланням на YouTube відео:");
const videoId = userInput.match(regex); 
const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; // код для вбудовування відео із інтерпольованим ідентифікатором
document.write(embedCode); 