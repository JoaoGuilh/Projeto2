

let usuario = [
    {
        nome: "Pablim",
        senha: "58974"
    },
    {
        nome: "João",
        senha: "12345"
    },
    {
        nome: "Maria",
        senha: "53256"
    },
    {
        nome: "Mário",
        senha: "84563"
    },
    {
        nome: "Alex",
        senha: "78015"
    },
    {
        nome: "Patrícia",
        senha: "59631"
    },
    {
        nome: "Sirlene",
        senha: "65103"
    },
    {
        nome: "Maicon",
        senha: "05614"
    },
    {
        nome: "Caio",
        senha: "69804"
    },
    {
        nome: "Gabriel",
        senha: "69435"
    },
    {
        nome: "Vinícius",
        senha: "68921"
    },
    {
        nome: "Fernando",
        senha: "54032"
    },
    {
        nome: "Lorran",
        senha: "84623"
    },
    {
        nome: "Victor",
        senha: "35441"
    },
    {
        nome: "Yury",
        senha: "67894"
    },
    {
        nome: "Paula",
        senha: "21305"
    }
]





let nomepag2 = localStorage.getItem('usuariologado')
if (nomepag2 != undefined) {

    const criarusuario = document.querySelector('input#adicionarusuarios1')
    criarusuario.addEventListener("click", adicionarusuarios1)

    const atualizarusuario = document.querySelector('input#atualizarusuarios1')
    atualizarusuario.addEventListener("click", atualizarusuarios1)


    const testaruser1 = document.querySelector('input#testarusuario1')
    testaruser1.addEventListener("click", testarusuario1)

    let h2nome = document.querySelector("h2#nome")
    h2nome.innerHTML += `${nomepag2}!`

    const voltar = document.querySelector("input#voltar");
    voltar.addEventListener("click", function () {

        localStorage.removeItem("usuariologado")
        window.location.href = "./index.html"

    })

    window.addEventListener('beforeunload', function () {
        localStorage.removeItem('usuariologado');
    });




    function apagar() {
        let lista = document.querySelector('div.cadastros')
        lista.innerHTML = "<h2>Usuários</h2>"

    }

    function listar() {
        apagar()
        let divcadastro = document.querySelector('div.cadastros');

        for (let a = 0; a < usuario.length; a++) {
            let cadastros = document.createElement('p')
            cadastros.innerHTML += `<br> ${usuario[a].nome}`
            divcadastro.appendChild(cadastros)
        }
    }
    function deletar() {
        let lista = document.querySelector('div.cadastros')
        apagar()

        for (let a = 0; a < usuario.length; a++) {

            lista.innerHTML += `<div><input type="checkbox" id="${a}"><label> - ${usuario[a].nome}</label></div>`

        }
        lista.innerHTML += `<input type="button" value="DELETAR" class="botao" id="deletarusuarios2">`

        const inputdeletar2 = document.querySelector("#deletarusuarios2")
        inputdeletar2.addEventListener("click", deletarusuario2)
    }
    function deletarusuario2() {
        let userdeletado = [""]
        for (let a = 0; a < usuario.length; a++) {
            let checkbox = document.getElementById(`${a}`)
            if (checkbox.checked == true) {
                userdeletado[a] = 1
            }
            else {
                userdeletado[a] = 0
            }
        }
        for (let a = userdeletado.length - 1; a >= 0; a--) {
            if (userdeletado[a] == 1) {
                usuario.splice(a, 1)
            }
        }
        listar();
    }
    function adicionarusuarios1() {
        let lista = document.querySelector('div.cadastros');
        lista.innerHTML = "";
        lista.innerHTML += "<h2>Adicionar Usuário</h2> <br><br>"
        lista.innerHTML += `<form>
                         
                         <label for="inputuser"><h3>Nome usuário:</h3></label><br>
                         <input type="text" class="inputuser"> <br>
    
                         <label for="inputsenha"><h3>Digite a senha:</h3></label><br>
                         <input type="password" class="inputsenha"><br> <br>
    
                         <label for="inputsenha2"><h3>Confirme a senha:</h3></label><br>
                         <input type="password" class="inputsenha2"><br> <br>
    
                         <input type="button" value="ADICIONAR" class="botao1"
                         id="adicionarusuarios2">
                         
                         </form>`





        const inputadicionar2 = document.querySelector("#adicionarusuarios2");
        inputadicionar2.addEventListener("click", adicionarusuarios2)
    }

    function adicionarusuarios2() {

        let novousuario = {
            nome: document.querySelector('input.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }
        let senha2 = document.querySelector('input.inputsenha2').value
        if (novousuario.senha == senha2) {
            let repetida = 0
            for (let index = 0; index < usuario.length; index++) {
                if (usuario[index].nome == novousuario.nome) {
                    repetida = 1
                }
            }
            if (repetida == 0) {
                usuario.push(novousuario)
                alert("Usuário adicionado com sucesso!!!")
                listar();
            }
            else {
                alert("Usuário já adicionado")
                adicionarusuarios1()
            }
        } else {
            alert("A senha é diferente da confirmação")
            adicionarusuarios1()
        }
    }


    function atualizarusuarios1() {
        let lista = document.querySelector('div.cadastros');
        lista.innerHTML = "";
        lista.innerHTML += "<h2>Trocar usuário</h2> <br><br>"
        lista.innerHTML += `<form>
                             <label><h3>Nome usuário:</h3></label><br>
                             <input type="text" class="inputuser"> <br>
        
                             <label><h3>Digite a senha atual:</h3></label><br>
                             <input type="password" class="inputsenha"><br> <br>
        
                             <label><h3>Novo usuário:</h3></label><br>
                             <input type="text" class="inputuser1"> <br>
        
                             <label><h3>Digite a nova senha:</h3></label><br>
                             <input type="password" class="inputsenha1"><br> <br>
        
                             <label><h3>Confirme a senha:</h3></label><br>
                             <input type="password" class="inputsenha2"><br> <br>
        
                             <input type="button" value="TROCAR " class="trocar"
                             id="trocarsenha">
                             </form>`

        const inputtrocarsenha1 = document.querySelector("#trocarsenha");
        inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
    }

    function atualizarusuarios2() {
        let nome = document.querySelector('input.inputuser').value
        let nome1 = document.querySelector('input.inputuser1').value
        let senha = document.querySelector('input.inputsenha').value
        let senha1 = document.querySelector('input.inputsenha1').value
        let senha2 = document.querySelector('input.inputsenha2').value

        let errosenha = 1
        let repetida = 0
        let indice = 0

        for (let index = 0; index < usuario.length; index++) {
            if (usuario[index].nome == nome1) {
                if (usuario[index].nome != nome) {
                    repetida = 1
                }
            }
        }

        if (repetida == 0) {
            for (let index = 0; index < usuario.length; index++) {
                if (usuario[index].nome == nome) {
                    repetida = 0
                    if ((usuario[index].senha == senha) && (senha1 == senha2)) {
                        errosenha = 0
                        indice = index
                        index = usuario.length
                    }
                }
            }

        }
        if (repetida == 0) {
            if (errosenha == 0) {
                let lista = document.querySelector('div.cadastros');
                lista.innerHTML = "";
                usuario[indice].nome = nome1
                usuario[indice].senha = senha1
                alert("Dados atualizados com sucesso!")
                listar()
            } else {
                alert("Login incorreto, favor verificar os dados, senha incorreta.")
                atualizarusuarios1()
            }

        } else {
            alert("Login incorreto, favor verificar os dados, usuário incorreto.")
            atualizarusuarios1()
        }
    }
    function testarusuario1() {
         
        let lista = document.querySelector('div.cadastros');
        lista.innerHTML = "";
        lista.innerHTML += "<h2>Testar usuário</h2> <br><br>"
        lista.innerHTML += `<form>
                             <label><h3>Nome do usuário:</h3></label><br>
                             <input type="text" class="inputusuario"> <br>
        
                             <label><h3>Digite a senha:</h3></label><br>
                             <input type="password" class="inputsenha"><br> <br>
                             
                             <input type="button" value="VERIFICAR" class="verificar"
                             id="testarusuario2">
                             </form>`
                             const inputtestarusuario2 = document.querySelector('input#testarusuario2')
                             inputtestarusuario2.addEventListener("click", testarusuario2)
    }

    function testarusuario2() {
       
        let testar = {
            nome: document.querySelector('input.inputusuario').value,
            senha: document.querySelector('input.inputsenha').value
        }
        let erro = 1

        for (let a = 0; a < usuario.length; a++) {
            if (usuario[a].nome == testar.nome && usuario[a].senha == testar.senha) {
                erro = 0
                a = usuario.length
            }
        }
        if (erro == 0) {
            (alert("Usuário já está cadastrado no sistema!"))
            testarusuario1()
        }

        else {
            (alert("Usuário ou senha incorretos, verifique as informações novamente!"))
            testarusuario1()
        }
    }




} else {
    const botao = document.querySelector('input#botao');

    botao.addEventListener("click", function () {
        let username = document.querySelector('input#usuario').value
        let senha = document.querySelector('input#password').value
        let controle = 0

        for (let index = 0; index < usuario.length; index++) {
            if ((username == usuario[index].nome) && (senha == usuario[index].senha)) {
                window.location.href = "./LOGIN2.html"
                localStorage.setItem('usuariologado', usuario[index].nome)
                index = usuario.length
                alert("Acesso liberado!")

                controle = 1

            }

        }
        if (controle == 0) {
            alert(`Usuário e senha não cadastrados.`)
        }
    })
}











