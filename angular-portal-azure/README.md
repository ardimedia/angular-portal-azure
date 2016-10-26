## LIST PACKAGE
C:\APP\nuget\nuget list angularportalazure -allversion -prerelease -Source https://nuget.ardimedia.com/nuget

## DEPLOY TO ARDIMEDIA

Change Version in:
* package.nuspec
* command below

DOS commands:

    BUILD.BAT

    C:\APP\nuget\nuget.exe pack package.nuspec -OutputDirectory dist
    COPY dist\angularportalazure.0.2.1-beta.nupkg \\SVRTFS01.ardimedia.com\d$\!Data\NuGet\Packages
