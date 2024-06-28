# Desafio 01 da formação TypeScript Full Stack Developer - DIO


## 📝 Resolução do desafio 01 


### 💻 Tecnologias

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50px" height="50px"/>

### 🔍 Observações

#### O desafio consiste em criar métodos de saque, depósito e empréstimo para usuários de um banco (Dio Bank) usando os conceitos básicos de TypeScript.

🧪
Com esse desafio consegui pôr em prática conceitos de POO, criação de objetos a partir de classes e o seu método construtor, importação e exportação de classes, além da configuração inicial para rodar o TypeScript.

1️⃣
Para alterar o saldo da conta de acordo com o depósito feito inseri no método deposit() um parâmetro que é somado a propriedade balance, assim o saldo da conta é alterado.

2️⃣
Para o saque inseri uma condicional no método withDraw() que verifica se a conta é válida e se o saldo é maior que o valor solicitado para saque. Dessa forma consegui fazer com que apenas contas válidas e com saldo maior podem fazer saques.

3️⃣
Para o valor do saldo ser acrescido com o valor do empréstimo inseri no método getLoan() um parâmetro que é somado a propriedade balance, além de realizar uma condicional nesse método para verificar se a conta é válida.

4️⃣
Para criar um novo tipo de conta criei uma nova classe abstrata e apliquei um método de depósito que acrescenta R$ 10,00 a mais no valor depositado. Resolvi isso adicionando um parâmetro no deposit() que é somado mais 10.











