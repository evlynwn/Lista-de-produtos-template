const pesquisa = document.getElementById("pesquisa");

const cards = document.querySelectorAll(".card");

pesquisa.addEventListener("input", () => {

    const valor = pesquisa.value.toLowerCase();
    cards.forEach(card => {

        const nome = card.dataset.nome.toLowerCase();
        if(nome.includes(valor)){
            card.style.display = "flex";
        }
        else{
            card.style.display = "none";
        }
    });
});