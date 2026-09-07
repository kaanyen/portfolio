type ScrollToId = (id: string) => void;

let scrollImpl: ScrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export function setScrollImpl(fn: ScrollToId) {
  scrollImpl = fn;
}

export function scrollToSection(id: string) {
  scrollImpl(id);
}
