//.map()
//Original Array
const books =[
    {id:1, title: "The Cat In The Hat", author: "Dr. Suess"},
    {id:2, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling"},
    {id:3, title:"Green Eggs and Ham", author: "Suess"},
    {id:4, title:" Harry Potter and the Chamber of Secrets", author: "J.K. Rowling"}
];

//Pull out the Book titles
const bookTitles = books.map(book => book.title);

console.log(bookTitles);