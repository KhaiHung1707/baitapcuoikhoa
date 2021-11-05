let computerScore = 0;
let yourScore = 0;
let nameUser = prompt("Tên nhân vật")
document.getElementById('user-label').innerHTML = nameUser ;
function srpGame(yourChoice) {
    let choise = yourChoice.id;


    //máy chọn 
    let random = Math.floor(Math.random() * 3);
    //random từ 0-3
    changeRantochoice(random);

    function changeRantochoice(number) {
        let option = ['kéo', 'búa', 'bao']
        return computerchoise = option[number]
    }
    let result = {
        'kéo': { 'kéo': 0.5, 'búa': 0, 'bao': 1 },
        'búa': { 'kéo': 1, 'búa': 0.5, 'bao': 0 },
        'bao': { 'kéo': 0, 'búa': 1, 'bao': 0.5 },

    }
    let score = result[choise][computerchoise];
    if (score == 1) {
        document.getElementById("result").innerHTML = "bạn chọn " + choise + " máy chọn " + computerchoise + " Bạn chiến thắng 😆";
        yourScore++;
        document.getElementById("user-score").innerHTML = yourScore;
        console.log("you win")
    }
    else if (score == 0.5) {
        document.getElementById("result").innerHTML = "bạn chọn " + choise + " máy chọn " + computerchoise + " Hòaaaaa ";
        console.log("hoa")
    }
    else {
        document.getElementById("result").innerHTML = "bạn chọn " + choise + " máy chọn " + computerchoise + " Bạn thua 🤪";
        computerScore++;
        document.getElementById("computer-score").innerHTML = computerScore;
        console.log(computerScore);
    }


}