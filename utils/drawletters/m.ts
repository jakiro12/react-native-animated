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
      85,300
    )
    .cubicTo(
      55,310,
      40,270,
      90,260
    )
    .cubicTo(
      130,300,
      145,310,
      148,250
    )
    .cubicTo(
      140,225,
      120,250,
      120,290
    )
    .cubicTo(
      120,250,
      160,270,
      184,243
    )
    .cubicTo(
      135,280,
      175,320,
      191,265
    )
    .cubicTo(
      200,245,
      170,205,
      197,295      
    )
    .cubicTo(
      210,300,     
      210,250,      
      230,240
    )
    .build();