#!/usr/bin/python3

import pymysql as sql 
import sys
import hashlib
import models


db = None
cursor = None;

try:
    db = sql.connect(host="localhost",
                     user="root",
                     password="Cocacola09",
                     db="IngSoftProy1"
                    )
    cursor = db.cursor()
except Exception as e:
    print("Error al conectar con la base de Datos") 
    sys.exit(1)

def hash_string(string):
    return hashlib.sha256(string.encode('utf-8')).hexdigest()
    
def cerrarBase():
    db.close()

def crearTablaUsuarios():
    usuariotab = """create table Usuario(
    nombre varchar(25) not null,
    apellidoPaterno varchar(25) not null,
    apellidoMaterno varchar(25) not null,
    email varchar(30) not null primary key,
    FeNa Date not null,
    Password varchar(65) not null,
    CURP varchar(19) not null,
    Tipo int not null,
    Delegacion varchar(40)
    );"""
    try:
        cursor.execute(usuariotab)
        print("Tabla Usuario Creada")
        return 201
    except Exception as e:
        print("Tabla Existente");
        return 404
        
def insertarUsuario(nombre = "",apellidoPaterno = "",apellidoMaterno = "",email = "",FeNa = "",Password = "",CURP = "",Tipo = 0,Delegacion=""):
    """Tipos: Tipo 0 = Usuario
              Tipo 1 = Gestor   
        Password: SHA256      
    """
    if nombre == "" or apellidoPaterno == "" or apellidoMaterno == "" or email == "" or FeNa == "" or Password == "" or CURP == "" :
        print("Valor vacio")
        return 404
    if (Tipo == 1 and Delegacion == ""):
        print("Valor vacio")
        return 404          
    
    queryInsertUser = f"""insert into Usuario (nombre,apellidoPaterno,apellidoMaterno,email,FeNa,Password,CURP,Tipo,Delegacion)
    values('{nombre}','{apellidoPaterno}','{apellidoMaterno}','{email}','{FeNa}','{Password}','{CURP}',{Tipo},'{Delegacion}');    
    """
    try:
        cursor.execute(queryInsertUser)
        print("Usuario Registrado con Exito!!")
        db.commit()
        return 201
    except Exception as e:
        print("Error al Registrar Dato")
        db.rollback()
        return 404
    
def crearTablaReporte():
    """ Status:
        0 -> Recibido
        1 -> Pendiente de validacion
        2 -> Rechazado
        3 -> Validado
        4 -> En progreso de Reparacion
        5 -> Terminado
    """
    
    reportetab = """create table Reporte(
    idReport int not null auto_increment primary key,
    status int not null,
    fecha date not null,
    descripcion varchar(280) not null,
    fotos varchar(400),
    calle varchar(50) not null,
    numero int not null,
    entreCalle1 varchar(50) not null,
    entreCalle2 varchar(50) not null,
    Delegacion varchar(10) not null,
    colonia varchar(50) not null,
    CP varchar(5) not null,
    emailUser varchar(30) not null,
    foreign key (emailUser)  references Usuario(email) on delete cascade on update cascade
    );"""
    
    try:
        cursor.execute(reportetab)
        print("Tabla Reporte Creada")
    except Exception as e:
        print("Tabla Existente");

def insertarReporte(status=0,fecha="",descripcion="",fotos="",calle="",numero=0,entreCalle1="",entreCalle2="",Delegacion="",colonia="",CP="",emailUser=""):
    """ Status:
        0 -> Recibido
        1 -> Pendiente de validacion
        2 -> Rechazado
        3 -> Validado
        4 -> En progreso de Reparacion
        5 -> Terminado
    """
    if(fecha=="" or descripcion=="" or calle=="" or numero==0 or entreCalle1=="" or entreCalle2=="" or Delegacion=="" or colonia=="" or CP=="" or emailUser==""):
        print("Error en los Datos")
        return 404
           
    
    queryInsetrReporte = f"""insert into Reporte (status,fecha,descripcion,fotos,calle,numero,entreCalle1,entreCalle2,Delegacion,colonia,CP,emailUser)
    values({status},'{fecha}','{descripcion}','{fotos}','{calle}',{numero},'{entreCalle1}','{entreCalle2}','{Delegacion}','{colonia}','{CP}','{emailUser}');    
    """
    try:
        cursor.execute(queryInsetrReporte)
        print("Registro guardado con Exito!!")
        db.commit()
        return 201
    except Exception as e:
        print("Error al Registrar Datos")
        db.rollback()
        return 404
    
def cambiarEstado(estadoSig,idReporte,emailUser):
    if idReporte == 0 or emailUser == "" or estadoSig==0:
        print("Error en los parametros")
        return 404
    updateEstadoRegistro = f"""update Reporte set status = {estadoSig} where idReport = {idReporte} and emailUser = '{emailUser}' ; """
    try:
        cursor.execute(updateEstadoRegistro)
        print("Estado Modificado con Exito!!")
        db.commit()
        return 201
    except Exception as e:
        print("Error al Cambiar Estado")
        db.rollback()
        return 404
    
def obtenerReportesUsuario(emailUser):
    if emailUser == "":
        print("Error en el email de Usario")
        return 404
    queryobtenerReportesUsuario = f"""select * from Reporte where emailUser = '{emailUser}' order by fecha,idReport desc """   
    
    try:
        cursor.execute(queryobtenerReportesUsuario)
        
        results = cursor.fetchall()
        ReportesUsuario = []
        for row in results:
            ReportesUsuario.append(models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12]))

        return 201,ReportesUsuario
    except Exception as e:
        print("Error al obtener Datos")
        return 404
    
def obtenerReporte(idReporte):
    if idReporte == 0:
        print("Error en el idReporte")
        return 404
    queryobtenerReporte = f"select * from Reporte where idReport = {idReporte}"
    try:
        cursor.execute(queryobtenerReporte)
        row = cursor.fetchone()
        Reporte = models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12])
        return 201,Reporte
    except Exception as e:
        print("Error al obtener Reporte")
        return 404
    
def obtenerUsuario(emailUser):
    if emailUser == "":
        print("Error en el email")
        return 404
    queryobtenerUsuario = f"select * from Usuario where email = '{emailUser}';"
    try:
        cursor.execute(queryobtenerUsuario)
        row = cursor.fetchone()
        Usuario = models.Usuario(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8])
        return 201,Usuario
    except Exception as e:
        print("Error al obtener Usuario")
        return 404
    
def obtenerReportesDelegacion(Delegacion):
    if Delegacion == "":
        print("Error en la delegacion")
        return 404
    queryObtenerReportesDelegacion = f"select * from Reporte where Delegacion = '{Delegacion}' order by fecha,idReport desc;"
    try:
        cursor.execute(queryObtenerReportesDelegacion)
        results = cursor.fetchall()
        ReportesDelegacion = []
        for row in results:
            ReportesDelegacion.append(models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12]))

        return 201,ReportesDelegacion
    except Exception as e:
        print("Error al obtener Datos")
        return 404
    
def obtenerReportesDelegacionColonia(Delegacion,colonia):
    if Delegacion == "" and colonia == "":
        print("Error los datos")
        return 404
    queryObtenerReportesDelegacionColonia = f"select * from Reporte where Delegacion = '{Delegacion}' and colonia like '%{colonia[1:]}' order by fecha,idReport desc;"
    try:
        cursor.execute(queryObtenerReportesDelegacionColonia)
        results = cursor.fetchall()
        ReportesDelegacioColonia = []
        for row in results:
            ReportesDelegacioColonia.append(models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12]))

        return 201,ReportesDelegacioColonia
    except Exception as e:
        print("Error al obtener Datos")
        return 404
    
def obtenerReportesDelegacionEstatus(Delegacion,estatus):
    if Delegacion == ""and 6 < estatus < 0:
        print("Error en la delegacion")
        return 404
    queryObtenerReportesDelegacionEstatus = f"select * from Reporte where Delegacion = '{Delegacion}' and status = {estatus} order by fecha,idReport desc;"
    try:
        cursor.execute(queryObtenerReportesDelegacionEstatus)
        results = cursor.fetchall()
        ReportesDelegacionEstatus = []
        for row in results:
            ReportesDelegacionEstatus.append(models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12]))
        return 201,ReportesDelegacionEstatus
    except Exception as e:
        print("Error al obtener Datos")
        return 404
    
def obtenerReportesDelegacionFecha(Delegacion,Fecha):
    if Delegacion == "" and Fecha == "":
        print("Error en la delegacion")
        return 404
    queryObtenerReportesDelegacionFecha = f"select * from Reporte where Delegacion = '{Delegacion}' and fecha = '{Fecha}' order by idReport desc;"
    try:
        cursor.execute(queryObtenerReportesDelegacionFecha)
        results = cursor.fetchall()
        ReportesDelegacionFecha = []
        for row in results:
            ReportesDelegacionFecha.append(models.Reporte(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11],row[12]))

        return 201,ReportesDelegacionFecha
    except Exception as e:
        print("Error al obtener Datos")
        return 404
    
#if __name__ == '__main__':
    #crearTablaUsuarios()
    #insertarUsuario("Raymundo","Pulido","Bejarano","rayescomed@gmail.com","1999-02-06",hash_string("Cocacola09"),"PUBR990206HDFLJY07",0)
    #crearTablaReporte()
    #insertarReporte(0,"2020-09-22","Dani es un amor","Home/path/foto.jpg","Calle mexico",32,"calle mexico","calle mexico","Alvaro Obregon","Providencia2","57100","rayescomed@gmail.com")
    #cambiarEstado(6,2,"rayescomed@gmail.com")
    #obtenerUsuario("rayescomed@gmail.com")
    #obtenerReporte(9)
    #_,repos = obtenerReportesDelegacion("GAM")
    #_,repos = obtenerReportesDelegacionColonia("Alvaro Obregon","providencia2")
    #_,repos = obtenerReportesDelegacionEstatus("GAM",0)
    #_,repos = obtenerReportesDelegacionFecha("GAM","2020-10-09")
    #for repo in repos: print(repo) 
