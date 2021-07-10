window.addEventListener("load", () => {

    const botao = document.getElementById("inicia");

    botao.addEventListener("click", () =>{

        const getTime = document.getElementById("inputTime").value;

        //Tempo, em segundos, que queremos.
        let sec = getTime;

        const countDiv = document.getElementById('timer');

        if(getTime == ""){
            window.alert("Insira um valor númerico!")
        } 
        else {
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