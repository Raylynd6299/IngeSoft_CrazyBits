import requests
import configs

def SubirFotos_Test():
    with open(f"./{configs.NAMEFILE}",'rb') as archivo:
        print( requests.post('http://localhost:9000/SubirFotos',
                        files={f'{configs.NAMEFILE}':archivo}) )
        
def AltaReporte_Test():
    print(requests.post('http://localhost:9000/AltaReporte',data={"status":0,
                                                            "fecha":"2020-10-10",
                                                            "descripcion":"Prueba de Sistema",
                                                            "calle":"calle Perrona",
                                                            "numero":132,
                                                            "entreCalle1":"perrona2",
                                                            "entreCalle2":"perrona3",
                                                            "Delegacion":"GAM",
                                                            "colonia":"Holaaa",
                                                            "CP":"12345",
                                                            "emailUser":"Corro@gmail.com"
                                                            }).json())
    
def AltaUsuario_Test():
    print(requests.post('http://localhost:9000/AltaUsuario',data={"nombre":"Prueba",
                                                                  "apellidoPaterno":"prueba2",
                                                                  "apellidoMaterno":"prueba3",
                                                                  "email":"correoprueba@gmail.com",
                                                                  "FeNa":"1999-12-31",
                                                                  "Password":"Passssss",
                                                                  "CURP":"CURPPPPPPPPPPPPP",
                                                                  "Tipo":1,
                                                                  "Delegacion":"GAM"
                                                            }).json())

def CambiarEstado_Test():
    print(requests.put('http://localhost:9000/CambiarEstado',data={"idReport":1,"estatus":4}).json())

def ObtenerFoto_Test():
    result = requests.get('http://localhost:9000/ObtenerFoto')
    
    print(result.headers)
    with open("prueba.jpg",'wb') as bb:
        bb.write(result.content)
    
    print(result.status_code)

def ObtenerFotos_Test():
    result = requests.get('http://localhost:9000/ObtenerFoto',data={"imagen":"Reporte14-0.jpg"})
    
    print(result.headers)
    print(result.content)
    print(result.status_code)
    
if __name__ == '__main__':
    pass
    