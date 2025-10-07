const visor = document.getElementById('visor');
const buttons = document.querySelectorAll('button');

/**
 * Adiciona o valor ao visor da calculadora.
 * @param {string} value O número ou operador.
 */
function appendToDisplay(value) {
    if (visor.value === 'Erro' || visor.value === '0') {
        visor.value = '';
    }
    visor.value += value;
}

/**
 * Limpa o visor.
 */
function clearDisplay() {
    visor.value = '';
}

/**
 * Apaga o último caractere.
 */
function backspace() {
    visor.value = visor.value.slice(0, -1);
}

/**
 * Calcula a expressão no visor.
 */
function calculate() {
    try {
        // Substitui "×" por "*" e "÷" por "/" para que o eval() funcione
        let expression = visor.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        // **Atenção:** O uso de eval() é desaconselhado em produção por questões de segurança, 
        // mas é o método mais simples para este exercício.
        visor.value = eval(expression);

    } catch (error) {
        visor.value = 'Erro';
    }
}


// --- Lógica de Cliques nos Botões da Tela ---

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const key = button.getAttribute('data-key');

        if (key === 'c') {
            clearDisplay();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Enter') {
            calculate();
        } else if (key) {
            // Mapeia o texto do botão para a função
            appendToDisplay(value);
        }
    });
});


// --- Lógica do Teclado Físico (O SEGREDO) ---

window.addEventListener('keydown', (event) => {
    // Evita o comportamento padrão de algumas teclas (como o Enter em forms)
    if (event.key === 'Enter') {
        event.preventDefault();
    }
    
    // Procura o botão correspondente ao `data-key` no HTML
    const button = document.querySelector(`button[data-key="${event.key}"]`);

    if (button) {
        // 1. Simula o clique no JavaScript para usar a mesma lógica
        button.click();

        // 2. Adiciona o estilo visual de "pressionado"
        button.classList.add('active-key');
    }
});

// Remove o estilo visual quando a tecla é liberada
window.addEventListener('keyup', (event) => {
    const button = document.querySelector(`button[data-key="${event.key}"]`);
    if (button) {
        button.classList.remove('active-key');
    }
});