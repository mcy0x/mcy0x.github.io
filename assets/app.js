// Tab switching for the Lab Reports section
document.querySelectorAll('.tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
    document.querySelectorAll('.report-group').forEach(function (g) { g.classList.remove('active'); });
    tab.classList.add('active');
    var target = document.getElementById(tab.dataset.target);
    if (target) target.classList.add('active');
  });
});

// Make each report card open its HTML report
document.querySelectorAll('.report-card[data-href]').forEach(function (card) {
  card.addEventListener('click', function () {
    window.open(card.dataset.href, '_blank');
  });
});
