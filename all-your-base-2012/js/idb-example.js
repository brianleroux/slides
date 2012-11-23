var request = indexedDB.open('all-your-base')

  request.onsuccess = function(e) {
    var v = "1.0";
    html5rocks.indexedDB.db = e.target.result;
    var db = html5rocks.indexedDB.db;
    // We can only create Object stores in a setVersion transaction;
    if (v!= db.version) {
      var setVrequest = db.setVersion(v);

      // onsuccess is the only place we can create Object Stores
      setVrequest.onfailure = html5rocks.indexedDB.onerror;
      setVrequest.onsuccess = function(e) {
        var store = db.createObjectStore("todo",
          {keyPath: "timeStamp"});
        e.target.transaction.oncomplete = function() {
          html5rocks.indexedDB.getAllTodoItems();
        };
      };
    } else {
      request.transaction.oncomplete = function() {
        html5rocks.indexedDB.getAllTodoItems();
      };
    }