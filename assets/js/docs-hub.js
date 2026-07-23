(() => {
  "use strict";

  const normalize = (value) =>
    String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase()
      .trim();

  document.querySelectorAll("[data-docs-hub]").forEach((hub) => {
    const input = hub.querySelector("[data-docs-hub-search]");
    const clearButton = hub.querySelector("[data-docs-hub-clear]");
    const status = hub.querySelector("[data-docs-hub-status]");
    const emptyState = hub.querySelector("[data-docs-hub-empty]");
    const cards = Array.from(hub.querySelectorAll("[data-docs-hub-card]"));
    const sections = Array.from(
      hub.querySelectorAll("[data-docs-hub-section]")
    );

    if (!input || cards.length === 0) {
      return;
    }

    const updateResults = () => {
      const query = normalize(input.value);
      let visibleCount = 0;

      cards.forEach((card) => {
        const haystack = normalize(card.dataset.searchText);
        const isVisible = query === "" || haystack.includes(query);

        card.hidden = !isVisible;

        if (isVisible) {
          visibleCount += 1;
        }
      });

      sections.forEach((section) => {
        const hasVisibleCard = Boolean(
          section.querySelector("[data-docs-hub-card]:not([hidden])")
        );

        section.hidden = !hasVisibleCard;
      });

      if (clearButton) {
        clearButton.hidden = query === "";
      }

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }

      if (status) {
        status.textContent =
          query === ""
            ? "All resources"
            : `${visibleCount} ${visibleCount === 1 ? "result" : "results"}`;
      }
    };

    input.addEventListener("input", updateResults);

    clearButton?.addEventListener("click", () => {
      input.value = "";
      updateResults();
      input.focus();
    });

    document.addEventListener("keydown", (event) => {
      const isSearchShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLocaleLowerCase() === "k";

      if (isSearchShortcut) {
        event.preventDefault();
        input.focus();
        input.select();
      }

      if (event.key === "Escape" && document.activeElement === input) {
        input.value = "";
        updateResults();
        input.blur();
      }
    });

    updateResults();
  });
})();
