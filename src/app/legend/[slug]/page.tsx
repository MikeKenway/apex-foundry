  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Abilities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {legend.abilities.map((ability) => (
        <div
          key={ability.name}
          className="bg-zinc-900 p-6 border border-zinc-800"
        >
          <h3 className="text-lg font-semibold mb-2">{ability.name}</h3>
          <p className="text-zinc-400">{ability.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
); 