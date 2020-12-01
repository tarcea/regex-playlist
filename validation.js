const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const validate = (field, regex) => {
  regex.test(field.value)
    ? field.className = 'valid'
    : field.className = 'invalid';
}


inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    let value = e.target.attributes.name.value;
    validate(e.target, patterns[value]);
  });
});
