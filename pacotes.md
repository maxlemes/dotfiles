# 1. Listar os pacotes instalados:

Use o comando dpkg para listar todos os pacotes instalados e redirecionar a saída para um arquivo. Execute o seguinte no terminal:

dpkg --get-selections > pacotes_instalados.txt

# 2. Instalar os pacotes no outro computador:

No outro computador, você pode usar o arquivo de pacotes para instalar todos os pacotes listados com o seguinte comando:

sudo xargs -a pacotes_instalados.txt apt-get install -y

Isso instalará todos os pacotes listados no arquivo pacotes_instalados.txt.
