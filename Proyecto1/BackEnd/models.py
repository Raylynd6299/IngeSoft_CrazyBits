#!/usr/bin/python3

class Usuario:
    def __init__(self,nombre,apellidoPaterno,apellidoMaterno,email,FeNa,Password,CURP,Tipo,Delegacion):
        self.nombre = nombre
        self.apellidoPaterno = apellidoPaterno
        self.apellidoMaterno = apellidoMaterno
        self.email = email
        self.FeNa = FeNa
        self.Password = Password
        self.CURP = CURP
        self.Tipo = Tipo
        self.Delegacion = Delegacion;
    def __str__(self):
        return f"{self.nombre} {self.apellidoPaterno} {self.apellidoMaterno} email:{self.email}"
        

class Reporte:
    
    def __init__(self,idReport,status,fecha,descripcion,fotos,calle,numero,entreCalle1,entreCalle2,Delegacion,colonia,CP,emailUser):
        self.idReport = idReport
        self.status = status
        self.fecha = fecha
        self.descripcion = descripcion
        self.fotos = fotos
        self.calle = calle
        self.numero = numero
        self.entreCalle1 = entreCalle1
        self.entreCalle2 = entreCalle2
        self.Delegacion = Delegacion
        self.colonia = colonia
        self.CP = CP
        self.emailUser = emailUser
    def __str__(self):
        return f"Id:{self.idReport:4} status:{self.status} fecha:{self.fecha} emailUser:{self.emailUser}"
    
        
        
    