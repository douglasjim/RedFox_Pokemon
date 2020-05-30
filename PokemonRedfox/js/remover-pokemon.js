var pokemon = document.querySelectorAll(".pokemon");

var tabela = document.querySelector("#tabela-pokemon");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
