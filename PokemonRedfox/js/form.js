var botaoAdicionar = document.querySelector("#adicionar-pokemon");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pokemon = obtempokemonDoFormulario(form);

    var erros = validapokemon(pokemon);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionapokemonNaTabela(pokemon);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtempokemonDoFormulario(form) {

    var pokemon = {
        nome: form.nome.value,
        Pokedex: form.Pokedex.value,
        img: form.img.value,
        Generation: form.Generation.value,
        info: form.info.value,
        
    }

    return pokemon;
}

function montaTr(pokemon) {
    var pokemonTr = document.createElement("tr");
    pokemonTr.classList.add("pokemon");

    pokemonTr.appendChild(montaTd(pokemon.nome, "info-nome"));
    pokemonTr.appendChild(montaTd(pokemon.Pokedex, "info-Pokedex"));
    pokemonTr.appendChild(montaTd(pokemon.img, "info-img"));
    pokemonTr.appendChild(montaTd(pokemon.Generation, "info-Generation"));
    pokemonTr.appendChild(montaTd(pokemon.info, "info-Evolution"));
    

    return pokemonTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validapokemon(pokemon) {

    var erros = [];

    if (pokemon.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    return erros;
}
s
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionapokemonNaTabela(pokemon) {
    var pokemonTr = montaTr(pokemon);
    var tabela = document.querySelector("#tabela-pokemon");
    tabela.appendChild(pokemonTr);
}
