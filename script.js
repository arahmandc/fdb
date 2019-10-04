  window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1cd2RKuaKX3yoh4-kPxmUGdzIut_QzNEnSM3uXHiDs6E/pubhtml';


  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + data[i].Name + "</td>");
      tr.append("<td>" + data[i].Status + "</td>");
      tr.append("<td>" + data[i].Total_Data + "</td>");
      $('table').append(tr);
    }
    console.log(data);
  }