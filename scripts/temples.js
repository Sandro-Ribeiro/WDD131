let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');
const navigation = document.querySelector('#navmenu');
const headerTitle = document.querySelector('h1');

if (hambutton) {
  hambutton.addEventListener('click',
    () =>
    {
      navigation.classList.toggle('show');
      hambutton.classList.toggle('show');
      headerTitle.classList.toggle('show');
      const isExpanded = navigation.classList.contains('show');
      hambutton.setAttribute('aria-expanded', isExpanded);
    }
  );
}

function toggleActive(element) {
  element.classList.toggle("active");
}