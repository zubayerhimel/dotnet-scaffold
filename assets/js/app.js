function generateCommand(){

    var getModelName = document.getElementById('model_name').value;
    var getDatabaseName = document.getElementById('database_name').value;
    var getControllerName = document.getElementById('controller_name').value;

    if(getModelName == "" || getDatabaseName == ""){
        alert("Please fill the fields");
    }
    else if (getModelName == "" || getDatabaseName == "" && getControllerName != ""){
        alert("please fill the fields");
    }
    else{
        var setCommand = ("dotnet aspnet-codegenerator controller -name " +getControllerName+ " -m " +getModelName+" -dc " +getDatabaseName+ " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries");
        alert(setCommand);
    }
}