import produtos from "./produtos.json" with { type: "json" }

const container = document.getElementById("container")

function criarEstrelas(classificacao){

    let estrelas = ""

    for(let i = 1; i <= 5; i++){

        if(i <= classificacao){
            estrelas += "★"
        }
        else{
            estrelas += "☆"
        }

    }

    return estrelas
}

function mostrarProdutos(lista){

    container.innerHTML = ""

    lista.forEach(produto => {

        const card = document.createElement("div")

        card.classList.add("card")

        if(produto.categoria === "Informática"){
            card.classList.add("informatica")
        }
        else{
            card.classList.add("eletronicos")
        }

        card.innerHTML = `

        <p class="estrelas">
        ${criarEstrelas(produto.classificacao)}
        </p>
        
            <img src="./img/${produto.imagem}">

            <h2>${produto.nome}</h2>

            <p class="descricao">
                ${produto.descricao}
            </p>

            <p class="preco">
                R$ ${produto.preco.toFixed(2)}
            </p>

            <p class="categoria">
                ${produto.categoria}
            </p>

            <p class="estrelas">
                ${criarEstrelas(produto.classificacao)}
            </p>

            <button>
                Comprar
            </button>
        
        `

        container.appendChild(card)

    })

}

mostrarProdutos(produtos)

const pesquisa = document.getElementById("pesquisa")

pesquisa.addEventListener("input", () => {

    const valor = pesquisa.value.toLowerCase()

    const produtosFiltrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(valor)
    )

    mostrarProdutos(produtosFiltrados)

})