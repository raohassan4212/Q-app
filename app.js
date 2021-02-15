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
            "Hyper Text Preproceor",
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


start_btn.onclick = ()=> {
    info_box.classList.add('activeInfo');
}

exit_btn.onclick = ()=> {
    info_box.classList.remove('activeInfo');
}

continue_btn.onclick = ()=> {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    showQuestions(0);
}

let que_count = 0;

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '</span>';
    // let option_tag = '<div class = "option">' + questions[index].options[0] + '<span></span></dic>'
    //                  + '<div class = "option">'+ questions[index].options[1] + '<span></span></dic>'
    //                  + '<div class = "option">'+ questions[index].options[2] + '<span></span></dic>'
    //                  + '<div class = "option">'+ questions[index].options[3] + '<span></span></dic>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}