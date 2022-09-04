const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((data) => {
          this.produtos = data;
        });
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((r) => r.json())
        .then((data) => (this.produto = data));
    },
  },
  created() {
    this.fetchProdutos();
  },
});