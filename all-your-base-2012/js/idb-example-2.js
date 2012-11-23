var request = indexedDB.open('all-your-base')

request.onsuccess = function (e) {
  
  var version = "1.0"
  var db = e.target.result
  
  if (version != db.version) {
    // the only place you can create a store...deprecated for onupgradeneeded
    var setVrequest = db.setVersion(version)

    setVrequest.onsuccess = function(e) {
        var store = db.createObjectStore('all-your-base', {keyPath: "timeStamp"})
        e.target.transaction.oncomplete = function() { console.log('created a store')}
    }
  } 
}




  var trans = db.transaction(["todo"], "readwrite");
  var store = trans.objectStore("todo");
  var request = store.put({
    "text": todoText,
    "timeStamp" : new Date().getTime()
  });

  request.onsuccess = function(e) {
    // Re-render all the todo's
    html5rocks.indexedDB.getAllTodoItems();
  };

  request.onerror = function(e) {
    console.log(e.value);
  };
};

