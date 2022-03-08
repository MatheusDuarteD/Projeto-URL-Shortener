# Projeto-URL-Shortener
Encurtador de URL feito em TypeScript utilizando NODE.JS \
Conexão com o banco foi feita utilizando Mongoose e as requisições utilizando Express. \
Funciona pegando o link passado através do POST e criando um hash que representa aquele link, armazenando tanto a URL original, quanto a nova URL com Hash em um registro no MongoDB e redirecionando para a URL original quando a URL com hash é pesquisada através do GET. \
**OBS:** É necessário colocar a string de conexão do Mongo dentro da propriedade MONGO_CONNECTION no arquivo Contants.ts em config para que a conexão com o banco seja realizada
