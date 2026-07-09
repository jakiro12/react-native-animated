import { Skia } from "@shopify/react-native-skia";

export const mPath = () =>
  Skia.PathBuilder.Make()

    .moveTo(60, 170) //Punto inicial pnatalla completa (X,Y)

    .cubicTo( //Crear curva en coordenadas
      80, 210,
      150, 150,
      130, 140
    )
    .cubicTo(
      60, 140,
      110, 280,
      90,300
    )
   

    .build();