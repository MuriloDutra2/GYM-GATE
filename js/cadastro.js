
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona o formulário de cadastro
    // Usamos o 'id' que definimos no HTML
    const formCadastro = document.getElementById('form-cadastro');

    // 2. Adiciona um "ouvinte de evento" para o 'submit' (envio)
    formCadastro.addEventListener('submit', (evento) => {
        
        // 3. Previne o comportamento padrão do formulário
 
        evento.preventDefault();

        // Captura dos dados dos inputs

        const formData = new FormData(formCadastro);

        // Convertendo o FormData em um objeto JavaScript simples (JSON)
        // Isso é  para o Back-end (Spring Boot)
        const dadosUsuario = {};
        formData.forEach((valor, chave) => {
            dadosUsuario[chave] = valor;
        });

        // 6. Verificação no Console (Nosso teste de hoje)
        console.log("Iniciando processo de cadastro...");
        console.log("Dados capturados do formulário:");
        console.log(dadosUsuario);

        // --- PRÓXIMOS PASSOS (Fase 4: Integração) ---
        // Aqui é onde usaremos a 'fetch API' para enviar os 'dadosUsuario'
        // para o nosso Back-end Spring Boot.
        //
        // Exemplo (deixaremos comentado por enquanto):
        /*
        fetch('http://localhost:8080/api/usuarios/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosUsuario)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta do servidor:', data);
            alert('Cadastro realizado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao cadastrar:', error);
            alert('Erro ao realizar o cadastro.');
        });
        */
        
        alert('Cadastro interceptado! Verifique o console (F12).');

    });

});