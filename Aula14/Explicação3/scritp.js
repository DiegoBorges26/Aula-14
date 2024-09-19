const resultado = document.querySelector("#resultado")
const formulario = document.querySelector("#formulario")
const cep = document.querySelector("#cep")
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.erro) {
                resultado.innerHTML = `
                <p>CEP inválido</p>
                `
            } else {
                resultado.innerHTML = `
                <p>Endereço: ${dados.logradouro}</p>
                <p>Complemento: ${dados.complemento}</p>
                <p>Bairro: ${dados.bairro}</p>x
                <p>Cidade: ${dados.localidade}</p>
                <p>Estado: ${dados.uf}</p>
                `
            }
        })
        .catch(error => resultado.innerHTML = ` <p>Digite direito man</p>`)
})