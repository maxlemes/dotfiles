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

function! InsertLines(num)
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
    let l:pattern ='\v(Classe:\s+)\zs\d{1}'
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
    let l:processo = 'Parecer da CAD: '
    silent execute ':call setline(10, l:processo)'
    silent! execute "11,$d"
endfunction

" Mapeie a função para um comando no Vim
command! -nargs=1 InsertLines call InsertLines(<q-args>)
" Aqui usamos <Leader>i para inserir 10 linhas vazias
nnoremap <Leader>x :call InsertLines(10)<CR>


" Função para encontrar a correspondência da expressão regular
function! FindMatch(pattern)

    " Move o cursor para o início do buffer
    silent execute 'normal! gg'

    " Procura pela expressão regular
    let l:match_found = search(a:pattern, 'W')

    " Se encontrar uma correspondência
    if l:match_found
        " Move o cursor para o início da correspondência
        let l:match_start = col('.')
        let l:line_content = getline('.')

        " Captura a parte correspondente da linha
        let l:match_text = matchstr(l:line_content, a:pattern)

        " Retorna o texto correspondente
        return l:match_text
    else
        " Se não encontrar, retorna uma mensagem
        return 'No match found'
    endif
endfunction

