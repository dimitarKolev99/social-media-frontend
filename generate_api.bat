@echo on

echo Deleting old API ...
del /Q /F $~dp0\src\api\apis
del /Q /F $~dp0\src\api\models

echo Generating API
call openapi-generator-cli generate -g typescript-rxjs --enable-post-process-file --additional-properties=supportES6=true,withInterfaces=false -o src/api/ -i http://localhost:8081/ui/v3/api-docs

echo Deleting superflous files
del /Q /F %~dp0\src\api\tsconfig.json
