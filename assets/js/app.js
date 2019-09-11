// function generateCommand(){

//     var getModelName = document.getElementById('model_name').value;
//     var getDatabaseName = document.getElementById('database_name').value;
//     var getControllerName = document.getElementById('controller_name').value;

//     if(getModelName == "" || getDatabaseName == ""){
//         M.toast({html: 'Please fill up the fields.', classes: 'red'});
//     }
//     else if (getControllerName != ""){
//         var setCommand = ("dotnet aspnet-codegenerator controller -name " +getControllerName+ " -m " +getModelName+" -dc " +getDatabaseName+ " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries");
//     }
//     else{
//         var setCommand = ("dotnet aspnet-codegenerator controller -name " +getModelName+ "Controller -m " +getModelName+" -dc " +getDatabaseName+ " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries");
//     }

//     $(document).ready(function(){
//         // set value 
//         $("#show").click(function(){
//           $("#copy_text").text(setCommand);
//         });

//         // select input fields text
//         $("#model_name").click(function(){
//             $(this).select();
//         });
//         $("#database_name").click(function(){
//             $(this).select();
//         });
//         $("#controller_name").click(function(){
//             $(this).select();
//         })


//     });
// }


$(document).ready(function () {

    $('#command_form').submit(function (e) {
        e.preventDefault();
        var getModelName = $('#model_name').val();
        var getDatabaseName = $('#database_name').val();
        var getControllerName = $('#controller_name').val();

        if (!$('#model_name').val() || !$('#database_name').val()) {
            M.toast({
                html: "Fill up the input fields!",
                classes: "red darken-2"
            });
        }
        else {
            if (!$('#controller_name').val()) {
                var generatedCommand = "dotnet aspnet-codegenerator controller -name " + getModelName + "Controller -m " + getModelName + " -dc " + getDatabaseName + " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries";
            }
            else {
                var generatedCommand = "dotnet aspnet-codegenerator controller -name " + getControllerName + " -m " + getModelName + " -dc " + getDatabaseName + " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries";
            }

            $('#copy_text').text(generatedCommand);

            $("#model_name").click(function () {
                $(this).select();
            });
        }
    });

});
