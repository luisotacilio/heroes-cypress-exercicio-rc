### Teste Funcional com Cypress - CY.Heroes App 


Este repositório contém os arquivos de um projeto de teste funcional automatizado de 2 casos de uso do aplicativo CY-Heroes realizados com a ferramenta CYPRESS. O contexto de sua realização é ser parte do treinamento para formação no curso de Qualidade( QA - Quality Assurance ) em Testes de Software ministrado pela escola https://www.lumestack.com. O que podemos destacar dessa implementação é o uso de Custom Commands que evita a replicação de código e de hooks que permitem um maior controle sobre as transiçoes das requições de uma aplicação Web típica.

![heroes](https://github.com/user-attachments/assets/2790372c-679e-40fa-a5a0-4c740b8c66b2)



Índice:
- Introdução
- Pré-requisitos
- Instalação
- Execução
- Resultados

#### Introdução
O CY.Heroes App é um aplicativo criado pela equipe Cypress que demonstra o uso no mundo real dos métodos de teste, padrões e fluxos de trabalho do Cypress. 
O aplicativo é desenvolvido com React e NestJS.

#### Pré-requisitos

Instalação das seguintes dependências:  Node JS e o Cypress 

#### Instalação
- Node JS
```bash
http://nodejs.org/pt/download/prebuilt-binaries
```

- Cypress

```bash
npm install cypress --save-dev
```


#### Execução

Para execução dos testes desse repositório seguir esses 3 passos:

- Baixar o clone do Cy.Heroes no GitHUB que se encontra em:

```bash
https://github.com/cypress-io/cypress-heroes
```

- Ligar o servidor web na porta 3000 execuntado a instrução
em linha de comando no diretorio onde o clone foi instalado :

```bash
npm run dev
```

- Baixar o clone do meu repositorio em:
```bash  
https://github.com/luisotacilio/rwa-cypress-exercicio-vf
```
- Execução do projeto:
```bash
npx cypress open
ou
npm run cy:run:chrome
```

#### Resultado
Todos os testes E2E executadas com sucesso em casos de uso: Login de dois usuários pre-determinados e Manter Heroes. Foi gerado um relatório com a extensão **Mochawesome** a ser encaminhado ao time de desenvolvimento da aplicação para conhecimento. 



