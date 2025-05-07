Aqui está o passo a passo para instalar o Dropbox no Debian:

## 1. Baixar o pacote de instalação

```bash
wget https://www.dropbox.com/download?plat=lnx.x86_64 -O dropbox.deb
```

# 2. Instalar o pacote

Depois de baixar o arquivo, instale o pacote .deb usando o dpkg:

```bash
sudo dpkg -i dropbox.deb
```

Se ocorrerem erros de dependência, você pode corrigi-los com o seguinte comando:

```bash
sudo apt --fix-broken install
```

# 3. Iniciar o Dropbox

Depois de instalar, inicie o Dropbox:

```bash
dropbox start -i
```

Esse comando vai iniciar o Dropbox e abrir uma janela para você fazer login na sua conta. Se for a primeira vez que você usa o Dropbox, ele pedirá para configurar a conta.

# 4. Adicionar o Dropbox ao sistema de inicialização (opcional)

Se você deseja que o Dropbox inicie automaticamente com o sistema, pode adicionar a linha abaixo ao seu arquivo de inicialização do sistema (normalmente já é configurado automaticamente durante a instalação).

Para adicionar manualmente ao seu sistema, use:

```bash
dropbox autostart y
```

# 5. Verificar se o Dropbox está funcionando

Após a instalação, o Dropbox deve começar a sincronizar seus arquivos e você verá o ícone do Dropbox na bandeja do sistema.

Agora, seu Dropbox está instalado e funcionando!
