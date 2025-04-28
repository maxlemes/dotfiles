#!/bin/bash

while true; do
    battery=$(acpi | cut -d, -f2 | tr -d ' ')
    volume=$(amixer get Master | grep -o '[0-9]*%' | head -1)
    datetime=$(date '+%d/%m/%Y %H:%M:%S')
    xsetroot -name "🔋$battery 🔊$volume 🕒$datetime"
    sleep 5
done
