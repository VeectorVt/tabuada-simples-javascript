function multiplicar() {
    let fat = document.getElementById('fator')
    let pro = document.getElementById('prod')

    

    if (fat.value.length == 0) {
        window.alert('Por favor , digite um número!')
       
    } else {
        pro.innerHTML = ''
        let f = Number(fat.value)
        let c = 1
        while (c <= 10) {

            let it = document.createElement('option')
            it.text = `${f} x ${c} = ${f * c}`
            it.value = `tab${c}`


            pro.appendChild(it)
            c++
        }


    }

}
