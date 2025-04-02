(function(window, undefined) {
  var dictionary = {
    "f1970ec0-48cd-463d-b5bb-e861a4a7da12": "Menu principales",
    "1a7041b6-ede5-469e-9e6a-23d1cacd05be": "Menu saludable",
    "d7cd1ffb-b168-42c8-b701-9a9d4fd23ac7": "login",
    "eff131ea-aee4-4978-9a75-932e37f134aa": "Pagar (1)",
    "935c363c-b609-45d0-89d8-1d999ce27289": "Inicio",
    "45f421ca-30eb-4e20-90c4-9168995dddb9": "Menu acompañantes",
    "9cba9271-6b54-4077-b705-2901b201c764": "Perfil",
    "084a1870-36a9-4e1e-a771-1c77bb0e8ecf": "Domicilio",
    "a248f1c6-8c64-42f6-bf36-bc25a8202826": "Menu bebidas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Register",
    "e1cc6dd6-2b74-44ec-afac-d56e6ede61f3": "Carrito",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
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