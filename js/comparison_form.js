$( document ).ready(function() {
    $("#comparison_form").change(function(e) {
        selected_val = $(e.target).val()
        
        if (selected_val != '-') {
            window.location = selected_val
        }
    })
});
