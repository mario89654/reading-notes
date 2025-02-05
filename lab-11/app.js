let historial = [];

        function calcularIMC() {
            // Captura los datos del formulario
            const peso = parseFloat(document.getElementById('peso').value);
            const altura = parseFloat(document.getElementById('altura').value);
            
            // Validar los datos (deben ser números positivos)
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                alert("Por favor, ingrese valores válidos para el peso y la altura.");
                return;
            }

            // Calcular el IMC
            const imc = peso / (altura * altura);
            const imcRedondeado = imc.toFixed(2); // Redondeo a 2 decimales

            // Mostrar el resultado del IMC
            document.getElementById('imcValue').textContent = `IMC: ${imcRedondeado}`;

            // Interpretar el IMC y cambiar el color
            let interpretacion = "";
            let color = "";
            let progreso = 0;

            if (imc < 18.5) {
                interpretacion = "Bajo peso";
                color = "#FF6347"; // Rojo
                progreso = 10;
            } else if (imc >= 18.5 && imc <= 24.9) {
                interpretacion = "Peso normal";
                color = "#4CAF50"; // Verde
                progreso = 40;
            } else if (imc >= 25.0 && imc <= 29.9) {
                interpretacion = "Sobrepeso";
                color = "#FF9800"; // Naranja
                progreso = 70;
            } else {
                interpretacion = "Obesidad";
                color = "#F44336"; // Rojo fuerte
                progreso = 100;
            }

            // Cambiar color de fondo según la categoría
            document.getElementById('resultado').style.backgroundColor = color;

            // Mostrar la interpretación
            document.getElementById('interpretacion').textContent = `Interpretación: ${interpretacion}`;

            // Actualizar la barra de progreso
            document.getElementById('progressBar').style.width = progreso + '%';
            document.getElementById('progressBar').style.backgroundColor = color;

            // Guardar en historial
            guardarEnHistorial(peso, altura, imcRedondeado, interpretacion);
        }

        function guardarEnHistorial(peso, altura, imc, interpretacion) {
            // Agregar el cálculo al historial
            if (historial.length >= 5) {
                historial.shift(); // Eliminar el primer cálculo si hay más de 5
            }

            historial.push({ peso, altura, imc, interpretacion });

            // Mostrar el historial en la tabla
            actualizarHistorial();
        }

        function actualizarHistorial() {
            const tabla = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
            tabla.innerHTML = ''; // Limpiar la tabla antes de mostrar los datos

            historial.forEach((item, index) => {
                const fila = tabla.insertRow();
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.peso}</td>
                    <td>${item.altura}</td>
                    <td>${item.imc}</td>
                    <td>${item.interpretacion}</td>
                `;
            });
        }