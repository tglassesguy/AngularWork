function TrabajadoresController ($scope){
    $scope.trabajadores =[
        {nombre:"Javier Collazos", identificacion:"99041714081", cargo:"desarollador"},
        {nombre:"Claudia Gomez", identificacion:"18729080383", cargo:"trabajadora"}
    ];

    $scope.Save=function(){

        $scope.trabajadores.push({nombre: $scope.nuevosTrabajadores.nombre,
                                  identificacion: $scope.nuevosTrabajadores.identificacion,
                                  cargo: $scope.nuevosTrabajadores.cargo})
                              }
}
