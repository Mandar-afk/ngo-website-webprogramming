function Causes() {
  const causes = [
    {
      id: 1,
      title: "Tree Plantation",
      desc: "Planting trees to fight climate change and restore ecosystems",
    },
    {
      id: 2,
      title: "Clean Water",
      desc: "Providing access to clean and safe drinking water",
    },
    {
      id: 3,
      title: "Wildlife Protection",
      desc: "Protecting endangered species and their habitats",
    },
    {
      id: 4,
      title: "Plastic Cleanup",
      desc: "Reducing ocean and land pollution through cleanup drives",
    },
  ];

  return (
    <section className="causes">
      <h2>Our Environmental Initiatives</h2>
      <div className="cards">
        {causes.map((c) => (
          <div key={c.id} className="card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Causes;