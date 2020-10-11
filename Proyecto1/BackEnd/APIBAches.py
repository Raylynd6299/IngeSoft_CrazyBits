#!/usr/bin/python3

import hug
import os
from datetime import datetime
import base
import models 

USUARIOLOG = ""#email

#Usuario
@hug.post("/AltaReporte")
def AltaReporte(status:hug.types.number,fecha:hug.types.text,descripcion:hug.types.text,
                calle:hug.types.text,numero:hug.types.number,entreCalle1:hug.types.text,
                entreCalle2:hug.types.text,Delegacion:hug.types.text,colonia:hug.types.text,
                CP:hug.types.text,emailUser:hug.types.text):
    
    statusBase = base.insertarReporte(status=status,fecha=fecha,descripcion=descripcion,fotos="",calle=calle,numero=numero,
                         entreCalle1=entreCalle1,entreCalle2=entreCalle2,Delegacion=Delegacion,colonia=colonia,CP=CP,emailUser=emailUser)
    USUARIOLOG = emailUser
    return {"status":statusBase,"message":"Reporte registrado con Exito" if statusBase == 201  else "Error al registrar Reporte"}

@hug.post("/SubirFotos")
def SubirFotos(body):
    #Se loguea el usuario
    #Se guarda el Reporte
    #Se envian las imagenes
    #se asocian las imagenes
    idReport = base.ultimoReporte(USUARIOLOG)
    
    try:
        os.mkdir(f"Reportes/Reporte{idReport}")
    except Exception as e:
        pass
    
    archivo = list(body) 
    extension = archivo.strip().split(".")[1]
    
    n = os.popen(f'ls ./Reportes/Reporte{idReport}/').read()
    n = n.strip().split(" ")
    numArchivo = len(n)
            
    nameArchivo= f"Reporte{idReport}-{numArchivo}.{extension}"
    
    with open(f"Reportes/Reporte{idReport}/"+nameArchivo,"wb") as archivo:
        archivo.write(body[archivo])
    
    statusBase = base.guardarfotos(idReport,nameArchivo)
    
    return {"status":statusBase,"message":"Fotos registradas con Exito" if statusBase == 201  else "Error al registrar Fotos"}

@hug.post("/AltaUsuario")
def AltaUsuario(nombre:hug.types.text,apellidoPaterno:hug.types.text,apellidoMaterno:hug.types.text,
                email:hug.types.text,FeNa:hug.types.text,Password:hug.types.text,
                CURP:hug.types.text,Tipo:hug.types.number,body):
    if(Tipo == 1):
        Delegacion = body.get("Delegacion")
        if Delegacion == None:
            return {"status":404,"message":"El Usuario Gestor necesita una Delegacion asociada"}
    
    if nombre == "" or apellidoPaterno == "" or apellidoMaterno == "" or email == "" or FeNa == "" or Password == "" or CURP == "" :
        return {"status":404,"message":"El Usuario necesita todos los parametro"}
    
    today = datetime.now()
    year = today.year
    yearBorn = FeNa.strip().split("-")[0]
    if (int(year) - int(yearBorn)) < 16:
        return {"status":404,"message":"El Usuario necesita tener mas de 16"}

    statusBase = base.insertarUsuario(nombre=nombre,apellidoPaterno=apellidoPaterno,apellidoMaterno=apellidoMaterno,email=email,FeNa=FeNa,Password=base.hash_string(Password),CURP=CURP,Tipo=Tipo,Delegacion= "" if Tipo == 0 else Delegacion)
    if statusBase == 201:
        USUARIOLOG = email
    return {"status":statusBase,"message":"Usuario registrado con Exito" if statusBase == 201  else "Error al registrar Usuario"}

@hug.get("/ObtenerUsuario",example="email=Hola@gmail.com&Password=Hola")
def ObtenerUsuario(email:hug.types.text,Password:hug.types.text):
    if email == "" or Password == "":
        return {"status":404,"message":"El Usuario necesita todos los parametro"}
    statusBase,Usuario = base.obtenerUsuario(emailUser=email,Password=base.hash_string(Password))
    if statusBase == 201:
        Usuario = Usuario.__dict__
        del Usuario["Password"]
        del Usuario["CURP"]
        USUARIOLOG = email
    return {"status":statusBase,"message":"Usuario obtenido con Exito" if statusBase == 201  else "Error al obtener el Usuario","Usuario":Usuario}
 
@hug.get("/ObtenerReporte",example="idReport=10")
def ObtenerReporte(idReport:hug.types.number):
    statusBase,Reporte = base.obtenerReporte(idReporte=idReport)
    if statusBase == 201:
        Reporte = Reporte.__dict__
        del Reporte["emailUser"]

    return {"status":statusBase,"message":"Reporte obtenido con Exito" if statusBase == 201  else "Error al obtener el Reporte","Reporte":Reporte}
 
@hug.get("/ObtenerReportesUsuario",example="email=prueba@gmail.com")
def ObtenerReportesUsuario(emailUser:hug.types.text):
    if emailUser == "":
        return {"status":404,"message":"El email no fue enviado"}
    statusBase,Reportes = base.obtenerReportesUsuario(emailUser=emailUser)
    if statusBase == 404:
        return {"status":404,"message":"Error obteniendo los reportes de la BD"}
    
    listReposDic = []
    for repo in Reportes:
        repoaux = repo.__dict__
        del repoaux["emailUser"]
        listReposDic.append(repoaux)
        
    return {"status":statusBase,"message":"Reportes obtenidos con Exito" if statusBase == 201  else "Error al obtener el Reportes","Reportes":listReposDic}

@hug.get("/AdiosUsuario")
def AdiosUsuario():
    USUARIOLOG = ""
    return {"status":201,"message":"Se cerro sesion correctamente"}
    
#Gestor
@hug.get("/ObtenerReportesDelegacion")
def ObtenerReportesDelegacion(Delegacion:hug.types.text):
    if Delegacion == "":
        return {"status":404,"message":"Error la Delegacion es requerida"}
    
    statusBase,Reportes = base.obtenerReportesDelegacion(Delegacion=Delegacion)
    if statusBase == 404:
        return {"status":404,"message":"Error obteniendo los reportes de la BD"}
    
    listReposDic = []
    for repo in Reportes:
        repoaux = repo.__dict__
        listReposDic.append(repoaux)
        
    return {"status":statusBase,"message":"Reportes obtenidos con Exito" if statusBase == 201  else "Error al obtener el Reportes","Reportes":listReposDic}

@hug.get("/ObtenerReportesDelegacionColonia")
def ObtenerReportesDelegacionColonia(Delegacion:hug.types.text,colonia:hug.types.text):
    if Delegacion == "" or colonia == "":
        return {"status":404,"message":"Error la Delegacion y la colonia son requeridas"}
    
    statusBase,Reportes = base.obtenerReportesDelegacionColonia(Delegacion=Delegacion,colonia=colonia)
    if statusBase == 404:
        return {"status":404,"message":"Error obteniendo los reportes de la BD"}
    
    listReposDic = []
    for repo in Reportes:
        repoaux = repo.__dict__
        listReposDic.append(repoaux)
        
    return {"status":statusBase,"message":"Reportes obtenidos con Exito" if statusBase == 201  else "Error al obtener el Reportes","Reportes":listReposDic}

@hug.get("/ObtenerReportesDelegacionEstatus")
def ObtenerReportesDelegacionEstatus(Delegacion:hug.types.text,estatus:hug.types.number):
    if Delegacion == "" or estatus > 6:
        return {"status":404,"message":"Error la Delegacion y el estatus son requeridos"}
    
    statusBase,Reportes = base.obtenerReportesDelegacionEstatus(Delegacion=Delegacion,estatus=estatus)
    
    if statusBase == 404:
        return {"status":404,"message":"Error obteniendo los reportes de la BD"}
    
    listReposDic = []
    for repo in Reportes:
        repoaux = repo.__dict__
        listReposDic.append(repoaux)
        
    return {"status":statusBase,"message":"Reportes obtenidos con Exito" if statusBase == 201  else "Error al obtener el Reportes","Reportes":listReposDic}

@hug.get("/ObtenerReportesDelegacionFecha")
def ObtenerReportesDelegacionEstatus(Delegacion:hug.types.text,fecha:hug.types.text):
    if Delegacion == "" or fecha == "":
        return {"status":404,"message":"Error la Delegacion y la fecha son requeridos"}
    
    statusBase,Reportes = base.obtenerReportesDelegacionFecha(Delegacion=Delegacion,Fecha=fecha)
    
    if statusBase == 404:
        return {"status":404,"message":"Error obteniendo los reportes de la BD"}
    
    listReposDic = []
    for repo in Reportes:
        repoaux = repo.__dict__
        listReposDic.append(repoaux)
        
    return {"status":statusBase,"message":"Reportes obtenidos con Exito" if statusBase == 201  else "Error al obtener el Reportes","Reportes":listReposDic}

@hug.put("/CambiarEstado")
def CambiarEstado(idReport:hug.types.number,estatus:hug.types.number):
    statusBase = base.cambiarEstado(estadoSig=estatus, idReporte=idReport)
    return {"status":statusBase,"message":"Estado Modificado con Exito" if statusBase == 201  else "Error al modificar el estado"}

@hug.get("/ObtenerFoto",output=hug.output_format.file)
def ObtenerFotos(imagen:hug.types.text):
    
    directorio = imagen.strip().split("-")[0]
    pathito = f"./Reportes/{directorio}/"
       
    foto = os.path.join(pathito,imagen.strip())

    return foto
