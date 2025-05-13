#!/bin/bash

# Установка Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Установка PM2
npm install -g pm2

# Запуск приложения через PM2
pm2 delete botify || true
pm2 start npm --name "botify" -- start
