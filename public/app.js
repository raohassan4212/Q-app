let questions = [
    {
        num: 1,
        question: "What does Html stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preproceor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },

    {
        num: 2,
        question: "What does CSS stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Hello",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },

    {
        num: 3,
        question: "What does Html stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preproceor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },

    {
        num: 4,
        question: "What does Html stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preproceor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },

    {
        num: 5,
        question: "What does Html stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preproceor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
]






const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");


start_btn.onclick = () => {
    info_box.classList.add('activeInfo');
}

exit_btn.onclick = () => {
    info_box.classList.remove('activeInfo');
}

continue_btn.onclick = () => {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }
    else {
        console.log("Question Completed");
    }
}

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].num + ". " + questions[index].question + '</span>';
    let option_tag = '<div class = "option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class = "option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class = "option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class = "option">' + questions[index].options[3] + '<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }

}


let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';



function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacmentHTML("beforeend", tickIcon)
    }
    else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");

        // if answer is worng automatically select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }


    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disable");
    }




}









function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector('.total_que');
    let totalQuesCountTag = `<span><p>` + index + `</p>of<p>` + questions.length + `</p>Question</span>`;
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

