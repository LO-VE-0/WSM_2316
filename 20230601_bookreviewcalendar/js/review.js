// url에 있는 book parameter 값(String) -> books의 인덱스로 변환 -> 
const bookId = new URL(window.location.href).searchParams.get('book');
console.log(`bookID: ${bookId}, type: ${typeof bookId}`);

// bookId가 null이면, index.html로 가자
if (bookId === null) {
    location.replace("index.html");
    // window.location.href = "index.html";
    // window.open("index.html", target = "_top");   // 새로운 창 열려서 이동하는 문제 해결

}


// String을 int로 변환 -> -1 -> books의 인덱스로 변환 (int)
let bookIdNumber = Number(bookId);   // string -> number
// let bookIdNumber = parseInt(bookId);   // string -> number
// let bookIdNumber = bookId * 1;   // string -> number
// let bookIdNumber = bookId + 0;   // 20 (string -> number XXXX)

console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`);


// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
// bookIdNumber: Url에서 가져온 id값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for (let book of books) {
    if (bookIdNumber === book.id) {
        bookData = book;    // id가 같으면, 그를 꺼내서 bookData에 넣자
        break;
    }
}
// console.log(bookData);


// -> title, author, publisher, bookImage 알아내자
const title = bookData.title;
// const title = bookData["title"];
const author = bookData.author;
const publisher = bookData.publisher;
const bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
// HTML 요소 -> JS 변수
const titleDiv = document.getElementsByClassName("title")[1];
const authorDiv = document.getElementsByClassName("author")[1];
const publisherDiv = document.getElementsByClassName("publisher")[1];
const bookImageDiv = document.getElementsByClassName("book-image")[0];

titleDiv.innerHTML = title;
authorDiv.innerHTML = author;
publisherDiv.innerHTML = publisher;
bookImageDiv.innerHTML = `<img src='${bookImage}'>`;