import { sair, manterLogado, manterDeslogado } from '../../Firebase/FirebaseAuth.js';

export default () => {
  const linhaDoTempo = document.createElement('div');

  const conteudo = `
  <div id="headerContainer">
  <div id="usuarioPostagem">
    <p class="nomeUsuario">Usuário</p>
    <img id="iconeCriarPostagem" src="Imagens/criarPostagem.png" alt="Ícone Criar Postagem">
  </div>
  <button id="botaoSair">Sair</button>
</div>
<section id="feed">
  <div id="criarPostContainer">
    <textarea id="caixaDeTextoPost" placeholder="Escreva seu Post aqui..."></textarea>
    <button id="botaoPublicar" class="botaoPublicar">Publicar</button>
  </div>
  <div id="publicacaoCriada">
    <div id="ConteudoPublicacao">Conteudo publicado pelo usuário</div>
    <div id="iconesPublicacao">
      <img src="Imagens/iconeComentario.png" alt="Ícone Comentário">
      <img src="Imagens/iconeCurtir.png" alt="Ícone Curtida">
      <img src="Imagens/iconeLapis.png" alt="Ícone Lápis">
      <img src="Imagens/iconeSalvar.png" alt="Ícone Salvar">
      <img src="Imagens/Lixeira.png" alt="Ícone Lixeira">
    </div>
  </div>
</section>



  `;

  linhaDoTempo.innerHTML = conteudo;

  // // funcao manter logado
  // manterLogado().then((user) => {
  //   if (user) {
  //     window.location.hash = '#linhaDoTempo';
  //   }
  // });

  // // funcao manter deslogado
  // manterDeslogado.then((user) => {
  //   if (!user) {
  //     window.location.hash = '#telaInicial';
  //   }
  // });

  // // funcao sair
  // sair.then((event) => {
  //   event.preventDefault();
  //   window.location.hash = '#telaInicial';
  // })
  //   .catch(() => {
  //     alert('Erro ao fazer logout');
  //   });

  // const botaoSair = linhaDoTempo.querySelector('#botaoSair');
  // botaoSair.addEventListener('click', sair);
  // console.log(linhaDoTempo, 'socorro');
  return linhaDoTempo;
};
