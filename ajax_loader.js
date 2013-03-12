
function ajaxLoaderCall(basePath, id, function_name, arguments) {
  var url = basePath;
  var data = {
    c: function_name,
    a: arguments
  };
  jQuery('#' + id).html('<p style="text-align: center; margin-top: 10px; font-size: 10px;">Loading...<span style="background-image: url(\''+Drupal.settings.basePath + 'misc/throbber.gif\'); background-position: 0px -12px; background-repeat: no-repeat; width: 25px; height: 25px; display: inline-block; margin-top: -7px; margin-left: 6px;"></span>');
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
