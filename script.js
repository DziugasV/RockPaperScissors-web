
var buttons = document.querySelectorAll('.choiseIMG');
var playerDiv = document.querySelectorAll('.mainContainer .showChoise')[0];
var playerText = playerDiv.querySelector('.choiseText');
var pcDiv = document.querySelectorAll('.mainContainer .showChoise')[1];
var pcText = document.createElement('p');
pcText.className = 'choiseText';
pcDiv.appendChild(pcText);

var choise = ['Rock', 'Paper', 'Scissors'];

for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        var pChoise = this.getAttribute('data-choice');
        var pImg = this.querySelector('img');

        var existingIMG = playerDiv.querySelector('img');
        if(existingIMG){
            existingIMG.remove();
        }

        var newImg = document.createElement('img');
        newImg.src = pImg.src;
        newImg.style.width = '90%';
        newImg.style.height = '90%';
        newImg.style.objectFit = 'contain';
        playerDiv.insertBefore(newImg, playerText);

        playerText.textContent = pChoise;

        var pcChoise = choise[Math.floor(Math.random() * choise.length)];
        var pcButton = Array.from(buttons).find(btn => btn.getAttribute('data-choice') === pcChoise);
        var pcImg = pcButton.querySelector('img').src;
        var existingPcImg = pcDiv.querySelector('img');
        if(existingPcImg){
            existingPcImg.remove();
        }

        var newPcImg = document.createElement('img');
        newPcImg.src = pcImg;
        newPcImg.style.width = '90%';
        newPcImg.style.height = '90%';
        newPcImg.style.objectFit = 'contain';
        pcDiv.insertBefore(newPcImg, pcText);

        pcText.textContent = pcChoise;

        setTimeout(function(){
            var result = '';
            if(playerText.textContent === pcChoise){
                result = "Draw!";
            } else if(
                (playerText.textContent === 'Rock' && pcChoise === 'Scissors') ||
                (playerText.textContent === 'Paper' && pcChoise === 'Rock') ||
                (playerText.textContent === 'Scissors' && pcChoise === 'Paper')
            ){
                result = "You Win!";
            } else {
                result = "You Lost!";
            }

            alert(result);
        }, 200);
    }

}
