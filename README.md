# 🚧 SafeSense API
### Sistema Inteligente de Prevenção de Acidentes por Imprudência

---

## 📌 Descrição do Projeto

O **SafeSense** é uma API desenvolvida em **NestJS** utilizando o padrão arquitetural **MVC (Model-View-Controller)**.

O objetivo do sistema é prevenir acidentes causados por imprudência, distração ou comportamento de risco — como os casos apresentados no site Darwin Awards (https://darwinawards.com/).

A proposta é integrar um dispositivo físico (SmartTag de Segurança) com uma API backend capaz de:

- Monitorar eventos de risco
- Classificar o nível de perigo
- Enviar alertas ao usuário
- Registrar histórico de ocorrências
- Permitir análise preventiva de comportamento

---

# 🎯 Objetivo Acadêmico

Aplicar os conceitos aprendidos em sala de aula:

- Arquitetura MVC
- Estrutura modular no NestJS
- Separação de responsabilidades
- Organização de projeto backend
- Geração de componentes via CLI do NestJS

---

# 🏗 Arquitetura Geral (MVC)

O projeto segue o padrão MVC da seguinte forma:

- **Model** → Representação das entidades do banco de dados
- **Controller** → Intermedia requisições HTTP
- **Service** → Contém regras de negócio
- **View** → Aplicativo Mobile (fora do escopo deste repositório)

Fluxo simplificado:

---

# 🧩 Estrutura do Projeto
safesense-api/
│
├── src/
│ ├── user/
│ ├── device/
│ ├── risk-event/
│ ├── auth/
│ ├── app.module.ts
│ └── main.ts
│
├── package.json
└── README.md

---

# 📦 Módulos do Sistema

---

## 👤 User Module

Responsável pelo cadastro e gerenciamento de usuários.

### Componentes

**user.controller.ts**  
Comando:

nest generate controller user

Objetivo: Controlar as requisições relacionadas ao usuário (criação, consulta e listagem).

**user.service.ts**  
Comando:

nest generate class user

Objetivo: Representar a entidade do banco de dados.

Campos sugeridos:
- id
- nome
- email
- senha
- dataCriacao

---

## 📟 Device Module

Responsável pelo gerenciamento dos dispositivos IoT (SmartTag).

### Componentes

**device.controller.ts**  
Comando:

nest generate controller device

Objetivo: Receber requisições relacionadas ao cadastro e consulta de dispositivos.

**device.service.ts**  
Comando:

nest generate service device

Objetivo: Controlar o vínculo entre usuário e dispositivo.

**device.entity.ts**  
Comando:

nest generate class device

Campos sugeridos:
- id
- serialNumber
- tipo
- status
- userId

---

## ⚠️ Risk Event Module

Responsável pelo registro de eventos de risco enviados pelo hardware.

### Componentes

**risk-event.controller.ts**  
Comando:

nest generate controller risk-event

Objetivo: Receber dados enviados pelo dispositivo.

**risk-event.service.ts**  
Comando:

nest generate service risk-event

Objetivo:
- Processar o evento
- Classificar nível de risco (baixo, médio, alto)
- Registrar ocorrência

**risk-event.entity.ts**  
Comando:

nest generate class risk-event

Campos sugeridos:
- id
- tipoRisco
- intensidade
- dataHora
- deviceId
- nivelClassificado

---

## 🔐 Auth Module

Responsável pela autenticação e segurança.

### Componentes

**auth.controller.ts**  
Comando:

nest generate controller auth

Objetivo: Gerenciar login de usuários.

**auth.service.ts**  
Comando:

nest generate service auth

Objetivo:
- Validar credenciais
- Gerar token JWT
- Controlar autenticação

---

# 📋 Requisitos Funcionais

- RF01 – Cadastrar usuário
- RF02 – Cadastrar dispositivo
- RF03 – Registrar evento de risco
- RF04 – Classificar nível de risco
- RF05 – Consultar histórico de ocorrências

---

# 📋 Requisitos Não Funcionais

- RNF01 – API REST
- RNF02 – Arquitetura MVC
- RNF03 – Organização modular
- RNF04 – Segurança com autenticação
- RNF05 – Escalável e organizada

---

# 🧠 Proposta do Hardware (Conceitual)

SmartTag de Segurança com:

- Sensor de proximidade
- Sensor de inclinação
- Sensor de voltagem
- Microcontrolador (ESP32 ou Arduino)
- Comunicação via Wi-Fi

Funcionamento:

1. Sensor detecta situação de risco
2. Dispositivo envia requisição para API
3. API classifica o risco
4. Evento é registrado
5. Usuário recebe notificação

---

# ▶️ Como Executar o Projeto

1. Instalar dependências:

npm install


2. Rodar o servidor:

npm run start:dev


3. A API estará disponível em:

http://localhost:3000


---

# 🛠 Tecnologias Utilizadas

- Node.js
- NestJS
- TypeScript
- Arquitetura MVC

---

# 📌 Considerações Finais

O SafeSense é uma proposta de solução preventiva baseada em integração entre hardware e software, utilizando conceitos modernos de arquitetura backend com NestJS.

O projeto demonstra:

- Aplicação prática do padrão MVC
- Organização modular
- Separação clara de responsabilidades
- Estrutura escalável para sistemas IoT

---

