function updateStock() {
  // Obtenha os valores do formulário
  var productName = document.getElementById("product-name").value;
  var brand = document.getElementById("brand").value;
  var model = document.getElementById("model").value;
  var price = document.getElementById("price").value;
  var photo = document.getElementById("photo").files[0];
  var quantity = document.getElementById("quantity").value;

  // Adicione ao estoque (supondo que você tenha um objeto "stock" com uma lista de produtos)
  stock.addProduct(productName, brand, model, price, photo, quantity);

  // Atualize a lista de estoque na página
  var stockList = document.getElementById("stock-list");
  stockList.innerHTML = "";
  for (var i = 0; i < stock.products.length; i++) {
    stockList.innerHTML += "<p>" + stock.products[i].name + ": " + stock.products[i].brand + " " + stock.products[i].model + " " + stock.products[i].price + " " + stock.products[i].photo + " " + stock.products[i].quantity + "</p>";
  }
}

/*
Fazer linguagem de servidor para criar uma lógica que envie esses dados via requisição HTTP e execute uma query SQL para inserir esses dados no banco de dados.

E para recuperar essas informações do banco de dados e exibir na página, é necessário usar a linguagem de servidor para fazer uma consulta SQL para recuperar esses dados do banco de dados e retorná-los para o cliente, onde podem ser exibidos na página usando JavaScript.

Exatamente, para enviar os dados do formulário HTML para o banco de dados MySQL, você precisaria escrever código em uma linguagem de servidor (como PHP, Ruby, Python, etc.) para criar uma lógica que:

Receba a requisição HTTP enviada pelo JavaScript com os dados do formulário.
Conecte-se ao banco de dados MySQL e execute uma query SQL para inserir os dados do formulário na tabela de estoque.
Aqui está um exemplo de como isso poderia ser feito usando PHP:

Copy code
<?php
  // Recuperar dados da requisição
  $productName = $_POST["product-name"];
  $brand = $_POST["brand"];
  $model = $_POST["model"];
  $price = $_POST["price"];
  $quantity = $_POST["quantity"];

  // Conectar ao banco de dados
  $conn = mysqli_connect("host", "username", "password", "database");

  // Verificar conexão
  if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
  }

  // Criar query SQL
  $sql = "INSERT INTO stock (name, brand, model, price, quantity) VALUES ('$productName', '$brand', '$model', '$price', '$quantity')";

  // Executar query
  if (mysqli_query($conn, $sql)) {
    echo "Produto adicionado com sucesso.";
  } else {
    echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
  }

  // Fechar conexão
  mysqli_close($conn);
?>
E para recuperar essas informações do banco de dados e exibir na página, você precisaria escrever código em uma linguagem de servidor para criar uma lógica que:

Conecte-se ao banco de dados MySQL e execute uma query SQL para selecionar todas as linhas na tabela de estoque.
Retorne esses dados como um objeto JSON ou outro formato de dados que possa ser interpretado pelo JavaScript.
Aqui está um exemplo de como isso poderia ser feito usando PHP:

Copy code
<?php
  // Conectar ao banco de dados
  $conn = mysqli_connect("host", "username", "password", "database");

  // Verificar conexão
  if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
  }

  // Criar query SQL
  $sql = "SELECT * FROM stock";
  $result = mysqli_query($conn, $sql);

  // Criar array para armazen



Leandro Sani
Continuar

ar os dados do estoque
$stock = array();

// Adicionar cada linha do resultado à array
while($row = mysqli_fetch_assoc($result)) {
$stock[] = $row;
}

// Retornar os dados como JSON
echo json_encode($stock);

// Fechar conexão
mysqli_close($conn);
?>

////////////////////////////////////==/////////////////////////////
exemplo de como a tabela "stock" poderia ser criada no MySQL 
para armazenar as informações adicionais de nome, marca, modelo, 
preço, foto e quantidade de um produto no estoque:

CREATE TABLE stock (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
// "id" é uma chave primária e é um número inteiro que será gerado automaticamente pelo banco de dados (auto_increment) cada vez que uma nova linha é inserida.
// "name" é o nome do produto e é um tipo de caractere de comprimento variável (VARCHAR) com tamanho máximo de 255 caracteres.
// "brand" é a marca do produto e é um tipo de caractere de comprimento variável (VARCHAR) com tamanho máximo de 255 caracteres.
// "model" é o modelo do produto e é um tipo de caractere de comprimento variável (VARCHAR) com tamanho máximo de 255 caracteres.
// "price" é o preço do produto e é do tipo DECIMAL com 10 digitos e 2 casas decimais.
// "photo" é a foto do produto e é um tipo de caractere de comprimento variável



*/