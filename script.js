document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
            }
        });
    });
});
