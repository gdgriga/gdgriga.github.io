var fs = require("fs");

JSON.flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop);
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"__"+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

let rename = {
  "link": "event_url"
};

let renameKeys = Object.keys(rename);

function update(obj) {
  for (let i=0, c=renameKeys.length; i < c; i++) {
    if (!obj.hasOwnProperty(renameKeys[i])) {
      continue;
    }

    obj[rename[renameKeys[i]]] = obj[renameKeys[i]]
    delete obj[renameKeys[i]]

  }
}

let toWrite = [];

let oJSON = JSON.parse(fs.readFileSync("./site/storage/events-archive.json", "utf8"));

for (let i=0, c=oJSON.length; i < c; i++) {
  update(oJSON[i])

  toWrite.push(JSON.flatten(oJSON[i]))
}

fs.writeFileSync("./site/storage/events.json", JSON.stringify(toWrite, null, 2));
