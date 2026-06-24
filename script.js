document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const hero = document.querySelector('header');

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('bg-[#291900]/95', !entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  if (hero) observer.observe(hero);
});
