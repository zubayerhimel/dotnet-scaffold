function generateCommand(){

    var getModelName = document.getElementById('model_name').value;
    var getDatabaseName = document.getElementById('database_name').value;
    var getControllerName = document.getElementById('controller_name').value;

    if(getModelName == "" || getDatabaseName == ""){
        M.toast({html: 'Please fill up the fields.', classes: 'red'});
    }
    else if (getControllerName != ""){
        var setCommand = ("dotnet aspnet-codegenerator controller -name " +getControllerName+ " -m " +getModelName+" -dc " +getDatabaseName+ " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries");
        alert(setCommand);
    }
    else{
        var setCommand = ("dotnet aspnet-codegenerator controller -name " +getModelName+ "Controller -m " +getModelName+" -dc " +getDatabaseName+ " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries");
        alert(setCommand);
    }
}