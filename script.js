let num = document.getElementById('txtnum')
let tab = document.getElementById('selvetor')
let res = document.getElementById('res')
let vetor = []

function adicionar() {
    let n = Number(num.value)
    let pos = vetor.indexOf(n)
    res.innerHTML = ''
    
        
    if (n.length == 0 || n < 1 || n > 100 || pos !== -1) {
        window.alert('Insira o valor a lista ou um valor n cadastrado!')
        num.value = ''
        num.focus()
    } else {
        let item = document.createElement('option')
        vetor.push(n)
        item.text = `O valor ${n} foi adicionado.`
        tab.appendChild(item)
        num.value = ''
        num.focus()
    }
}
function finalizar() {
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)
    let soma = 0
    
    if (vetor.length == 0) {
        window.alert('[Erro] preencha espaço a baixo')
        num.focus()
    } else {
        for (let pos in vetor) {
            soma += vetor[pos]
        } 
        let media = soma / vetor.length
        
        res.innerHTML = ''
        if (vetor.length == 1) {
            res.innerHTML = '<p>a lista possui apenas um número</p>'
        } else {
            res.innerHTML = `<p>numeros cadastrados ${vetor.length}</p>`
        }res.innerHTML += `<p>maior valor cadastrado ${maior}</p>`
        res.innerHTML += `<p>menor valor cadastrado ${menor}</p>`
        res.innerHTML += `<p>soma dos valores add na lista ${soma}</p>`
        res.innerHTML += `<p>média dos valores add na lista ${media}</p>`
    }
}