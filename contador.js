window.addEventListener("load", () => {

    const botao = document.getElementById("inicia"); //Evento de click no botão Iniciar

    botao.addEventListener("click", () =>{

        const getTime = document.getElementById("inputTime").value;

        //Tempo, em segundos
        let sec = getTime;
        let timeNum = parseInt(getTime)

        const countDiv = document.getElementById('timer');

        if(getTime == ""){
            window.alert("Insira um valor!") //Aqui se o input estiver vazio, ele irá alertar para informar um valor
        } 
        else if(isNaN(getTime)){
            window.alert("Insira um valor Númerico!")
            //console.log(`Valor é ${timeNum} e o Tipo é:${typeof(timeNum)}`) Teste de verificação do tipo do dado
        }
        else {
            //console.log(`Valor é ${timeNum} e o Tipo é:${typeof(timeNum)}`) Teste de verificação do tipo do dado
            const secpass = () => {

                min = Math.floor( sec / 60 );
                segundosRestantes = sec % 60;

                if(segundosRestantes < 10){
                    segundosRestantes = "0" + segundosRestantes;
                }

                if(min < 10){
                    min = "0" + min;
                }

                //Vai gerar o formato de 02:59 
                countDiv.innerHTML = min + ":" + segundosRestantes;

                //Condição final
                if (sec > 0) {
                    sec = sec - 1;
                } else {
                    countDiv.innerHTML = "Acabou!";
                }

            };

            const countDown = setInterval(() => secpass(), 1000);
        }
    });
});