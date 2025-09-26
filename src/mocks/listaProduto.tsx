const lista_produto = {
    itens: {
        titulo: "Veja abaixo nossos produtos",
        lista: [
            {
                id: 1,
                nome: "Salgados",
                descricao: "Temos salgados fritos e salgados assados.",
                imagem: require('../../assets/produtos/Salgado.jpeg'),
                slider: [
                    require('../../assets/Salgados/Salgado1.jpeg'),
                    require('../../assets/Salgados/Salgado2.jpeg'),
                    require('../../assets/Salgados/Salgado3.jpg'),
                ],
            },
            {
                id: 2,
                nome: "Bolos",
                descricao: "Bolos de Ganache e outros.",
                imagem: require('../../assets/produtos/Bolo.jpeg'),
                slider: [
                    require('../../assets/Bolos/Bolo1.jpeg'),
                    require('../../assets/Bolos/Bolo2.jpeg'),
                    require('../../assets/Bolos/Bolo3.jpeg'),
                    require('../../assets/Bolos/Bolo4.jpeg'),
                ],
            },
            {
                id: 3,
                nome: "Doces",
                descricao: "Docinhos para festas",
                imagem: require('../../assets/produtos/Doce.jpeg'),
                slider: [
                    require('../../assets/Doces/Doce1.jpeg'),
                    require('../../assets/Doces/Doce2.jpeg'),
                    require('../../assets/Doces/Doce3.jpeg'),
                ],
            },
            {
                id: 4,
                nome: "Mini Cakes",
                descricao: "Mini cakes, ótimos para presentear.",
                imagem: require('../../assets/produtos/MiniCake.jpeg'),
                slider: [
                    require('../../assets/MiniCakes/MiniCake1.jpeg'),
                    require('../../assets/MiniCakes/MiniCake2.jpeg'),
                    require('../../assets/MiniCakes/MiniCake3.jpeg'),
                ],
            },
        ]       
    }
}
export default lista_produto;