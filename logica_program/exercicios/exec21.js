let titulo, min, h, duracao

titulo = (prompt("Informe o título do vídeo"))
min = parseFloat(prompt("Informe o tempo do vídeo em minutos"))

h = 0.60
//processo 

duracao = min  /60

//saída
document.write("O filme " + titulo + " tem duração de: " + duracao + " horas ")