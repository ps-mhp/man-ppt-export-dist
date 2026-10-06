// Einstieg des MAN-Loaders auf truck — steht in der Branch-Einstellung customJS.
// Lädt entry.js (ps-mhp/man-staffbase-loader) mit dem Bootstrap aus der
// Collection „Custom JS“; über die veröffentlichte Adresse, also auch ohne
// Anmeldung. Was danach geladen wird, steht in loader.js derselben Collection.
// Quelle und Doku: man-staffbase-cms-extensions/src/loader/.
(() => {
  const script = document.createElement("script");
  script.src =
    "https://ps-mhp.github.io/man-staffbase-loader/entry.js?src=/api/media/secure/external/v2/raw/upload/69ba7b6d52adba5fe48ddc12.js?accessorId=branch_6891d4e0aec53f55e3a819ac&media_token=aZkqISvzHx0lbCnIXRNdixpQf73ICZmUeuH07q1d3Yo%3D";
  document.head.appendChild(script);
})();
