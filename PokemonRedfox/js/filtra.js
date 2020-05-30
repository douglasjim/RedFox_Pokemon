*var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pokemon = document.querySelectorAll(".pokemon");

    if (this.value.length > 0) {
        for (var i = 0; i < pokemon.length; i++) {
            var pokemon = pokemon[i];
            var tdNome = pokemon.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                pokemon.classList.add("invisivel");
            } else {
                pokemon.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pokemon.length; i++) {
            var pokemon = pokemon[i];
            pokemon.classList.remove("invisivel");
        }
    }
});
