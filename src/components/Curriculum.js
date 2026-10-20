/** Accessible accordion built on native <details>, so it works without JavaScript. */
export default function Curriculum({ modules, openFirst = true }) {
  return (
    <div className="accordion">
      {modules.map((m, i) => (
        <details key={m.title} open={openFirst && i === 0}>
          <summary>
            <span>{m.title}</span>
            <span className="acc-icon" aria-hidden="true" />
          </summary>
          <div className="acc-body">
            {m.items.length ? (
              <ul className="ticks">
                {m.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            ) : (
              <p>Listed as a module on the current website, without further detail.</p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
