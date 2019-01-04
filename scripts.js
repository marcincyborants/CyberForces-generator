(function ($) {
  $(document).ready(function () {
    var form = $("#form-generator");
    form.on('submit', function (event) {

      $.each(form.serializeArray(), function (i, field) {

        console.log(field);

        var fieldname = field.name + "_field";
        if (field.value != "") {

          if (fieldname.indexOf("social") >= 0) {
            $("#" + fieldname).attr("src", field.value);

          } else if (fieldname.indexOf("brand") >= 0) {
            var socialLink = "https://www.linkedin.com/company/testarmy/";
            var logoLink = "https://raw.githubusercontent.com/marcincyborants/CyberForces-generator/gh-pages/testarmy_logo.png";
            if (field.value == "cyberforces") {
              socialLink = "https://www.linkedin.com/company/cyberforces/";
              logoLink = "https://raw.githubusercontent.com/marcincyborants/CyberForces-generator/gh-pages/cyberforces_logo_dark.png";
            }
            $("#linkedin-social").attr("href", socialLink);
            $("#logo_field").attr("src", logoLink);

          } else {
            $("#" + fieldname).text(field.value);
          }

        } else {

          if (fieldname != "optional_text_1_field") {
            $("#" + fieldname).remove();
          }

        }
      });

      var text = $('#source_code').html();
      $("#html_code").val(text);
      return false;
    });
  });

})(jQuery);
