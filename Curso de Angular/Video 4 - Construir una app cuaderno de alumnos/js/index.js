function AlumnosController($scope) {
        $scope.alumnos=[
            {nombre:"Javier Collazos", telefono: "195987894", curso:"clase1"},
            {nombre:"Lola Rulos", telefono: "29598498844", curso:"clase2"},
            {nombre:"sdfsdfasd Lola", telefono: "31981987894", curso:"clase3"},
            {nombre:"Jasdfasdfs", telefono: "49598948984894", curso:"clase4"}
        ];
$scope.Save=function(){

    $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre,
                         telefono: $scope.nuevoAlumno.telefono,
                         curso: $scope.nuevoAlumno.curso})
                     }
}
