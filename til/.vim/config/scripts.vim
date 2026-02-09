" Função para abrir o PDF correspondente ao arquivo .tex no Zathura
function! ZathuraOpenPdf()
    " Obtém o caminho absoluto do arquivo atual
    let fullPath = expand("%:p")
    " Substitui a extensão .tex por .pdf
    let pdfFile = substitute(fullPath, ".tex", ".pdf", "")
    " Executa o Zathura para abrir o PDF
    execute "silent !zathura '" . pdfFile . "' &"
endfunction

" Mapeia a tecla Alt+p para chamar a função ZathuraOpenPdf
nnoremap <A-p> :call ZathuraOpenPdf()<CR>

function! SyncTexForward()
let linenumber=line(".")
let colnumber=col(".")
let filename=bufname("%")
let filenamePDF=filename[:-4]."pdf"
let execstr="!zathura --synctex-forward " . linenumber . ":" . colnumber . ":" . filename . " " . filenamePDF . "&>/dev/null &"
exec execstr
endfunction
nmap  :call SyncTexForward()

" ==============================================================================
" FUNÇÃO AUXILIAR - VERSÃO FINAL (COM LIMPEZA PROFUNDA)
" Remove TODOS os caracteres não-imprimíveis antes da busca.
" ==============================================================================
function! FindMatch(pattern)
  let l:conteudo_buffer = join(getline(1, '$'), "\n")
  let l:conteudo_limpo = substitute(l:conteudo_buffer, '[^[:print:]\t\n]', '', 'g')
  return matchstr(l:conteudo_limpo, a:pattern)
endfunction

" ==============================================================================
" FUNÇÃO PRINCIPAL - VERSÃO FINAL E CORRIGIDA
" Extrai todos os dados, incluindo Lotação e Unidade separadamente.
" ==============================================================================
function! Progressao()
    " 1. Adiciona 15 linhas em branco no topo.
    call append(0, repeat([''], 15))

    " 2. Extrai e insere as informações.

    " Processo
    let l:pattern = '\vProcesso nº\s+\zs\d{5}\.\d{6}\/\d{4}-\d{2}'
    let l:match = FindMatch(l:pattern)
    silent call setline(1, '### ' . (empty(l:match) ? '' : l:match))

    " Nome
    let l:pattern = '\v\c(Professora?|Servidora?|(a|o) Docente)\s+\zs[^,]+'
    let l:match = FindMatch(l:pattern)
    silent call setline(2, 'Docente: ' . (empty(l:match) ? '' : l:match))

    " Última Progressão
    let l:pattern = '\v(contar de\s+)\zs\d{2}\/\d{2}\/\d{4}'
    let l:match = FindMatch(l:pattern)
    silent call setline(3, 'Última Progressão: ' . (empty(l:match) ? '' : l:match))

    " Classe Atual
    let l:pattern = '\v\cClasse\s*:\s*\zs[A-D]'
    let l:match = FindMatch(l:pattern)
    silent call setline(4, 'Classe Atual: ' . (empty(l:match) ? '' : l:match))

    " Nível Atual (Padrão)
    let l:pattern = '\v\cPadrão\s*:\s*\zs\d+'
    let l:match = FindMatch(l:pattern)
    silent call setline(5, 'Nível Atual: ' . (empty(l:match) ? '' : l:match))

    " Titulação
    let l:pattern = '\vTITULACAO : ([^\n]*- )?\zs[A-Za-z]+' 
    let l:match = FindMatch(l:pattern)
    silent call setline(6, 'Titulação: ' . (empty(l:match) ? '' : l:match))

    " Lotação (a sigla, ex: FE)
    let l:pattern = '\v\cLotação\s*:\s*\d+\s*-\s*\zs\w+'
    let l:match = FindMatch(l:pattern)
    silent call setline(7, 'Lotação: ' . (empty(l:match) ? '' : l:match))

    " Unidade (o nome completo)
    let l:pattern = '\v(\d{5}\/\d{9}\s+-\s+)\zs[A-Za-z -.]+'
    let l:match = FindMatch(l:pattern)
    silent call setline(8, 'Unidade: ' . (empty(l:match) ? '' : l:match))

    " 3. Preenche linhas estáticas.
    silent call setline(9, 'RADOCs:')
    silent call setline(10, 'Parecer da CAD:')
    silent call setline(11, 'Doc CAD:')
    silent call setline(12, 'Link CAD:')
    silent call setline(13, 'Doc CD:')
    silent call setline(14, 'Link CD:')
    silent call setline(15, 'Parecer da CEA:')
    silent call setline(16, 'Doc CEA:')
    silent call setline(17, 'Link CEA:')
    silent call setline(18, 'Tipo da Defesa:')

    " 4. Limpa o texto original, que agora está da linha 16 para baixo.
    silent! execute "19,$d"
endfunction

function! CAD(num)
    " Acrescenta 10 linhas em branco no arquivo
    silent execute '1put! =repeat(\"\n\", 12)'
    let l:pattern ='\vProcesso nº\s+\zs\d{5}\.\d{6}\/\d{4}-\d{2}'
    let l:processo = '### ' . FindMatch(l:pattern)
    silent execute ':call setline(1, l:processo)'
    let l:pattern1 ='\v(((a|o) Docente)|(Professora?)|(servidora?)|(Servidora?))'
    let l:pattern2 ='\v(((a|o) Docente )|(Professora? )|(servidora? )|(Servidora? ))\zs([^,]+)'
    let l:processo = FindMatch(l:pattern1) . ': ' . FindMatch(l:pattern2)
    silent execute ':call setline(2, l:processo)'
    
    let l:pattern ='\v(contar de\s+)\zs([^,]+)'
      " Procura a última ocorrência do padrão no buffer
      let l:linha = search(l:pattern, 'b')
      " Se a linha for encontrada (diferente de 0)
      if l:linha > 0
        " Obtenha o conteúdo da linha correspondente
        let l:conteudo = getline(l:linha)
        " Extraia a correspondência usando o padrão
        let l:pattern = matchstr(l:conteudo, l:pattern)
      endif

    let l:processo = 'Última Progressão: ' . FindMatch(l:pattern)
    silent execute ':call setline(3, l:processo)'
    let l:pattern ='\v(Classe:\s+)\zs\[A-D]'
    let l:processo = 'Classe Atual: ' . FindMatch(l:pattern)
    silent execute ':call setline(4, l:processo)'
    let l:pattern ='\v(Padrão:\s+)\zs\d{3}'
    let l:processo = 'Nível Atual: ' . FindMatch(l:pattern)
    silent execute ':call setline(5, l:processo)'
    let l:pattern ='\vTitulação: (.*- )?\zs[A-Za-z]+'
    let l:processo = 'Titulação: ' . FindMatch(l:pattern)
    silent execute ':call setline(6, l:processo)'
    let l:pattern ='\vLotação:\s+\d{9}\s+-\s+\zs[^	]+'
    let l:processo = 'Lotação: ' . FindMatch(l:pattern)
    silent execute ':call setline(7, l:processo)'
    let l:pattern ='\v(\d{5}\/\d{9}\s+-\s+)\zs[A-Za-z -.]+'
    let l:processo = 'Unidade: ' . FindMatch(l:pattern)
    silent execute ':call setline(8, l:processo)'
    let l:processo = 'RADOCs: '
    silent execute ':call setline(9, l:processo)'
    let l:processo = 'Discentes: '
    silent execute ':call setline(10, l:processo)'
    let l:processo = 'Chefia: '
    silent execute ':call setline(11, l:processo)'
    let l:processo = 'Ensino: '
    silent execute ':call setline(12, l:processo)'
    let l:processo = 'Graduação: '
    silent execute ':call setline(13, l:processo)'
    let l:processo = 'Produção Intelectual: '
    silent execute ':call setline(14, l:processo)'
    let l:processo = 'Nota da CAD: '
    silent execute ':call setline(15, l:processo)'
    let l:processo = 'S: '
    silent execute ':call setline(16, l:processo)'
    silent! execute "17,$d"
endfunction

" Mapeie a função para um comando no Vim
"command! -nargs=1 InsertLines2 call InsertLines2(<q-args>)
" Aqui usamos <Leader>i para inserir 10 linhas vazias
"nnoremap <Leader>z :call Titular(10)<CR>


function! SaveStudentsToJson()
  " Remover tudo antes da palavra Alunos
  silent! execute "0,/Alunos (/ 0d"

  " Deletar tudo apos o último aluno
  execute "normal! G"
  execute "normal! dd"
  execute "normal! dd"
  execute "normal! dd"
  execute "normal! dd"
  execute "normal! dd"

  " Quebrar a linha com o nome do aluno
  "  silent! %s/\(.*Mensagem\)\s*/\1\r\r/g
  "  silent! :%s/ufg\.br/&\r/g
  silent! :%s/ufg\.br\zs.\{-}\ze[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/\r/g

  " Remover a tabulação antes do texto do usuário
  " silent! :%s/\s*\t\[/[/g

  " Eliminar as tabulacoes
  " silent! :%s/\s*\t.*//
  silent! :%s/^\%(\%uFFFC\|\s\|\t\)\+//
  
  " Eliminar as tabulacoes apos ufg.br
  silent! :%s/\(ufg\.br\).*/\1/
  silent! :%s/[ \t\u00A0\u200B\uFFFC]\+$//
  " Adiconando [ no inicio da lista
  silent! 0put ='['

  "Capturar o nome do aluno
  " silent! %s/\[Usuário \(On\|Off\)-Line no SIGAA\]\s*\(.*\)\s*(Perfil)/{\r  "nome": "\2",/g
 
  " Substituir curso
  silent! %s/C[uú]rso:\s\+\(.*\)/  "curso": "\1",/g

  " Substituir matrícula
  silent! %s/Matr[ií]cula:\s\+\(.*\)/  "matricula": "\1",/g

  " Substituir usuário
  silent! %s/Usu[aá]rio:\s\+\(.*\)/  "usuario": "\1",/g

  " Substituir e-mail e fechar objeto JSON
  silent! %s/E[-‑–]mail:\s\+\(.*\)/  "email": "\1"\r},/g
  
  " Adicionando o nome
  silent! %s/^\([A-ZÁÉÍÓÚÂÊÔÃÕÇ].*\)$/{\r  "nome": "\1",/g
  
  " Eliminando as linhas nulas
  " silent! :g/^\s*$/d

  " Fechando o ultimo bloco
  " silent! $put ='}'

  " Fechando a lista
  silent! :$s/},$/}\r]/

  " Verificar JSON com jq
  silent! !jq . %

endfunction

"command! SaveStudents call SaveStudentsToJson()

