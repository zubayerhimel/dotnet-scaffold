$(document).ready(function () {

    $('#copy_text').hide();
    $('#command_form').submit(function (e) {
        e.preventDefault();

        var getModelName = $('#model_name').val();
        var getDatabaseName = $('#database_name').val();
        var getControllerName = $('#controller_name').val();

        if (!$('#model_name').val() || !$('#database_name').val()) {
            showToast("Fill up required input field!", "red darken-2");
        }
        else {
            if (!$('#controller_name').val()) {
                var generatedCommand = "dotnet aspnet-codegenerator controller -name " + getModelName + "Controller -m " + getModelName + " -dc " + getDatabaseName + " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries";
            }
            else {
                var generatedCommand = "dotnet aspnet-codegenerator controller -name " + getControllerName + " -m " + getModelName + " -dc " + getDatabaseName + " --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries";
            }
            $('#copy_text').show();
            $('#copy_text').text(generatedCommand);
            $('#copy_text').select();
            document.execCommand("copy");
            showToast("Command copied to clipboard", "teal darken-3");

            // select text from input field on click
            $("#model_name").click(function () {
                $(this).select();
            });
            $("#getControllerName").click(function () {
                $(this).select();
            });
        }
    });
});

function showToast(message, color){
    M.toast({
        html: message,
        classes: color
    });
}