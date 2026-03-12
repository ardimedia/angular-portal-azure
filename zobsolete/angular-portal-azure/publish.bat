CALL npm version patch
CALL build.bat
CD dist
CALL npm publish
CD ..