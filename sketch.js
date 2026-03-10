function draw() {
  // define o fundo cinza
  background(200);

  // define contorno preto para os círculos
  stroke("black");
  
  // espessura do contorno
  strokeWeight(3);//quanto maior o número, mais espesso fica

  // define preenchimento branco
  fill(255);

  //PRIMEIRA LINHA

  circle(50, 50, 100); // 1º círculo
  circle(150, 50, 100); // 2º círculo
  circle(250, 50, 100); // 3º círculo
  circle(350, 50, 100); // 4º círculo

  //SEGUNDA LINHA

  circle(50, 350, 100); // 5º círculo
  circle(150, 350, 100); // 6º círculo
  circle(250, 350, 100); // 7º círculo
  circle(350, 350, 100); // 8º círculo
}
