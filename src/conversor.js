var dg = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "cero"
];

function convertirNro(num) {
  switch (num) {
    case 1:
      return "   \n  |\n  |";
    case 2:
      return " _ \n _|\n|_ ";
    case 3:
      return " _ \n _|\n _|";
    case 4:
      return "   \n|_|\n  |";
    case 5:
      return " _ \n|_ \n _|";
    case 6:
      return " _ \n|_ \n|_|";
    case 7:
      return " _ \n  |\n  |\n";
    case 8:
      return " _ \n|_|\n|_|";
    case 9:
      return " _ \n|_|\n _|";
    case 0:
      return " _ \n| |\n|_|";
  }

  return "";
}

module.exports = convertirNro;
