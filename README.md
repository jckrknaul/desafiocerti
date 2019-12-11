# desafiocerti

Servidor HTTP que para cada requisição GET, retorna um JSON por extenso do número inteiro enviado no path. 
Os números podem estar entre o intervalo [-99999, 99999].

Servidor foi construido em Node-JS e utilizado o Docker para conteinerização.

Para o ambiente docker, pode-se utilizar a imagem jckrknaul/nodedesafiocerti

Para iniciar o servidor Node-JS com o docker, pode-se rodar o comando "docker-compose up" no prompt de comando do SO.
