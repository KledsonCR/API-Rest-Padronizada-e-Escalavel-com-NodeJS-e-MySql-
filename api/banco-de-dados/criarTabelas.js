const modelos = [
   require('../rotas/fornecedores/ModeloTabelaFornecedor'),
   require('../rotas/fornecedores/produtos/ModeloTabelaProduto')
]

async function criarTabelas () {
   for (let contador = 0; contador < modelos.length; contador++) {
      const modelo = modelos[contador]
      await modelo.sync()
   }
}

criarTabelas()

//MODELO DE CRIAÇÃO DE TABELA - 1
/*ModeloTabela
   .sync()
   .then(() => console.log('Tabela criada com sucesso'))
   .catch(console.log)*/