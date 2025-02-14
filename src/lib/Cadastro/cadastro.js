import { cadastrarUsuario } from '../../Firebase/FirebaseAuth';

export default () => {
  const cadastro = document.createElement('div');

  const conteudo = `
      <div id="conteudo-desktop-cadastro">
       <div id="cadastro-imagem-texto">
        <p id="texto1-desktop-cadastro">Conectados pela <br> nostalgia</p>
        <img id="imagem-desktop" src="imagens/imagemTelaInicial.png"></img>
        <p id="texto2-desktop-cadastro">Se você também é jovem pra ser velho
        e velho pra ser jovem, junte se a nós!</p>
        </div>
        <div>
        <h1 id="criarContaTitulo">Crie sua Conta</h1>
        <section id="fundoCadastro">
      <form id="formulario">
        <label> <p class = "campoCadastro"> Nome </p> <input id="nomeUsuario" type="text" name="nome" required></input></label>
        <div id="mensagemErroNome"></div> <!-- Add an error div for the name -->
        <label> <p class = "campoCadastro"> Email </p> <input id= "email" type="email" name="email" required></input></label>
        <div id="mensagemErroEmail"></div>
        <label> <p class = "campoCadastro"> Senha </p> <input id= "senha" type="password" name="senha" required></input></label>
        <label> <p class = "campoCadastro"> Confirmar senha </p> <input id="confirmarSenha" type="password" name="confirmarSenha" required></input></label>
        <div id="mensagemErroSenha"></div>
        <button type="button" id="criarContaCadastro">Criar conta</button>
        <div id="entrarNaConta">
        <p class="entrarConta"> Já tem conta? </p>
          <a id="botaoEntrarConta" href="#telaInicial">Entre agora</a>
          </div>
      </form>
        </section>
        </div>
        </div>
`;

  cadastro.innerHTML = conteudo;

  const botaoCadastro = cadastro.querySelector('#criarContaCadastro');
  const mensagemErroNome = cadastro.querySelector('#mensagemErroNome'); 
  const mensagemErroEmail = cadastro.querySelector('#mensagemErroEmail');
  const mensagemErroSenha = cadastro.querySelector('#mensagemErroSenha');

  function capturarErroCadastro(error) {
    mensagemErroEmail.textContent = '';
    if (error.code === 'auth/email-already-in-use') {
      mensagemErroEmail.textContent = 'Email já cadastrado';
    }
  }

  botaoCadastro.addEventListener('click', async (event) => {
    event.preventDefault();

    const nome = cadastro.querySelector('#nomeUsuario').value;
    const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome); // Verificar se o nome contém apenas letras e espaços
    const email = cadastro.querySelector('#email').value;
    const senha = cadastro.querySelector('#senha').value;
    const confirmarSenha = cadastro.querySelector('#confirmarSenha').value;

    // verifica se o campo esta vazio
    if (!nomeValido) {
      mensagemErroNome.textContent = 'Por favor, insira seu nome.';
      return; // Don't proceed with registration
    }

// Limpar mensagens de erro existentes
    mensagemErroNome.textContent = '';
    mensagemErroEmail.textContent = '';
    mensagemErroSenha.textContent = '';

    function validarEmail() {
      const validarStrings = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return validarStrings.test(email);
  }
   // Validação do email
    if (!validarEmail(email)) {
      mensagemErroEmail.textContent = 'Email inválido';
      return; // Não prosseguir com o cadastro
    }

  // Verificação de senha
    if (senha.length < 6) {
      mensagemErroSenha.textContent = 'A senha deve conter no mínimo 6 dígitos';
      return; // Não prosseguir com o cadastro
    }

  // Verificação de confirmação de senha
    if (senha !== confirmarSenha) {
      mensagemErroSenha.textContent = 'As senhas não coincidem';
      return; // Não prosseguir com o cadastro
    }

// chamar a função cadastrarUsuario
try {
  await cadastrarUsuario(email, senha, nome);
  window.location.hash = '#telaInicial';
} catch (error) {
  capturarErroCadastro(error);
}
});


return cadastro;
};
