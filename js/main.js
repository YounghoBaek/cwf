let sections = document.querySelectorAll("section");

let posArr=[];

for(let el of sections) posArr.push(el.offsetTop);

const block = document.querySelectorAll(".block");

let eventOnce = true;

window.addEventListener("scroll",()=>{
    if(eventOnce && window.scrollY >= posArr[1]){
        eventOnce = false;
        block.forEach((el,index)=>{
            let numElement = el.querySelector(".num");
            let num = parseInt(numElement.innerText);
            console.log(num);
            //스크롤에 연동했기 때문에 스크롤 한단위(deltaY)당 계속적인 
            //호출이 일어나는 문제점확인
            let count = 0;
            let time = 2000 / num;
/* 트랜지션이 2초이기 때문에 2초동안 num의 숫자를 카운트 해야합니다
따라서 2000을 80으로 나누면 1퍼센트당 약 0.025초가 걸리는것 */
            const circle = el.querySelector(".circle");
            let interval = setInterval(()=>{
                if(count == num){
                    clearInterval(interval);
                }else{
                    count += 1; // count++
                    numElement.innerText = count;
                }
            },time);

            circle.style.strokeDashoffset = 503 - (503 * (num/100));
            let dots = el.querySelector(".dots");
            dots.style.transform = `rotate(${360 * (num / 100)}deg)`;



        })
    }
})
