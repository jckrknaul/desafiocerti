# desafiocerti

Servidor HTTP que para cada requisição GET, retorna um JSON por extenso do número inteiro enviado no path. 
Os números podem estar entre o intervalo [-99999, 99999].

Servidor foi construido em Node-JS e utilizado o Docker para conteinerização.

Seguir os seguintes passos para rodar a aplicação em seu ambiente:

1- Fazer o pull deste repositório;

2- Possuir o docker e docker-compose instalado em sua maquina;

3- Fazer o pull da imagem docker, com o seguinte comando: "docker pull jckr1985/node-desafiocerti:latest";

4- Na linha de comando do seu SO, dentro do diretório raiz dos fontes deste repositório, rodar o seguinte comando: docker-compose up. Este comando irá subir o node com suas dependencias;

5- Abrir o navegador e testar a aplicação. Utilizar a porta 3000 (Ex.: http://localhost:3000/32423)


