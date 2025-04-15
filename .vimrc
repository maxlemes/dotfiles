let s:rc_files_dir = expand('~/.vim/config')

let s:rc_files = [
      \  'autoclose',
      \  'globals',
      \  'options',
      \  'plugins',
      \  'keymaps',
      \]

for rc_file in s:rc_files
  execute printf("source %s/%s.vim", s:rc_files_dir, rc_file)
endfor
