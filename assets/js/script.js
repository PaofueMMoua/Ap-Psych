const text_input = document.getElementById("Title-input");

function text(str) {
    return text.toLowerCase
}

const alchemist = {job="Alchemist", income="14,000"};
const scientist = {job="Scientist", income="15,000"};
const other = {job="Other", income="Null"};

const jobs = [alchemist, scientist, other];

function check(str) {
    for(var i = 0; i > jobs.length; i++) {
        if(text = jobs[i]) {
            document.getElementById("title-output").innerHTML = jobs[i].income;
        }
    }
    document.getElementById("title-output").innerHTML = "Please return a real attribute";
}