# Proyecto 1: Sistema para el reportes de baches en la Ciudad de México

Este sistema ayudara a los ciudadanos de la Ciudad de México para poder notificar al gobierno de la existencia de un bache en alguna vialidad, como tambien comprobar el estado de estas para poder llevar un seguimiento

A su vez tambien le ayudara al gobierno para gestionar las dichas notificaciones, para poder notificar a los analistas  para confirmar los supuestos bache, y seguir con el proceso de reparacion.

Este repo esta construido para dar seguimiento a su desarrollo

## BackEnd
Este estara desarrollando usando:
+ Python 3
	- Hug
	Para instalar el paquete usar:
	```Bash
		pip3 install hug --upgrade
	```
	- pymysql
	Para instalar el paquete usar:
	```Bash
		pip3 install pymysql --upgrade
	```
### Indicaciones de Acoplamiento
Debe definirse un archivo ***configs.py***, donde deberan encontrarse las siguientes "constantes":

```Python3
	#Todas son strings
	HOST = <DireccionHost>
	UsuarioBaseDatos = <NombreUsuario>
	PASSWORD = <ContraseñaUsuario>
	DB=<NombreDeBaseDeDatosLocal>
	NAMEFILE=<NombreDeImagenPruebas>
```
el dicho archivo de estar en una ubicacion paralela a los demas archivos

### Indicaciones de Uso:
Si es la primera vez que usa la ***API***, una vez cree la Base de Datos SQL, en la que guste almacenar la informacion, y realice las indicaciones anteriores,

Ejecute el siguiente comandos en su terminal

```Bash 
	python3 
```
una vez el interprete de python este abierto ejecute lo siguiente:
```python3
	import base
	
	base.crearTablaUsuarios()
	base.crearTablaReporte()
```
Esto creara las tablas pre-descritas para el funcionamiento del modulo en la base de datos incicada en el archivo ***configs.py*** escrito anteriormente por usted

Para levantar el API-Rest escrita en el archivo ***APIBAches.py*** use:

```Bash
	hug -f APIBAches.py -p9000
```
Esto levatara el API, a la escucha en el puerto ***9000*** de su ***HOST*** escrito en el archivo ***configs.py***

## FrontEnd
Se desarrolla con Reactjs, para acceder al desarrollo del FrontEnd, se debe tener instalado nodejs, se recomienda la versión LTS.

Una vez instalado se accede a la carpeta crazybits se ejecuta el siguiente comando:
```Bash
	cd crazybits
	npm i
```
Esto instalará las dependencias necesarias para este proyecto.