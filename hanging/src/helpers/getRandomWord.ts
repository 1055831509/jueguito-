let words: string[] = [
    'COPUTADORA',
    'PANTALON',
    'CAMISA',
    'PEINILLA',
    'CAMA',
    'MOCHILA',
    'CARRO',
    'MOTO',
    'CELULAR',
    'TELEVISOR',
    'GATO',
    'PERRO',
    'HUMANO',
    'LAVADORA',
    "MANZANA",
    "NARANJA",
    "PERA",
    "SANDÍA",
    "PLÁTANO",
    "LIMÓN",
    "UVA",
    "KIWI",
    "FRESA",
    "MANGO",
    "PAPAYA",
    "PIÑA",
    "CEREZA",
    "MELÓN",
    "COCO",
    "GUAYABA",
    "FRAMBUESA",
    "ARÁNDANO",
    "CIRUELA",
    "MELOCOTÓN",
    "ALBARICOQUE",
    "MANDARINA",
    "POMELO",
    "GRANADA",
    "HIGO",
    "LIMA",
    "NECTARINA",
    "ZARZAMORA",
    "GUAVA",
    "MORA",
    "CHIRIMOYA",
    "MARACUYÁ",
    "KIWANO",
    "TAMARINDO",
    "TORONJA",
    "FRUTA",
    "VEGETAL",
    "LEGUMBRE",
    "CEREAL",
    "LÁCTEO",
    "CARNE",
    "PESCADO",
    "MARISCO",
    "HUEVO",
    "PAN",
    "ARROZ",
    "PASTA",
    "ACEITE",
    "AZÚCAR",
    "SAL",
    "MIEL",
    "YOGUR",
    "QUESO",
    "JAMÓN",
    "POLLO",
    "TERNERA",
    "CERDO",
    "SALMÓN",
    "ATÚN",
    "GAMBA",
    "LANGOSTA",
    "CALAMAR",
    "MERLUZA",
    "BACALAO",
    "MERENGUE",
    "PASTEL",
    "HELADO",
    "TARTA",
    "CHOCOLATE",
    "GALLETA",
    "PUDÍN",
    "CARAMELO",
    "CHURRO",
    "CREMA",
    "NATILLAS",
    "FLAN",
    "CUPCAKE",
    "BROWNIE",
    "BUÑUELO",
    "FRAMBUESA",
    "MERMELADA",
    "MALVAVISCO",
    "CANELA",
    "VAINILLA",
    "NUEZ",
    "ALMENDRA",
    "CACAHUATE",
    "ANACARDO",
    "CASTAÑA",
    "AVELLANA",
    "PISTACHO",
    "SÉSAMO",
    "MANTEQUILLA",
    "ACEITUNA",
    "VINAGRE",
    "MOSTAZA",
    "PIMIENTA",
    "CHILE",
    "CURRY",
    "AJO"
      
  
  ];
  
  
  
  export function getRandomWord( ) {
  
      const ramdomIndex = Math.floor( Math.random() * words.length );
      
      return words[ramdomIndex];
  }