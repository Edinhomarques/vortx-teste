# vortx-test

Olá pessoal, segue a minha a solução do meu teste para avaliação :)

### Backend

Uma Breve explicação: Criei uma api simples com apenas um endpoint para realizar uma consulta pelo frontend dos planos, fazendo um post com os minutos e os dds de origem e destino. Não salvei nada em banco de dados porque pra mim não fazia muito sentido.

nome do endpoint: 
> /calculatePlan

> Tipo de request : POST

body: 
```javascript
{
"depot":
"destination":
"minutes":
}
```

Ainda no backend usei a lib Jest e Supertest para realizar os testes das funções criadas e controller criado. Usei o supertest também porque o Jest não possui a funcionalidade para teste de rotas .

Como Rodar o Backend?
- Na pasta backend -> rode o comando **yarn** ou **npm install** (usei yarn)
- depois de um montado **npm start** para rodar o servidor na porta 3001
- faça requisições usando postman ou insominia
- Para rodar os tests: rode o comando **yarn test**
	+ Realizei um teste de unidade: Na função que criei para retornar o valor do minuto a partir do ddd de origem e destino.
	+ Um Teste de integração: testa a chamada na api no endpoint /calculatePlan e o seus provaveis retornos

Usei classe somente pra montar o server, mas confesso que não tenho costume de usar OO com javascript.

Para o backend é isso :)

### Frontend
No Frontend, decidi usar react porque to tentando aprender mais sobre :)

- Basicamente criei os components,
- No css usei Arquitetura BEM CSS,
- Fiz todos os components usando Hooks,
- Usei o axios para realizar a chamada na api.
- Não fiz testes no frontend

Como rodar o frontend? 
Entre na pasta frontend e rode o comando **yarn** para instalar as dependencias ou **npm install**
para rodar a aplicação: **yarn start**


Observações finais: o teste apesar de simples foi bem legal e pude praticas alguns conceitos do react, além de usar testes no backend que não tenho muita prática mas acho que me sai bem.

Um crítica construtiva: Foi pedido pra enviar o teste por email em um arquivo zip, achei um pouco antiquado. Podíamos ter colocado um projeto no github ou alguma plataforma de versionamento, seria mais prático. Mas é só uma sugestão de melhoria.

Agradeço a Oportunidade e aguardo um Feedback
Atenciosamente Edson Marques
