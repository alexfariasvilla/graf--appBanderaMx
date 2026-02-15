# Instituto Tecnologico de Pachuca
## Materia: Graficación 
## Tema 1.4 Práctica integradora Bandera de México
## Autor: Alexander Jahaziel Farias Villa
###  Fecha: 15 de Febrero de 2026

## Prompt 1 – Creación de la estructura base

Genera una aplicación web utilizando tres archivos separados:  
- index.html  
- style.css  
- script.js  

La aplicación debe mostrar la bandera de México utilizando tres columnas verticales (verde, blanco y rojo).  
El diseño debe realizarse con Flexbox para que la bandera esté centrada en la pantalla.

---

## Prompt 2 – Agregar controles de manipulación de color

Agrega dos controles tipo slider (input type="range"):  

- Uno para manipular dinámicamente el color verde.
- Uno para manipular dinámicamente el color rojo.

Cada control debe actualizar el color correspondiente en tiempo real utilizando JavaScript y mostrar el código hexadecimal actualizado debajo del slider.

---

## Prompt 3 – Diseño visual con CSS

Aplica estilos en style.css para:

- Centrar el contenido en la página.
- Definir el tamaño y proporción de la bandera.
- Establecer los colores iniciales:
  - Verde
  - Blanco
  - Rojo
- Alinear los controles horizontalmente en la parte superior.
- Agregar un footer con el nombre del alumno y número de control debajo de la bandera.

---

## Prompt 4 – Agregar el Escudo Nacional

Insertar el escudo nacional de México en la columna blanca utilizando una imagen local llamada:

escudo.png

La imagen debe estar centrada vertical y horizontalmente utilizando Flexbox.

---

## Prompt 5 – Ajuste de tamaño del escudo

Si se desea aumentar el tamaño del escudo manteniendo su proporción, se puede aplicar en CSS:

```css
.blanco img {
    width: 220px;
    height: auto;
}

 
