
# 📘 Documentación - Creación de Máquina Virtual y Despliegue de Proyecto

## 🧑‍💻 Autores
- Kevin Rodríguez  
- Daniel Mendoza  
- Franchesca Vargas  

## 🏫 Institución
**Servicio Nacional de Aprendizaje – SENA**  
**Análisis y Desarrollo de Software – Ficha 2826503**

---

## 📋 Tabla de Contenido

1. [Creación de recurso en Azure](#1-creación-de-recurso-en-azure)  
2. [Instalación de Express](#2-instalación-de-express)  
3. [Construcción del proyecto con NPM](#3-construcción-del-proyecto-con-npm)  
4. [Conexión con MobaXterm](#4-conexión-con-mobaxterm)  
5. [Creación de máquina virtual](#5-creación-de-máquina-virtual)  
6. [Instalación de Apache](#6-instalación-de-apache)  
7. [Prueba de archivo HTML](#7-prueba-de-archivo-html)  
8. [Instalación de Node.js con script](#8-instalación-de-nodejs-con-script)  
9. [Secretos en GitHub](#9-secretos-en-github)  
10. [Llave PEM y módulo de lectura/escritura](#10-llave-pem-y-módulo-de-lecturaescritura)  
11. [Estado del servicio Apache](#11-estado-del-servicio-apache)  

---

## 1. Creación de recurso en Azure
> Se inicia el aprovisionamiento de una VM, configurando el sistema operativo, ubicación y especificaciones de hardware.

## 2. Instalación de Express
```bash
npm install express
```
> Se instala Express como framework backend para Node.js.

## 3. Construcción del proyecto con NPM
```bash
npm run build
```
> Se compila el proyecto para entorno de producción.

## 4. Conexión con MobaXterm
> Se usa MobaXterm y una llave proporcionada por Azure para conexión remota (SSH) a la VM.

## 5. Creación de máquina virtual
> Se selecciona el tamaño, sistema operativo, autenticación y redes necesarias para la VM.

## 6. Instalación de Apache
```bash
sudo apt update  
sudo apt install apache2 -y
```
> Se instala y configura Apache para servir contenido web.

## 7. Prueba de archivo HTML
```bash
sudo touch /var/www/html/test.html  
sudo chmod 666 /var/www/html/test.html
```
> Se crea un archivo HTML para validar el funcionamiento del servidor.

## 8. Instalación de Node.js con script
```bash
vim install_node.sh  
chmod +x install_node.sh
```
> Se crea un script de instalación de Node.js y se otorgan permisos de ejecución.

## 9. Secretos en GitHub
> Se configuran variables de entorno en GitHub para ser utilizadas en flujos de trabajo automatizados.

## 10. Llave PEM y módulo de lectura/escritura
> Uso de llave `.pem` para autenticación y mención de manejo de archivos en Node.js mediante módulos de lectura/escritura.

## 11. Estado del servicio Apache
```bash
systemctl status apache2
```
> Se verifica el estado del servidor Apache mediante systemctl.

---

## ✅ Estado del Proyecto
En desarrollo 🛠️

---

## 📦 Requisitos
- Node.js
- NPM
- MobaXterm
- Cuenta en Azure
- GitHub con permisos de Secrets

---

## 📝 Licencia
Este proyecto es solo para fines académicos - SENA.
