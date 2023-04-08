/* 
Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
C. 15% de la calificación de un trabajo final. */


function nota(){

    let nota1 = parseFloat(document.getElementById('nota1').value); 
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let notaExamen = parseFloat(document.getElementById('notaExamen').value);
    let notaTrabajo = parseFloat(document.getElementById('notaTrabajo').value);

    let promedioParciales = (nota1 + nota2 + nota3) / 3;
    let notaFinal = promedioParciales * 0.55 + notaExamen * 0.30 + notaTrabajo * 0.15;

    console.log(notaFinal);

    return notaFinal;

}

