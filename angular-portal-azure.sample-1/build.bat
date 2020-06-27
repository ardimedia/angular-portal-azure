ECHO "DELETE DIRECTORY BUILD"            & RMDIR /S /Q dist
ECHO "DELETE DIRECTORY NODE_MODULE"      & RMDIR /S /Q node_modules\@ardimedia\angular-portal-azure

ECHO "COPY angularportalazure DEPLOY"    & XCOPY ..\angular-portal-azure\dist node_modules\@ardimedia\angular-portal-azure\ /E/I/Q/R/Y

ECHO "COMPILE TSC"                       & CALL .\node_modules\.bin\tsc
