// 기본적으로는 이번 달
// 현재 날짜, 시각 객체 생성
let now = new Date();
// 현재 년
let year = now.getFullYear();
// 현재 월
let month = now.getMonth() + 1;
// 현재 일
let date = now.getDate();
const datesContainerDiv = document.querySelectorAll(".dates.container")[0];

const monthDiv = document.getElementsByClassName('month')[0];
monthDiv.innerHTML = `${month}월`;


// 달력 만들자
const setCalendar = (year, month) => {

    // 해당 월의 1일이 무슨 요일
    let firstDateDay = new Date(year, month-1, 1).getDay();
    // 해당 월의 마지막 날짜가 며칠
    let lastDateDay = new Date(year, month, 0).getDate();

    // date.item{$} * lastDate
    // <div class="date item">date</div>
    for (let date=1; date <= lastDateDay; date++) {
        let dateItemDiv = document.createElement("div");  // <div></div>
        dateItemDiv.classList.add("date");                // <div class='date'></div>
        dateItemDiv.classList.add("item");                // <div class='date item'></div>
        dateItemDiv.innerHTML = date;                     // <div class='date item'>date</div>
        // HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    // 1일을 firstDateDay로 옮기자
    // .dates.container의 자식 중 첫째자식(1일) style grid-column-start: 6;
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS { grid-column-start: fristDateDay + 1; }
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

}
setCalendar(year, month);
// <: 이전 달
// >: 이후 달
const leftDiv = document.getElementsByClassName('left')[0];
const rightDiv = document.getElementsByClassName('right')[0];

function leftClick() {
    monthDiv.innerHTML = parseInt(monthDiv.innerHTML) - 1 + "월";
}
function rightClick() {
    monthDiv.innerHTML = parseInt(monthDiv.innerHTML) + 1 + "월";
}