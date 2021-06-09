document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});

  const tab = document.querySelectorAll(".tabs");
  var instance = M.Tabs.init(tab, {});
});
