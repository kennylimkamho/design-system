(() => {
  const gallery = document.querySelector('.motion-library');
  if (!gallery) return;
  const cards = [...gallery.querySelectorAll('[data-motion-example]')];
  const stop = (el) => el.getAnimations?.().forEach(a => a.cancel());
  cards.forEach(card => {
    const recipe = DATA.motionExamples.find(x => x.id === card.dataset.motionExample);
    const object = card.querySelector('.motion-object');
    const stage = card.querySelector('.motion-stage');
    let active = false, hover = false, focus = false;
    const update = () => { const shown = active || hover || focus; object.textContent = shown ? recipe.after : recipe.before; card.dataset.active = String(shown); const extra = card.querySelector('.motion-extra'); if(extra) extra.hidden = !shown; };
    const play = () => {
      stop(object); update();
      if (document.documentElement.dataset.motion !== 'reduced' && object.animate)
        object.animate(recipe.frames, {duration:recipe.duration,easing:'cubic-bezier(.2,.8,.2,1)'});
    };
    card.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse' || hover) return;
      hover = true;
      if (!focus) play(); else update();
    });
    card.addEventListener('pointerleave', () => { hover = false; if (!focus) stop(object); update(); });
    // Preview the stage, not buttons: clicking still toggles exactly once.
    stage.addEventListener('focusin', () => { if(focus) return; focus = true; if(!hover) play(); else update(); });
    stage.addEventListener('focusout', event => {
      if(stage.contains(event.relatedTarget)) return;
      focus = false; if(!hover) stop(object); update();
    });
    card.querySelector('[data-motion-play]').addEventListener('click', () => { hover = false; focus = false; active = !active; play(); });
    card.querySelector('[data-motion-reset]').addEventListener('click', () => { stop(object); active = false; hover = false; focus = false; update(); });
    card._stopPreview = () => { stop(object); hover = false; focus = false; update(); };
    update();
  });
  const cancelAll = () => cards.forEach(card => card._stopPreview());
  new MutationObserver(() => { if(document.documentElement.dataset.motion === 'reduced') cancelAll(); }).observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange', () => { if(document.hidden) cancelAll(); });
  window.addEventListener('hashchange', cancelAll);
  gallery.querySelectorAll('[data-motion-filter]').forEach(button => button.addEventListener('click', () => {
    cancelAll();
    gallery.querySelectorAll('[data-motion-filter]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
    cards.forEach(card => {card.hidden = button.dataset.motionFilter !== 'all' && card.dataset.category !== button.dataset.motionFilter;});
    gallery.querySelector('.motion-count').textContent = `${cards.filter(card=>!card.hidden).length} 個示例 · Hover／Tab 預覽，手機按播放`;
  }));
})();
