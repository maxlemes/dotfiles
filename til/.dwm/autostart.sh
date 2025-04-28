#!/bin/bash

# Log para depuração
echo "Iniciando o autostart.sh" > ~/.dwm/autostart.log

# configura a barra do dwm
~/.dwm/bar.sh &

# Liga o teclado numérico
numlockx on  &

# Executa o script para definir a imagem aleatória
~/.set_random_wallpaper.sh &

# Aguarda mais tempo antes de configurar o teclado
sleep 5 && ~/.meu_teclado.sh &

# Configura o teclado para ABNT2
setxkbmap -model abnt -layout us -variant intl

exec dwm
