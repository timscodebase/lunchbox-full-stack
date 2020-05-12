export default function Input({ name, toggle, checked }) {
  if (checked) {
    return (
      <input
        type="checkbox"
        id={name}
        name={name}
        value="true"
        checked
        onChange={toggle}
      />
    );
  }
  return (
    <input
      type="checkbox"
      id={name}
      name={name}
      value="true"
      onChange={toggle}
    />
  );
}
