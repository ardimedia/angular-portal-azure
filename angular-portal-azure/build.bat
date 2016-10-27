ECHO "DELETE DIRECTORY DIST"                & RMDIR /S /Q dist

ECHO "COPY angularportalazure IMAGES"       & XCOPY angularportalazure\images     dist\images      /E/I/Q/R/Y
ECHO "COPY angularportalazure HTML"         & XCOPY angularportalazure\directives dist\directives  /E/I/Q/R/Y
ECHO "COPY angularportalazure CSS"          & XCOPY angularportalazure\css\*.css  dist\css         /E/I/Q/R/Y
ECHO "COPY angularportalazure INDEX.JS"     & XCOPY angularportalazure\index.js   dist\            /I/Q/R/Y
ECHO "COPY angularportalazure PACKAGE.JSON" & XCOPY package.json                  dist\            /I/Q/R/Y
ECHO "COPY angularportalazure README.MD"    & XCOPY README.md                     dist\            /I/Q/R/Y

ECHO "COMPILE TSC"                          & CALL .\node_modules\.bin\tsc
