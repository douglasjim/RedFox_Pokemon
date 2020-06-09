var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pokemon = document.querySelectorAll(".pokemon");

    if (this.value.length > 0) {
        for (var i = 0; i < pokemon.length; i++) {
            var pokemons = pokemon[i];
            var tdNome = pokemons.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                pokemons.classList.add("invisivel");
            } else {
                pokemons.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pokemon.length; i++) {
            var pokemons = pokemon[i];
            pokemons.classList.remove("invisivel");
        }
    }
});
