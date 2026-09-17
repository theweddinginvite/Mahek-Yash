import content from "../content";
import "./Compliments.css";

export default function Compliments() {
  const { compliments } = content;
  if (!compliments) return null;

  const { eyebrow, heading, members = [], awaitingEyes } = compliments;

  const awaitingMembers = Array.isArray(awaitingEyes?.members)
    ? awaitingEyes.members
    : awaitingEyes?.names
    ? awaitingEyes.names.split(/[,&]/).map((n) => n.trim()).filter(Boolean)
    : [];

  return (
    <section id="compliments" className="section compliments-section">
      <div className="section__inner">
        {/* Section Heading at the top */}
        <div className="section__heading">
          <span className="eyebrow">{eyebrow || "With Love & Blessings"}</span>
          <h2>{heading || "With Best Compliments From"}</h2>
        </div>

        {/* Centered Box Wrapper */}
        <div className="compliments-card-wrap">
          <div className="compliments-card">
            {/* Decorative Luxury Inner Frame */}
            <div className="compliments-card__frame" aria-hidden="true">
              <span className="compliments-card__inner-border" />
            </div>

            <div className="compliments-card__content">
              {/* Single Column Names List (No bullets) */}
              <div className="compliments-list">
                {members.map((member, idx) => (
                  <p key={idx} className="compliments-item">
                    {member}
                  </p>
                ))}
              </div>

              {/* Divider before Awaiting Eyes */}
              {awaitingEyes && (
                <div className="compliments-awaiting">
                  <span className="compliments-awaiting__divider" aria-hidden="true" />

                  <h3 className="compliments-awaiting__title">
                    {awaitingEyes.title || "Awaiting Eyes"}
                  </h3>

                  <div className="compliments-awaiting__list">
                    {awaitingMembers.map((name, idx) => (
                      <span key={idx} className="compliments-awaiting__item">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Section Division Line Across Page */}
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
