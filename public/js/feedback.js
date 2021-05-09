$(document).ready(function(){

    var $feedback = $("#feedback");

    var $feedbackForm = $feedback.find("#feedback-form"),
        $feedbackThanks = $feedback.find("#feedback-thanks"),

        $name = $feedbackForm.find("#feedback-name"),
        $email = $feedbackForm.find("#feedback-email"),
        $subject = $feedbackForm.find("#feedback-subject");
        $text = $feedbackForm.find("#feedback-text"),
        $error = $feedbackForm.find("#feedback-error"),
        $button = $feedbackForm.find("#feedback-send");



    $button.on("click", function(e) {

        if ($name.hasClass("valid") && $email.hasClass("valid") &&
            $subject.hasClass("valid") && $text.hasClass("valid")) {

            var options = {

                method : "POST",
                body: "name=" + encodeURIComponent($name.val()) + "&" +
                      "email=" + encodeURIComponent($email.val()) + "&" +
                      "subject=" + encodeURIComponent($subject.val()) + "&" +
                      "text=" + encodeURIComponent($text.val()),
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                method: "POST"

            }
            fetch("/feedback", options)
                .then(function(res){
                    if (res.ok) {
                        return res.json();
                    }
                    console.error("something wnet wrong");
                })
                .then(function(res){
                    if (res.status === "ok") {
                        Materialize.toast("Hvala na feedback-u.", 5000);
                        $button.attr("disabled","true");
                    }   else {
                        var errors = res.errors;
                        errors.forEach(error=> {
                            Materialize.toast(error,5000);
                        });
                    }
                }).catch(function(err){
                    if (err) {
                        Materialize.toast("Nešto je pošlo naopako",5000);
                        console.log(err);
                    }
                })
        }
    });

});
