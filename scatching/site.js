const art = document.querySelector('#lesson-art');
const assetRoot = new URL('assets/', document.currentScript.src);
for (const button of document.querySelectorAll('[data-step]')) {
  button.addEventListener('click', () => {
    const stage = button.dataset.step;
    for (const other of document.querySelectorAll('[data-step]')) other.setAttribute('aria-pressed', String(other === button));
    for (const text of document.querySelectorAll('[data-step-copy]')) text.hidden = text.dataset.stepCopy !== stage;
    art.src = new URL(`pizza-${stage}.svg`, assetRoot).href;
    art.alt = document.documentElement.lang === 'ru' ? `Пицца в коробке, этап ${stage} из 6` : `Pizza in a box, stage ${stage} of 6`;
    document.querySelector('.paper-mark').textContent = `0${stage} / 06`;
  });
}
