import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
        <label> <p class = "campoCadastro"> Nome </p> <input id="nomeUsuario" type="text" name="nome"></input></label>
        <label> <p class = "campoCadastro"> Email </p> <input id= "email" type="email" name="email"></input></label>
        <div id="mensagemErro"></div>
        <label> <p class = "campoCadastro"> Senha </p> <input id= "senha" type="password" name="senha"></input></label>
        <div id="mensagemErroSenha"></div>
        <label> <p class = "campoCadastro"> Confirmar senha </p> <input id="confirmarSenha" type="password" name="confirmarSenha"></input></label>
        <button type="button" id="criarContaCadastro">Criar conta</button>
        <div id="entrarNaConta"
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
  const mensagemErro = cadastro.querySelector('#mensagemErro');
  const mensagemErroSenha = cadastro.querySelector('#mensagemErroSenha');

  
  botaoCadastro.addEventListener('click', cadastrarUsuario);
  
  return cadastro;
  };
  



