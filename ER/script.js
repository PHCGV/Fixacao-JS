function contagem_inicial() {
        let resultado = "Resultado: ";
            for (let i = 1; i <= 10; i++) {
                resultado += i + "\n";
            }
            console.log(resultado);
            alert(resultado);
        }

        function tabuada() {
            const inputVal = document.getElementById('inputTabuada').value;
            
            if (inputVal === "") {
                document.getElementById('res_tabuada').innerText = "Por favor, digite um número.";
                return;
            }
            const n = parseInt(inputVal);
            let resultado = `Tabuada do ${n}:\n`;
            
            for (let i = 1; i <= 10; i++) {
                resultado += `${n} x ${i} = ${n * i}\n`;
            }
            
            console.log(resultado);
            alert(resultado);
        }

        function um_a_cem() {
            let soma = 0;
            let contador = 1;
            
            while (contador <= 100) {
                soma += contador;
                contador++;
            }
            
            console.log("Soma de 1 a 100:", soma);
            alert(`A soma dos números de 1 a 100 é: ${soma}`);
        }

        function numeros_pares() {
            let contador = 0;
            let resultado = "Números pares de 0 a 20:\n";
            
            while (contador <= 20) {
                if (contador % 2 === 0) {
                    resultado += contador + " ";
                }
                contador++;
            }
            
            console.log(resultado);
            alert(resultado);
        }

        function contagem_regressiva() {
            console.log("Contagem regressiva");
            let contador = 10;
            
            do {
                console.log(contador);
                contador--;
            } while (contador >= 1);
            
            alert("Contagem regressiva executada no console");
        }

        function exibir_objeto() {
            const usuario = {
                nome: "pitoco walsh",
                idade: 21
            };
            
            let resultado = "Usuário:\n";
            for (let propriedade in usuario) {
                resultado += `${propriedade}: ${usuario[propriedade]}\n`;
            }
            
            console.log(resultado);
            alert(resultado);
        }

        function media_array() {
            const notas = [9.0, 9.0, 10.0, 10.0];
            let soma = 0;
            
            for (let i = 0; i < notas.length; i++) {
                soma += notas[i];
            }
            
            const media = soma / notas.length;
            const resultado = `Notas no Array: ${notas.join(', ')}\nMédia calculada: ${media.toFixed(2)}`;
            
            console.log(resultado);
            alert(resultado);
        }

        function impares() {
            let resultado = "Números ímpares de 1 a 50:\n";
            
            for (let i = 1; i <= 50; i++) {
                if (i % 2 !== 0) {
                    resultado += i + " ";
                }
            }
            
            console.log(resultado);
            alert(resultado);
        }
        function contagemRegressivaZero() {
            let resultado = "Contagem Regressiva para encerramento:\n";
            
            for (let i = 10; i >= 0; i--) {
                resultado += i + " ";
            }
            
            console.log(resultado);
            alert(resultado);
        }