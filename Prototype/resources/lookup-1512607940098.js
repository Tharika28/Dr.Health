(function(window, undefined) {
  var dictionary = {
    "792dd1f8-faa8-4e8d-8468-cafa144ec71f": "Add Reminder",
    "d386290e-510c-4240-b281-bb000c08f12a": "Sign up",
    "bb276949-43bb-45f0-8960-2ae10eca9157": "Settings",
    "900ac631-ae65-44eb-a5c0-c532b253c780": "SOS",
    "12fbc2ef-0a15-4183-b041-3adfd08784c6": "Emergency Contacts",
    "97395198-2777-4376-954e-7c1be4fe10cf": "tempo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "First Page",
    "ded00198-abd9-4e1b-8f22-92ee9f2d3f54": "Home",
    "580f398a-1136-47d7-be0d-4e2e8eecab34": "SOS confirmation",
    "1cc59dfa-78a5-47f5-99f0-1aac250e12c0": "Log out",
    "45afdfca-2439-4ea9-9851-fd4eaa75f85a": "Add Emergency Contacts",
    "7a768cb6-b6ea-4ef6-8cc5-d4d3423a73a6": "Tracker",
    "f634e67a-1b29-4f42-87f8-c684becfee35": "How It Works",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "d757b3b2-8d51-4b67-b608-a669620245c1": "toolbar",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);