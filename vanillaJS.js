$(document).ready(function () {
  $('#TablaRoster').DataTable({
    "order": [ 1, 'asc' ]
    });
  $('.dataTables_length').addClass('bs-select');
  $(function () {
    $('#datetimepicker1').datetimepicker();
    });
});