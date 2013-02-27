
function ajaxLoaderCall(basePath, id, function_name, arguments) {
  var url = basePath;
  var data = {
    c: function_name,
    a: arguments
  };
  jQuery('#' + id).html('Loading... <div class="throbber"></div>').addClass("ajax-progress");
  jQuery.ajax({
    cache: true,
    success: function(data) {
      jQuery('#' + id).html(data);
    },
    error: function(e1, e2) {
      jQuery('#' + id).html('<p class="error_message">Unable to load content: ' + e2);
    },
    data: data,
    dataType: 'html',
    type: 'GET',
    url: url
  });
}
