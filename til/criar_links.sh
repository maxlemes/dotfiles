#!/bin/bash

# Verifica se o diretório de origem foi fornecido
if [ -z "$1" ]; then
    echo "Uso: $0 <diretório>"
    exit 1
fi

# Diretório de origem
origem="$1"

# Verifica se o diretório de origem existe
if [ ! -d "$origem" ]; then
    echo "O diretório $origem não existe."
    exit 2
fi

# Caminho do diretório destino (em ~/)
destino="$HOME"

# Habilita a inclusão de arquivos ocultos
shopt -s dotglob

# Percorre todos os arquivos e diretórios no diretório de origem (incluindo os ocultos)
for arquivo in "$origem"/*; do
    # Verifica se é um arquivo ou diretório
    if [ -e "$arquivo" ]; then
        # Cria o link simbólico absoluto no diretório HOME
        ln -sf "$(realpath "$arquivo")" "$destino/$(basename "$arquivo")"
        echo "Link criado: $destino/$(basename "$arquivo") -> $(realpath "$arquivo")"
    fi
done

# Caminho absoluto para a pasta MesloGS
arquivo="$origem/MesloGS" 

# Caminho do diretório de fontes
destino2="$HOME/.local/share/fonts/MesloGS"

# Verifica se o link simbólico já existe e remove se necessário
if [ -d "$destino2" ]; then
  echo "O diretório MesloGS já existe em ~/.local/share/fonts. Removendo..."
  rm -rf "$destino2"
fi

# Cria o link simbólico em ~/.local/share/fonts
ln -sf "$(realpath "$arquivo")" ~/.local/share/fonts

# Desabilita a opção dotglob após o script
shopt -u dotglob

rm "$destino/criar_links.sh"
rm "$destino/MesloGS"
rm "$destino/zsh.md"
rm ~/.local/share/fonts/MesloGS

echo "Links simbólicos criados com sucesso!"
