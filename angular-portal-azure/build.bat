CLS
REM !!! NOT WORKING !!! only the first gulp command does execute
REM GULP clean-script
REM GULP clean-dist
REM GULP build-apn

ECHO "DELETE DIRECTORY DIST"           & RMDIR /S /Q dist

ECHO "COPY azureportalng IMAGES"       & XCOPY azureportalng\images     dist\images      /E/I/Q/R/Y
ECHO "COPY azureportalng HTML"         & XCOPY azureportalng\directives dist\directives  /E/I/Q/R/Y
ECHO "COPY azureportalng CSS"          & XCOPY azureportalng\css\*.css  dist\css         /E/I/Q/R/Y
ECHO "COPY azureportalng INDEX.JS"     & XCOPY azureportalng\index.js   dist\            /I/Q/R/Y
ECHO "COPY azureportalng PACKAGE.JSON" & XCOPY package.json             dist\            /I/Q/R/Y

ECHO "COMPILE TSC"                     & CALL TSC
