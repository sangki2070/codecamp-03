export default function HofTestPage() {
  const onClikcButton = (id) => (event) => {
    console.log(id);
  };
  return (
    <>
      <button onClick={onClikcButton(123)}>Count!</button>
    </>
  );
}
