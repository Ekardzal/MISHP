@echo off
setlocal enabledelayedexpansion

:: Pfad zu den Bildern festlegen
set "pfad=C:\Pfad\zu\deinen\Bildern"

:: Zähler initialisieren
set /a zaehler=1

:: Temporäre Liste der Dateien erstellen
dir /b /a-d "%pfad%\*.jpg" "%pfad%\*.jpeg" "%pfad%\*.png" > temp.txt

:: Dateien zufällig sortieren
sort /R temp.txt > shuffled.txt

:: Dateien umbenennen
for /f "tokens=*" %%f in (shuffled.txt) do (
    ren "%pfad%\%%f" "pic_g!zaehler!.png"
    set /a zaehler+=1
)

:: Temporäre Dateien löschen
del temp.txt shuffled.txt

echo Bilder wurden umbenannt.
pause