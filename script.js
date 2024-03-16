const textoDeEntrada = document.querySelector('.textoDeEntrada');
const textoDeSaida = document.querySelector('.textoDeSaida');
let matrizCriptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufa"]];

function botaoParaEncriptar() {
    const resultadoCriptografado = criptografia(textoDeEntrada.value.toLowerCase());
    textoDeSaida.value = resultadoCriptografado;
}

function botaoParaDescriptografar() {
    const resultadoTraduzido = descriptografia(textoDeEntrada.value.toLowerCase());
    textoDeSaida.value = resultadoTraduzido;
}

function criptografia(textoParaCriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaCriptografar.includes(matrizCriptografia[i][0])) {
            textoParaCriptografar = textoParaCriptografar.replaceAll(matrizCriptografia[i][0], matrizCriptografia[i][1])
        }
    }
    if (textoParaCriptografar !== "") {
        document.querySelector('.mensagem').style.display = 'none';
        document.querySelector('.textoDeSaida').style.display = 'block';
        document.querySelector('.botaoCopiar').style.display = 'block';
    }
    return textoParaCriptografar;
}

function descriptografia(textoParaDescriptografar) {
    for(let i = 0; i < matrizCriptografia.length; i++) {
        if(textoParaDescriptografar.includes(matrizCriptografia[i][1])) {
            textoParaDescriptografar = textoParaDescriptografar.replaceAll(matrizCriptografia[i][1], matrizCriptografia[i][0])
        }
    }
    if (textoParaDescriptografar !== "") {
        document.querySelector('.mensagem').style.display = 'none';
        document.querySelector('.textoDeSaida').style.display = 'block';
        document.querySelector('.botaoCopiar').style.display = 'block';
    }
    return textoParaDescriptografar;
}

function copiar() {
    let textoCopiado = document.querySelector('.textoDeSaida');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
}