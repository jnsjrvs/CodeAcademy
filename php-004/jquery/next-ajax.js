$(document).ready(function(){
    $('#bt').click(function(){
        $.getJSON('next-ajax.php?aaa=5', function(data){
           var tb = $('#lentele tbody');
           for (var i=0; i<data.length; i++){
               var s = '<tr>';
               s += '<td>' + data[i][0] + '</td>';
               s += '<td>' + data[i][1] + '</td>';
               s += '<td>' + data[i][2] + '</td>';
               s += '</tr>';
               $(tb).append(s);
           }
        });
    });
});