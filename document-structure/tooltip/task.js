const links = Array.from(document.querySelectorAll('.has-tooltip'));

function createTooltip(element, tooltipText, top, left) {
    let toolTip = `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px">
    ${tooltipText}
    </div>`;

    element.insertAdjacentHTML('afterend', toolTip);
};

function getCoords(element) {
    let elemBox = element.getBoundingClientRect();

    return {
        top: elemBox.top + 30,
        left: elemBox.left
    };
}

function removeAll() {
    for (link of links) {
        if (link.nextElementSibling && link.nextElementSibling.classList.contains('tooltip_active') ) {
                link.nextElementSibling.remove();
        }
    }
};

for (link of links) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      let coords = getCoords(this);

      if(this.classList.contains('link-active')){
        this.classList.remove('link-active');
        removeAll()
      } else {
        removeAll()
        createTooltip(this, this.title, coords.top, coords.left);

        for (let i = 0; i < links.length; i++){
          if(links[i].classList.contains('link-active')){
            links[i].classList.remove('link-active')
          }
        }
        this.classList.add('link-active');
      }
    });
};