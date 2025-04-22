document.getElementById('formulario').addEventListener('submit', function(event) {


    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const assunto = document.getElementById('assunto').value;
    const formulario = document.getElementById('formulario');

    const mensagem = encodeURIComponent(`*Nome:* ${nome}\n*Email:* ${email}\n*Servico:* ${servico}\n*Assunto:* ${assunto}`);
    window.location.href = `https://wa.me/5587988317430/?text=${mensagem}`;
});