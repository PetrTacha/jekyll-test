document.addEventListener("DOMContentLoaded", function () {
  var alertTitles = {
    note: "Note",
    tip: "Tip",
    warning: "Warning",
    important: "Important",
    caution: "Caution"
  };

  var blockquotes = document.querySelectorAll(".docs-content blockquote");

  blockquotes.forEach(function (blockquote) {
    var firstChild = blockquote.firstElementChild;

    if (!firstChild || firstChild.tagName !== "P") {
      return;
    }

    var markerMatch = firstChild.textContent.trim().match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*(.*)$/i);

    if (!markerMatch) {
      return;
    }

    var alertType = markerMatch[1].toLowerCase();
    var cleanedHtml = firstChild.innerHTML.replace(/^\s*\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i, "").trim();
    var title = document.createElement("p");

    title.className = "markdown-alert-title";
    title.textContent = alertTitles[alertType];

    blockquote.classList.add("markdown-alert", "markdown-alert-" + alertType);
    blockquote.insertBefore(title, blockquote.firstChild);

    if (cleanedHtml.length > 0) {
      firstChild.innerHTML = cleanedHtml;
    } else {
      firstChild.remove();
    }
  });
});