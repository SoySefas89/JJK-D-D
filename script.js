function elegirRaza() {
  const prob = Math.random() * 100;

  document.getElementById("numero-probabilidad").innerText =
  "Número generado: " + prob.toFixed(2);

  let raza = "";
  let descripcion = "";

  if (prob < 45) {
    raza = "Shikigami 45%";
    descripcion = `
    • Sin ST (Inmune a la fatiga)
    • +2 Destreza
    • Puede ser reparado (fuera de combate)
    • No muere si no se destruye por completo
    • No puede vincular
    `;
  }
  else if (prob < 75) {
    raza = "Humano 30%";
    descripcion = `
    • +2 Carisma
    • +1 Fuerza
    • +1 Destreza
    • No manipula EM
    • Puede volverse Híbrido (1D10 ≥ 7)
    `;
  }
  else if (prob < 90) {
    raza = "Hechicero 15%";
    descripcion = `
    • Manipula EM
    • +4 Sabiduría
    • +2 Constitución
    • Técnicas Malditas propias

    `;
  }
  else if (prob < 98) {
    raza = "Maldición 8%";
    descripcion = `
    • Técnica Inversa innata
    • +40 EM
    • Daño físico reducido a la mitad
    • Excelente manipulación de EM

    `;
  }
  else {
    raza = "Restricción Celestial 2%";
    descripcion = `
    • +5 en 2 stats
    • Sin EM
    • ST x2
    • Imposible de detectar por EM

    `;
  }

  document.getElementById("texto-aleatorio").innerText =
    `Raza: ${raza}\n${descripcion}`;
}

function elegirAtadura() {
  const prob = Math.random() * 100;

  const numeroDiv = document.getElementById("numero-atadura");
  if (numeroDiv) {
    numeroDiv.innerText = "Número generado: " + prob.toFixed(2);
  }

  let nombre = "";
  let descripcion = "";

  if (prob < 50) {
        nombre = "Ninguno";
        descripcion = `
        • No tienes ninguna atadura.






        

        `;
    }
    else if (prob < 62) {
        nombre = "Reducción de EM";
        descripcion = `
        •Tu Energía Maldita total se reduce al 50%.








        `;
    }
    else if (prob < 72) {
        nombre = "Bloqueo de EM";
        descripcion = `
        Cada vez que uses una habilidad con EM:
        • Tira 1D10
        • Si el resultado es mayor a 5, puedes usarla
        • Si no, pierdes el turno





        `;
    }
    else if (prob < 80) {
        nombre = "Aprendizaje Rápido";
        descripcion = `
        • x2 probabilidad de aprender habilidades.








        `;
    }
    else if (prob < 88) {
        nombre = "Aprendizaje Lento";
        descripcion = `
        • -50% de probabilidad de aprender habilidades.







        `;
    }
    else if (prob < 92) {
        nombre = "Suerte";
        descripcion = `
        • x2 en todas las tiradas de probabilidad.
        • Solo puede usarse una vez por combate.







        `;
    }
    else if (prob < 96) {
        nombre = "Mala Suerte";
        descripcion = `
        • -50% en todas las tiradas de probabilidad.
        • Solo puede usarse una vez por combate.







        `;
    }
    else if (prob < 98) {
        nombre = "Seis Ojos";
        descripcion = `
        • Te permite ver objetos, maldiciones y personas escondidas a través de su EM
        • Utiliza demasiada EM, Si eres de Grado 4 te gasta 50% de tu EM, si eres de Grado 3 te gasta 45% de EM, Grado 2 gasta 40% de EM, Grado 1 gasta 35% y si sos de Grado S 30%.


        
        `;
    }
    else if (prob < 99) {
        nombre = "Maldición";
        descripcion = `
        • +1 Fuerza.
        • La Maldición posee su propia Técnica Maldita.

        Sistema 2D10 por el control:
        • Si tu tirada es mayor, actúa a tu favor
        • Si es menor, la Maldición es controlada por Dios
        • Si empatan, el turno se anula
        `;
    }
    else if (prob < 99.5) {
        nombre = "Héroe";
        descripcion = `
        • x4 EM total
        • x2 pérdida de EM
        • -50% en tiradas de salvación

        Especialista en combate en equipo.




        `;
    }
    else {
        nombre = "Antagonista";
        descripcion = `
        • -25% EM total
        • -50% pérdida de EM
        • x2 en tiradas de salvación

        Especialista en supervivencia en solitario.




        `;
    }

  const textoDiv = document.getElementById("texto-atadura");
  if (textoDiv) {
    textoDiv.innerText =
      `Atadura: ${nombre}\n${descripcion}`;
  }
}

function elegirTecnica() {
  const prob = Math.random() * 31;

  const numeroDiv = document.getElementById("numero-tecnica");
  if (numeroDiv) {
    numeroDiv.innerText = "Número generado: " + prob.toFixed(2);
  }

  let nombre = "";
  let descripcion = "";

  if (prob < 1) {
nombre = "Manipulación Eléctrica";
descripcion = `
• Voltios Descontrolados
• Aura Descontrolada
• Atracción Magnética
• Descarga
• Mythical Beast Amber
`;
  }
  else if (prob < 2) {
nombre = "Manipulación Sanguínea";
descripcion = `
• Corte Interno:
• Sierra Exorcizadora:
• Endurecimiento:
• Lluvia Carmesí:
• Convergencia:
• Supernova:
`;
  }
  else if (prob < 3) {
nombre = "Proyección";
descripcion = `
• Paso Fragmentado:
• Relámpago:
• Pliegue:
• Frames Bajos:
• 24 Frames:
`;
  }
  else if (prob < 4) {
nombre = "Mimético";
descripcion = `
• Reflejo Propio:
• Transfiguración:
• Mismos Ojos:
`;
  }
  else if (prob < 5) {
nombre = "Estilo Gautama";
descripcion = `
• Control del Alma:
• Control del Cuerpo:
• Consciencia Moral:
• Ira Celestial:
`;
  }
  else if (prob < 6) {
nombre = "Divina Comedia";
descripcion = `
• Lujuria:
• Pereza:
• Ira:
• Avaricia:
• Soberbia:
`;
  }
  else if (prob < 7) {
nombre = "Sintonía Terrenal";
descripcion = `
• Viento Ligero:
• Llovizna:
• Pared Rocosa:
• Táctica Simple:
• Llamas Ardientes:
• Fire First:
`;
  }
  else if (prob < 8) {
nombre = "Ángel Caído";
descripcion = `
• Garra Demoníaca:
• Carga Sanguínea:
• Azote Alado:
• Vampirismo:
`;
  }
  else if (prob < 9) {
nombre = "Sangre Fría";
descripcion = `
• Mordida Venenosa:
• Fruto Prohibido:
• Boa:
• Cambio de Piel:
`;
  }
  else if (prob < 10) {
nombre = "Materialización";
descripcion = `
• Creación Pequeña:
• Creación Mediana:
• Creación Grande:
`;
  }
  else if (prob < 11) {
nombre = "Las Diez Sombras";
descripcion = `
• Lobos de Jade:
• Estampida de Conejos:
• Sapo:
• Orochi:
• Nue:
• Banshou:
• Mahoraga:
`;
  }  
  else if (prob < 12) {
nombre = "Popocatépetl";
descripcion = `
• Proyectil de Magma:
• Erupción:
• Lluvia Volcánica:
• Golpe Crítico:
• Meteoro Volcánico:
`;
  }  
  else if (prob < 13) {
nombre = "Mundo Primordial";
descripcion = `
• Raíces Tramposas:
• Plantas Carnívoras:
• Liana Resistente:
• Vida Primordial:
`;
  }  
  else if (prob < 14) {
nombre = "Eco Sombrío";
descripcion = `
• Sigilo Sombrío:
• A Mi Favor:
• Apropiación:
`;
  }  
  else if (prob < 15) {
nombre = "Distorsión Espacial";
descripcion = `
• Bloqueo Irreal:
• Espacio Elástico:
• Salto Espacial:
• Compresión:
• Atmósfera Propia:
`;
  }  
  else if (prob < 16) {
nombre = "Fragmentación";
descripcion = `
• Mitosis:
• Esquizogonia:
• Meiosis:
`;
  }  
  else if (prob < 17) {
nombre = "Boogie Woogie";
descripcion = `
• Boogie Woogie:
`;
  }  
  else if (prob < 18) {
nombre = "The Emperor";
descripcion = `
• Chi You, Forma Armadura:
• Chi You, Forma Lanza:
• Chi You, Forma Ballesta:
• Chi You, Forma Alabarda:
• Chi You, Forma Espada:
`;
  }  
  else if (prob < 19) {
nombre = "Hilos de Artemisa";
descripcion = `
• Telaraña Afilada:
• Nido de Araña:
• Atadura Blanca:
• Arco de Apolo:
• Danza Dorada:
`;
  }  
  else if (prob < 20) {
nombre = "Estilo Asura";
descripcion = `
• Kata Adamantino:
• Iron Breaker:
• Phantom Pace:
• Bloqueo de Chi:
• Sauce Llorón:
• Demonio Rojo:
`;
  }  
  else if (prob < 21) {
nombre = "Nube Errante";
descripcion = `
• Nube de Niebla:
• Parpadeo:
• Palma de Rakshasa:
• Descontrol:
`;
  }  
  else if (prob < 22) {
nombre = "Control Climático";
descripcion = `
• Llovizna Dulce:
• Tormenta Eléctrica:
• Viento del Norte:
• Tormenta Glaciar:
• Calma Antes de la Tormenta:
`;
  }  
  else if (prob < 23) {
nombre = "Rey de los Insectos";
descripcion = `
• Nube de Mosquitos:
• Nido de Arañas:
• Spider Corpse Centipede:
• Comida de Reserva:
• Todo Por Sobrevivir:
`;
  }  
  else if (prob < 24) {
nombre = "Destructiva";
descripcion = `
• Descomposición:
• Desintegración:
• Destrucción:
`;
  }  
  else if (prob < 25) {
nombre = "Control Corpóreo";
descripcion = `
• Golpe de Masa:
• Bloqueo de Espacio:
• Cuchilla Sorpresa:
• Impulso Masivo:
`;
  }  
  else if (prob < 26) {
nombre = "Fiel Orador";
descripcion = `
• Guanyin Bodhisattva:
• Primera Mano:
• Tercera Mano:
• Mano Noventa y Nueve:
• Mano Zero:
• Rosa Miniatura:
`;
  }  
  else if (prob < 27) {
nombre = "Trans-animal";
descripcion = `
• Carga de Jabalí:
• Ataque Aviar:
• Túnel de Topo:
• Mordida de Tiburón:
• Garra de Oso:
`;
  } 
  else if (prob < 28) {
nombre = "Inversión";
descripcion = `
• Inverso:
`;
  }  
  else if (prob < 29) {
nombre = "Videojuego";
descripcion = `
• Hongo Rojo:
• Espada Maestra:
• Comida Cúbica:
• Ender Pearl:
• Red Queen:
• Vida Extra:
`;
  }
  else if (prob < 30) {
nombre = "Virus Biológico";
descripcion = `
• Mordida Contagiosa:
• Clicker:
• No-Muerto:
• Contagio:
`;
  }  
  else {
nombre = "Juicio";
descripcion = `
• Mazo de Juez:
• Mazo Gigante:
• Salón del Juicio:
• Espada de Verdugo:
`;
  }

  const textoDiv = document.getElementById("texto-tecnica");
  if (textoDiv) {
    textoDiv.innerText =
      `Tecnica: ${nombre}\n${descripcion}`;
  }
}