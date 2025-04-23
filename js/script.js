botao = document.getElementById('botao');
let soma = 0;
botao.addEventListener('click', function () {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('rows');

            data.slice(0, 10).forEach(item => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${item.id}</td>
                    <img class="img-thumbnail size" src="${item.image}">
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                    <td>${item.description}</td>
                    <td>${item.category}</td>
                    <td>1</td>
                `;
                container.appendChild(newRow);
                soma = soma + item.price;
                console.log(soma);
                

            });
            
            
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${soma}</td>
                `;
                container.appendChild(newRow);

        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});