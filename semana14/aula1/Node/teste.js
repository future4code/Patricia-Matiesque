const tipo = Number(process.argv[2]);
const medida = "";
switch (tipo) {
    case "0":
      const quadrado = Number(process.argv[3]) * Number(process.argv[3])
      console.log('Resposta:  ',  quadrado );
      break;
    case "1":
      const circulo = (2 * Math.PI * Number(process.argv[3]))
      console.log('Resposta: ',  circulo);
      break;
      default:
        console.log('Resposta: erro');
    }
    

// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }
  
//   console.log(Math.PI);
//   // expected output: 3.141592653589793
  
//   console.log(calculateCircumference(10));
//   // expected output: 62.83185307179586
  




//   function generateInformation(
//     type: ShapeType,
//     measure: number
//   ){ perimeter: number, area: number } {
//     let result: { perimeter: number, area: number };
//     if (measure >= 0) {
//       switch (type) {
//         case ShapeType.SQUARE:
//             perimeter: 4 * measure,
//          area: measure * measure 
//             break;
//         case ShapeType.CIRCLE:
//           result = {
//             perimeter: 2 * Math.PI * measure,
//             area: Math.PI * measure * measure
//           };
//           break;
//         default:
//           result = { perimeter: 0, area: 0 };
//       }
//     }
//       return result;
//   }
//   enum ShapeType {
//     SQUARE = 0,
//     CIRCLE = 1
//   }