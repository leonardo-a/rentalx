# Cadastro de Carro

**Requisitos Funcionais**
 - Deve ser possível cadastrar um novo carro
 - Deve ser possível listar todas as categorias


**Regras de Negócio**
 - Não deve ser possível cadastrar um carro com uma placa já existente
 - Não deve ser possível alterar a placa de um carro já cadastrado
 - O carro, por padrão, deve ser cadastrado com disponibilidade
 - Somente um administrador deve ser capaz de cadastrar um usuário

# Listagem de Carros

**Requisitos Funcionais**
 - Deve ser possível listar todos os carros disponíveis
 - Deve ser possível listar todos os carros disponíveis pelo nome da categoria
 - Deve ser possível listar todos os carros disponíveis pelo nome da marca
 - Deve ser possível listar todos os carros disponíveis pelo nome do carro

**Regras de Negócio**
 - Não deve ser obrigatório estar logado no sistema para listar os carros

# Cadastro de Especificação

**Requisitos Funcionais**
 - Deve ser possível cadastrar uma especificação para um carro

**Regras de Negócio**
 - Não deve ser possível cadastrar uma especificação para um carro que não está cadastrado
 - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
 - Somente um administrador deve ser capaz de cadastrar uma especificação para um carro

# Cadastro de Imagens do Carro

**Requisitos Funcionais**
 - Deve ser possível cadastrar a imagem do carro
 - Deve ser possível listar todos os carros

**Requisitos Não-Funcionais**
 - Utilizar o Multer para o upload dos arquivos

**Regras de Negócio**
 - Deve ser possível que o usuário cadastre mais de uma imagem para o mesmo carro
 - Somente um administrador deve ser capaz de cadastrar uma imagem para um carro

# Aluguel do Carro

**Requisitos Funcionais**
 - Deve ser possível cadastrar um aluguel

**Regras de Negócio**
 - O aluguel deve ter duração minima de 24 horas
 - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
 - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
