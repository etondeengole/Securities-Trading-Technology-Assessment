# Practical Test (C#, ASP.NET MVC) - C# Developer
> Assessment project for position of C# Developer

This project was done as an assessment for a C# developer position. The task required that   
- Create a ticket based system using angular 10 with material design   
- Create C# webapi dotnet core 3.1

## Web Application
To successfully run the web application, certain configurations need to be made to the environment file.
### Configuration/setup
The following keys in the environment file need to be set to successfully run the application.
- apiBaseUrl   
This should be set to the url from where the api will be running.   
Default: `http://localhost:57867`

## API Application
For the web application to successully display the list of tickets, its connection string needs to be properly set.   

### Configuration/setup
The following keys in the appsettings.json file need to be set to successfully run the web application.   
- ConnectionStrings:DbConnection   
This indicates the file extension of the files that are to be read by the web application.   
Default: `http://localhost:57867`

### Database Project
A database project has also been included in the solution api solution. This project can be deployed to the target database or an initialization script (also contained in the database project) can be run on the database. 
The script is called InitializeState.sql and is located in the root directory of the database project.

