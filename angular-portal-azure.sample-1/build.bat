REM CLS
ECHO "DELETE DIRECTORY BUILD"       & RMDIR /S /Q build
ECHO "DELETE DIRECTORY NODE_MODULE" & RMDIR /S /Q node_modules\angular-portal-azure

ECHO "COPY azureportalng DEPLOY"    & XCOPY ..\angular-portal-azure\dist node_modules\angular-portal-azure\ /E/I/Q/R/Y

ECHO "COMPILE TSC"                  & CALL TSC
