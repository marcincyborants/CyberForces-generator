(function ($) {
  $(document).ready(function () {
    var form = $("#form-generator");
    $(".copy-info").hide();
    form.on('submit', function (event) {
      $(".copy-info").hide();

      $.each(form.serializeArray(), function (i, field) {

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

    var text = $('#source_code').html().trim();
    $("#html_code").val(text);
    return false;

    });

    $("#copy-button").on("click", function () {
      selectText("source_code");
      document.execCommand('copy');
      $(".copy-info").fadeIn(1500, function() {
        $(this).fadeOut(1500);
      });
    });

    function selectText(node) {
      node = document.getElementById(node);

      if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
      } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        console.warn("Could not select text in node: Unsupported browser.");
      }
    }

  });

})(jQuery);