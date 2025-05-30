function coletaTodosShadowRoots() {
   const listaShadows = [];
   function busca(elementos) {
      for (const item of elementos) {
         if (!item) continue;

         if (item.shadowRoot) {
            listaShadows.push(item.shadowRoot);

            busca(item.shadowRoot.querySelectorAll(""));
         }
         if (item.children && item.children.length > 0) {
            busca(item.children);
         }
      }
   }
   busca(document.querySelectorAll(""));
   return listaShadows;
}

function retornaJanelaCadastro(seletor) {
   arrFrames = coletaTodosShadowRoots();
   for (let item of arrFrames) {
      const elemento = item.querySelector(seletor);
      if (elemento) {
         return item.querySelector(seletor);
      }
   }
   return "SHADOW NÃO ENCONTRADO";
}

const inputNome = retornaJanelaCadastro('input[name="Nome_c"]');
const inputRG = retornaJanelaCadastro('input[name="RG_c"]');

//Passa por todos elementos shadows ate chegar no desejado
