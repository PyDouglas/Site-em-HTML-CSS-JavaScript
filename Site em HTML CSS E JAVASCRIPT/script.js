const formulario = document.getElementById("formComentario");

const lista = document.getElementById("comentariosLista");


// ===============================
// CARREGAR COMENTÁRIOS
// ===============================

let comentarios =
    JSON.parse(localStorage.getItem("comentariosRany")) || [];


// ===============================
// MOSTRAR COMENTÁRIOS
// ===============================

function mostrarComentarios() {

    lista.innerHTML = "";

    if (comentarios.length === 0) {

        lista.innerHTML = `
            <div class="comentario">

                <p class="comentario-texto">
                    Ainda não existem comentários.
                    Seja o primeiro a deixar sua opinião! 💕
                </p>

            </div>
        `;

        return;
    }


    comentarios.forEach(function(comentario) {

        const elemento = document.createElement("div");

        elemento.classList.add("comentario");


        elemento.innerHTML = `

            <div class="comentario-topo">

                <span class="comentario-nome">
                    ${comentario.nome}
                </span>

                <span class="comentario-data">
                    ${comentario.data}
                </span>

            </div>


            <div class="comentario-estrelas">
                ${"⭐".repeat(comentario.nota)}
            </div>


            <p class="comentario-texto">
                ${comentario.texto}
            </p>

        `;


        lista.appendChild(elemento);

    });

}


// ===============================
// ADICIONAR COMENTÁRIO
// ===============================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value;

    const nota =
        Number(document.getElementById("nota").value);

    const texto =
        document.getElementById("comentario").value;


    const novoComentario = {

        nome: nome,

        nota: nota,

        texto: texto,

        data: new Date().toLocaleDateString("pt-BR")

    };


    comentarios.unshift(novoComentario);


    localStorage.setItem(
        "comentariosRany",
        JSON.stringify(comentarios)
    );


    formulario.reset();


    mostrarComentarios();

});


// ===============================
// INICIAR SITE
// ===============================

mostrarComentarios();
// ===============================
// FORMULÁRIO DE PEDIDO
// ===============================

const formPedido = document.getElementById("formPedido");

formPedido.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome =
        document.getElementById("pedidoNome").value;

    const telefone =
        document.getElementById("pedidoTelefone").value;

    const tipo =
        document.getElementById("tipoBolo").value;

    const tamanho =
        document.getElementById("tamanhoBolo").value;

    const data =
        document.getElementById("dataPedido").value;

    const sabor =
        document.getElementById("saborBolo").value;

    const detalhes =
        document.getElementById("detalhesPedido").value;


    const mensagem =

` *NOVO PEDIDO DE BOLO*

 *Nome:* ${nome}

 *Telefone:* ${telefone}

 *Tipo de bolo:* ${tipo}

 *Tamanho:* ${tamanho}

 *Data desejada:* ${data}

 *Sabor/Recheio:* ${sabor}

 *Detalhes:*
${detalhes || "Nenhum detalhe informado."}

Gostaria de receber um orçamento. `;


    // COLOQUE O NÚMERO DO WHATSAPP AQUI
    // Formato: 5581999999999

    const numeroWhatsApp = "5581988888888";


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;


    window.open(url, "_blank");

});